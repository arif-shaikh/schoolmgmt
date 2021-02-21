import { Injectable } from '@angular/core';
import { SchoolEvent } from '../models/school';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SchoolService {

  private _schoolEvents: BehaviorSubject<SchoolEvent[]>;

  private dataStore: {
    schoolEvents: SchoolEvent[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { schoolEvents: [] };
    this._schoolEvents = new BehaviorSubject<SchoolEvent[]>([]);
  }

  get schoolEvents(): Observable<SchoolEvent[]> {
    return this._schoolEvents.asObservable();
  }

  addSchoolEvent(schoolEvent: SchoolEvent): Promise<SchoolEvent> {
    return new Promise((resolver, reject) => {
      schoolEvent.id = this.dataStore.schoolEvents.length + 1;
      this.dataStore.schoolEvents.push(schoolEvent);
      this._schoolEvents.next(Object.assign({}, this.dataStore).schoolEvents);
      resolver(schoolEvent);
    })
  }

  schoolEventById(id: number) {
    return this.dataStore.schoolEvents.find(x => x.id == id);
  }

  loadAll() {
    //const usersUrl = 'https://angular-material-api.azurewebsites.net/users'
    const schoolEventsInfo = "./assets/school-events.json"
    return this.http.get<SchoolEvent[]>(schoolEventsInfo)
      .subscribe(data => {
        this.dataStore.schoolEvents = data;
        this._schoolEvents.next(Object.assign({}, this.dataStore).schoolEvents);
      }, error => {
        console.log("Failed to fetch users")
      });
  }

}

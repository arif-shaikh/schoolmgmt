import { Component, OnInit } from '@angular/core';
import { SchoolEvent } from '../../models/school';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  schoolEvent: SchoolEvent;
  constructor(
    private route: ActivatedRoute,
    private service: SchoolService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.schoolEvent = null;

      this.service.schoolEvents.subscribe(schoolEvents => {
        if (schoolEvents.length == 0) return;

        setTimeout(() => {
          this.schoolEvent = this.service.schoolEventById(id);
        }, 500)

      });

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherInfo } from '../../models/teacherInfo';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.scss']
})
export class TeacherlistComponent implements OnInit {
  teacherInfo:TeacherInfo[];
  displayedColumns: string[] = ['Name', 'Qualification'];
  dataSource: MatTableDataSource<TeacherInfo>;
  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getTeacherList().
    subscribe (
      data=> {
        console.log(data);
        this.teacherInfo = data;
        this.dataSource = new MatTableDataSource<TeacherInfo>(this.teacherInfo);
      },
      err => console.log(err)
    )

  }
}
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentStructure } from '../../models/student';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  studentList: StudentStructure[];
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName'];
  dataSource: MatTableDataSource<StudentStructure>;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.get3rdStdStudentList().
    subscribe (
      data=> {
        this.studentList = data;
        this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
      },
      err => console.log(err)
    )
  }

  selectStandard($event): void {
    if($event.index == 0){
      this.schoolService.get3rdStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 1){
      this.schoolService.get4thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 2){
      this.schoolService.get5thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 3){
      this.schoolService.get6thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 4){
      this.schoolService.get7thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 5){
      this.schoolService.get8thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else if ($event.index == 6){
      this.schoolService.get9thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } else {
      this.schoolService.get10thStdStudentList().
      subscribe (
        data=> {
          this.studentList = data;
          this.dataSource = new MatTableDataSource<StudentStructure>(this.studentList);
        },
        err => console.log(err)
      )
    } 

    
  }

}

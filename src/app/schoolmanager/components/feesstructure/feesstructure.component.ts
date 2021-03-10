import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeesStructure } from '../../models/feesstructure';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-feesstructure',
  templateUrl: './feesstructure.component.html',
  styleUrls: ['./feesstructure.component.scss']
})
export class FeesstructureComponent implements OnInit {
  
  fees: FeesStructure[];
  displayedColumns: string[] = ['feesCategory', 'Jun', 'Nov', 'Dec', 'May', 'Total' ];
  dataSource: MatTableDataSource<FeesStructure>;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getFeesHighSchool().
    subscribe (
      data=> {
        console.log(data);
        this.fees = data;
        this.dataSource = new MatTableDataSource<FeesStructure>(this.fees);
      },
      err => console.log(err)
    )
    
  }

  selectFeesStructure($event): void {
    if($event.index == 0){
      this.schoolService.getFeesHighSchool().
      subscribe (
        data=> {
          this.fees = data;
          this.dataSource = new MatTableDataSource<FeesStructure>(this.fees);
        },
        err => console.log(err)
      )
    } else {
      this.schoolService.getFeesPrimarySchool().
      subscribe (
        data=> {
          this.fees = data;
          this.dataSource = new MatTableDataSource<FeesStructure>(this.fees);
        },
        err => console.log(err)
      )
    }
    
  }
}

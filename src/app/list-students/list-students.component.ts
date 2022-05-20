import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { model } from 'src/model';
import { DataService } from '../data.service'




@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})

export class ListStudentsComponent implements OnInit {

  ELEMENT_DATA: model[] = [];

  displayedColumns: string[] = ['id', 'name', 'address', 'email', 'mobile', 'action'];
  dataSource = new MatTableDataSource<model>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  @ViewChild(MatSort)
  sort!: MatSort;

  token!: string | null
  constructor(private data: DataService, private _liveAnnouncer: LiveAnnouncer) { }

  collection: any = []
  ngOnInit(): void {
    this.token = localStorage.getItem('Access Token');
    this.getFullList();

  }
  public getFullList() {
    this.data.getlist(this.token).subscribe((result) => {
      console.log(result)
      this.dataSource.data = result as model[];
    })
  }
  public doFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}

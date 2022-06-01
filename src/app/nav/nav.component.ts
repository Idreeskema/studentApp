import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  //matMenu!:any
  menuItems: MenuItem[] = [
    {
      label: 'Add Students',
      icon: 'person_add',
      link: '/add',
    },
    {
      label: 'View Students',
      icon: 'group',
      link: '/Lists',
    },
    {
      label: 'Graphs',
      icon: 'maps',
      link: '/graphs',
    },
    {
      label: 'camera',
      icon: 'camera',
      link: '/camera',
    },
    {
      label: 'OrgChart',
      icon: 'add_chart',
      link: 'orgchart',
    },
    {
      label: 'Logout',
      icon: 'notes',
      link: '',
    },
  ];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}
  logout() {
    this.dataService.logout();
  }
}

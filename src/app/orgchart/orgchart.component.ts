import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.scss'],
})
export class OrgchartComponent implements OnInit {
  constructor() {}
  // nodes: any = [
  //   {
  //     name: 'Sundar Pichai',
  //     cssClass: 'ngx-org-ceo',
  //     image: '',
  //     title: 'Chief Executive Officer',
  //     childs: [
  //       {
  //         name: 'Thomas Kurian',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, Google Cloud',
  //       },
  //       {
  //         name: 'Susan Wojcicki',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, YouTube',
  //         childs: [
  //           {
  //             name: 'Beau Avril',
  //             cssClass: 'ngx-org-head',
  //             image: 'assets/node.svg',
  //             title: 'Global Head of Business Operations',
  //             childs: []
  //           },
  //           {
  //             name: 'Tara Walpert Levy',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Agency and Brand Solutions',
  //             childs: []
  //           },
  //           {
  //             name: 'Ariel Bardin',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Product Management',
  //             childs: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Jeff Dean',
  //         cssClass: 'ngx-org-head',
  //         image: 'assets/node.svg',
  //         title: 'Head of Artificial Intelligence',
  //         childs: [
  //           {
  //             name: 'David Feinberg',
  //             cssClass: 'ngx-org-ceo',
  //             image: 'assets/node.svg',
  //             title: 'CEO, Google Health',
  //             childs: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Sundar Pichai',
  //     cssClass: 'ngx-org-ceo',
  //     image: 'assets/node.svg',
  //     title: 'Chief Executive Officer',
  //     childs: [
  //       {
  //         name: 'Thomas Kurian',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, Google Cloud',
  //       },
  //       {
  //         name: 'Susan Wojcicki',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, YouTube',
  //         childs: [
  //           {
  //             name: 'Beau Avril',
  //             cssClass: 'ngx-org-head',
  //             image: 'assets/node.svg',
  //             title: 'Global Head of Business Operations',
  //             childs: []
  //           },
  //           {
  //             name: 'Tara Walpert Levy',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Agency and Brand Solutions',
  //             childs: []
  //           },
  //           {
  //             name: 'Ariel Bardin',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Product Management',
  //             childs: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Jeff Dean',
  //         cssClass: 'ngx-org-head',
  //         image: 'assets/node.svg',
  //         title: 'Head of Artificial Intelligence',
  //         childs: [
  //           {
  //             name: 'David Feinberg',
  //             cssClass: 'ngx-org-ceo',
  //             image: 'assets/node.svg',
  //             title: 'CEO, Google Health',
  //             childs: []
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Sundar Pichai',
  //     cssClass: 'ngx-org-ceo',
  //     image: 'assets/node.svg',
  //     title: 'Chief Executive Officer',
  //     childs: [
  //       {
  //         name: 'Thomas Kurian',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, Google Cloud',
  //       },
  //       {
  //         name: 'Susan Wojcicki',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, YouTube',
  //         childs: [
  //           {
  //             name: 'Beau Avril',
  //             cssClass: 'ngx-org-head',
  //             image: 'assets/node.svg',
  //             title: 'Global Head of Business Operations',
  //             childs: []
  //           },
  //           {
  //             name: 'Tara Walpert Levy',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Agency and Brand Solutions',
  //             childs: []
  //           },
  //           {
  //             name: 'Ariel Bardin',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Product Management',
  //             childs: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Jeff Dean',
  //         cssClass: 'ngx-org-head',
  //         image: 'assets/node.svg',
  //         title: 'Head of Artificial Intelligence',
  //         childs: [
  //           {
  //             name: 'David Feinberg',
  //             cssClass: 'ngx-org-ceo',
  //             image: 'assets/node.svg',
  //             title: 'CEO, Google Health',
  //             childs: []
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  public model: go.TreeModel = new go.TreeModel([
    { key: 1, name: 'Stella Payne Diaz', title: 'CEO' },
    { key: 2, name: 'Luke Warm', title: 'VP Marketing/Sales', parent: 1 },
    { key: 3, name: 'Meg Meehan Hoffa', title: 'Sales', parent: 2 },
    { key: 4, name: 'Peggy Flaming', title: 'VP Engineering', parent: 1 },
    { key: 5, name: 'Saul Wellingood', title: 'Manufacturing', parent: 4 },
    { key: 6, name: 'Al Ligori', title: 'Marketing', parent: 2 },
    { key: 7, name: 'Dot Stubadd', title: 'Sales Rep', parent: 3 },
    { key: 8, name: 'Les Ismore', title: 'Project Mgr', parent: 5 },
    { key: 9, name: 'April Lynn Parris', title: 'Events Mgr', parent: 6 },
    { key: 10, name: 'Xavier Breath', title: 'Engineering', parent: 4 },
    { key: 11, name: 'Anita Hammer', title: 'Process', parent: 5 },
    { key: 12, name: 'Billy Aiken', title: 'Software', parent: 10 },
    { key: 13, name: 'Stan Wellback', title: 'Testing', parent: 10 },
    { key: 14, name: 'Marge Innovera', title: 'Hardware', parent: 10 },
    { key: 15, name: 'Evan Elpus', title: 'Quality', parent: 5 },
    { key: 16, name: 'Lotta B. Essen', title: 'Sales Rep', parent: 3 },
  ]);

  public setSelectedNode(node: null) {}
  ngOnInit(): void {}
}

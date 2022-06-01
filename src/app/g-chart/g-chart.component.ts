import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';
import { WebcamImage } from 'ngx-webcam';
import { filter, from, map, toArray } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-g-chart',
  templateUrl: './g-chart.component.html',
  styleUrls: ['./g-chart.component.scss'],
})
export class GChartComponent implements OnInit {
  isSpinnerDisplayed = false;
  webcamImage!: WebcamImage;
  //webcamImage: WebcamImage ;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  constructor(private service: DataService) {}
  array!: [];
  stuLength!: number;
  myType = ChartType.PieChart;
  myData: any = [];
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true,
  };
  width = 550;
  height = 400;
  token!: string | null;
  idData: any;
  data: any;
  obs: any;
  obs1: any = [];
  evenNum!: number;
  oddNum!: number;
  dynmaicResize!: true;
  ngOnInit(): void {
    this.token = localStorage.getItem('Access Token');

    this.dataLoad();
  }
  public dataLoad() {
    this.isSpinnerDisplayed = true;
    this.service.getlist(this.token).subscribe((result: any) => {
      console.log('graph', result[0].id);
      this.idData = result;
      console.log(this.idData);
      this.isSpinnerDisplayed = false;

      const students = result;
      this.array = JSON.parse(JSON.stringify(result));
      console.log('array', this.array);
      this.stuLength = this.array.length;

      this.obs = from(this.array);
      this.obs1 = this.obs.pipe(toArray()).subscribe((data: any) => {
        console.log('subscribe', data);
        let idd = data.map((res: any) => {
          return res.id;
        });
        console.log("id's", idd);
        for (let count = 0; count <= idd.length; count++) {
          count % 2 == 0
            ? console.log(`${count} is even`)
            : console.log(`${count} is odd`);
        }
        let evenNumbers = idd.filter(function (item: any) {
          return item % 2 == 0;
        });

        console.log('even students', evenNumbers.length);
        this.evenNum = evenNumbers.length;
        let oddNumbers = idd.filter(function (item: any) {
          return item % 2 !== 0;
        });
        console.log('odd', oddNumbers);
        this.oddNum = oddNumbers.length;
        console.log('length od oddno', this.oddNum);
      });

      // const resultArray = Object.keys(students).map((index) => {
      //   let person = students;
      //   console.log('array', resultArray);

      //return person;
      //});
      // if (result.id %2 ===0) {
      //   //let even = this.stuLength % 2;
      //   console.log('even', even);
      // }
      this.myData = [
        ['No.of students', this.stuLength],
        ['Even No. of Students', this.evenNum],
        ['Odd No. of Sudents', this.oddNum],
      ];
    });
  }
}

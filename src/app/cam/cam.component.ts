import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {
  webcamImage!: WebcamImage;
  //webcamImage: WebcamImage ;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

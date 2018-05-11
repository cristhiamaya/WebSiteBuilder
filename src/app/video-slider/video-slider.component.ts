import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit {

  muted = true;

  playVideo() {
    console.log('WAAAAAAAAAAAAAAT');
    this.muted = false;
  }

  constructor() { }

  ngOnInit() {
  }

}

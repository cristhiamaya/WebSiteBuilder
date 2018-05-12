import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit {

  fullscreen = false;

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medsys-slider',
  templateUrl: './medsys-slider.component.html',
  styleUrls: ['./medsys-slider.component.css']
})
export class MedsysSliderComponent implements OnInit {

  constructor() { }
  public slides = [
    {
      img : 'https://i.imgur.com/1WsfMW9.png',
    },
    {
      img : 'https://i.imgur.com/U81InGX.png',
    },
    {
      img : 'https://i.imgur.com/OoOt4Ha.png',
    },
    {
      img : 'https://i.imgur.com/XKkIfGo.png',
    },
  ];
  slideConfig = {
    'slidesToShow': 1,
    'fade': true,
     'slidesToScroll': 1,
     'dots' : true,
     'autoplay' : true,
     'autoplaySpeed': 1800
    };

  ngOnInit() {
  }

}

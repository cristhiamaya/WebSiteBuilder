import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medisign-slider',
  templateUrl: './medisign-slider.component.html',
  styleUrls: ['./medisign-slider.component.css']
})
export class MedisignSliderComponent implements OnInit {

  public slides = [
    {
      img : 'https://i.imgur.com/W7sjydv.png',
    },
    {
      img : 'https://i.imgur.com/d1aRWmy.png',
    },
    {
      img : 'https://i.imgur.com/kHKtP18.png',
    },
    {
      img : 'https://i.imgur.com/IjOPYVw.png',
    },
    {
      img : 'https://i.imgur.com/nMol16c.png'
    },
    {
      img : 'https://i.imgur.com/bOAMSqY.png'
    }
  ];


  public slideConfig = {
     'slidesToShow': 1,
     'slidesToScroll': 1,
     'dots' : true,
     'autoplay' : true,
     'fade' : true,
     'autoplaySpeed': 4500
    };

  constructor() { }

  ngOnInit() {
  }

}

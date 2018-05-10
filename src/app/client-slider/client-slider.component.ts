import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.css']
})
export class ClientSliderComponent implements OnInit {

  public slides = [
    {
      img : 'https://i.imgur.com/5NFsNq1.png',
      name: 'Asociacion médica'
    },
    {
      img : 'https://i.imgur.com/YFZbF3x.png',
      name: 'Unitron'
    },
    {
      img : 'https://i.imgur.com/QPkPCNI.png',
      name: 'Bojanini'
    },
    {
      img : 'https://i.imgur.com/cvPEYiA.png',
      name: 'Fundación Quemado'
    },
    {
      img : 'https://i.imgur.com/zV4RREG.png',
      name: 'Gilete'
    },
    {
      img : 'https://i.imgur.com/XPRkHXb.png',
      name: 'Nogal'
    },
    {
      img : 'https://i.imgur.com/Z1SXwA8.png',
      name: 'Maria auxiliadora'
    },
    {
      img : 'https://i.imgur.com/EB12jzf.png',
      name: 'Cedesnid'
    },
    {
      img : 'https://i.imgur.com/Kc57F1l.png',
      name: 'Sinapsis'
    },
    {
      img : 'https://i.imgur.com/9MPUSbS.png',
      name: 'Dra. Liz Marina'
    }

    ];
  slideConfig = {
    'slidesToShow': 4,
     'slidesToScroll': 1,
     'autoplay' : true,
     'autoplaySpeed': 2000
    };

  constructor() { }

  ngOnInit() {
  }

}

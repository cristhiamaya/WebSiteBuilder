import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  public slides = [
    {
      txt : 'Medsys ahora trabajando con Sura!',
      title: 'Medsys'
    },
    {
      txt : 'Medisign software de consentimientos informados, disponible ahora!',
      title: 'Medisign'
    },

    ];

  public slideConfig = {
    'slidesToShow': 1,
     'slidesToScroll': 1,
     'dots' : true,
     'autoplay' : true,
     'autoplaySpeed': 1800
    };

  ngOnInit() {
  }

}

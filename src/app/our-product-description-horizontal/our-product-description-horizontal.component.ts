import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-horizontal',
  templateUrl: './our-product-description-horizontal.component.html',
  styleUrls: ['./our-product-description-horizontal.component.css']
})
export class OurProductDescriptionHorizontalComponent implements OnInit {

  public description = 'Con este sistema de información se facilitan las labores de suministro de datos'
          + 'al Ministerio de Salud, puesto que se pueden generar los RIPS (Registros individuales de'
          + 'prestación de servicios) de manera sencilla y eficiente.'

  constructor() { }

  ngOnInit() {
  }

}

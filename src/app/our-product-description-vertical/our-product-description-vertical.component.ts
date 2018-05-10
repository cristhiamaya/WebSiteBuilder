import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-vertical',
  templateUrl: './our-product-description-vertical.component.html',
  styleUrls: ['./our-product-description-vertical.component.css']
})
export class OurProductDescriptionVerticalComponent implements OnInit {

  public characteristics_list = [
    {
      text: 'Opción de controlar de manera eficiente múltiples agendas en la misma pantalla',
      title: 'Multiples agendas'
    },
    {
      text: 'Posibilidad de configurar horarios no disponibles por médico y días festivos o no laborales',
      title: 'Configuración de horarios'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Opción para consultar las citas del mes y poder definir fácilmente los espacios disponibles al momento de a signar una cita',
      title: 'Consulta de citas'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Con esta opción se pueden revisar las citas de una semana',
      title: 'Agenda semanal'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

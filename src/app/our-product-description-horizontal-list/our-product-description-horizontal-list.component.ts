import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-horizontal-list',
  templateUrl: './our-product-description-horizontal-list.component.html',
  styleUrls: ['./our-product-description-horizontal-list.component.css']
})
export class OurProductDescriptionHorizontalListComponent implements OnInit {

  public characteristics_list = [
    {
      // tslint:disable-next-line:max-line-length
      text: 'El sistema brinda la posibilidad de obtener un análisis estadístico gráfico de antecedentes por sexo y rangos de edad, muy útil para desarrollar estudios clínicos.',
      title: 'De Antecedentes Clínicos'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Esta información le permitirá hacer seguimiento a los pacientes que no han continuado con procedimientos o tratamientos médicos y mejorará el servicio al cliente de su institución.',
      title: 'Pacientes sin asistencia a consulta'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'El sistema le suministra indicadores de la inclusión de nuevos pacientes y le permitirá mejorar las estrategias para aumentar el volumen de pacientes.',
      title: 'Captación de Pacientes'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

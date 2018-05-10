import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-vertical-inv',
  templateUrl: './our-product-description-vertical-inv.component.html',
  styleUrls: ['./our-product-description-vertical-inv.component.css']
})
export class OurProductDescriptionVerticalInvComponent implements OnInit {

  public characteristics_list = [
    {
      // tslint:disable-next-line:max-line-length
      text: 'El sistema cumple con las regulaciones estatales para la administración de datos clínicos y los estándares de seguridad de la información.',
      title: 'Registro Digital de Historia Clínica'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Con MedSys® podrá generar reportes impresos para fórmulas médicas, incapacidades, resúmenes de historia clínica, recomendaciones, entre otros.',
      title: 'Impresión de Formatos'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Incluye corrector ortográfico que puede utilizar al momento de ingresar datos a la historia clínica.',
      title: 'Corrector Ortográfico'
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'El sistema le permite restringir el acceso de ingreso y lectura a determinados usuarios.',
      title: 'Seguridad de ingreso por Usuario'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

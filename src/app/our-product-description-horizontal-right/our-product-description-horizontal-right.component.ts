import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-horizontal-right',
  templateUrl: './our-product-description-horizontal-right.component.html',
  styleUrls: ['./our-product-description-horizontal-right.component.css']
})
export class OurProductDescriptionHorizontalRightComponent implements OnInit {

  public description = 'MedSys es la herramienta ideal para organizar las imágenes ' +
    'asociadas a la Historia Clínica de pacientes. Es una de las características más ' +
    'importantes y que dan gran potencial al sistema, puesto que se aprovechan las ventajas' +
    ' de la asociación de la información gráfica con los datos de historia clínica.'

  constructor() { }

  ngOnInit() {
  }

}

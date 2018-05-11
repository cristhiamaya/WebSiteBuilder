import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product-description-doublelist',
  templateUrl: './our-product-description-doublelist.component.html',
  styleUrls: ['./our-product-description-doublelist.component.css']
})
export class OurProductDescriptionDoublelistComponent implements OnInit {

  constructor() { }

  public first_list = [
    {
      // tslint:disable-next-line:max-line-length
      text: '1.Las imágenes de las firmas cumplen el único propósito de integrarse al consentimiento.Todas las imágenes siempre se eliminan del sistema donde se encuentre alojado el Servidor de Aplicaciones.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '2. Adicional al consentimiento creado, se realizan 2 copias del mismocon el propósito de garantizar la validez legal del consentimiento de acuerdo a lo estipulado en el numeral 4 de la Ley 527, artículo 28 de 1999. La primera copia es enviada al paciente a través de correo electrónico con el documento adjunto; la segunda copia es almacenada en un servidor en la nube, propiedad de la empresa MedSys SAS.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '3. Si la persona propietaria del software tiene vínculo con un servicio de alojamiento de archivos (Dropbox, Google Drive, Onedrive, iCloud) la ruta destino de los documentos creados puede ubicarse en una carpeta dentro de este servicio. Los consentimientos creados se sincronizarán automáticamente y el propietario podrá acceder desde cualquier dispositivo y lugar a su información.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '4. En caso de pérdida completa y absoluta de los consentimientos (daño de computador y/o eliminación de cuenta de alojamiento de datos) se podrán restaurar todos los documentos creados a la fecha, siempre y cuando se realice adecuadamente el envío del consentimiento al paciente. ',
    },
  ];

  public second_list = [
    {
      // tslint:disable-next-line:max-line-length
      text: '1. Es única a la persona que la usa.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '2. Es susceptible de ser verificada.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '3. Está bajo el control exclusivo de la persona que la usa.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '4. Está ligada a la información o mensaje, de tal manera que si éstos son cambiados, la firma.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '5. Está conforme a las reglamentaciones adoptadas por el Gobierno Nacional.',
    },
    {
      // tslint:disable-next-line:max-line-length
      text: '6. Medisign ayuda a promover la política de Cero Papel, impulsado por la Presidencia de la República desde el año 2012, cuyo propósito es la gestión pública efectiva, eficiente y eficaz del papel. Digital es invalidada.',
    },

  ];

  ngOnInit() {
  }

}

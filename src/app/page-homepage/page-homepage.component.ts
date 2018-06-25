import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-homepage',
  templateUrl: './page-homepage.component.html',
  styleUrls: ['./page-homepage.component.css']
})
export class PageHomepageComponent implements OnInit {

  constructor() { }

  public title_experience ="Experiencia"; 
  public timelineObjects_experience = [
    { year:"1998", description:[
      {date:"Diciembre - Enero 2 de 2001. AÑO INTERNADO (Rotatorio).",description:"Medicina Interna: Hospital Santa Clara, Bogotá, D.C.Rotación Extramural: Hospital San Salvador, Chiquinquirá, Boyacá.Pediatría: Clínica el Bosque, Bogotá, D.C. Gineco – obstetricia: Hospital Simón Bolívar, Bogotá D.C. Cirugía General: Hospital Santa Clara, Bogotá, D.C."},
      ]
    },
    { year:"1999", description:[
      {date:"Diciembre - Enero 2 de 2001. SERVICIO SOCIAL OBLIGATORIO",description:"Hospital Olaya - Hospital Rafael Uribe Uribe E.S.E I Nivel Bogotá D.C. Coordinación en programas de P.A.B: Enfermedades Transmisibles y Red Materno - perinatal. Medicina general: consulta externa, urgencias, consulta de prevención y promoción."},
      ]
    },
    { year:"2001", description:[
      {date:"Enero 1 - Junio 30 de 2002. MÉDICO HOSPITALARIO",description:"Hospital El Tunal III Nivel Empresa Social del Estado, Bogotá D.C. Servicio de Pediatría. Servicio de Ginecología y Obstetricia."},
      ]
    }, 
    { year:"2002", description:[
        {date:"Agosto 1 - Julio 31 de 2006",description:"ESPECIALIZACIÓN EN GINECOLOGÍA Y OBSTETRICIA"},
        {date:"Agosto 1 - Julio 31 de 2003",description:"Sala de partos: Hospital Simón Bolivar"},
        {date:"Marzo 1 - Julio 15. MÉDICO INSTITUCIONAL",description:"Clínica Avellaneda Hernández Cirugía Ambulatoria, Bogotá D.C."},
      ]
    },
    { year:"2003", description:[
      {date:"Agosto 1 - Octubre 31",description:"Alto Riesgo en Obstetricia: UMMF Hospital Simón Bolívar"},
      {date:"Noviembre 1 de 2003 – Enero 31 de 2004",description:"Ecografía y Alto Riesgo: UMMF Fundación Santa Fe de Bogotá"},
    ]
    },
    { year:"2004", description:[
      {date:"Febrero 1 - Abril 30",description:"Cirugía Obstétrica y ginecológica (rotación integral): Clínica El Bosque"},
      {date:"Mayo 1 - Junio 30",description:"Cirugía Ginecológica: Hospital Simón Bolívar"},
      {date:"Agosto 1 - Octubre 31",description:"Oncología Ginecológica, Seno y Colposcopia: Hospital Simón Bolívar"},
      {date:"Noviembre 1 - Diciembre 31",description:"Oncología Ginecológica: Instituto Nacional de Cancerología"}, 
    ]
    },   
    { year:"2005", description:[
      {date:"Febrero 1 - Abril 30",description:"Ginecología Urológica - incontinencia urinaria: Hospital Simón Bolívar"},
      {date:"Mayo 1 - Julio 31",description:"Cirugía Ginecológica: Hospital El Tunal"},
      {date:"Agosto 1 - Octubre 31",description:"Salud Reproductiva y Cirugía Laparoscópica: Hospital Simón Bolívar y Clínica San Pedro Claver"},
      {date:"Noviembre 1 - Diciembre 31",description:"Infectología: Hospital Simón Bolívar"},
    ] 
    },
    { year:"2006", description:
      [
       {date:"Febrero 1 - Abril 30",description:"Electiva en ecografía obstétrica y ginecológica: UMMF Fundación Santa Fe de Bogotá"},
       {date:"Mayo de 2006",description:"II Jornada de “Patología Femenina”. Hospital Simón Bolívar E.S.E. – Universidad El Bosque. Bogotá D.C."},
       {date:"Mayo 1 de 2006 - Julio 31",description:"Cirugía Ginecológica: Hospital Simón Bolívar"},
       {date:"Diciembre 12. GINECO-OBSTETRA.",description:"Actualmente CAFESALUD EPS (ESIMED). Bogotá D.C."},
       {date:"Septiembre 1 de 2006",description:"GINECO-OBSTETRA"},        
      ]
    },
    { year:"2008", description:
      [
       {date:"Marzo 1 de 2008 – Agosto 31 de 2009. GINECO-OBSTETRA",description:"Consulta de alto riesgo obstétrico."},
      ]
    },
    { year:"2009", description:
    [
     {date: "GINECOLOGÍA Y OBSTETRICIA", description:"Consultorio particular y actualmente pacientes particulares y planes complementarios."},
     {date:"Octubre 1 – Agosto 31 de 2011. GINECO-OBSTETRA. ",description:"Consulta de obstetricia."},
     {date:"IPS Santa Paula. 2009 - 2013. Colposcopia.",description:"Unidad de patología cervical y colposcopia"},
    ]
    },
    { year:"2011", description:
      [
       {date: "Septiembre - Noviembre de 2013. GINECO-OBSTETRA", description:"Compensar EPS, Bogotá D.C."},
       {date: "Septiembre - Noviembre de 2013. GINECO-OBSTETRA", description:"Consulta de ginecología y obstetricia POS y PAC"},
       {date: "Julio 15 – Septiembre 30. GINECO-OBSTETRA", description:"Hospital Rafael Uribe Uribe E.S.E, Bogotá D.C."},
       {date: "Julio 15 – Septiembre 30. GINECO-OBSTETRA", description:"Hospital Occidente de Kennedy, III Nivel Empresa Social del Estado. Bogotá D.C. Consulta de ginecología. Consulta de alto riesgo obstétrico"},
       {date: "Julio 15 – Septiembre 30. GINECO-OBSTETRA", description:"Hospital El Tunal III Nivel Empresa Social del Estado. Bogotá D.C. Sala de Partos (urgencias). Consulta Ginecología. Colposcopia."},

      ]
    },
    
    { year:"2018", description:
    [
     {date:"CAFESALUD EPS (ESIMED)",description:"Bogotá D.C. Coordinadora del programa de la mujer Cafi Calle 106 "},
     {date:"CAFESALUD EPS (ESIMED)",description:"Consulta Gineco-obstetricia (Cafi Puente Aranda y Cafi Calle 106)"},
    ]
  },
  ];

  public title_professional ="Formación profesional"; 
  public timelineObjects_professional = [
    {year:"1992", description:[
      {date:"Junio. BACHILLER ACADEMICO",description:"Colegio Divino Salvador, Bogotá D.C."}]
    },
    {year:"1999", description:[
      {date:"Junio. MEDICO CIRUJANO.",description:"Universidad El Bosque, Bogotá D.C"}]
    },
    {year:"2006", description:[
      {date:"Agosto. GINECOLOGÍA Y OBSTETRICIA.",description:"Universidad El Bosque, Bogotá D.C"}]
    },
  ];

  public title_other ="Otros estudios"; 
  public timelineObjects_other = [
    {year:"2001", description:[
      {date:"Abril",description:"Simposio “Importancia de los DHA - AA en la Nutrición del Recién Nacido”. Asociación Colombiana de Pediatría. Bogotá D.C."},
      {date:"Agosto",description:"Curso de “Reanimación Cardiopulmonar Básica y Avanzada en Adultos”. Ministerio de Salud y Universidad Nacional de Colombia - Centro de Estudios en Medicina de Urgencias."},
      {date:"Junio",description:"Curso de capacitación en “Fundamentos de ISO 9000, documentación y certificación de sistemas de calidad”. Hospital El Tunal III Nivel Empresa Social del Estado. Bogotá D.C."},
      {date:"Noviembre",description:"Curso de “Reanimación Cardiopulmonar Infantil”. Ministerio de Salud y Universidad Nacional de Colombia – Centro de Estudios en Medicina de Urgencias. Bogotá D.C."}]
    },
    {year:"2002", description:[
      {date:"Agosto",description:"I Jornada en Medicina Materno Fetal “Muerte Fetal”. Fundación Santa fe de Bogotá."},
      {date:"Marzo",description:"III Jornada de Actualización “Infecciones en Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá"}]
    },
    {year:"2003", description:[
      {date:"Agosto",description:"II Jornada en Medicina Materno Fetal “Controversias en Medicina Materno Fetal”. Fundación Santa Fe de Bogotá. Bogotá D.C."},
      {date:"Mayo",description:"IX Curso Bienal de Actualización en Obstetricia y Ginecología “I Simposio Colombiano de Ginecología Urológica”. Asociación Bogotana de Obstetricia y Ginecología – Asociación Colombiana de Continencia. Bogotá D.C."},
      {date:"Marzo",description:"III Jornada de Actualización “Infecciones en Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá"}]
    },
    {year:"2004", description:[
      {description:"VI Jornadas de Actualización en “Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá. 2004. Bogotá D.C."},
      {date:"Noviembre",description:"Simposio Internacional de Medicina Reproductiva. Fundación Santa Fe de Bogotá."},
      {date:"Octubre",description:"VI Jornadas de Actualización en “Medicina Maternofetal”. Asociación Bogotana de Perinatología. Bogotá D.C."}]
    },
    {year:"2005", description:[
      {date:"Agosto",description:"Primera Jornada de Endoscopia Ginecológica “Avances en Histeroscopia y Hemorragia Uterina”. Hospital Simón Bolívar III Nivel E.S.E. Departamento de Ginecología y Obstetricia. Bogotá D.C."},
      {date:"Agosto",description:"VII Jornadas de Actualización en “Ginecología Y Obstetricia”. Fundación Santa Fe de Bogotá"},
      {date:"Junio",description:"IX Congreso Colombiano de Perinatología. Federación Colombiana de Perinatología FECOPEN - Asociación Quindiana de Obstetricia y Ginecología. Armenia, Quindío."}]
    },
    {year:"2006", description:[
      {date:"Mayo",description:"II Jornada de “Patología Femenina”. Hospital Simón Bolívar E.S.E. – Universidad El Bosque"},
      {date:"Marzo",description:"Curso Teórico Práctico de “Doppler Obstétrico”. Fundación Santa Fe de Bogotá."},
      {date:"Marzo",description:"VIII Jornadas de Actualización en “Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá."}]
    },
    {year:"2009", description:[
      {date:"Febrero.",description:"XI Jornadas de actualización en “Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá."},
      {date:"Marzo.",description:"XII Bienal de la zona oriente de Obstetricia y Ginecología. IV Simposio internacional de ginecología urológica. Bogotá D.C."},
      {date:"Noviembre.",description:"Primera Jornada de Actualización en “MORBILIDAD MATERNA EXTREMA”"},
      {date:"Noviembre.",description:"IX Jornadas de actualización en “Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá"},
    ]},
    {year:"2010", description:[
      {date:"Mayo.",description:"XXVII Congreso Nacional de Obstetricia y Ginecología. Yumbo - Cali."},
      {date:"Octubre.",description:"VII Congreso Latinoamericano de Colposcopia y Patología de Tracto Genital. Cartagena de Indias."}]
    },
    {year:"2011", description:[
      {date:"Marzo.",description:"XII Congreso bienal de Obstetricia y Ginecología de la zona oriente. Bogotá D.C."}]
    },
    {year:"2014", description:[
      {date:"Febrero.",description:"Jornada de Actualización en “Ginecología y Obstetricia”. Fundación Santa Fe de Bogotá D. C."}]
    },
  ];

  ngOnInit() {
  }

}

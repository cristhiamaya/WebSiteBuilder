import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  @Input() service: Object;
  @ViewChild('serviceDetail') el:ElementRef;

  constructor() { }

  ngOnInit() {
  }

}

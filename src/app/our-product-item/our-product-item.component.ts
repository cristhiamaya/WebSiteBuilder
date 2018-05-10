import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-product-item',
  templateUrl: './our-product-item.component.html',
  styleUrls: ['./our-product-item.component.css']
})
export class OurProductItemComponent implements OnInit {

  @Input() logoUrl: string;
  @Input() descriptionProduct: string;
  @Input() routerLink: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characteristic-box',
  templateUrl: './characteristic-box.component.html',
  styleUrls: ['./characteristic-box.component.css']
})
export class CharacteristicBoxComponent implements OnInit {

  @Input() characteristicText: string;
  @Input() characteristicTitle: string;
  @Input() darkTheme = false;

  constructor() { }

  ngOnInit() {
  }

}

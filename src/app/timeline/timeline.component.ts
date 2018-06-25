import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @ViewChild('timeline') timeline; 

  constructor() { }
  @Input() title: string ;
  @Input() timelineObjects : Object[];
  public animClass:string;

  ngOnInit() {

  }

}

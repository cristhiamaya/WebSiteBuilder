import { Component, OnInit, Input, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-timeline-object',
  templateUrl: './timeline-object.component.html',
  styleUrls: ['./timeline-object.component.css']
})
export class TimelineObjectComponent implements OnInit {

  @Input() timelineObj:any;
  @ViewChild('timelineObjId') timelineObjId; 

  constructor() { }
  public animClass:string;

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
  scrollfunction(event) {
    if((window.pageYOffset+window.innerHeight)>=this.timelineObjId.nativeElement.offsetTop){
      this.animClass = "fadeInUp animated";
    }
    else{
      this.animClass = "noVisible";
    }
  }
}

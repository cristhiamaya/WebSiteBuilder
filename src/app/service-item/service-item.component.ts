import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @ViewChild('serviceItem') el:ElementRef;
  @Input() service: object;
  @Input() serviceSelected: object;
  @Output() change = new EventEmitter();;

  constructor() { }

  ngOnInit() {
  }

  public changeService(service){
    setTimeout( () => { 
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }, 50 );
    return this.change.emit(service);
    
  }

  public selectedService(){
    if(this.serviceSelected == this.service)
      return ' service-item-selected '
    else
      return ''
  }
}

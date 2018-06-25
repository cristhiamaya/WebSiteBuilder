import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-client-quote',
  templateUrl: './client-quote.component.html',
  styleUrls: ['./client-quote.component.css']
})
export class ClientQuoteComponent implements OnInit {

  private subscription:any;
  public slidesClient:any;
  private indexSlidesClient:number;
  private currentSlide:Object;
  private animationSlide:string;

  constructor() { }
  
  ngOnInit() {
    this.animationSlide = " fade-in ";
    this.indexSlidesClient = 0;
    this.slidesClient = [
      {name:"Nicolas Amaya", quote:"1. La gente es bien rata D: "},
      {name:"Hitlerino", quote:"2. If you tell a big enough lie and tell it frequently enough, it will be believed. Make the lie big, make it simple, keep saying it, and eventually they will believe it.He alone, who owns the youth, gains the future."},
      {name:"Hitlereino", quote:"3. If you tell a big enough lie and tell it frequently enough, it will be believed. Make the lie big, make it simple, keep saying it, and eventually they will believe it.He alone, who owns the youth, gains the future."},
      {name:"Some Awful dude", quote:"4. If you tell a big enough lie and tell it frequently enough, it will be believed. Make the lie big, make it simple, keep saying it, and eventually they will believe it.He alone, who owns the youth, gains the future."},
      {name:"Hitler", quote:"5. If you tell a big enough lie and tell it frequently enough, it will be believed. Make the lie big, make it simple, keep saying it, and eventually they will believe it.He alone, who owns the youth, gains the future."},
      {name:"Stalin", quote:"6. If you tell a big enough lie and tell it frequently enough, it will be believed. Make the lie big, make it simple, keep saying it, and eventually they will believe it.He alone, who owns the youth, gains the future."},
    ];

    this.currentSlide = this.slidesClient[this.indexSlidesClient]
    let subscribeSelect = Observable.interval(4600)
    .subscribe(i => {
        this.animationSlide = " fade-out ";
        setTimeout( () => { 

        this.indexSlidesClient = this.indexSlidesClient+1;
        if(this.indexSlidesClient==(this.slidesClient.length-1)){
          this.indexSlidesClient = 0;
        }
        this.currentSlide = this.slidesClient[this.indexSlidesClient];
          this.animationSlide = " fade-in ";
        }, 800 );
    })
  }
  
}

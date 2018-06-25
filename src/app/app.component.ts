import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuSelected:any;

  ngOnInit(){
    this.menuSelected = {name:"Ginecóloga", route:""};
  }

  changeMenu(menu:any):void{
    this.menuSelected = menu;
  }
}

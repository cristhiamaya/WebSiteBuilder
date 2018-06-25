import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { WebsiteDataService } from 'src/app/website-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('toolbar') toolbar; 

  menuItems = [
    {name:"Ginecóloga", route:"", open:false},
    {name:"Servicios", route:"servicios", open:false},
    {name:"Contacto", route:"contacto", open:false}
  ]
  @Input() showLogo=true;
  public mobile;
  public mobileMenuOpened:boolean;
  public fixedMenu: boolean;

  constructor(private websiteDataService: WebsiteDataService,
    private router: Router) {

  }

  @HostListener('window:scroll', ['$event']) 
  scrollfunction(event) {
    this.fixedMenu = window.pageYOffset>=this.toolbar.nativeElement.offsetTop;
  }

  ngOnInit() {
    console.log("this.router",this.router);
    this.mobileMenuOpened=false;
  }

  changeMenu(menu:any){
    this.websiteDataService.menuSelected = menu;
    for(let menuItem of this.menuItems){
      if(menuItem==menu)
        menuItem.open = true;
      else
        menuItem.open = false;
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.router.navigate([menu.route]);
  }

  openMobileMenu(){
    this.mobileMenuOpened=!this.mobileMenuOpened;
  }
}

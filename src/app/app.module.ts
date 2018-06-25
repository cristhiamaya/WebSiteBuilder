import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule,
  MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatInputModule, MatDialogModule,
  MatGridListModule, MatTabsModule, MatSelectModule, MatDatepickerModule, MatSlideToggleModule,
  MatChipsModule, MatTooltipModule, MatExpansionModule, MatButtonToggleModule, MatSnackBarModule
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlickModule } from 'ngx-slick';
import { ClientSliderComponent } from './client-slider/client-slider.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurProductItemComponent } from './our-product-item/our-product-item.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MedsysSliderComponent } from './medsys-slider/medsys-slider.component';
import { OurProductDescriptionVerticalComponent } from './our-product-description-vertical/our-product-description-vertical.component';
import { RegisterBtnComponent } from './register-btn/register-btn.component';
import {
    OurProductDescriptionVerticalInvComponent
  } from './our-product-description-vertical-inv/our-product-description-vertical-inv.component';
import { CharacteristicBoxComponent } from './characteristic-box/characteristic-box.component';
import {
  OurProductDescriptionHorizontalComponent } from './our-product-description-horizontal/our-product-description-horizontal.component';
import {
  OurProductDescriptionHorizontalRightComponent
  } from './our-product-description-horizontal-right/our-product-description-horizontal-right.component';
import {
  OurProductDescriptionHorizontalListComponent
  } from './our-product-description-horizontal-list/our-product-description-horizontal-list.component';
import { VideoSliderComponent } from './video-slider/video-slider.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {
   OurProductDescriptionDoublelistComponent
  } from './our-product-description-doublelist/our-product-description-doublelist.component';
import { MedisignSliderComponent } from './medisign-slider/medisign-slider.component';
import { MainSliderStaticComponent } from './main-slider-static/main-slider-static.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { ToastrModule } from 'ngx-toastr';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { MainSliderCurvedComponent } from './main-slider-curved/main-slider-curved.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ClientQuoteComponent } from './client-quote/client-quote.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { PageServicesComponent } from './page-services/page-services.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { TimelineObjectComponent } from './timeline-object/timeline-object.component';

const routes: Routes = [
  { path: '', component: PageHomepageComponent },
  { path: 'servicios', component: PageServicesComponent },
  { path: 'contacto', component: PageContactComponent },
];

@NgModule({
  entryComponents: [
    RegisterDialogComponent,
    DialogAlertComponent
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainSliderComponent,
    ClientSliderComponent,
    PageHomepageComponent,
    OurProductsComponent,
    OurProductItemComponent,
    AboutComponent,
    FooterComponent,    
    MedsysSliderComponent,
    OurProductDescriptionVerticalComponent,
    RegisterBtnComponent,
    OurProductDescriptionVerticalInvComponent,
    CharacteristicBoxComponent,
    OurProductDescriptionHorizontalComponent,
    OurProductDescriptionHorizontalRightComponent,
    OurProductDescriptionHorizontalListComponent,
    VideoSliderComponent,
    OurProductDescriptionDoublelistComponent,
    MedisignSliderComponent,
    MainSliderStaticComponent,
    RegisterDialogComponent,
    LoginBtnComponent,
    DialogAlertComponent,
    MainSliderCurvedComponent,
    AboutDoctorComponent,
    TimelineComponent,
    ClientQuoteComponent,
    PageServicesComponent,
    ServiceItemComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    PageContactComponent,
    TimelineObjectComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(routes),
    SlickModule.forRoot(),
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    HttpClientModule,
    HttpModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

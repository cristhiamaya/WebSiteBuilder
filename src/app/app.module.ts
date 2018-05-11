import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { PageMedsysComponent } from './page-medsys/page-medsys.component';
import { PageMedisignComponent } from './page-medisign/page-medisign.component';
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

const routes: Routes = [
  { path: '', component: PageHomepageComponent },
  { path: 'medsys', component: PageMedsysComponent},
  { path: 'medisign', component: PageMedisignComponent}
];

@NgModule({
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
    PageMedsysComponent,
    PageMedisignComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlickModule.forRoot(),
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
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
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

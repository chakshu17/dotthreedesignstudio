import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BungalowComponent } from './architectural/bungalow/bungalow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { CafeComponent } from './architectural/cafe/cafe.component';
import { SingleUnitComponent } from './furniture-module/single-unit/single-unit.component';
import { TvUnitComponent } from './furniture-module/tv-unit/tv-unit.component';
import { KitchenComponent } from './interior/kitchen/kitchen.component';
import { ShowroomComponent } from './interior/showroom/showroom.component';
@NgModule({
  declarations: [
    AppComponent,
    BungalowComponent,
    CafeComponent,
    SingleUnitComponent,
    TvUnitComponent,
    KitchenComponent,
    ShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CafeComponent } from './architectural/cafe/cafe.component';
import { BungalowComponent } from './architectural/bungalow/bungalow.component';
import { ApartmentComponent } from './architectural/apartment/apartment.component';
import { BarComponent } from './interior/bar/bar.component';
import { BedroomComponent } from './interior/bedroom/bedroom.component';
import { Desk2Component } from './interior/desk2/desk2.component';
import { DeskComponent } from './interior/desk/desk.component';
import { KitchenComponent } from './interior/kitchen/kitchen.component';
import { ShowroomComponent } from './interior/showroom/showroom.component';
import { DiningSetComponent } from './furniture-module/dining-set/dining-set.component';
import { SingleUnitComponent } from './furniture-module/single-unit/single-unit.component';
import { SofaComponent } from './furniture-module/sofa/sofa.component';
import { WallHungSofaComponent } from './furniture-module/wall-hung-sofa/wall-hung-sofa.component';
import { TvUnitComponent } from './furniture-module/tv-unit/tv-unit.component';
import { StorageUnitComponent } from './furniture-module/storage-unit/storage-unit.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { ArchitecturalComponent } from './imageslider/architectural/architectural.component';


const routes: Routes = [
  {path: 'home',component: HomepageComponent},
  {path: '',component: HomepageComponent},

  {path: 'our-projects', component: OurProjectsComponent},
  {path:'architectural',component:ArchitecturalComponent},
  //architectural
  {path:'cafe',component:CafeComponent},
  {path:'bungalow',component:BungalowComponent},
  {path:'apartment',component:ApartmentComponent},
  //Interior
  {path:'bar',component:BarComponent},
  {path:'bedroom',component:BedroomComponent},
  {path:'desk2',component:Desk2Component},
  {path:'desk',component:DeskComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'showroom',component:ShowroomComponent},
  //Furniture Module
  {path: 'dining-set', component:DiningSetComponent  },
  {path: 'single-unit', component:SingleUnitComponent  },
  {path: 'sofa', component:SofaComponent  },
  {path: 'wall-hung-sofa', component:WallHungSofaComponent  },
  {path: 'tv-unit', component:TvUnitComponent  },
  {path: 'storage-unit', component: StorageUnitComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-module',
  templateUrl: './furniture-module.component.html',
  styleUrls: ['./furniture-module.component.scss'],
})
export class FurnitureModuleComponent implements OnInit {
  constructor(private routerUrl: Router) {}
  index: number;
  ngOnInit(): void {}
  routers = <any>[];
  submit(nav) {
    // console.log(nav.imageObj);
    this.routers = this.imageObject[nav.activeImageIndex];
    console.log(this.routers.image);
    this.routerUrl.navigate(['/' + this.routers.url]);
  }

  imageObject = [
    {
      image: 'assets/Images/furniture module/storage units/stu1.jpg',
      thumbImage: 'assets/Images/furniture module/storage units/stu1.jpg',
      url: 'home',
    },
    {
      image: 'assets/Images/furniture module/sofa set/sofa.jpg',
      thumbImage: 'assets/Images/furniture module/sofa set/sofa.jpg',
      url: 'home',
    },
    {
      image: 'assets/Images/furniture module/dining set/ds1.jpg',
      thumbImage: 'assets/Images/furniture module/dining set/ds1.jpg',
      url: 'home',
    },
    {
      image: 'assets/Images/furniture module/wall hung sofa/ws2.jpg',
      thumbImage: 'assets/Images/furniture module/wall hung sofa/ws2.jpg',
      url: 'home',
    },

    {
      image: 'assets/Images/furniture module/tv unit/tu1.jpg',
      thumbImage: 'assets/Images/furniture module/tv unit/tu1.jpg',
      url: 'home',
    },
    {
      image: 'assets/Images/furniture module/single unit/su1.jpg',
      thumbImage: 'assets/Images/furniture module/single unit/su1.jpg',
      url: 'home',
    },
  ];
}

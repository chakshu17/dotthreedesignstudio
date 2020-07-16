import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-architectural',
  templateUrl: './architectural.component.html',
  styleUrls: ['./architectural.component.scss'],
})
export class ArchitecturalComponent implements OnInit {
  constructor(private routerUrl: Router) {}

  index: number;
  ngOnInit(): void {}
  routers = <any>[];
  submit(nav) {
    console.log(nav.imageObj);
    this.routers = this.imageObject[nav.activeImageIndex];
    console.log(this.routers.image);

    this.routerUrl.navigate(['/' + this.routers.url]);
  }
  imageObject = [
    {
      image: 'assets/Images/architectural/apartment/Ap1.jpg',
      thumbImage: 'assets/Images/architectural/apartment/Ap1.jpg',
      url: 'apartment',
    },
    {
      image: 'assets/Images/architectural/bungalow/B1.jpg',
      thumbImage: 'assets/Images/architectural/bungalow/B1.jpg',
      url: 'bungalow',
    },
    {
      image: 'assets/Images/architectural/cafe/cc1.jpg',
      thumbImage: 'assets/Images/architectural/cafe/cc1.jpg',
      url: 'cafe',
    },

    {
      image: 'assets/Images/architectural/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/architectural/apartment/Ap2.jpg',
      url: 'apartment',
    },
    {
      image: 'assets/Images/architectural/cafe/c3.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c3.jpg',
      url: 'cafe',
    },

    {
      image: 'assets/Images/architectural/bungalow/B2.jpg',
      thumbImage: 'assets/Images/architectural/bungalow/B2.jpg',
      url: 'bungalow',
    },
    {
      image: 'assets/Images/architectural/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/architectural/apartment/Ap2.jpg',
      url: 'apartment',
    },
    {
      image: 'assets/Images/architectural/cafe/c4.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c4.jpg',
      url: 'cafe',
    },
  ];
}

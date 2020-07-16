import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/architectural/cafe/cc1.jpg',
      thumbImage: 'assets/Images/architectural/cafe/cc1.jpg',
    },
    {
      image: 'assets/Images/architectural/cafe/c2.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c2.jpg',
    },
    {
      image: 'assets/Images/architectural/cafe/c3.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c3.jpg',
    },
    {
      image: 'assets/Images/architectural/cafe/c4.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c4.jpg',
    },
    {
      image: 'assets/Images/architectural/cafe/c5.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c5.jpg',
    },
    {
      image: 'assets/Images/architectural/cafe/c6.jpg',
      thumbImage: 'assets/Images/architectural/cafe/c6.jpg',
    },
  ]
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/architectural/apartment/Ap1.jpg',
      thumbImage: 'assets/Images/architectural/apartment/Ap1.jpg',
    },
    {
      image: 'assets/Images/architectural/apartment/Ap2.jpg',
      thumbImage: 'assets/Images/architectural/apartment/Ap2.jpg',
    },
  ]
}

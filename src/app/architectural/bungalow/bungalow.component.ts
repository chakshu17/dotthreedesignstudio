import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bungalow',
  templateUrl: './bungalow.component.html',
  styleUrls: ['./bungalow.component.scss']
})
export class BungalowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/architectural/bungalow/B1.jpg',
      thumbImage: 'assets/Images/architectural/bungalow/B1.jpg',
    },
    {
      image: 'assets/Images/architectural/bungalow/B2.jpg',
      thumbImage: 'assets/Images/architectural/bungalow/B2.jpg',
    },
  ]

}

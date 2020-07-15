import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desk2',
  templateUrl: './desk2.component.html',
  styleUrls: ['./desk2.component.scss']
})
export class Desk2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/interior/desk 2/desk1.jpg',
      thumbImage: 'assets/Images/interior/desk 2/desk1.jpg',
    },
    {
      image: 'assets/Images/interior/desk 2/desk2.jpg',
      thumbImage: 'assets/Images/interior/desk 2/desk2.jpg',
    },
  ]
}

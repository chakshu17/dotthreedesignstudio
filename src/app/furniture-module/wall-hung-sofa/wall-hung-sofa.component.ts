import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-hung-sofa',
  templateUrl: './wall-hung-sofa.component.html',
  styleUrls: ['./wall-hung-sofa.component.scss']
})
export class WallHungSofaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/furniture module/wall hung sofa/ws1.jpg',
      thumbImage: 'assets/Images/furniture module/wall hung sofa/ws1.jpg',
    },
    {
      image: 'assets/Images/furniture module/wall hung sofa/ws2.jpg',
      thumbImage: 'assets/Images/furniture module/wall hung sofa/ws2.jpg',
    },
  ]
}

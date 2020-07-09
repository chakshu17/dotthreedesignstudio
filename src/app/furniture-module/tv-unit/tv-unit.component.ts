import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-unit',
  templateUrl: './tv-unit.component.html',
  styleUrls: ['./tv-unit.component.scss']
})
export class TvUnitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/furniture module/tv unit/tu1.jpg',
      thumbImage: 'assets/Images/furniture module/tv unit/tu1.jpg',
    },
    {
      image: 'assets/Images/furniture module/tv unit/tu2.jpg',
      thumbImage: 'assets/Images/furniture module/tv unit/tu2.jpg',
    },
  ]
}

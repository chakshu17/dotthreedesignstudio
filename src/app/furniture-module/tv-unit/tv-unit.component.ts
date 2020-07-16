import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-unit',
  templateUrl: './tv-unit.component.html',
  styleUrls: ['./tv-unit.component.scss']
})
export class TvUnitComponent implements OnInit {

  constructor(private routerUrl:Router) { }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-unit',
  templateUrl: './single-unit.component.html',
  styleUrls: ['./single-unit.component.scss']
})
export class SingleUnitComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }
  imageObject = [
    {
      image: 'assets/Images/furniture module/single unit/su1.jpg',
      thumbImage: 'assets/Images/furniture module/single unit/su1.jpg',
    },
    {
      image: 'assets/Images/furniture module/single unit/su2.jpg',
      thumbImage: 'assets/Images/furniture module/single unit/su2.jpg',
    },
  ];
}

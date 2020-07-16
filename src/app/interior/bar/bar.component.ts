import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/interior/bar/bar1.jpg',
      thumbImage: 'assets/Images/interior/bar/bar1.jpg',
    },
    {
      image: 'assets/Images/interior/bar/bar2.jpg',
      thumbImage: 'assets/Images/interior/bar/bar2.jpg',
    },
    {
      image: 'assets/Images/interior/bar/bar3.jpg',
      thumbImage: 'assets/Images/interior/bar/bar3.jpg',
    },
  ]

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/interior/showroom/sh1.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh1.jpg',
      //title:'Showroom'
    },
    {
      image: 'assets/Images/interior/showroom/sh2.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh2.jpg',
    },
    {
      image: 'assets/Images/interior/showroom/sh3.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh3.jpg',
    },
    {
      image: 'assets/Images/interior/showroom/sh4.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh4.jpg',
    },
    {
      image: 'assets/Images/interior/showroom/sh5.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh5.jpg',
    },
  ]

}

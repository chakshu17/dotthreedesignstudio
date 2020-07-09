import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject=[
    {
      image: 'assets/Images/interior/showroom/sh1.jpg',
      thumbImage: 'assets/Images/interior/showroom/sh1.jpg',
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

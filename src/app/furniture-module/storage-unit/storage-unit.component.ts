import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }
  imageObject=[
    {
      image: 'assets/Images/furniture module/storage units/stu1.jpg',
      thumbImage: 'assets/Images/furniture module/storage units/stu1.jpg',
    },
    {
      image: 'assets/Images/furniture module/storage units/stu2.jpg',
      thumbImage: 'assets/Images/furniture module/storage units/stu2.jpg',
    },
    {
      image: 'assets/Images/furniture module/storage units/stu3.jpg',
      thumbImage: 'assets/Images/furniture module/storage units/stu3.jpg',
    },
    {
      image: 'assets/Images/furniture module/storage units/stu4.jpg',
      thumbImage: 'assets/Images/furniture module/storage units/stu4.jpg',
    },
  ]
}

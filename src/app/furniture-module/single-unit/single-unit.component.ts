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

}

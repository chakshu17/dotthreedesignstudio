import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dining-set',
  templateUrl: './dining-set.component.html',
  styleUrls: ['./dining-set.component.scss']
})
export class DiningSetComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }

}

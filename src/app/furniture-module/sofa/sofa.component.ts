import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.scss']
})
export class SofaComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }

}

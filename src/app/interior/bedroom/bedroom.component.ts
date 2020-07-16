import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.scss']
})
export class BedroomComponent implements OnInit {

  constructor(private routerUrl:Router) { }

  ngOnInit(): void {
  }

}

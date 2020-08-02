import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = `Angular ${VERSION.full} ist cool!`;
  clicked: boolean = false;

  companies = [
    {
      name: 'Google',
      logoSrc: 'assets/logos/Logo-Google.svg',
      foundingYear: 1998
    },
    {
      name: 'sixData',
      logoSrc: 'assets/logos/Logo-sixData.png',
      foundingYear: 2002
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.clicked = true;
  }
}

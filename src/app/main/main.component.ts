import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  username: string= '';

  card1={title: 'Card 1', content:'This is first card'};
  card2={title: 'Card 2', content:'This is second card'};
  card3={title: 'Card 3', content:'This is third card'};

  constructor(private router: Router){}

  ngOnInit(){
    this.username = localStorage.getItem('username') || 'Guest';
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate([''])
  }
}

import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'frontend';
  constructor(private router : Router){}
  isMenuVisible!: boolean;
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigate(['/auth/login']);
  }
  ngDoCheck(): void {
    let currentroute = this.router.url;
    let jwt=localStorage.getItem('jwt');
   
    if (currentroute == '/auth/login' || currentroute == '/auth/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true}
    }
}

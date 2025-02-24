import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-deploy';
  response="";
  sayhello(event : any){
    const greet = "hello " + event.target.value;
    this.response = greet;
  }
}

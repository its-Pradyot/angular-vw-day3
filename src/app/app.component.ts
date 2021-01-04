import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  mydate = new Date();

  emp = {"empid":12,"empname":"ABCD","salary":26000}

  cities = ['Pune','Mumbai','Nagpur','Goa','Nashik'];


}

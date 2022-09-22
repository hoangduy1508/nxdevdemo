import { Component } from '@angular/core';
import { ShareStateService } from "@nxdevdemo/ui";
@Component({
  selector: 'nxdevdemo-about-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  constructor(

    public _shareStateService: ShareStateService
  ) {

  }

  setState() {
    this._shareStateService.newState();


  }
}

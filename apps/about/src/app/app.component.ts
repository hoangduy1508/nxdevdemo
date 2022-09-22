import { Component } from '@angular/core';
import { ShareStateService } from "@nxdevdemo/ui";
@Component({
  selector: 'nxdevdemo-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  state = this._shareStateService.state;

  constructor(

    private _shareStateService: ShareStateService
  ) {

  }

  setState() {
    this._shareStateService.newState();

    this.state = this._shareStateService.state;

    console.log(this._shareStateService.state)
  }
}

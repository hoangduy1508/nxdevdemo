import { Component } from '@angular/core';
import { ShareStateService } from "@nxdevdemo/ui";
@Component({
  selector: 'nxdevdemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'nvdevdemo2';

  state = this._shareStateService.state;

  constructor(
    private _shareStateService: ShareStateService
  ) {
  }

  addTodo() {
    this._shareStateService.newState();

    this.state = this._shareStateService.state;

    console.log(this._shareStateService.state)
  }
}

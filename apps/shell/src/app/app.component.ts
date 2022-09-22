import { Component, ChangeDetectorRef } from '@angular/core';
import { ShareStateService } from "@nxdevdemo/ui";
@Component({
  selector: 'nxdevdemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';
  constructor(

    public _shareStateService: ShareStateService,
    private _ChangeDetectorRef: ChangeDetectorRef
  ) {

  }
  setState() {
    this._shareStateService.newState();

  }
}

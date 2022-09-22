import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareStateService {

  public state = 0;

  newState() {

    this.state = this.state + 1;
    console.log(this.state);
  }
}

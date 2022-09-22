import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@nxdevdemo/data';
import { ShareStateService } from "@nxdevdemo/ui";
@Component({
  selector: 'nxdevdemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  title = 'nxdevdemo';

  state = this._shareStateService.state;

  constructor(
    private http: HttpClient,
    private _shareStateService: ShareStateService
  ) {
    this.fetch();
  }
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }
  setState() {
    this._shareStateService.newState();

    this.state = this._shareStateService.state;

    console.log(this._shareStateService.state)
  }
}

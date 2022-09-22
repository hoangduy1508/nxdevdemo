import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { ShareStateService } from "./share-state.service";

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
  providers: [ShareStateService]
})
export class UiModule { }

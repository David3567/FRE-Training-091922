import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() emitItemId = new EventEmitter();

  name = 'hello';

  constructor() {}

  ngOnInit(): void {}

  // ngDoCheck(): void {
  //   throw new Error('Method not implemented.');
  // }

  deleteTodo() {
    this.emitItemId.emit(this.todo.id);
    this.name = 'world';
  }
}

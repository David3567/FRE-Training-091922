import { Attribute, Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}

  render() {
    console.log(`component ${this.user.id} is rendering`);
  }
}

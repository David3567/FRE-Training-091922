import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.scss'],
})
export class OnchangeComponent implements OnInit {
  users!: User[];
  usersSubscription = new Subscription();

  constructor() {}

  ngOnInit(): void {}
}

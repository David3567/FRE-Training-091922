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
  name = '';

  constructor(
    private readonly http: HttpClient
  ) // private readonly changeDetectorRef: ChangeDetectorRef
  {}

  ngDoCheck(): void {
    // if (this.users) {
    //   this.changeDetectorRef.markForCheck(); //& force Check ChangeDetection
    // }
  }

  ngOnInit(): void {
    // this.userService.getUser().subscribe();
    // this.usersSubscription = this.userService.usersExport.subscribe((users) => {
    //   this.users = users;
    // });
    this.usersSubscription = this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: User[]) => {
        this.users = users;
        this.name = this.users[0].name;
        // this.changeDetectorRef.markForCheck(); //& force Check ChangeDetection
      });
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  immutableChangeName() {
    // this.users[0].name = this.name;

    this.users[0] = {
      ...this.users[0],
      name: this.name,
    };
  }
}

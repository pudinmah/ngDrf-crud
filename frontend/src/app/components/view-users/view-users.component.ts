import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from '../../User';
import { UsersService } from '../../users.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.scss'
})
export class ViewUsersComponent {
  users: any | undefined;

  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
}

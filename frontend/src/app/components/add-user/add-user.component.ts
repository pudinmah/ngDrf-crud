import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  data: any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  addUser() {
    this.data = this.form.value;
    this.service.addUser(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
    });
  }
}

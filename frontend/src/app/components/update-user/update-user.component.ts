import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from '../../User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  user?: any
  data: any


  constructor(private service: UsersService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    this.user.name = this.data.name
    this.user.email = this.data.email
    console.log(this.data)

    this.service.updateUser(this.user?.id, this.user).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}

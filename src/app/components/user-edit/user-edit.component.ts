import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from '../../common/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  // id = this.actRoute.snapshot.params['id'];

  currentUser: User = {
    id: '',
    fullname: '',
    email: '',
    password: '',
    isAdmin: true
  };
  message = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,

    // public actRoute : ActivatedRoute,

  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.retrieveUserById(id);

    console.log(id);

    this.form = this.formBuilder.group(
      {
        fullname: [this.currentUser.fullname, Validators.required],
        email: [this.currentUser.email, [Validators.required, Validators.email]],
        password: [
          this.currentUser.password,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      }
    )

  }
  retrieveUserById(id: any): void {
    this.userService.getUserById(id)
      .subscribe(
        (data: any) => {
          this.currentUser = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  updateUser(): void {


    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);

        },
        error => {
          console.log(error);
        });
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid) {
      alert('invalid');
      return;
    }


    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from '../../common/User';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  form!: FormGroup;


  // id = this.actRoute.snapshot.params['id'];

  user: User = {
    // id: '',
    fullname: '',
    email: '',
    password: '',
    isAdmin: true
  };
  message = '';
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,



  ) { }

  ngOnInit(): void {



    this.form = this.formBuilder.group(
      {
        fullname: [this.user.fullname, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [
          this.user.password,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        isAdmin: [false, Validators.requiredTrue]
      }
    )

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  createUser(userData:any): any {
    this.message = '';

    this.userService.create(userData) //this.user
      .subscribe(
        (response: any) => {
          console.log(response);
          this.message = response.message ? response.message : 'This user was creates successfully!';
        },
        (error: any) => {
          console.log(error);
        });

  }

  onSubmit(): any {

    this.submitted = true;
    if (this.form.invalid) {
      alert('Invalid');
      return;
    }
    return this.createUser(this.user);



    console.log(JSON.stringify(this.form.value, null, 2));
  }




  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}

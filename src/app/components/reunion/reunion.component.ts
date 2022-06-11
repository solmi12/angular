import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {
  currentReunion = null;
  message = '';

  loading = false;
  buttionText = "Submit";
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  constructor(public http: ReunionService,
    private reunionService: ReunionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.http.test);
    this.message = '';
    this.getReunion(this.route.snapshot.paramMap.get('id'));
  }

  getReunion(id): void {
    this.reunionService.get(id)
      .subscribe(
        data => {
          this.currentReunion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
    
    register() {
      this.loading = true;
      this.buttionText = "Submiting...";
      let user = {
        name: this.nameFormControl.value,
        email: this.emailFormControl.value
      }
      this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(
        data => {
          let res:any = data; 
          console.log(
            `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
        },
        err => {
          console.log(err);
          this.loading = false;
          this.buttionText = "Submit";
        },() => {
          this.loading = false;
          this.buttionText = "Submit";
        }
        );
      }
    }

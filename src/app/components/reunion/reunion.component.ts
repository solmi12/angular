import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reunion } from 'src/app/models/reunion.model';
import { ReunionService } from 'src/app/services/reunion.service';
import { AddReunionComponent } from '../add-reunion/add-reunion.component';

import * as io from 'socket.io-client';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.scss']
})
export class ReunionComponent implements OnInit {
  @Input() addReunion: AddReunionComponent;
  @HostListener('click')
  click() {
    this.addReunion.toggle();
  }
  currentReunion = null;
  message = '';
msg = '';
lien = '';
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
  id: any;


  userName = '';

  messagee = '';
  messageList: {messagee: string, userName: string, mine: boolean}[] = [];
  userList: string[] = [];
  socket: any;
  constructor(public http: ReunionService,
    private reunionService: ReunionService,
    private route: ActivatedRoute,
    private router: Router) {



    }




    /*userNameUpdate(name: string): void {
        userName: this.userName,
      this.socket = io.io(`http://localhost:4000/userName=${name}`);
      this.userName = name;

      this.socket.emit('set-user-name', name);

      this.socket.on('user-list', (userList: string[]) => {
        this.userList = userList;
      });

      this.socket.on('messagee-broadcast', (data: {messagee: string, userName: string}) => {
        if (data) {
          this.messageList.push({messagee: data.messagee, userName: data.userName, mine: false});
        }
      });
    }*/

    sendMessage(): void {
      this.socket.emit('message', this.messagee);
      this.messageList.push({messagee: this.messagee, userName: this.userName, mine: true});
      this.messagee = '';
    }





  ngOnInit(): void {
    console.log(this.http.test);
    this.message = '';
    this.getReunion(this.route.snapshot.paramMap.get('id'));
this.msg = this.route.snapshot.params.id;
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

      let lien = '';
      let user = {
        name: this.nameFormControl.value,
        email: this.emailFormControl.value,
        lien : "localhost:4200/reunions/"+this.msg
      }
      this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(
        data => {
          let res:any = data;
          console.log(
            ` ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}et ${lien}`,

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
function id(id: any): string {
  throw new Error('Function not implemented.');
}


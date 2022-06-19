import { Component, HostBinding, OnInit } from '@angular/core';
import { ReunionService } from 'src/app/services/reunion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css']
})
export class AddReunionComponent implements OnInit {
  reunions: any;
  rName = '';
  @HostBinding('class.is-open')
  isOpen = false;
  id: '';

  toggle() {
    this.isOpen = !this.isOpen;

  }
  currentReunion = null;
  reunion = {
    rName: '',
    suite: '',

  };
  msg = '';
  submitted = false;


  constructor(private reunionService: ReunionService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

  }
  public testCall()
  { alert("I am here.."); }

  saveReunion(): void {
    const data = {
      rName: this.reunion.rName,
      suite: this.reunion.suite
    };

    this.reunionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  newReunion(): void {
    this.submitted = false;
    this.reunion = {
      rName: '',
      suite: '',

    };
  }

  /*getReunion(id): void {
    this.reunionService.get(id)
      .subscribe(
        data => {
          this.currentReunion = data;
          console.log(data);
        },
        error => {
          console.log(error);


        });

  }*/

}

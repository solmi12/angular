import { Component, OnInit } from '@angular/core';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css']
})
export class AddReunionComponent implements OnInit {

  reunion = {
    rName: '',
    suite: '',
   
  };
  submitted = false;

  constructor(private reunionService: ReunionService) { }

  ngOnInit(): void {
  }

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

}
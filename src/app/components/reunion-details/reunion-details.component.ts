import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunion-details',
  templateUrl: './reunion-details.component.html',
  styleUrls: ['./reunion-details.component.css']
})
export class ReunionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}/*
updateReunion(): void {
  this.reunionService.update(this.currentReunion.id, this.currentReunion)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}

deleteReunion(): void {
  this.reunionService.delete(this.currentReunion.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/reunion']);
      },
      error => {
        console.log(error);
      });
}
}*/
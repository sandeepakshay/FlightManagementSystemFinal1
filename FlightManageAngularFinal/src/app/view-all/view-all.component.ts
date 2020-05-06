import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Schedule } from '../schedule';
import { Airport } from '../airport';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { Time } from '@angular/common';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  scheduleList: Schedule[];

  id: number;

  airport: Airport[];

  entries: any[];

  schedule: Schedule;

  errorInfo: string = undefined;

  Info: string = undefined;

  popCancel: boolean = false;

  constructor(private service: DataService, private route: Router) { }

  ngOnInit(): void {


    this.service.viewAllSchedule().subscribe(
      data => {
        this.scheduleList = data,
        this.errorInfo = undefined
      },

      error => {


        this.errorInfo = JSON.stringify(error.error.text);
        this.scheduleList = undefined;

      }
    );




  }

  delete(id: number) {


    // alert("Do you want to delete it ?");
    if (confirm("Are you sure you want to delete?") == true) {

      this.service.delete(id).subscribe(data => this.schedule = data);


    } else {
      this.service.viewAllSchedule().subscribe(data => this.scheduleList = data);
    }




  }


  updateId(id: number) {


    this.service.IdToUpdate = id;

  }

}

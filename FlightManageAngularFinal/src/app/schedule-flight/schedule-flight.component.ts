import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { DataService } from '../data.service';
import { Schedule } from '../schedule';
import { Flight } from '../flight';
import { ScheduledFlight } from '../scheduled-flight';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {

  airportsData: Airport[] = [];

  flights: Flight[];

  scheduleIdList: number[];

  Addedschedule: Schedule = new Schedule();

  Info: string;

  flight: Flight = new Flight();

  successFlag: boolean = false;



  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {

    this.service.viewAirportCode().subscribe(data => this.airportsData = data);
    this.service.viewFlightNum().subscribe(data => this.flights = data);
    this.service.viewScheduleIds().subscribe(data => this.scheduleIdList = data);



  }

  addSchedule(): void {



    this.service.create(this.Addedschedule).subscribe(data => { this.Addedschedule = data, this.Info = data });
    // this.service.setSuccessInfo(this.Info);
    this.successFlag = true;
    // this.router.navigateByUrl('/viewAll');


  }



}

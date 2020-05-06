import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Schedule } from '../schedule';
import { Airport } from '../airport';
import { Flight } from '../flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateId: number;



  Updateschedule: Schedule = new Schedule();

  schedule1: Schedule = new Schedule();

  airportsCode: Airport[];

  flightsNum: Flight[];

  flight: Flight = new Flight();

  airport: Airport = new Airport();

  arrivalTime: String;
  departureTime: String;



  constructor(private service: DataService, private route: Router) { }

  ngOnInit(): void {

    this.updateId = this.service.IdToUpdate;
    console.log(this.updateId);
    this.service.findById(this.updateId).subscribe(data => this.Updateschedule = data);
    this.service.viewAirportCode().subscribe(data => this.airportsCode = data);
    this.service.viewFlightNum().subscribe(data => this.flightsNum = data);

  }

  update() {


    this.service.update(this.updateId, this.Updateschedule).subscribe(data => { this.Updateschedule = data });
    this.route.navigateByUrl('/viewAll');

  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { ScheduleFlightComponent } from '../schedule-flight/schedule-flight.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {





  ngOnInit(): void {



  }



  constructor(private service: DataService) { }



}

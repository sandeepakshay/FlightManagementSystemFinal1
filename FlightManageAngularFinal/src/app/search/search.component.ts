import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Search } from '../search';
import { Schedule } from '../schedule';
import { Airport } from '../airport';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search = new Search();

  errorInfo: string = undefined;

  scheduleList: Schedule[];

  airport: Airport = new Airport();

  constructor(private service: DataService) { }

  ngOnInit(): void {


  }

  searchFlight(): void {

    this.service.searchMethod(this.search).subscribe(

      data => { this.scheduleList = data, this.errorInfo = undefined },
      error => {

        this.errorInfo = JSON.stringify(error.error.text);
        this.scheduleList = undefined;
      }


    )

    console.log("search found");
  }

  delete(id: number) {

    this.service.delete(id).subscribe();
    this.service.viewAllSchedule().subscribe(data => this.scheduleList = data);



  }


  updateId(id: number) {


    this.service.IdToUpdate = id;

  }

}

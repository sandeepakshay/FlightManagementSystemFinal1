import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from './schedule';
import { Observable } from 'rxjs';
import { ScheduledFlight } from './scheduled-flight';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  IdToUpdate: number;

  successInfo: string;

  constructor(private http: HttpClient) { }


  getSuccessInfo(): string {

    return this.successInfo;
  }

  setSuccessInfo(msg: string) {

    this.successInfo = msg;
  }


  create(schedule: Schedule): Observable<any> {

    return this.http.post("http://localhost:1113/addSchedule", schedule, { responseType: "text" });
  }

  createScheduled(scheduledflight: ScheduledFlight): Observable<any> {

    return this.http.post("http://localhost:1113/addScheduled", scheduledflight, { responseType: "text" });
  }

  viewAirportCode(): Observable<any> {

    console.log("airports");
    return this.http.get("http://localhost:1113/viewAirportCode");

  }

  viewFlightNum(): Observable<any> {

    console.log("these are flights");
    return this.http.get("http://localhost:1113/viewFlightNum");

  }


  viewScheduleIds(): Observable<any> {

    console.log("these are schedule");
    return this.http.get("http://localhost:1113/viewScheduleIds");

  }

  viewAllSchedule(): Observable<any> {

    console.log("these are all scheduled flights ");
    return this.http.get("http://localhost:1113/viewAllSchedule");

  }
  delete(id: number): Observable<any> {

    console.log("deleted");
    let endpoint = id;
    return this.http.delete("http://localhost:1113/delete/" + endpoint);

  }

  update(id: number, schedule: Schedule): Observable<any> {

    let endpoint = id;
    return this.http.put("http://localhost:1113/update/" + id, schedule);
  }

  findById(id: number): Observable<any> {

    let endpoint = id
    return this.http.get("http://localhost:1113/viewById/" + endpoint);
  }

  searchMethod(search: Search): Observable<any> {

    console.log("search service");
    return this.http.post("http://localhost:1113/search", search);
  }


}

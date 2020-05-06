import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }


  login(username: string, password: string):Observable<any> {
    return this.http.post<any>("http://localhost:1113/login", { username: username, password: password })
        .pipe(map(users => {

            if (users!=null) {

                localStorage.setItem('currentUser', JSON.stringify(users));
            }

            return users;
        }));
}
}

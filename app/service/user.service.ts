import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { User } from "../model/user";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UserService {

  private serviceUrl: string = "http://spa.tglrw.com:4000/users";

  constructor(private http: Http) {}

  listUsers(): Observable<Array<User>> {
    return this.http.get(this.serviceUrl)
               .map(r => r.json() as Array<User>)
               .catch(e => Observable.throw(e));
  }
}

import { Injectable } from "@angular/core";
import { Headers, Http, Jsonp } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Widget } from "../model/widget";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WidgetService {

    private header = new Headers({
        "content-type": "application/json"
    });
    private serviceUrl: string = "http://spa.tglrw.com:4000/widgets";

    constructor(private http: Http, private jsonp: Jsonp) { }

    listWidgets(): Observable<Array<Widget>> {
        return this.http.get(this.serviceUrl)
            .map(r => r.json() as Array<Widget>);
    }

    save(widget: Widget): Observable<Widget> {
        return this.http
            .post(this.serviceUrl, JSON.stringify(widget), { headers: this.header })
            .map(r => r.json());
    }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";

@Injectable()
export class EmployeeService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url
    }

    pruebas() {
        return '3';
    }

    getEmployees(): Observable<any> {
        let headers = new HttpHeaders()
        /*.set('Content-Type', 'application/x-www-form-urlencoded')*/
        /*.set('Authorization', token)*/
        ;
        return this._http.get(this.url + 'employees', { headers: headers });
    }

    deleteEmployee(id: number): Observable<any> {
        let headers = new HttpHeaders();
        return this._http.delete(this.url + 'employees/' + id, { headers: headers });
    }

}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
const SERVICE_API = environment.SERVICE_API
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(SERVICE_API,httpOptions);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${SERVICE_API}/${id}`,httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(SERVICE_API, data,httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${SERVICE_API}/${id}`, data,httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${SERVICE_API}/${id}`,httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(SERVICE_API,httpOptions);
  }

  findByName(Name: any): Observable<any[]> {
    return this.http.get<any[]>(`${SERVICE_API}?Name=${Name}`,httpOptions);
  }
}

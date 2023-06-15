import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
const FICHE_API = environment.FICHE_API
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(FICHE_API,httpOptions);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${FICHE_API}/${id}`,httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(FICHE_API, data,httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${FICHE_API}/${id}`, data,httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${FICHE_API}/${id}`,httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(FICHE_API,httpOptions);
  }

  findByName(Name: any): Observable<any[]> {
    return this.http.get<any[]>(`${FICHE_API}?Name=${Name}`,httpOptions);
  }
}

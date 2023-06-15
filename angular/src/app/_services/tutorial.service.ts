import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const HOSPITAL_URL = environment.HOSPITAL_API

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(HOSPITAL_URL,httpOptions);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${HOSPITAL_URL}/${id}`,httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(HOSPITAL_URL, data,httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(HOSPITAL_URL+'/'+id, data,httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${HOSPITAL_URL}/${id}`,httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(HOSPITAL_URL,httpOptions);
  }

  findByUserId(userId: any): Observable<any[]> {
    return this.http.get<any[]>(`${HOSPITAL_URL}?userId=${userId}`,httpOptions);
  }
}

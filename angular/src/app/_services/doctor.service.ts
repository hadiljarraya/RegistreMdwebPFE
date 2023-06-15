import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const DOCTOR_API = environment.DOCTOR_API
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(DOCTOR_API,httpOptions);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${DOCTOR_API}/${id}`,httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(DOCTOR_API, data,httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${DOCTOR_API}/${id}`, data,httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${DOCTOR_API}/${id}`,httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(DOCTOR_API,httpOptions);
  }

  findByUserId(userId: any): Observable<any[]> {
    return this.http.get<any[]>(`${DOCTOR_API}?userId=${userId}`,httpOptions);
  }
}

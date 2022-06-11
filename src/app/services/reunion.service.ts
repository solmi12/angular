import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reunion } from '../models/reunion.model';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:4000/api/reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  test = "How r u?";
  constructor(private http: HttpClient) { }
  sendEmail(url, data) {
    return this.http.post(url, data);
  }
  getAll(): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(baseUrl);
  }
  get(id: any): Observable<Reunion> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(rName: any): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(`${baseUrl}?title=${rName}`);

}
}

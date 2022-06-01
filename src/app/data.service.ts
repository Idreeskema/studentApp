import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  snapshot: any;

  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:8000/Lists';

  getlist(token: any) {
    let httpHeaders = new HttpHeaders();
    return this.http
      .get(this.url, {
        headers: httpHeaders.set('token', token),
      })
      .pipe(delay(3000));
  }
  addData(data: any): Observable<any> {
    console.log('check Data');
    return this.http.post(this.url, data);
    console.log('request add');
  }
  updateStudent(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  getdata(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  Loginprocess(data: any): Observable<any> {
    console.log('i m server');

    return this.http.post('http://localhost:8000/auth/login', data);
  }

  isLoggedin() {
    return localStorage.getItem('Access Token') != null;
  }
  Gettoken() {
    return localStorage.getItem('Access Token') || '';
  }
  logout() {
    localStorage.removeItem('Access Token');
    window.location.reload();
    this.router.navigate(['/', 'login']);
  }
}

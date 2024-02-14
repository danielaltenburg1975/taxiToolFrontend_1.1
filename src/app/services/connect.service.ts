import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  role: string;
  name: string
}


@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  private baseUrl = 'http://localhost:8080'; // set the basic
  private username: string = '';
  private password: string = '';

  constructor(private http: HttpClient) {}

  setCredentials(username: string, password: string): void {
    this.username = username;
    this.password = password;

  }

  getConnect(endpoint: string): Observable<LoginResponse> {
    // Erstelle die HTTP-Header mit den Anmeldedaten
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    // Füge die Header zur Anfrage hinzu
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<LoginResponse>(url, { headers });
  }
}

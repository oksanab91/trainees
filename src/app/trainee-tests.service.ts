import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TraineeTestsService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:44306/api/traineeTests/';


  constructor(private http: HttpClient) {
    console.log('In service');
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all trainees' tets data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    // Add trainee
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    // Remove trainee
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    // Update trainee
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }
}

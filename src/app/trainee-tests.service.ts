import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TraineeTest, TraineeTestSearch } from './models/trainee-test-search';
import { Observable, of } from 'rxjs';


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

  public get(): Observable<TraineeTestSearch> {
    // Get all trainees' tets data
    // return this.http.get(this.accessPointUrl, {headers: this.headers});
    let data: TraineeTest[] = records;
    let search: TraineeTestSearch = new TraineeTestSearch(data, data.length);

    return of(search);
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

const records = [
  { traineeName: 'Tom B', testName: 'TestTerm1', subjectName:	'Geography' },
  { traineeName: 'Tom B', testName: 'TestTerm1', subjectName:	'History' },
  { traineeName: 'Tom B', testName: 'TestTerm2', subjectName:	'Math' },
  { traineeName: 'Balu M', testName: 'TestTerm1', subjectName:	'Geography' },
  { traineeName: 'Balu M', testName: 'TestTerm1', subjectName:	'History' },
  { traineeName: 'Balu M', testName: 'TestTerm2', subjectName:	'Math' },
  { traineeName: 'Balu M', testName: 'TestFinal', subjectName:	'Math' },
  { traineeName: 'Balu M', testName: 'TestFinal', subjectName:	'Geography' },
  { traineeName: 'Balu M', testName: 'TestFinal', subjectName:	'History' },
  { traineeName: 'Rita F', testName: 'TestTerm1', subjectName:	'Geography' },
  { traineeName: 'Rita F', testName: 'TestTerm1', subjectName:	'History' },
  { traineeName: 'Rita F', testName: 'TestTerm2', subjectName:	'Math' },
  { traineeName: 'Rita F', testName: 'TestFinal', subjectName:	'Math' },
  { traineeName: 'Rita F', testName: 'TestFinal', subjectName:	'Geography' },
  { traineeName: 'Rita F', testName: 'TestFinal', subjectName:	'History' }
]

// data: TraineeTest; 
// {
//   traineeName: string;
//   testName: string;
//   subjectName: string
// }

// search: TraineeTestSearch;
// {
//   data: Array<TraineeTest>;
//   recordsTotal: number;
// }

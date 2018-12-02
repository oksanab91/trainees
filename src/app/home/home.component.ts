import { Component, OnInit } from '@angular/core';
import { TraineeTestSearch, TraineeTest } from '../models/trainee-test-search';
import { TraineeTestsService } from '../trainee-tests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public joggingData: Array<any>;
  // public currentJogging: any;
  public traineeTestSearch: TraineeTestSearch;
  // public traineeTestList: TraineeTest[] = [];
  // public currentTraineeTest: TraineeTest;

  constructor(private traineeTestService: TraineeTestsService) { 
    this.traineeTestService.get()
      .subscribe((retData: any) => {
        console.log(retData);
        this.traineeTestSearch = retData});
  }

  ngOnInit() {
  }

}

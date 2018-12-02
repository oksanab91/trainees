import { Component, OnInit, Input } from '@angular/core';
import { TraineeTestSearch, TraineeTest } from '../models/trainee-test-search';

@Component({
  selector: 'app-trainee-tests',
  templateUrl: './trainee-tests.component.html',
  styleUrls: ['./trainee-tests.component.scss']
})
export class TraineeTestsComponent implements OnInit {
  @Input() searchData: TraineeTestSearch;
  public currentTrainee: TraineeTest;

  // searchData: TraineeTestSearch;
  traineeTestList: Array<TraineeTest> = [];

  constructor() { 
   }

  ngOnInit() {
    this.traineeTestList = this.searchData.data;
  }

  onSelect(record) {
    this.currentTrainee = record;
    console.log(this.currentTrainee);
  }
}

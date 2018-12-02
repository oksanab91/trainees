export class TraineeTest {
    traineeName: string;
    testName: string;
    subjectName: string
}

export class TraineeTestSearch {
    data: Array<TraineeTest>;
    recordsTotal: number;

    constructor (data: TraineeTest[], recTotal: number){
        this.data = data;
        this.recordsTotal = recTotal;
    }
}

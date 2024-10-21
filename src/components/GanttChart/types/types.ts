 export type Task = {
    id: number;
    name: string;

    estimateStartDate: Date;
    estimateEndDate: Date;
    actualStartDate: Date;
    actualEndDate: Date;

    estimateHours: number;
    actualHours: number;
  }
  
import { Task } from "./types";

export const tasks: Task[] = [
  { id: 1, 
    name: 'Task 1', 
    estimateHours: 51.961, 
    actualHours: 83.527, 
    estimateStartDate: new Date('2024-01-01'), 
    estimateEndDate: new Date('2024-01-10'), 
    actualStartDate: new Date('2024-01-02'), 
    actualEndDate: new Date('2024-01-12'),
    children: [ {
      id: 1.1,
       name: 'Subtask 1.1', 
       estimateHours: 45.407, 
       actualHours: 30.208, 
       estimateStartDate: new Date('2024-01-05'), 
       estimateEndDate: new Date('2024-01-15'), 
       actualStartDate: new Date('2024-01-06'), 
       actualEndDate: new Date('2024-01-16'),
       children: [
        {
          id: 1.1,
       name: 'Subtask 1.1.1', 
       estimateHours: 45.407, 
       actualHours: 30.208, 
       estimateStartDate: new Date('2024-01-05'), 
       estimateEndDate: new Date('2024-01-15'), 
       actualStartDate: new Date('2024-01-06'), 
       actualEndDate: new Date('2024-01-16')
        },
       ]
      },
    ]
  },
 
  { id: 2, name: 'Task 2', estimateHours: 48.515, actualHours: 44.150, estimateStartDate: new Date('2024-01-03'), estimateEndDate: new Date('2024-01-13'), actualStartDate: new Date('2024-01-04'), actualEndDate: new Date('2024-01-14') },
  { id: 3, name: 'Task 3', estimateHours: 3.288, actualHours: 6.581, estimateStartDate: new Date('2024-02-01'), estimateEndDate: new Date('2024-02-05'), actualStartDate: new Date('2024-02-02'), actualEndDate: new Date('2024-02-06') },
    // Добавьте остальные задачи сюда
  ];
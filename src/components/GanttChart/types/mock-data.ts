import { Task } from "./types";

export const tasks: Task[] = [
  { id: '1', 
    name: 'Task1', 
    estimateHours: 51.961, 
    actualHours: 83.527, 
    estimateStartDate: new Date('2022-01-01'), 
    estimateEndDate: new Date('2022-08-01'), 
    actualStartDate: new Date('2022-01-02'), 
    actualEndDate: new Date('2022-09-01'),
    children: [ {
      id: '1.1',
       name: 'Subtask 1.1', 
       estimateHours: 45.407, 
       actualHours: 30.208, 
       estimateStartDate: new Date('2022-01-05'), 
       estimateEndDate: new Date('2022-08-05'), 
       actualStartDate: new Date('2022-01-05'), 
       actualEndDate: new Date('2022-09-05'),
       children: [
        {
          id: '1.1.1',
       name: 'Subtask 1.1.1', 
       estimateHours: 45.407, 
       actualHours: 30.208, 
       estimateStartDate: new Date('2022-02-05'), 
       estimateEndDate: new Date('2022-03-05'), 
       actualStartDate: new Date('2022-02-05'), 
       actualEndDate: new Date('2022-08-05')
        },
       ]
      },
    ]
  },
 
  { id: '2', name: 'Task 2', estimateHours: 48.515, actualHours: 44.150, estimateStartDate: new Date('2023-01-01'), estimateEndDate: new Date('2024-06-01'), actualStartDate: new Date('2024-02-04'), actualEndDate: new Date('2024-06-14')},
  { id: '3', name: 'Task 3', estimateHours: 3.288, actualHours: 6.581, estimateStartDate: new Date('2023-03-01'), estimateEndDate: new Date('2024-05-05'), actualStartDate: new Date('2024-03-02'), actualEndDate: new Date('2024-06-06')},
    
  ];
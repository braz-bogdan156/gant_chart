import { Task } from "./types";
import { calculateHours } from '../functions/calculateHours'

export const tasks: Task[] = [
  {
    id: '1',
    name: 'Task1',
    get estimateHours() {
      return (calculateHours(this.estimateStartDate, this.estimateEndDate))
    },
    get actualHours() {
      return (calculateHours(this.actualStartDate, this.actualEndDate))
    },
    estimateStartDate: new Date('2022-01-10'),
    estimateEndDate: new Date('2022-08-01'),
    actualStartDate: new Date('2022-01-02'),
    actualEndDate: new Date('2022-09-01'),
    children: [{
      id: '1.1',
      name: 'Subtask 1.1',
      get estimateHours() {
        return (calculateHours(this.estimateStartDate, this.estimateEndDate))
      },
      get actualHours() {
        return (calculateHours(this.actualStartDate, this.actualEndDate))
      },
      estimateStartDate: new Date('2022-01-05'),
      estimateEndDate: new Date('2022-08-05'),
      actualStartDate: new Date('2022-01-05'),
      actualEndDate: new Date('2022-09-05'),
      children: [
        {
          id: '1.1.1',
          name: 'Subtask 1.1.1',
          get estimateHours() {
            return (calculateHours(this.estimateStartDate, this.estimateEndDate))
          },
          get actualHours() {
            return (calculateHours(this.actualStartDate, this.actualEndDate))
          },
          estimateStartDate: new Date('2022-02-05'),
          estimateEndDate: new Date('2022-03-05'),
          actualStartDate: new Date('2022-02-05'),
          actualEndDate: new Date('2022-08-05')
        },
      ]
    },
    ]
  },

  {
    id: '2',
    name: 'Task 2',
    get estimateHours() {
      return (calculateHours(this.estimateStartDate, this.estimateEndDate))
    },
    get actualHours() {
      return (calculateHours(this.actualStartDate, this.actualEndDate))
    },
    estimateStartDate: new Date('2023-04-15'),
    estimateEndDate: new Date('2024-06-20'),
    actualStartDate: new Date('2023-05-10'),
    actualEndDate: new Date('2024-06-10')
  },
  {
    id: '3',
    name: 'Task 3',
    get estimateHours() {
      return (calculateHours(this.estimateStartDate, this.estimateEndDate))
    },
    get actualHours() {
      return (calculateHours(this.actualStartDate, this.actualEndDate))
    },
    estimateStartDate: new Date('2023-03-05'),
    estimateEndDate: new Date('2024-05-05'),
    actualStartDate: new Date('2024-03-02'),
    actualEndDate: new Date('2024-06-06')
  },
];

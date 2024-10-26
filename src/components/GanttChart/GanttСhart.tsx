import React, { useState, useEffect } from 'react';
import { Task } from './types/types';
import GantLeft from './components/GantLeft';
import './styles/GanttChart.css';
import GantRight from './components/GantRight';

type Props = {
    tasks: Task[];    
}

const GanttChart: React.FC<Props> = ({ tasks }) => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    useEffect(() => {
        const minDate = tasks.reduce((acc, task) => {
            const minTaskDate = task.estimateStartDate < task.actualStartDate ? task.estimateStartDate : task.actualStartDate;
            return minTaskDate < acc ? minTaskDate : acc;
        }, tasks[0].estimateStartDate);

        const maxDate = tasks.reduce((acc, task) => {
            const maxTaskDate = task.estimateEndDate > task.actualEndDate ? task.estimateEndDate : task.actualEndDate;
            return maxTaskDate > acc ? maxTaskDate : acc;
        }, tasks[0].estimateEndDate);

        setStartDate(new Date(minDate));
        setEndDate(new Date(maxDate));
    }, [tasks]);    

    return (
        <div className='gantt-chart'>
            <GantLeft startDate={startDate} endDate={endDate} tasks={tasks}/>
            <GantRight startDate={startDate} endDate={endDate} tasks={tasks}/>  
        </div>             
    );
};

export default GanttChart;
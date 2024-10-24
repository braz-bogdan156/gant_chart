import React, { useState, useEffect } from 'react';
import './styles/GanttChart.css'
import { Task } from './types/types';

import GantLine from './components/GantLine';

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

    const renderTask = (task: Task, startDate: Date, endDate: Date) => {
        if (!task.children) {
            return <GantLine key={task.id} task={task} startDate={startDate} endDate={endDate}></GantLine>
        }
    
        return (
            <GantLine key={task.id} task={task} hasChildren={true} startDate={startDate} endDate={endDate}>
                {task.children.map((task) => renderTask(task, startDate, endDate))}
            </GantLine>
        )
    }

    return (
        <div className="gantt-chart">
            {/* <GantHeader startDate={startDate} endDate={endDate}></GantHeader> */}
            {tasks.map(task => (
                <>
                    {tasks.map((task) => renderTask(task, startDate, endDate))}
                </>
            ))}
            
        </div>
    );
};

export default GanttChart;
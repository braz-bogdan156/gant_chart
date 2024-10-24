import React, { useState } from 'react';
import { Task } from '../types/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GanttGhartLeft from './GanttGhartLeft';
import GanttChartRight from './GanttChartRight';
import { tasks } from '../types/mock-data';
import GantBar from './GantBar';

type GantLineProps ={
    task: Task;
    hasChildren?: boolean ;
    children?: React.ReactNode;
    startDate: Date;
    endDate: Date;
}

const GantLine: React.FC<GantLineProps> = ({task, hasChildren, children}) =>{

    const [isExpanded, setisExpanded] = React.useState(false)
            return(
            <tr key={task.id} className="gantt-row" >
                
                <tr>
                    <tr>
                    <td onClick={()=>setisExpanded((prev) => !prev)}>{isExpanded ? <ChevronDown/> : <ChevronUp/>}</td>
                    <td >{task.id}</td>
                    </tr>
                
                    <td >{task.name}</td>
                    
                <td >{task.estimateHours}</td>
                <td >{task.actualHours}</td>
                </tr>
                <tr><GantBar task={task}></GantBar>
                </tr>
                {isExpanded && children}
              </tr>)
}

export default GantLine;
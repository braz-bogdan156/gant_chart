import React, { useState } from 'react';
import { Task } from '../types/types';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { tasks } from '../types/mock-data';
import GantBar from './GantBar';
import GantHeaderLeft from './GantHeaderLeft';
import { table } from 'console';

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
                
                <td>
                    <td>
                    <td onClick={()=>setisExpanded((prev) => !prev)}>{isExpanded ? <ChevronDown/> : <ChevronUp/>}</td>
                    <td >{task.id}</td>
                    </td>
                
                    <td >{task.name}</td>
                    
                <td >{task.estimateHours}</td>
                <td >{task.actualHours}</td>
                </td>
                <td><GantBar task={task}></GantBar>
                </td>
                {isExpanded && children}
              </tr>
             
              )
}

export default GantLine;
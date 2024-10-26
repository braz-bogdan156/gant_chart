import React, { useState } from 'react';
import { Task } from '../types/types';
import { ChevronDown, ChevronUp } from 'lucide-react';



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
        <>
            <tr key={task.id} className="gantt-row">         
                <td>{task.id}</td>
                <td onClick={()=>setisExpanded((prev) => !prev)}>{isExpanded ? <ChevronDown/> : <ChevronUp/>}{task.name}</td>                    
                <td >{task.estimateHours}</td>
                <td>{task.actualHours}</td>           
            </tr>
            {isExpanded && children}
        </>             
    )
}

export default GantLine;
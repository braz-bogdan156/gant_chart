import React, { useState } from 'react';
import { Task } from '../types/types';
import { ChevronDown, ChevronUp } from 'lucide-react';



type GantLineProps ={
    task: Task;
    hasChildren?: boolean ;
    children?: React.ReactNode;
    startDate: Date;
    endDate: Date;
    state:number;
}

const GantLine: React.FC<GantLineProps> = ({task, hasChildren, children,state}) =>{
    const [isExpanded, setisExpanded] = React.useState(false);
    return(  
        <>
            <tr key={task.id} className="gantt-row">         
                <td>{task.id}</td>                            
                {state===2
                    ?<td   onClick={()=>setisExpanded((prev) => !prev)}>{isExpanded ? <ChevronUp/> : <ChevronDown/>}{task.name}</td>
                    :<td style={{paddingLeft:'30px'}}>{task.name}</td> 
                }                                              
                <td >{task.estimateHours}</td>
                <td>{task.actualHours}</td>           
            </tr>
            {isExpanded && children}
        </>             
    )
}

export default GantLine;
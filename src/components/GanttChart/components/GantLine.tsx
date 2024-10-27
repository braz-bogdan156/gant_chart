import React from 'react';
import { Task ,f1} from '../types/types';
import { ChevronDown, ChevronUp } from 'lucide-react';



type GantLineProps ={
    task: Task;
    isExpanded: boolean ;
    children?: React.ReactNode;
    startDate: Date;
    endDate: Date;
    state:number;
    onClickButton:f1
}

const GantLine: React.FC<GantLineProps> = ({task,children,state,isExpanded,onClickButton}) =>{    
    return(  
        <>
            <tr key={task.id} className="gantt-row">         
                <td>{task.id}</td>                
                {state===2
                    ?<td onClick={()=>onClickButton()}>{isExpanded ? <ChevronUp/> : <ChevronDown/>}{task.name}</td>
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
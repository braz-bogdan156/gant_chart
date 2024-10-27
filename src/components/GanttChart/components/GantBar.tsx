import React, { useState } from 'react';
import { Task } from '../types/types';
import { format,eachMonthOfInterval } from "date-fns";
type GantBarProps ={
  task: Task;
  hasChildren?: boolean ;
  children?: React.ReactNode;
  startDate: Date;
  endDate: Date;  
}
const GantBar: React.FC<GantBarProps> = ({task, children,startDate, endDate}) =>{
  const [isExpanded, setisExpanded] = React.useState(false);
  
  const months = eachMonthOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`))-1, Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`))-1, Number(format(endDate ,`ddd`)))
  });
  const estimateMonths = eachMonthOfInterval({
    start: new Date(Number(format(task.estimateStartDate,`yyy`)), Number(format(task.estimateStartDate,`MM`))-1, Number(format(task.estimateStartDate,`ddd`))),
    end: new Date(Number(format(task.estimateEndDate ,`yyy`)), Number(format(task.estimateEndDate ,`MM`))-1, Number(format(task.estimateEndDate,`ddd`)))
  });

  const createColor=():string=>{
    var color:string ='white';    
    months.map((i)=>{      
      for(let j = 0; j < estimateMonths.length; j++)  {        
        if (format(i,`yyy-MM`)===format(estimateMonths[j],`yyy-MM`)){
          color=`#1f77b4`;          
          return color          
        }        
      }       
    })    
    return color 
  }


 
  return(   
    <>
      <tr key={task.id} className="gantt-row">
        {months.map((i,index)=><th 
        style={{background:createColor()}} 
        key={index}>{format(i,`yyy-MM`)}</th>)}                                 
      </tr>      
      {isExpanded && children}
    </>   
  )
}

export default GantBar;
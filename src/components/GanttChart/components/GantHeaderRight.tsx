import { format,eachYearOfInterval,eachQuarterOfInterval,eachMonthOfInterval } from "date-fns";

type GantHeaderRightProps = {
  startDate: Date;
  endDate: Date;
};

const GantHeaderRight: React.FC<GantHeaderRightProps> = ({ startDate, endDate }) => {
  const years = eachYearOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`)), Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`)), Number(format(endDate ,`ddd`)))
  })

  const quarters = eachQuarterOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`)), Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`))-1, Number(format(endDate ,`ddd`)))
  })
 
  const months = eachMonthOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`))-1, Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`))-1, Number(format(endDate ,`ddd`)))
  })
  
  return (    
    <>
      <tr className="gantt-header-right">
        {years.map((i,index)=><th   colSpan={12} key={index}>{format(i,`yyy`)}</th>)}       
      </tr>
      <tr className="gantt-header-right">        
        {quarters.map((i,index)=><th  colSpan={3} key={index}>{format(i,`qqq`)}</th>)}        
      </tr>
      <tr className="gantt-header-right">        
        {months.map((i,index)=><th  key={index}>{format(i,`MM`)}</th>)}        
      </tr>      
    </>   
  );
};

export default GantHeaderRight;




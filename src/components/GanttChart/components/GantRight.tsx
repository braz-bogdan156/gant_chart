import { Task } from "../types/types";
import GantBar from "./GantBar";
import GantHeaderRight from './GantHeaderRight/GantHeaderRight';

type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    
}
const GantRight: React.FC<Props> = ({tasks,startDate, endDate }) => { 
    
    
    return (       
        <table className='gantt-table' border={1}>
            <thead>                
                <GantHeaderRight startDate={startDate} endDate={endDate} />        
            </thead>
            <tbody> 
                {tasks.map((task) => <GantBar key={task.id} task={task} startDate={startDate} endDate={endDate}/>)}               
            </tbody>
        </table>
           
    );    
};

export default GantRight;

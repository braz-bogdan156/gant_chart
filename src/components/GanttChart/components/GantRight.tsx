import { Task } from "../types/types";
import GantBar from "./GantBar";
import GantHeaderRight from './GantHeaderRight';

type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    
}
const GantRight: React.FC<Props> = ({tasks,startDate, endDate }) => { 
    const renderBar = (task: Task, startDate: Date, endDate: Date) => {
        if (!task.children) {
            return <GantBar key={task.id} task={task} startDate={startDate} endDate={endDate}></GantBar>
        }
    
        return (
            <GantBar key={task.id} task={task} hasChildren={true} startDate={startDate} endDate={endDate}>
                {task.children.map((task) => renderBar(task, startDate, endDate))}
            </GantBar>
        )
    }
    
    
    return (  
        <div className="gantt-table-container">   
        <table className='gantt-table' border={1}>
            <thead>                
                <GantHeaderRight startDate={startDate} endDate={endDate} />        
            </thead>
            <tbody> 
                {tasks.map((task) => renderBar(task, startDate, endDate))}               
            </tbody>
        </table>
        </div>  
    );    
};

export default GantRight;

import { Task } from "../types/types";
import GantBar from "./GantBar";
import GantHeaderRight from './GantHeaderRight';

type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    isExpanded:boolean
    
}
const GantRight: React.FC<Props> = ({tasks,startDate, endDate,isExpanded}) => { 
    const renderBar = (task: Task, startDate: Date, endDate: Date) => {
        if (!task.children) {
            return <GantBar key={task.id} task={task} startDate={startDate} endDate={endDate} isExpanded={isExpanded}></GantBar>
        }
    
        return (
            <GantBar key={task.id} task={task}  startDate={startDate}  isExpanded={isExpanded} endDate={endDate}>
                {task.children.map((task) => renderBar(task, startDate, endDate))}
            </GantBar>
        )
    }
    
    
    return ( 
        <div className='wrapp-table-right' >
            <table className='gantt-table-right' border={1}>
            <thead>                
                <GantHeaderRight startDate={startDate} endDate={endDate} />        
            </thead>
            <tbody className="gantt-table-right-body"> 
                {tasks.map((task) => renderBar(task, startDate, endDate))}               
            </tbody>
        </table>
        </div>         
    );    
};

export default GantRight;

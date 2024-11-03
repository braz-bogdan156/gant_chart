import { Task,f1 } from "../types/types";
import GantHeaderLeft from './GantHeaderLeft';
import GantLine from './GantLine';
type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    isExpanded:boolean;
    onClickButton:f1
    
}
const GantLeft: React.FC<Props> = ({tasks,startDate, endDate ,isExpanded,onClickButton}) => { 
    
    const renderTask = (task: Task, startDate: Date, endDate: Date) => {

        if (!task.children) {
            return <GantLine key={task.id} task={task} startDate={startDate} endDate={endDate} state={1} isExpanded={isExpanded} onClickButton={onClickButton}></GantLine>
        }
    
        return (
            <GantLine key={task.id} task={task} isExpanded={isExpanded}  onClickButton={onClickButton} startDate={startDate} endDate={endDate} state={2}>
                {task.children.map((task) => renderTask(task, startDate, endDate))}
            </GantLine>
        )
    }
    return (           
        <div className='wrapp-table-right' >
            <table className='gantt-table' border={1}>
                <thead>                
                    <GantHeaderLeft startDate={startDate} endDate={endDate}/>               
                </thead>
                <tbody>                
                    {tasks.map((task) => renderTask(task, startDate, endDate))}
                </tbody>
            </table>   
        </div> 
             
    );    
};

export default GantLeft;
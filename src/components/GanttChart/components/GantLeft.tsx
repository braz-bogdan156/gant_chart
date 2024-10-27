import { Task } from "../types/types";
import GantHeaderLeft from './GantHeaderLeft';
import GantLine from './GantLine';
type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    
}
const GantLeft: React.FC<Props> = ({tasks,startDate, endDate }) => { 
    
    const renderTask = (task: Task, startDate: Date, endDate: Date) => {

        if (!task.children) {
            return <GantLine key={task.id} task={task} startDate={startDate} endDate={endDate} state={1}></GantLine>
        }
    
        return (
            <GantLine key={task.id} task={task} hasChildren={true} startDate={startDate} endDate={endDate} state={2}>
                {task.children.map((task) => renderTask(task, startDate, endDate))}
            </GantLine>
        )
    }
    return (       
        <table className='gantt-table' border={1}>
            <thead>                
                <GantHeaderLeft startDate={startDate} endDate={endDate}/>               
            </thead>
            <tbody>                
                {tasks.map((task) => renderTask(task, startDate, endDate))}
            </tbody>
        </table>
           
    );



    
};

export default GantLeft;
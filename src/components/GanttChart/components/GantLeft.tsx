import { Task } from "../types/types";
import GantHeaderLeft from './GantHeaderLeft';
import {GantRenderTask} from './GantRenderTask'
type Props = {
    tasks: Task[];
    startDate: Date;
    endDate: Date;
    
}
const GantLeft: React.FC<Props> = ({tasks,startDate, endDate }) => { 
    
    
    return (       
        <table className='gantt-table' border={1}>
            <thead>                
                <GantHeaderLeft startDate={startDate} endDate={endDate}/>               
            </thead>
            <tbody>                
                {tasks.map((task) => <GantRenderTask task={task} startDate={startDate} endDate={endDate}/>)}
            </tbody>
        </table>
           
    );



    
};

export default GantLeft;
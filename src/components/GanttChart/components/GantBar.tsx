import { Task } from '../types/types';

type GantBarProps ={
    task: Task;
}
const GantBar: React.FC<GantBarProps> = ({task}) =>{
    return(<div key={task.id} className="gantt-bar-container">
        <div
          className="gantt-bar estimate"
          style={{ width: `${task.estimateHours * 2}px` }} // Пример масштабирования длительности
        ></div>
        <div
          className="gantt-bar actual"
          style={{ width: `${task.actualHours * 2}px` }} // Пример масштабирования фактической длительности
        ></div>
      </div>)
}

export default GantBar;
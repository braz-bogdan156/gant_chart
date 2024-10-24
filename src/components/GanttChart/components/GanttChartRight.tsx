import React from "react";
import { Task } from '../types/types';
import GantHeaderRight from "./GantHeaderRight/GantHeaderRight";
import GantBar from "./GantBar";

type GanttChartRightProps = {
  tasks: Task[];
  startDate: Date;
  endDate: Date;
};

// const GanttChartRight: React.FC<GanttChartRightProps> = ({ tasks }) => {
//   return (
//     <div className="gantt-right-container"> {/* Додано контейнер для горизонтального скролу */}
//       <div className="gantt-right">
//         <GantHeaderRight ></GantHeaderRight>
//         {tasks.map(task => (
//           <GantBar task={task}></GantBar>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GanttChartRight;
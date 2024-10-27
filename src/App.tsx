import './App.css';
import GanttChart from './components/GanttChart/GanttСhart';
import { tasks } from './components/GanttChart/types/mock-data';

function App() { 
  return (
    <div className="App">
     <GanttChart tasks={tasks}></GanttChart>
    </div>
  );
}

export default App;

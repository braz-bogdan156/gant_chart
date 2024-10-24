import GantHeaderRightMonths from "./GantHeaderRightMonths";
import GantHeaderRightQvartals from "./GantHeaderRightQvartals";
import GantHeaderRightYears from "./GantHeaderRightYears";



export default function GantHeaderRight() {
  return (
    <table className="gantt-timeline-header" border={1}>

      <GantHeaderRightYears></GantHeaderRightYears>
      <GantHeaderRightQvartals></GantHeaderRightQvartals>
      <GantHeaderRightMonths></GantHeaderRightMonths>
    </table>
  )
}



import GantHeaderRightYears from './GantHeaderRightYears'
import GantHeaderRightQvartals from './GantHeaderRightQvartals'
import GantHeaderRightMonths from './GantHeaderRightMonths'

export default function GantHeaderRight() {
  return (
    <div className="gantt-timeline-header">
          <GantHeaderRightYears></GantHeaderRightYears>
          <GantHeaderRightQvartals></GantHeaderRightQvartals>
          <GantHeaderRightMonths></GantHeaderRightMonths>
        </div>
  )
}


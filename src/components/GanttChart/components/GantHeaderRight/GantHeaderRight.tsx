import React from 'react';

import GantHeaderRightMonths from "./GantHeaderRightMonths";
import GantHeaderRightQvartals from "./GantHeaderRightQvartals";
import GantHeaderRightYears from "./GantHeaderRightYears";

type GantHeaderRightProps = {
  startDate: Date;
  endDate: Date;
};

const GantHeaderRight: React.FC<GantHeaderRightProps> = ({ startDate, endDate }) => {
  return (
    <table className="gantt-timeline-header" border={1}>

    <GantHeaderRightYears></GantHeaderRightYears>
    <GantHeaderRightQvartals></GantHeaderRightQvartals>
    <GantHeaderRightMonths></GantHeaderRightMonths>
    </table>
  );
};

export default GantHeaderRight;




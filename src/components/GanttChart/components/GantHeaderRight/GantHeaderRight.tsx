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
    <>
      <GantHeaderRightYears></GantHeaderRightYears>
      <GantHeaderRightQvartals></GantHeaderRightQvartals>
      <GantHeaderRightMonths></GantHeaderRightMonths>
    </>   
  );
};

export default GantHeaderRight;




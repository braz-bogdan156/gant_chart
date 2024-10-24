import React from 'react';
import GantHeaderLeft from './GantHeaderLeft';
import GantHeaderRight from './GantHeaderRight/GantHeaderRight';

type GantHeaderProps = {
  startDate: Date;
  endDate: Date;
};

const GantHeader: React.FC<GantHeaderProps> = ({ startDate, endDate }) => {
  return (
    <div className='gant-header'>
      <GantHeaderLeft startDate={startDate} endDate={endDate} />
      <GantHeaderRight startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default GantHeader;
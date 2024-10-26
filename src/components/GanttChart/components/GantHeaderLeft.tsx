import React from 'react';

import { useTranslation } from "react-i18next";

type GantHeaderLeftProps = {
  startDate: Date;
  endDate: Date;
};

const GantHeaderLeft: React.FC<GantHeaderLeftProps> = ({ startDate, endDate }) => {
  const {t} = useTranslation();
  return (    
    <tr className="gantt-header">      
      <th>{t("ganttChart.headerId")}</th>
      <th>{t("ganttChart.headerName")}</th>
      <th>{t("ganttChart.headerEstimateDuration")}</th>
      <th>{t("ganttChart.headerActualDuration")}</th>    
    </tr>
  );
};

export default GantHeaderLeft;




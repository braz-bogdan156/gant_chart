
import { useTranslation } from "react-i18next";

export default function GantHeader() {
  const {t} = useTranslation();
  return (
    <tr className="gantt-header">
      
          <th className="gantt-header-id">{t("ganttChart.headerId")}</th>
          <th  >{t("ganttChart.headerName")}</th>
          <th >{t("ganttChart.headerEstimateDuration")}</th>
          <th >{t("ganttChart.headerActualDuration")}</th>
        
        </tr>
  )
}

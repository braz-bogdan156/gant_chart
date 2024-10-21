
import { useTranslation } from "react-i18next";

export default function GantHeader() {
  const {t} = useTranslation();
  return (
    <div className="gantt-header">
          <div>{t("ganttChart.headerId")}</div>
          <div>{t("ganttChart.headerName")}</div>
          <div>{t("ganttChart.headerEstimateDuration")}</div>
          <div>{t("ganttChart.headerActualDuration")}</div>
        </div>
  )
}



export const calculateHours = (startDate: Date, endDate: Date): number => {
  const millisecondsPerHour = 1000 * 60 * 60;
  return (endDate.getTime() - startDate.getTime()) / millisecondsPerHour;
};
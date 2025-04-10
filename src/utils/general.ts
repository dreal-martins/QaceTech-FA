export function truncateByChars(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export const getFormattedDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formatter.format(date);
};
export const getBusinessDate = (date: Date) => {
  let adjustedDate = new Date(date);
  const day = adjustedDate.getDay();

  if (day === 0) {
    adjustedDate.setDate(adjustedDate.getDate() + 1);
  } else if (day === 6) {
    adjustedDate.setDate(adjustedDate.getDate() + 2);
  }

  return adjustedDate;
};

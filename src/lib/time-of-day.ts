export type DayTime = "dawn" | "day" | "dusk" | "night";

export function getSaoPauloDayTime(date: Date = new Date()): DayTime {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      hour12: false,
    }).format(date)
  );

  if (hour >= 5 && hour < 8) return "dawn";
  if (hour >= 8 && hour < 17) return "day";
  if (hour >= 17 && hour < 19) return "dusk";
  return "night";
}

export function applyDayTime() {
  document.documentElement.setAttribute("data-daytime", getSaoPauloDayTime());
}

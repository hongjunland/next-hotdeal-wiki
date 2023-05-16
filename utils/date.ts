// function formatTime(date: Date) {
//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// }
function formatTime(date: string){
  return new Date(parseInt(date)).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
export const dateUtil={
  formatTime,
}

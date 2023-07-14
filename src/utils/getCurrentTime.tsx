export const getCurrentTime = (date: Date): string => {
  const formattedTime = date.toLocaleTimeString();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0'); // Get the minutes and pad with leading zero if necessary

let period = 'AM';
let displayHours = hours;

if (hours >= 12) {
  period = 'PM';
  displayHours = hours % 12 || 12;
}

  return `${displayHours}:${minutes} ${period}`;
};

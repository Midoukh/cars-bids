//this function calcularte the difference between the end of the bid and the current time

//how this timer works? you have a timer counting down how many times left till
//the end fo the auction
export const calTimeDiffInSec = (bidEndsIn: string): number => {
  const now = new Date();

  const endsInDate = new Date(bidEndsIn);
  console.log(endsInDate);
  console.log(now);

  const diff =
    Math.floor(endsInDate.getTime() / 1000) - Math.floor(now.getTime() / 1000);
  return diff;
};

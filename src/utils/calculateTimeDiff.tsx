//this function calcularte the difference between the end of the bid and the current time

//how this timer works? you have a timer counting down how many times left till
//the end fo the auction
export const calTimeDiffInSec = (bidEndsIn: string) : number => {
    if (bidEndsIn) {
        const now = new Date()
        const endsInDate = new Date(bidEndsIn)
        const diff = endsInDate.getTime() - now.getTime()
        return diff
    }
    else {
        return 0;
    }
}
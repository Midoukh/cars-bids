export const getDayOfTheWeek = (date: Date): string => {
    const dayOfWeek = date.getDay();
    
    const daysOfWeek: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return daysOfWeek[dayOfWeek-1]
}
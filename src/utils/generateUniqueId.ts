export const generateUniqueId = (): string => {
  const timestamp: number = new Date().getTime();
  const random: number = Math.floor(Math.random() * Math.random() * 10000);
  const uniqueId = `${timestamp}${random}`;

  return uniqueId;
};

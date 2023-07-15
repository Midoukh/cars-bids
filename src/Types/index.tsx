export type CarType = {
  id: string;
  name: string;
  imgSrc: string;
  year: number;
  latestBid: number;
  currency: string;
  timeLeft: number;
  numberOfBids: number;
  address: string;
  fuel: string;
  city:string;
};

export type BidType = {
  valeur: string;
  par: string;
  date: Date;
}

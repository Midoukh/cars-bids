export const dinarToMillionCent = (dinar: number) : string => {
    
    // one million centimes is 10000 DA
    let inMillion : any = dinar/10000

    if (inMillion >= 1000) {

        inMillion /= 1000
        inMillion += ' Milliard Centims'
    }
    else inMillion += ' Million Centims'
    
    return inMillion
}
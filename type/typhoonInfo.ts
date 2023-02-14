

export type categoryNum = 1|2|3|4|5;
export type category = 'TD' | 'TS' | `CAT${categoryNum}` ;

export default interface typhooninfo {

    latitude:number,
    longitude:number,
    name:string,
    category: category,
    wind:number,

}
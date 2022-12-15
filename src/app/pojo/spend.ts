import { Category, defaultCategory } from "./category";

export interface Spend{
    id:number;
    purpose:string;
    date:string;
    money:number;
    forOthers:number;
    category:Category;
}

export const defaultSpend = {id:NaN,purpose:'',date:'',money:NaN,forOthers:NaN,category:defaultCategory} ;
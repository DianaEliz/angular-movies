import { Review } from "./review";

export class Movie {
    id!: string;
    name!: string;
    cover!: string;
    rating!: number;
    reviews: Review[] = [];
 }
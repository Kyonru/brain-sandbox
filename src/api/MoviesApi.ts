import { IResource } from "../@types";

let movies: object[] = []

export default class MoviesApi implements IResource {
    constructor() {
        // setup some dummy data
        movies.push({
            name: 'Pirates of the caribbean',
            rating: 8.5
        })
        movies.push({
            name: 'Star Wars: A new hope',
            rating: 8.7
        })
    }

    create(data: any): any {
        movies.push(data)
        return data
    }

    findMany(): any[] {
        return movies;
    }
}

import { FilmModel } from '../models/film'

export interface AddFilmModel {
    title: string,
    original_title: string,
    description: string,
    release_date: string,
    rt_score: string,
    director: string
}

export interface AddFilm {
    add (film: AddFilmModel): Promise <FilmModel>
}
import { AddFilmModel, FilmModel } from '../../../../domain'

export interface AddFilmRepository {
    add (filmData: AddFilmModel): Promise <FilmModel>
}
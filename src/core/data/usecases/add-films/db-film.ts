import { AddFilm, FilmModel, AddFilmRepository, AddFilmModel } from './db-film-protocols'

export class DbFilm implements AddFilm {

    constructor (
      private readonly addFilmsRepository: AddFilmRepository
    ){}
    
    async add (filmsData: AddFilmModel): Promise<FilmModel> {
      // const films = await this.addFilmsRepository.add(Object.assign({}, filmsData))
      console.log(filmsData)
      return new Promise((res, rej) => {
        rej(`fuck`)
      });
    }
  }
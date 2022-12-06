import { IMovie } from "../../src/ts/models/Movie";
import { IOmdbResponse } from "../../src/ts/models/IOmdbResponse";

export const movies: IMovie[] = [
  {
    Title: "Star Wars: Episode IV - A New Hope of poo",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    Year: "1977",
  },
  {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    imdbID: "tt0080684",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Year: "1980",
  },
  {
    Title: "Star Wars: Episode VI - Return of the Jedi",
    imdbID: "tt0086190",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Year: "1983",
  },
  {
    Title: "Star Wars: Episode VII - The Force Awakens",
    imdbID: "tt2488496",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Year: "2015",
  },
  {
    Title: "Star Wars: Episode I - The Phantom Menace",
    imdbID: "tt0120915",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Year: "1999",
  },
  {
    Title: "Star Wars: Episode III - Revenge of the Sith",
    imdbID: "tt0121766",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    Year: "2005",
  },
  {
    Title: "Star Wars: Episode II - Attack of the Clones",
    imdbID: "tt0121765",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    Year: "2002",
  },
  {
    Title: "Rogue One: A Star Wars Story",
    imdbID: "tt3748528",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    Year: "2016",
  },
  {
    Title: "Star Wars: Episode VIII - The Last Jedi",
    imdbID: "tt2527336",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    Year: "2017",
  },
  {
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    imdbID: "tt2527338",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    Year: "2019",
  },
];

export const response: IOmdbResponse = { Search: movies };

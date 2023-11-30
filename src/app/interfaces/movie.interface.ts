export interface Movie {
  title: string,
  imageName: string,
  description: string,
  rating: number,
  duration: string,
  genre: string,
  releaseDate: string,
  releaseDateEpoch?: number,
  trailerLink: string,
  isWishlist?: boolean
}


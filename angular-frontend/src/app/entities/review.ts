export interface Review {
  id: string,
  movieID: string,
  userID: string,
  title: string,
  description: string,
  rating: number,
  updatedAt: Date
}

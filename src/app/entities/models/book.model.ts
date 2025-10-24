// Book model interfaces
export interface IBook {
  id: number
  title: string
  author: string
  publishedYear: number
  description?: string
  createdAt: string
  updatedAt: string
}

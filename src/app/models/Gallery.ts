export interface Gallery {
  id: number,
  order: number,
  featured: boolean,
  title: string,
  tags: Array<string>,
  image?: string,
  category?: string,
  icon?: string,
  route?: string,
  url?: string
}
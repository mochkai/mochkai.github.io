export interface Gallery {
  order: number,
  image?: string,
  title: string,
  tags: Array<string>,
  category: string,
  url: string,
  icon?: string
}
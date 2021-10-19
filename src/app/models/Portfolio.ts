export interface Portfolio {
  id: number,
  order: number,
  featured: boolean,
  title: string,
  tags: Array<string>,
  image?: string,
  category?: string,
  url?: string,
  route: string,
  icon?: string,
  description?: string,
  replit?: string,
  video?: string,
  liveDemo?: string
}
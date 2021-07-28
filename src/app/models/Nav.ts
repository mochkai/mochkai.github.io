export interface Nav {
  order: number;
  route?: string;
  label: string;
  submenu?: Nav[];
}
import { homedir } from 'os';
import { Nav } from '../models/Nav';

export const MAIN_NAV: Nav[] = [
  {
    order: 0,
    route: 'home',
    label: 'Home'
  },
  {
    order: 1,
    route: 'about',
    label: 'About'
  },
  {
    order: 2,
    route: 'skills',
    label: 'Skills'
  },
  {
    order: 3,
    label: 'Portfolio',
    submenu: [
      {
        order: 0,
        route: 'work',
        label: 'Work'
      },
      {
        order: 1,
        route: 'open-source',
        label: 'Open Source Projects'
      },
      {
        order: 2,
        route: 'gaming',
        label: 'Gaming Projects'
      }
    ]
  },
  {
    order: 4,
    route: 'contact',
    label: 'Contact'
  }
];
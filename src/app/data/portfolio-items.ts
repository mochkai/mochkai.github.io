import { Portfolio } from "../models/Portfolio";

export const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 0,
    order: 0,
    //image?: string,
    title: 'mochkai.github.io',
    tags: ['Angular', 'HTML5', 'CSS3', 'Javascript', 'Sass', 'NodeJs', 'WiP'],
    category: 'project',
    route: '/portfolio/0',
    url: 'https://github.com/mochkai/mochkai.github.io',
    featured: true
  },
  {
    id: 1,
    order: 1,
    //image?: string,
    title: 'Number Conversion',
    tags: ['C#', 'NuGet Package'],
    category: 'library',
    route: '/portfolio/1',
    url: 'https://github.com/mochkai/Number-Conversion',
    featured: false,
    replit: "Roman-Numbers-Demo",
    description: "This is a C# library created for converting regular numbers into their roman counterparts.<br>\
    Feel free to edit the code above to test the demo you can try and break it as much as you'd like!!<br>\
    You can initiate the Class by calling <code>new RomanNumber()</code> constructor."
  },
  {
    id: 2,
    order: 2,
    //image?: string,
    title: 'Photo Canvas',
    tags: ['Javascript', 'jQuery', 'HTML5', 'CSS3', 'WiP'],
    category: 'project',
    route: '/portfolio/2',
    url: 'https://github.com/mochkai/photo-canvas',
    featured: true
  }
];
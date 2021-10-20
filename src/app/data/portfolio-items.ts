import { Portfolio } from "../models/Portfolio";

export const PORTFOLIO_ITEMS: Portfolio[] = [
  {
    id: 0,
    order: 0,
    //image?: string,
    title: 'mochkai.github.io',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur tellus nec libero luctus, eu porttitor odio placerat. In eu mattis dolor. Phasellus ut commodo tellus. Nulla facilisi. Vivamus malesuada dui et diam faucibus, vitae maximus mauris pretium. Integer sagittis metus nunc, quis interdum odio tincidunt vitae. Sed nec orci nec turpis blandit lacinia. Curabitur vulputate maximus scelerisque. Phasellus vel imperdiet elit. <br><br>\
    Proin tristique dui sed mauris tristique, hendrerit aliquam massa laoreet. Suspendisse potenti. Ut ac lectus ornare, euismod magna eget, pretium leo. Aenean eget felis et nunc dapibus pellentesque nec ut eros. Mauris tempus ornare tortor quis congue. Quisque non iaculis augue. Fusce quis lectus ut nisi luctus feugiat. Maecenas in facilisis orci. Nunc elementum dolor nec turpis tempus, sed ullamcorper turpis volutpat. Proin eu imperdiet lacus, et fermentum erat. Fusce ac mi ut erat consectetur bibendum. Nullam a mi rutrum mauris pretium vehicula at finibus elit.",
    tags: ['Angular', 'HTML5', 'CSS3', 'Javascript', 'Sass', 'NodeJs', 'WiP'],
    category: 'web',
    route: '/portfolio/0',
    url: 'https://github.com/mochkai/mochkai.github.io',
    featured: true
  },
  {
    id: 1,
    order: 1,
    //image?: string,
    title: 'Number Conversion',
    description: "This is a C# library created for converting regular numbers into their roman counterparts.<br>\
    Feel free to edit the code above to test the demo you can try and break it as much as you'd like!!<br>\
    You can initiate the Class by calling <code>new RomanNumber()</code> constructor. <br><br>\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur tellus nec libero luctus, eu porttitor odio placerat. In eu mattis dolor. Phasellus ut commodo tellus. Nulla facilisi. Vivamus malesuada dui et diam faucibus, vitae maximus mauris pretium. Integer sagittis metus nunc, quis interdum odio tincidunt vitae. Sed nec orci nec turpis blandit lacinia. Curabitur vulputate maximus scelerisque. Phasellus vel imperdiet elit.",
    tags: ['C#', 'NuGet Package'],
    category: 'library',
    route: '/portfolio/1',
    url: 'https://github.com/mochkai/Number-Conversion',
    featured: false,
    replit: "Roman-Numbers-Demo"
  },
  {
    id: 2,
    order: 2,
    //image?: string,
    title: 'Photo Canvas',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur tellus nec libero luctus, eu porttitor odio placerat. In eu mattis dolor. Phasellus ut commodo tellus. Nulla facilisi. Vivamus malesuada dui et diam faucibus, vitae maximus mauris pretium. Integer sagittis metus nunc, quis interdum odio tincidunt vitae. Sed nec orci nec turpis blandit lacinia. Curabitur vulputate maximus scelerisque. Phasellus vel imperdiet elit.\
    <br><br>\
    Proin tristique dui sed mauris tristique, hendrerit aliquam massa laoreet. Suspendisse potenti. Ut ac lectus ornare, euismod magna eget, pretium leo. Aenean eget felis et nunc dapibus pellentesque nec ut eros. Mauris tempus ornare tortor quis congue. Quisque non iaculis augue. Fusce quis lectus ut nisi luctus feugiat. Maecenas in facilisis orci. Nunc elementum dolor nec turpis tempus, sed ullamcorper turpis volutpat. Proin eu imperdiet lacus, et fermentum erat. Fusce ac mi ut erat consectetur bibendum. Nullam a mi rutrum mauris pretium vehicula at finibus elit.",
    tags: ['Javascript', 'jQuery', 'HTML5', 'CSS3', 'WiP'],
    category: 'web',
    route: '/portfolio/2',
    url: 'https://github.com/mochkai/photo-canvas',
    featured: true
  }
];
import { Gallery } from "../models/Galley";

export const PORTFOLIO_ITEMS: Gallery[] = [
    {
        order: 0,
        //image?: string,
        title: 'mochkai.github.io',
        tags: ['Angular','HTML5','CSS3','Javascript','Sass','NodeJs','WiP'],
        category: 'project',
        url: 'https://github.com/mochkai/mochkai.github.io'
    },
    {
        order: 1,
        //image?: string,
        title: 'Number Conversion',
        tags: ['C#','NuGet Package'],
        category: 'library',
        url: 'https://github.com/mochkai/Number-Conversion'
    },
    {
        order: 2,
        //image?: string,
        title: 'Photo Canvas',
        tags: ['Javascript','jQuery','HTML5','CSS3','WiP'],
        category: 'project',
        url: 'https://github.com/mochkai/photo-canvas'
    }
];
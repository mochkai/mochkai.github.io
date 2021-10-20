# Mochkai.Github.Io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.
It uses the framework for deploying Mochkai's personal portfolio.
If you want to see the full process and the live coding session check out mochkai's [Twitch](https://www.twitch.tv/mochkai) and [Youtube](https://youtube.com/channel/UCdNQsPmDe_R59iMgIJfmCKQ)

## Run a local development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment on github pages

1. First execute the Build Command
```
ng build --prod
```
This will create the files in the `dist` folder.

2. Then commit to the git repository
```
git commit -a -m "Build for production"
```

3. Push the dist folder into the subtree for the gh-pages branch
```
git subtree push --prefix dist origin gh-pages
```

### One Line Command
```
ng build --prod;git commit -a -m "Build for production";git subtree push --prefix dist origin gh-pages
```

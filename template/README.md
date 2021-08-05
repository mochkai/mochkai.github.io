# mochkai.github.io
My personal portfolio page

## Prepare the environment

This project depends on node and angular.
To install node follow the instructions on the main node js website: 
https://nodejs.org/en/download/

After installation run the following command to install angular globally:
```
npm install -g angular
```

## How to install and run
Navigate to the repository folder using a terminal window and execute the following steps.

### Step 1
Run node install commands
```
npm install
```
### Step 2
Run the angular server
```
ng serve
```
### Step 3
Open a browser and navigate http://localhost:4200

---

## Build code for deployment

### Step 1
Run angular build command
```
ng build
```

---

## Deploying a subfolder to GitHub Pages

Sometimes you want to have a subdirectory on the `master` branch be the root directory of a repository’s `gh-pages` branch. This is useful for things like sites developed with [Yeoman](http://yeoman.io), or if you have a Jekyll site contained in the `master` branch alongside the rest of your code.

For the sake of this example, let’s pretend the subfolder containing your site is named `dist`.

### Step 1

Remove the `dist` directory from the project’s `.gitignore` file (it’s ignored by default by Yeoman).

### Step 2

Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist && git commit -m "Initial dist subtree commit"
```

### Step 3

Use subtree push to send it to the `gh-pages` branch on GitHub.

```sh
git subtree push --prefix dist origin gh-pages
```

Boom. If your folder isn’t called `dist`, then you’ll need to change that in each of the commands above.
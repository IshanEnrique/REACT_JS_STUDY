# Deploy your create react app on github for free

You can deploy your react app on github for abosolutly free.

## Deployment on Github

> 1. Download and install Git desktop on your pc.

```sh

>  https://git-scm.com/downloads

```

> 2. Download and install Github desktop on your pc.

```sh

>  https://desktop.github.com/

```


> 3. Go to Create React App Dev

```sh

>  https://create-react-app.dev/docs/deployment/

```

> 4. Add homepage to package.json
The step below is important!

If you skip it, your app will not deploy correctly.

Open your package.json and add a homepage field for your project:


```sh

>    "homepage": "https://myusername.github.io/my-app",

```

> 5. Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://myusername.github.io/my-app, run:


```sh

>    npm install --save gh-pages

```

> 6. Add the following scripts in your package.json:

To publish it at https://myusername.github.io/my-app, run:


```sh

>      "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

```

> 7. Deploy the site by running npm run deploy

Then run:


```sh

>    npm run deploy

```

> 8. For a project page, ensure your project’s settings use gh-pages

Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:


```sh

>    npm run deploy

```
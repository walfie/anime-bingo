# Development

```sh
yarn install
yarn start
```

Then open http://localhost:1234 in a browser.

# Build

```sh
yarn build
```

The `dist` directory will contain the output files, with `index.html` as the
entrypoint.

# Deploy to GitHub pages

```sh
yarn deploy
```

This will run the above build task, update the `gh-pages` branch with the
contents of the `dist` directory, and push to the remote `origin`.

If you get the error `A branch named 'gh-pages' already exists`, you may
need to run the following script:

```sh
./node_modules/gh-pages/bin/gh-pages-clean.js
```

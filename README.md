# michielbouw.nl

Michiel Bouw landingpage

## Requirements

Firebase: `npm install -g firebase-tools`

## Deploy

### One time
Initialize firebase by running `firebase login && firebase init`

Choose the following during the setup:
```
? What do you want to use as your public directory? (public) dist
AND
? File dist/index.html already exists. Overwrite? (y/N) N
```

### Deploy code
After that run `npm run build` and `npm run deploy`, firebase will deploy it based on the config.

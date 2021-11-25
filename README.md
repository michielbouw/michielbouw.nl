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

After that run `npm run build:prod` and `npm run deploy`, firebase will deploy it based on the config.

## Next.js + Tailwind CSS

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

# Barrio 67 — Angular App

Bohemian Resto Pub website for Barrio 67 in Batroun Old Souk, Lebanon.

## Features

- **Home**: Hero, About, Experience, Gallery, Visit, Social
- **Menu**: Full menu with tap-to-flip cards (mobile-friendly)
- **Reservations**: Table reservation form
- **Reviews**: Leave a review + phone number (70 211 299)
- **Admin Reviews**: View customer feedback at `/admin/reviews` (PIN: barrio67)

## Admin Access

To view customer reviews and improve your service:

1. Go to **yoursite.com/admin/reviews**
2. Enter PIN: **barrio67** (change in `src/app/pages/admin-reviews/admin-reviews.ts`)

## Development

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

## Menu Cards

Cards use **tap/click** (not hover) for mobile compatibility. Tap any item to flip and see ingredients.

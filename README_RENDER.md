Single-site Render deployment for this project:

1. Push this repository to GitHub.
2. In Render, create one `Web Service` from the repo.
3. Render can auto-detect [render.yaml](/C:/Users/DELL/Desktop/Tradewave/render.yaml).
4. Add environment variables:
   - `MONGO_URL`
   - `AUTH_SECRET`
5. After deploy:
   - landing site is served at `/`
   - dashboard is served at `/dashboard`
   - API is served by the same service on the same domain

Notes:
- The dashboard React app now uses `basename="/dashboard"`, so routes like `/dashboard/orders` work.
- Dashboard API requests use same-origin URLs, so they work on Render without hardcoded localhost.
- The frontend auth page already defaults to same-origin if you set `REACT_APP_API_URL` empty, but it also works with the current default if you run locally.

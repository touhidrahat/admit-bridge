# AdmitBridge on Vercel

This is a separate Next.js frontend. The original AdmitBridge website stays live and continues to provide the database and admin API. Both websites share the same admission records and moderation queue. No new database account or paid storage is needed for this setup.

Document uploads are removed from this frontend. Existing private documents remain on the original site. Admin review uses the existing admin key, which is not included in this package.

## Deploy

1. Extract this folder and open a terminal in it.
2. Install Node.js 22 or newer, then run `npm install`.
3. Run `npx vercel login` and sign in to the correct Vercel account.
4. Run `npx vercel`, select your personal Hobby workspace and create an `admitbridge` project. Use the detected Next.js defaults.
5. Test browsing, a real submission, and admin approval on the preview URL.
6. Run `npx vercel --prod` to publish. Leave the current site's URL and hosting settings unchanged.

Alternatively, upload this source to your own GitHub repository and import it into Vercel as a Next.js project.

## Operational notes

- This is a frontend deployment, not an independent migration of the database. Keep the original site active.
- Existing server-side rate limits apply. Requests sent through Vercel may share an outbound IP, so the original limit of 10 submissions per IP per hour may be shared among visitors. For a wider launch, migrate the database or implement authenticated client-IP forwarding before increasing traffic.
- The proxy forwards only known application API routes and the application admin cookie. It validates the requesting origin for writes and does not accept document uploads.
- This package contains no admin keys, user records, access tokens, or uploaded documents.
- Local tests mock the backend. Live Vercel-to-backend connectivity must be checked after account access is restored.

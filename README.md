# mnr2cwc.github.io
Indonesia Trip Planning

## Firestore guest list

The people page reads `Trips/indonesia-2027/people` when opened (capital `T`). Each document
needs a string `name` and a `status` of `invited`, `committed`, or `interested`.
The old spellings `commited` and `interest` are also accepted.
The local `src/data/people.ts` list is preserved as a migration reference;
it is no longer displayed or automatically uploaded.

Add the variables from `.env.example` to your existing `.env`, preserving any
other settings. Copy their values from Firebase Project settings → General →
Your apps → Web app → SDK configuration. Use the web app configuration, never
a service-account private key. Restart `npm run dev` after changing `.env`.

Visitors can view the list and use Add Person without signing in. Names and
statuses are public. Optional phone and email are saved in a private/contact
document in the same atomic batch. Private contacts cannot be read, updated,
or deleted by visitors; new contact documents must accompany a new person.
Existing entries cannot be edited or deleted from the browser. Manage them in
the Firebase console. Publish these permissions using
`firebase deploy --only firestore:rules`.

Vite embeds these configuration values at build time. Set them in the build
environment before generating the static GitHub Pages output. Verify with
`npm run build -- --outDir /tmp/indo-trip-build` to avoid replacing `docs/`
during local checks.

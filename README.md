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

## Authentication

The welcome page supports Firebase email/password registration and sign-in,
password reset emails, Google popup sign-in, and guest browsing. Firebase restores
signed-in sessions across reloads. The attendants tab uses Firebase authentication,
not name selection. Any signed-in account can access the list; this is not an
invite approval system.

In Firebase Authentication:

1. Enable Email/Password and Google under Sign-in method. Configure the Google
   project's support email when prompted.
2. Under Settings → Authorized domains, add `localhost` for development and
   `mnr2cwc.github.io` for production (plus any custom domain in use).
3. Configure a password policy and review the password reset email template.
4. Deploy the accompanying rules: `firebase deploy --only firestore:rules`.

On first sign-in, the app creates an attendee at
`Trips/indonesia-2027/people/{authUid}` with status `interested`. Existing UID
profiles are preserved. Existing auto-ID attendees are not claimed or merged
by matching a name or email; link/migrate them manually with trusted tooling to
avoid duplicate attendee records. Registration does not store passwords in Firestore.
If profile setup fails after account creation, sign in again after resolving the
rules/network issue rather than creating another account.

Signed-in accounts can also use Add Person. Each new document includes `ownerUid`.
Phone and email are saved only in its `private/contact` document, atomically with
the person. The deployed rules restrict list reads and new entries to signed-in
accounts and contact reads to the creating account. Guests cannot read the list.
Existing unowned contact documents stay inaccessible from the browser; manage
legacy records in the Firebase console. Browser updates and deletes are denied.

Live email delivery, Google sign-in, and deployed rule behavior require validation
in your configured Firebase project; local builds do not verify those services.

Vite embeds these configuration values at build time. Set them in the build
environment before generating the static GitHub Pages output. Verify with
`npm run build -- --outDir /tmp/indo-trip-build` to avoid replacing `docs/`
during local checks.

# mnr2cwc.github.io
Indonesia Trip Planning

## Flight search

The Flights page embeds Travelpayouts White Label Web **Widget** 23798 using
the account-generated `https://tpscr.com/wl_web/main.js?wl_id=23798` module
and the `tpwl-search` / `tpwl-tickets` containers. The module is loaded into
the document head after the containers mount, on the first visit to Flights.
The page remains mounted during navigation to preserve widget state.
This uses public embed configuration, no private API token or Firebase backend.

Manage the approved website Project, language, currency, default destination,
colors, and Show hotels setting in Travelpayouts → White Label → WL Web.
Disable Show hotels to avoid the provider's additional hotel tab behavior.
The displayed trip dates are suggestions; users must select/check the actual
dates and passengers in the provider's form. Results are intended to appear
on this page; booking/payment opens an external provider. Google Flights is
available in an expandable fallback, with results on Google's site.

Widget type uses the site's existing HTTPS hosting; the White Label Page
type's CNAME setup is not needed. Official setup:
https://support.travelpayouts.com/hc/en-us/articles/26857907357458-Setting-up-a-White-Label-with-Widget-type

Before publishing, verify on mobile and desktop: form rendering, airport/date/
passenger selection, results/prices, booking redirects, and leaving/returning
to Flights. These depend on the live Travelpayouts account and third-party
service and are not verified by a local production build.

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

## Usage activity

Each Continue as a Guest click creates a timestamp-only document under
`Trips/indonesia-2027/guestEntries`. Successful email/password registration,
email/password sign-in, and Google sign-in update
`Trips/indonesia-2027/people/{authUid}/private/activity.lastSignedInAt` with a server
timestamp. Restoring an existing session does not change that timestamp.
Activity failures do not prevent entry. A short notice appears on the welcome page.

The accompanying rules prohibit browser reads of both activity collections;
view them as a project administrator in the Firebase console. Match member UIDs
to Authentication → Users. Deploy the rules before testing activity recording.
Guest counts reflect button uses, not unique visitors, and unauthenticated events
can be fabricated or repeated. These client-side records are usage indicators,
not an authoritative authentication audit. No historical sign-ins are backfilled.
Any older `memberActivity` records remain untouched; new sign-ins write only to
the member's `private/activity` document.

## Sign-in setup

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

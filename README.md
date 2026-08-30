# lynbrook asap

site for the animal services and protection club at lynbrook high school.

live: https://lynbrookasap.vercel.app

sveltekit, prerendered to static files with `adapter-static`.

```
npm install
npm run dev
npm run build
```

## deploying

```
vercel --prod
```

the github remote is called `github`, not `origin`. vercel blocks cli deploys
that carry git metadata from a github account it does not recognise, so the
remote is kept off the name the cli looks for. link the github account under
vercel account settings and the remote can go back to `origin`.

## content

everything editable lives in `src/lib/data.ts` — officers, volunteer orgs,
newsletter issues, the hours form and points sheet links. photos are in
`static/photos`, newsletters in `static/news`.

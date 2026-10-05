# michaeldf.github.io

## Updating the Furrow & Crown roadmap

Edit `src/data/furrow-roadmap.json` locally or through GitHub's file editor. This file controls the roadmap, planned features, and dated development updates; page layout edits are not needed.

- Set `updatedOn` to the date of the content change (`YYYY-MM-DD`). This is an editorial date, not a build date or a release promise.
- Add, reorder, or edit `milestones`. Supported statuses are `starting-point`, `planned`, `in-progress`, `complete`, `longer-term`, and `exploring`.
- Set a milestone's `updatedOn` to a date when its status or description changes; leave it `null` until an individual date is useful.
- Add a dated entry to `updates` describing actual progress or a change in direction. Newest entries appear first. Record only confirmed progress.
- Edit `features` as the planned experience evolves.

Run `ASTRO_TELEMETRY_DISABLED=1 npm run build` to verify changes. Commit through a branch and PR; merging to `main` deploys the update through GitHub Pages. The public page has no editing controls or login; editing access stays with repository collaborators.

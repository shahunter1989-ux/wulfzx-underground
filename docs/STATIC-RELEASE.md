# Public-only release

This release uses GitHub Pages. Run `pnpm build:static` to build it. No Node server, admin panel, database or credentials are deployed. The local pilot remains in the original workspace.

`foundation/published.json` is the sanitized published-content snapshot. Only enabled, currently publishable content was exported; future scheduled announcements require a later export/deployment. Already included announcements expire client-side. `?preview=1` cannot expose drafts on this build. Admin and owner routes redirect to `/main/`.

Update the snapshot and redeploy for future content changes. Referenced `/assets/` artwork is already in the repository. Gallery is a styled coming-soon page; uploads and visitor interaction are not part of this release. Music points to https://tpod-pi.vercel.app/.

## Rollback record

Previous source revision: `f3f8705a33664230e87fd0ed8eba9fb010abb8be`.
Previous gh-pages revision: `e984127aa3baa9490447ea6b825c19f91d5ea721`.
Previous successful workflow run: https://github.com/shahunter1989-ux/wulfzx-underground/actions/runs/33941258976
Original Pages configuration: branch deployment from `gh-pages`, `/` root. For emergency rollback, restore that Pages source setting to serve the recorded, unchanged branch. Revert the release commit before later source deployments.

Production workflow uses the existing Pages artifact workflow. The Pages build source must be GitHub Actions. No DNS/domain or paid hosting changes are needed.

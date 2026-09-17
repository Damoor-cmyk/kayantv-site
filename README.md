# Kayan TV website

A dependency-free static site for Cloudflare Pages.

## Update content

Edit `site.config.js` to update support and DMCA emails, store/testing links, statuses, and the legal notice. Replace the legal notice placeholder with the app's final notice verbatim before launch.

## Local preview

Serve this directory with any static server, for example `npx serve .`, then open the local address.

## Deploy to Cloudflare Pages

Create a Pages project connected to this repository. Set the production branch to `main`, leave the build command blank, and set the output directory to `/`. Attach `kayantv.app` as the custom domain after the first deployment. Cloudflare automatically applies `_headers`.

## Before public launch

- Configure Cloudflare Email Routing for `support@kayantv.app` and `copyright@kayantv.app` to a verified destination inbox.
- Replace the legal-notice placeholder with the exact app text.
- Update platform/testing links in `site.config.js`.
- Verify the deployed pages, sitemap, and Search Console ownership.

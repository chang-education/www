# chang.education

Static site for https://chang.education, served by GitHub Pages.

Plain HTML and CSS, no build step. Each page is `<path>/index.html`, so URLs match the old WordPress permalinks.

- `assets/style.css`: the only stylesheet
- `wp-content/uploads/`: images, kept at their original WordPress paths so image URLs indexed by search engines keep working
- `sitemap.xml`, `sitemap_index.xml`, `robots.txt`, `feed.xml`: SEO and RSS
- `shop/`, `cart/`, `checkout/`, `my-account/`, `author/*/`, `feed/`: redirect stubs for removed WordPress URLs

Preview locally:

```bash
python3 -m http.server 8765
```

The contact form is shown but cannot submit. Comments are not supported.

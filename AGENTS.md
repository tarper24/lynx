# Agent Guidelines

## Before Committing

Always run the CSS build step before committing any changes:

```sh
npm run build
```

This compiles `assets/css/main.css` → `assets/css/compiled/main.css` using PostCSS/Tailwind. Commits without a fresh build will have stale CSS.

## Adding Social Icons

Icons live in `assets/icons/` as SVG files. All SVGs must use `viewBox="0 0 512 512"` and `fill="currentColor"` on the path to match the rest of the icon set.

### Finding an SVG

1. **Check the brand's official website first** — look for a press/brand kit or a downloadable SVG logo.
2. **Fall back to CoreUI Icons** — browse `https://github.com/coreui/coreui-icons/tree/main/svg/brand` and download the relevant file.

### Scaling to 512×512

CoreUI icons use a `32×32` viewBox. After downloading, multiply every numeric coordinate in the `d` attribute by **16** (512 ÷ 32), then update the `viewBox`:

```
viewBox="0 0 32 32"  →  viewBox="0 0 512 512"
```

Also ensure the `<path>` has `fill="currentColor"` and remove any redundant `xmlns` attributes on child elements.

### SVG template

```svg
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ICON_NAME" class="svg-inline--fa fa-ICON_NAME fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="..."/></svg>
```

# Task Completion Checklist

## Before Committing Changes

### Visual Verification
1. **Start the local server**: `docker-compose up`
2. **Check pages at http://localhost:4000**:
   - Homepage (index.html)
   - Services page (services.html)
   - Any modified pages
3. **Test responsive design**: Resize browser to check mobile layout
4. **Verify navigation**: All nav links work correctly
5. **Check mobile menu**: Toggle menu works on small screens

### Code Quality
- HTML is valid and properly indented
- CSS follows the variable system in `variables.css`
- No broken links or missing images
- Front matter YAML is correct (title, description, keywords)

### SEO Checks (for content changes)
- Meta description is unique and under 160 characters
- Title tag is unique and under 60 characters
- Images have alt text
- Internal links use relative paths

## Deployment
- Push to `main` branch triggers automatic GitHub Pages deployment
- Wait 1-2 minutes for deployment to complete
- Verify at https://datanovaconsulting.com

## Automated CI Checks
The GitHub Actions workflow (`.github/workflows/ci.yml`) runs automatically on pushes to main and pull requests:

1. **Jekyll Build** - Ensures site builds without errors
2. **HTML Validation** - HTMLProofer checks for:
   - Valid HTML structure
   - Broken internal links
   - Missing alt text on images
   - Script/link issues
3. **CSS Linting** - Stylelint checks for CSS issues (non-blocking)

### Running Checks Locally
```bash
# Build and run HTMLProofer
bundle exec jekyll build
bundle exec htmlproofer ./_site --ignore-urls "/calendly.com/,/fonts.googleapis.com/" --allow-missing-href

# Lint CSS (requires Node.js)
npm install stylelint stylelint-config-standard
npx stylelint "assets/css/**/*.css" --config .stylelintrc.json
```

### CI Must Pass
Pull requests should have passing CI before merging. Check the Actions tab on GitHub for status.

## Cache Busting
If CSS changes aren't showing, increment the version query param:
- `?v=2` → `?v=3` in `_layouts/default.html`

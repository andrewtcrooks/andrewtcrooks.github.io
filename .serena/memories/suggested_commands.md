# Suggested Commands

## Local Development

### Using Docker (Recommended)
```bash
# Start the development server
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop the server
docker-compose down

# Rebuild after Gemfile changes
docker-compose build --no-cache
docker-compose up
```

The site will be available at http://localhost:4000

### Using Ruby/Jekyll Directly
```bash
# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Build for production (outputs to _site/)
bundle exec jekyll build
```

## Git Commands (macOS/Darwin)
```bash
# Standard git workflow
git status
git add .
git commit -m "message"
git push origin main
```

## CI/Linting

### Run HTML Validation Locally
```bash
# Build site first
bundle exec jekyll build

# Run HTMLProofer
bundle exec htmlproofer ./_site \
  --ignore-urls "/calendly.com/,/fonts.googleapis.com/" \
  --allow-missing-href
```

### Run CSS Linting Locally
```bash
# Install stylelint (first time only)
npm install stylelint stylelint-config-standard

# Run linter
npx stylelint "assets/css/**/*.css" --config .stylelintrc.json
```

## Deployment
The site deploys automatically via GitHub Pages when pushing to the `main` branch. CI checks run automatically on push/PR.

## Useful Utilities (macOS)
```bash
# Open in browser
open http://localhost:4000

# Find files
find . -name "*.html"

# Search in files
grep -r "search term" --include="*.html"
```

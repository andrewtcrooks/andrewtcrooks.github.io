# Code Style and Conventions

## HTML/Jekyll Templates

### General
- Use 4-space indentation
- Include HTML comments identifying file location (e.g., `<!-- _layouts/default.html -->`)
- Use Jekyll Liquid syntax for templating: `{{ variable }}`, `{% include %}`, `{% if %}`
- Front matter uses YAML with `layout`, `title`, `description`, `keywords`

### Semantic Structure
- Use semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- Each page content section uses `<section>` with descriptive classes
- Use `<div class="container">` for content width constraints

### CSS Class Naming
- Use lowercase with hyphens: `hero-section`, `benefit-card`, `cta-large`
- Icon classes use Font Awesome: `<i class="fas fa-icon-name"></i>`
- State classes: `active`, `show`

## CSS Conventions

### Variables (in variables.css)
- All colors, shadows, and common values defined as CSS custom properties
- Color naming: `--primary-color`, `--accent-color`, `--dark-bg`
- Use variables for consistency: `var(--primary-color)`

### Organization
- `variables.css` loads first for custom properties
- `main.css` contains all component styles
- Cache-busting via query params: `main.css?v=2`

## JavaScript
- Inline scripts in templates for simple interactions
- Event listeners attached to DOM elements directly
- No framework; vanilla JS only

## SEO
- Each page has unique `title`, `description`, `keywords` in front matter
- Open Graph and Twitter Card meta tags in default layout
- JSON-LD structured data for organization
- Canonical URLs set automatically

## Content Guidelines
- Avoid em dashes; use commas or periods
- Keep copy authentic and specific, not generic
- Use Font Awesome icons for visual interest

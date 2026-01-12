# DataNova Consulting Website

## Purpose
This is the marketing website for DataNova Consulting (https://datanovaconsulting.com), a consultancy that builds bespoke AI systems for small businesses. The site is hosted on GitHub Pages at andrewtcrooks.github.io.

## Tech Stack
- **Static Site Generator**: Jekyll 4.2.0
- **Hosting**: GitHub Pages (domain: datanovaconsulting.com)
- **Container**: Docker (for local development)
- **Ruby Gems**:
  - jekyll 4.2.0
  - minima 2.5
  - jekyll-feed 0.15
  - jekyll-seo-tag 2.7

## Project Structure
```
/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main layout template
├── _includes/
│   ├── header.html      # Site header with navigation
│   └── footer.html      # Site footer
├── assets/
│   ├── css/
│   │   ├── variables.css  # CSS custom properties (colors, spacing)
│   │   └── main.css       # Main stylesheet
│   └── images/            # Logo files and images
├── index.html           # Homepage
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── about.html           # About page
├── contact.html         # Contact page
├── sitemap.xml          # SEO sitemap
├── robots.txt           # SEO robots file
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker compose for local dev
├── Gemfile              # Ruby dependencies
└── highlight_button.js  # JavaScript for UI interactions
```

## Key Features
- SEO optimized with meta tags, Open Graph, Twitter cards
- Responsive design with mobile menu
- Uses Google Fonts (Inter, Montserrat)
- Font Awesome icons
- Umami analytics integration
- CSS custom properties for consistent theming

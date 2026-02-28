# Photo Upload Guide

Place your photos in this folder (`/public/images/`) using the exact filenames below.
The website will automatically display them once the files are present.

## Required Photos

### Hero Photo (Homepage + general)
- **Filename**: `victor-hero.jpg`
- **Location**: `public/images/victor-hero.jpg`
- **Recommended dimensions**: 600 × 800px (portrait)
- **Usage**: Homepage hero section (right column)
- **Supported formats**: JPG, PNG, WebP (use the exact filename shown — change format extension if using WebP or PNG)

### About Page Photo
- **Filename**: `victor-about.jpg`
- **Location**: `public/images/victor-about.jpg`
- **Recommended dimensions**: 800 × 600px (landscape or portrait works)
- **Usage**: About page, left column
- **Supported formats**: JPG, PNG, WebP

### Blog Author Photo
- **Filename**: `victor-blog.jpg`
- **Location**: `public/images/victor-blog.jpg`
- **Recommended dimensions**: 400 × 400px (square, will be displayed as circle)
- **Usage**: Blog post author block
- **Supported formats**: JPG, PNG, WebP

## Placeholder System

Until photos are uploaded, the site shows an elegant **"VO" placeholder** — navy background
with gold initials in Playfair Display. This is intentional and looks professional.
No broken image icons will appear.

## Tips

- Use portrait orientation for hero and about photos — they display better in the layout
- Compress photos before uploading: target under 500KB per image for fast loading
- WebP format gives the best compression with no quality loss — recommended if your editor supports it
- If using a different format (e.g. PNG), update the filename in `config/photos.ts` to match

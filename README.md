# Code Design Presentation

A simple, maintainable HTML/CSS presentation about domain-driven code design, based on lessons from 37signals.

## Usage

Open `index.html` in a browser. Navigate using:
- **Arrow links** on each slide
- **Keyboard**: ← → arrows, or number keys 1-9, 0 for slide 10

## Structure

```
index.html      # All slides in one file - edit content here
styles.css      # Teamtailor design tokens and layout
prism-theme.css # Syntax highlighting theme
keyboard.js     # Arrow key and number key navigation
```

## Editing Slides

All slides are in `index.html` as `<section class="slide">` elements. Each slide has:

- A **semantic `id`** (e.g., `#about-me`, `#code-controller`)
- Navigation links to prev/next slides

**To add a new slide:**

1. Copy an existing `<section class="slide">` block
2. Give it a meaningful `id` (e.g., `#my-new-slide`)
3. Update the `href` in the **previous** slide's → link
4. Update the `href` in the **next** slide's ← link
5. Done! (counters update automatically)

**Current slides:**
- `#title` → `#about-me` → `#quote-essence` → `#domain-center`
- → `#quote-service-objects` → `#code-card-model` → `#code-concern`
- → `#code-controller` → `#code-plain-ruby` → `#epicenter` → `#takeaways`

## Design

Uses Teamtailor's design language:
- **Primary color**: `#F43F85` (pink)
- **Font**: Inter
- **Dark theme**: Grey scale from `#1c1c1e` to `#f8f8f9`

## Minimal JavaScript

- **Navigation**: Pure CSS using `:target` selector
- **keyboard.js**: Arrow keys + number keys (44 lines)
- **Prism.js**: Syntax highlighting (CDN)


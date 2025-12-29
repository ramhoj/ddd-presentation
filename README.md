# Code Design Presentation

A simple, maintainable HTML/CSS presentation about domain-driven code design, based on lessons from 37signals.

## Usage

Open `index.html` in a browser. Navigate using the arrow links on each slide.

## Structure

```
index.html      # All slides in one file - edit content here
styles.css      # Teamtailor design tokens and layout
prism-theme.css # Syntax highlighting theme
```

## Editing Slides

All slides are in `index.html` as `<section class="slide">` elements. Each slide has:

- An `id` (e.g., `#slide-1`) for navigation
- Navigation links at the bottom
- A slide counter

To add a new slide:

1. Copy an existing `<section class="slide">` block
2. Update the `id` to the next number
3. Update navigation links on adjacent slides
4. Update all slide counters

## Design

Uses Teamtailor's design language:
- **Primary color**: `#F43F85` (pink)
- **Font**: Inter
- **Dark theme**: Grey scale from `#1c1c1e` to `#f8f8f9`

## No JavaScript Required

Navigation is pure CSS using `:target` selector. The only JavaScript is Prism.js for syntax highlighting (loaded from CDN).


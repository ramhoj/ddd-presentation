// Minimal keyboard navigation for slides
// Works with semantic IDs - no numbered slides required

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    navigate(1)
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    navigate(-1)
  } else if (e.key >= '1' && e.key <= '9') {
    goToSlide(parseInt(e.key, 10))
  } else if (e.key === '0') {
    goToSlide(10)
  }
})

function navigate(direction) {
  const slides = Array.from(document.querySelectorAll('.slide'))
  const currentIndex = getCurrentSlideIndex(slides)
  const nextIndex = currentIndex + direction
  
  if (nextIndex >= 0 && nextIndex < slides.length) {
    window.location.hash = slides[nextIndex].id
  }
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide')
  if (n >= 1 && n <= slides.length) {
    window.location.hash = slides[n - 1].id
  }
}

function getCurrentSlideIndex(slides) {
  const hash = window.location.hash.slice(1)
  if (!hash) return 0
  
  const index = slides.findIndex(slide => slide.id === hash)
  return index === -1 ? 0 : index
}

// Set CSS variable for total slide count (used by counter display)
document.addEventListener('DOMContentLoaded', () => {
  const total = document.querySelectorAll('.slide').length
  document.documentElement.style.setProperty('--total-slides', `"${total}"`)
})

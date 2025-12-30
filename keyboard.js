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
  } else if (e.key === 'n' || e.key === 'N') {
    toggleNotes()
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

// Toggle speaker notes visibility
function toggleNotes() {
  document.body.classList.toggle('notes-hidden')
}

// Set CSS variable for total slide count (used by counter display)
document.addEventListener('DOMContentLoaded', () => {
  const total = document.querySelectorAll('.slide').length
  document.documentElement.style.setProperty('--total-slides', `"${total}"`)

  // Initialize code tabs
  initCodeTabs()

  // Initialize notes toggle button
  const notesToggle = document.getElementById('notes-toggle')
  if (notesToggle) {
    notesToggle.addEventListener('click', toggleNotes)
  }

  // Run Prism highlighting after DOM is ready
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll()
  }
})

// Re-highlight code when navigating (hash change)
window.addEventListener('hashchange', () => {
  if (typeof Prism !== 'undefined') {
    // Small delay to ensure the slide is visible
    setTimeout(() => Prism.highlightAll(), 50)
  }
})

// Code tabs switching
function initCodeTabs() {
  document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabGroup = tab.closest('.code-tabs')
      const tabId = tab.dataset.tab

      // Update active tab button
      tabGroup.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'))
      tab.classList.add('active')

      // Update active content
      tabGroup.querySelectorAll('.code-tab-content').forEach(c => c.classList.remove('active'))
      tabGroup.querySelector(`#tab-${tabId}`).classList.add('active')

      // Re-highlight code
      Prism.highlightAllUnder(tabGroup)
    })
  })
}

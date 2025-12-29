// Minimal keyboard navigation for slides
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    navigate(1)
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    navigate(-1)
  }
})

function navigate(direction) {
  const current = getCurrentSlide()
  const next = current + direction
  const total = document.querySelectorAll('.slide').length
  
  if (next >= 1 && next <= total) {
    window.location.hash = `slide-${next}`
  }
}

function getCurrentSlide() {
  const hash = window.location.hash
  if (hash && hash.startsWith('#slide-')) {
    return parseInt(hash.replace('#slide-', ''), 10)
  }
  return 1
}


// Minimal keyboard navigation for slides
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
  const current = getCurrentSlide()
  goToSlide(current + direction)
}

function goToSlide(n) {
  const total = document.querySelectorAll('.slide').length
  if (n >= 1 && n <= total) {
    window.location.hash = `slide-${n}`
  }
}

function getCurrentSlide() {
  const hash = window.location.hash
  if (hash && hash.startsWith('#slide-')) {
    return parseInt(hash.replace('#slide-', ''), 10)
  }
  return 1
}


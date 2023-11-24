const topNavMenu = document.getElementById('js-top-nav-menu')
const btnToggleTopNavMenu = document.getElementById('js-toggle-top-nav-menu')

document.addEventListener('click', (e) => {
  if (btnToggleTopNavMenu.contains(e.target)) {
    // Click into toggle top nav menu icon
    topNavMenu.classList.toggle('hidden')
    topNavMenu.classList.toggle('top-nav-menu-expanded')
  } else {
    // Click outside toggle top nav menu icon
    if (topNavMenu.classList.contains('top-nav-menu-expanded')) {
      topNavMenu.classList.remove('top-nav-menu-expanded')
      topNavMenu.classList.add('hidden')
    }
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024 && topNavMenu.classList.contains('top-nav-menu-expanded')) {
    topNavMenu.classList.add('hidden')
    topNavMenu.classList.toggle('top-nav-menu-expanded')
  }
})

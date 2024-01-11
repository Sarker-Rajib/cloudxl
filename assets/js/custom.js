const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if (vw > 1199) {
    document.getElementById('mega-menu').style.width = `${vw}px`
    document.getElementById('mega-menu2').style.width = `${vw}px`
}

document.getElementById('nav-open').addEventListener('click', () => {
    document.getElementById('navbarcol').classList.add('show')
})
document.getElementById('nav-closer').addEventListener('click', () => {
    document.getElementById('navbarcol').classList.remove('show')
})
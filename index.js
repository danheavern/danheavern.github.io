const scrollContent = scrollingHeader.children[0]
const x = scrollContent.getBoundingClientRect().width
const scrollSpeed = 2

let deltaX = 0

setInterval(() => {
    if (scrollingHeader.children.length < Math.ceil(window.innerWidth / x) + 1)
        scrollingHeader.appendChild(scrollContent.cloneNode())

    deltaX -= scrollSpeed

    if (deltaX <= -x)
        deltaX = 0

    scrollingHeader.style.transform = `translate(${deltaX}px, 0px)`
}, 1000 / 60) // 60fps (this happens 60 times a second, FYI)
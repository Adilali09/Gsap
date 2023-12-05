 var tl = gsap.timeline()

tl.from("#nav img,#nav h3, #nav h4, #nav button", {
    y: -800,
    duration: 2,
    delay: 0.3,
    opacity: 0,
    stagger:0.2,
})

tl.from("#main h1",{
    Y:200,
    stagger:0.3,
    opacity:0,
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.4,
})
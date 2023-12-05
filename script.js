// gsap.to(".box", {
//     x: 950,
//     duration: 5,
//     delay: 2,
//     rotate: 360,
//     backgroundColor:"blue",
//     loop:"true",
//     scale:0.3,
// })


// gsap.from(".box", {
//     x: 950,
//     duration: 5,
//     delay: 2,
//     rotate: 360,
//     backgroundColor:"blue",
//     loop:"true",
//     scale:0.3,
// })

// gsap.to("h1", {
//     x: 400,
//     Color: "pink",
//     duration: 2,
//     delay: 2,
//     stagger: 1,
//     repeat: -1,
//     yoyo:true,
// })

// gsap.from("h2",{
//     x:400,
//     Color:"pink",
//     duration:2,
//     delay:2,
//     stagger:1,
//     repeat: -1,
//     yoyo:true,
// })

// gsap.from("h3",{
//     x:400,
//     Color:"pink",
//     duration:2,
//     delay:2,
//     stagger:1,
//     repeat: -1,
//     yoyo:true,
// })



var tl = gsap.timeline()
tl.to("h1",{
    x:900,
    repeat:0,
    duration:1,
    // yoyo:1,
})

var tl = gsap.timeline()
tl.to("h2",{
    x:700,
    repeat:-1,
    duration:3,
    // yoyo:1,
})

var tl = gsap.timeline()
tl.to("h3",{
    x:800,
    repeat:-1,
    duration:5,
    // yoyo:1,
})
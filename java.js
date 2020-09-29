
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


var ls = sessionStorage.getItem('namespace.visited');
if (ls == null) {
    sessionStorage.setItem('namespace.visited', 1)
    tl.fromTo('.mainContainer', {y: "150%"}, {y: "0%", duration: 1}, "0.4")
    tl.fromTo('.mainContainer', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.25")
    tl.fromTo('.welcome div', {x: "-600px"}, {x: "0px", duration: 0.5, stagger: 0.1}, "-=0.5")
    tl.fromTo('.initalContainer', {x: "600px"}, {x: "0px", duration: 0.5,}, "-=0.5")
    tl.fromTo('.welcome div', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.3")
}
else {
    tl.fromTo('.welcome div', {x: "-600px"}, {x: "0px", duration: 0.5, stagger: 0.1})
    tl.fromTo('.initalContainer', {x: "600px"}, {x: "0px", duration: 0.5,}, "-=0.5")
    tl.fromTo('.welcome div', {opacity: 0}, {opacity: 1, duration: 1}, "-=0.3")
}

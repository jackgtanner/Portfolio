const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });

gsap.fromTo('.left2', {y: "1000px"}, {y: "0px", duration: 1})
gsap.fromTo('.right2', {y: "-1000px"}, {y: "0px", duration: 1}, "-=0.5")
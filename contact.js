const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } });


gsap.fromTo('.contactText', {y: "1000px"}, {y: "0px", duration: 1})
gsap.fromTo('.SocialContact', {y: "-1000px"}, {y: "0px", duration: 1}, "-=0.5")

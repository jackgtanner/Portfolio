const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

tl.fromTo('.dropdown-btn', { x: "800px" }, { x: "0px", duration: 0.75, stagger: 0.1 })



for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {


        var dropdownContent = this.nextElementSibling;
        var container = document.getElementsByClassName("dropdown-container");

        if (dropdownContent.style.display === "inline-block") {
            $(dropdown).removeClass("active");
            return dropdownContent.style.display = "none";
        }
        else {
            for (var i = 0; i < container.length; i += 1) {
                $(dropdown).removeClass("active");
                container[i].style.display = 'none';
            }
            this.classList.toggle("active");
            if (dropdownContent.style.display === "inline-block") {

                dropdownContent.style.display = "none";
            } else {
                console.log("hi")
                dropdownContent.style.display = "inline-block";
                $(container).scrollTop(0);
                tl.fromTo(".dropdown-container", {x: "-600"}, {x: "0", duration: 0.3})
                tl.fromTo(".dropdown-container", {opacity: "0"}, {opacity: "1", duration: 1}, "-=0.1")

            }
        }
    });
}
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
                dropdownContent.style.display = "inline-block";
                $(container).scrollTop(0);
                tl.fromTo(".dropdown-container", { x: "-600" }, { x: "0", duration: 0.3 })
                tl.fromTo(".dropdown-container", { opacity: "0" }, { opacity: "1", duration: 1 }, "-=0.1")

            }
        }
    });
}


var projectCard = document.getElementsByClassName("project");
var projectContent = document.getElementsByClassName("projectScreen");
var title = document.getElementsByClassName("projectTitle");
projectContent[0].style.display = 'none';

for (i = 0; i < projectCard.length; i++) {
    projectCard[i].addEventListener("click", listener.bind(null, i));
}

function listener(index) {
    var titleContent = projectCard[index].innerText;
    projectContent[0].style.display === "none" ? populateProject(titleContent) & projectFadeIn() : projectContent[0].style.display = "none";
}

function projectFadeIn() {
    projectContent[0].style.display = 'flex';
    tl.fromTo(".projectScreen", { x: "-600" }, { x: "0", duration: 0.2 })
    tl.fromTo(".projectScreen", { opacity: "0" }, { opacity: "1", duration: 0.5 }, "-=0.1")
    return
}


function populateProject(title) {

    var screenTitle = document.querySelector(".screenTitle");
    screenTitle.innerHTML = title;

    readME = document.querySelector(".projectReadme");
    live = document.getElementById("live");
    gitHub = document.getElementById("gitHub");

    switch (screenTitle.innerHTML) {
        case "jackgtanner (This Website!)":
            readME.innerHTML = ""
            live.href = "https://www.jackgtanner.co.uk"
            gitHub.href = "https://github.com/jackgtanner/Portfolio"
            break;

        case "Calculator":
            readME.innerHTML = ""
            live.href = "https://jackgtanner.github.io/calculator-project/"
            gitHub.href = "https://github.com/jackgtanner/calculator-project"
            break;

        case "Etch-a-Sketch":
            readME.innerHTML = ""
            live.href = "https://jackgtanner.github.io/EtchASketch/"
            gitHub.href = "https://github.com/jackgtanner/EtchASketch"
            break;
    }

    return
}

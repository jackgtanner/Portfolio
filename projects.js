
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
    if (titleContent === document.querySelector(".screenTitle").innerHTML) {
        return null
    }
    populateProject(titleContent) & projectFadeIn();
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

    screenTitle.innerText === "Calculator" || screenTitle.innerText === "\nCalculator\n" ? console.log("yes") : console.log("no");
    // The || screenTitle.innerText === "\nCalculator\n" is becuase on safari's version 14.0, for some reason the variable is different to what it would be on chrome or firefox...
    // This was the only solution I could think of which would make this work the same on safari as it does on other browsers

    if (screenTitle.innerText === "jackgtanner (This Website!)" || screenTitle.innerText === "\njackgtanner (This Website!)\n") {
        readME.innerHTML = "<div>This is the first functioning website i've attempted to build!</div><div>I'm happy with the design, and how quickly I've been able to put this together while learning alongside building it</div><div>This was built using HTML, CSS & JS. I think in the future, I would come back and completely redesign the site after learning a framework such as React, but until then, this is my Portfolio :)</div><div>Have a look around, and feel free to contact me if you would like to!</div>";
        live.href = "https://www.jackgtanner.co.uk";
        gitHub.href = "https://github.com/jackgtanner/Portfolio";

    } else if (screenTitle.innerText === "Calculator" || screenTitle.innerText === "\nCalculator\n") {
        readME.innerHTML = "<div>This is my version of the Calculator project, which is part of the <a href='https://www.theodinproject.com/courses/web-development-101/lessons/calculator?ref=lnav' target='_blank'>Odin Project's learning course</a></div><div>The user is presented with a simple functioning calculator when the page loads</div><div>They're able to then perform basic functions such as addition, subtraction, multiplication</div><div>Languages I used within this project were: HTML, CSS, Javascript. While the main concept to practice was DOM manipulation within JS by changing the display dynamically, as well as to practice the use of functions within JS for when the user wants to add, subtract ect...</div>";
        live.href = "https://jackgtanner.github.io/calculator-project/";
        gitHub.href = "https://github.com/jackgtanner/calculator-project";

    } else if (screenTitle.innerText === "Etch-a-Sketch" || screenTitle.innerText === "\nEtch-a-Sketch\n") {
        readME.innerHTML = "<div>This is my version of the Etch-A-Sketch project, which is part of the <a href='https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav' target='_blank'>Odin Project's learning course.</a>\n</div><div>The user is presented with a 16x16 grid. Each cell turns grey when moused over, acting like an Etch-A-Sketch.</div>The reset button is then used to reset the grid. While the user is also prompted to choose the dimensions of the new grid. The container stays the same size, so they are choosing the 'resolution'.<div>Maximum size of 100 for the grid was chosen to not allow the browser to take too long to compute</div><div>Languages I used within this project were: HTML, CSS, Javascript. While the main concept to practice was DOM manipulation within JS by changing the grid dynamically to the users preference";
        live.href = "https://jackgtanner.github.io/EtchASketch/";
        gitHub.href = "https://github.com/jackgtanner/EtchASketch";

    } else if (screenTitle.innerText === "Tic-Tac-Toe" || screenTitle.innerText === "\nTic-Tac-Toe\n") {
        readME.innerHTML = "<div>My version of a game within the console of Tic-Tac-Toe. This is the first substancial project in the <a href='https://www.theodinproject.com/courses/ruby-programming/lessons/tic-tac-toe' target='_blank'> Odin Project's learning course.</a></div><div>This is the first real project in which I've had to utilise making my own classes in an Object Orientated Language, in this case, Ruby</div><div>It's a simple game of Tic-Tac-Toe between two players.</div><div>The links below will take you to the live version and the source code</div>";
        live.href = "https://tictactoe.jackgtanner.repl.run";
        gitHub.href = "https://github.com/jackgtanner/tic_tac_toe";

    } else if (screenTitle.innerText === "Mastermind" || screenTitle.innerText === "\nMastermind\n") {
        readME.innerHTML = "<div>This is my attempt at making the game Mastermind within the console, this is the second project in Ruby from <a href='https://www.theodinproject.com/lessons/mastermind' target='_blank'>The Odin Project</a></div><div>The full list of rules and details of the game can be found here on the <a href='http://en.wikipedia.org/wiki/Mastermind_(board_game)'>Wikipedia page</a> about the game.</div>";
        live.href = "https://mastermind.jackgtanner.repl.run";
        gitHub.href = "https://github.com/jackgtanner/mastermind";

    } else if (screenTitle.innerText === "Hangman" || screenTitle.innerText === "\nHangman\n") {
        readME.innerHTML = "<div>My version of the game Hangman!</div><div>A random word is chosen from a dictionary file, minimum of 5 letters</div><div>The player is able to guess a letter up to 6 times incorrectly before it's game over</div><div>Coded entirely in Ruby</div>"
        live.href = "https://hangman-2.jackgtanner.repl.run";
        gitHub.href = "https://github.com/jackgtanner/hangman";

    } else if (screenTitle.innerText === "Hangman Twitter Bot" || screenTitle.innerText === "\nHangman Twitter Bot\n") {
        readME.innerHTML = "<div>I turned the Hangman game into a twitter bot!</div><div>To get started you simply have to tweet it using the command !play, and it will start a game of hangman with you via tweets! What a fantastic world we live in</div><div>For this project I had to get to grips with the twitter API, and the twitter gem for ruby</div><div>I had to adapt the original code slightly form the last project, to make it fit the medium it would be played</div><div>I haven't made this repository public on github because it includes the access keys for the account itself</div>";
        live.href = "https://twitter.com/Hangman_Bot";
        gitHub.href = "";
    
    } else if (screenTitle.innerText === "Youtube Video Player" || screenTitle.innerText === "\nYoutube Video Player\n") {
        readME.innerHTML = "<div>This project was to reinforce the idea of addding media to a webpage. Embedding a video, or an img</div><div>It is the first project in <a href='https://www.theodinproject.com/lessons/embedding-images-and-video' target='_blank'>The Odin Project's</a> section on HTML & CSS.</div><div>Beyond the video player and the featured/suggested video's, the comment section and additional interactivity wasn't required.</div><div>I would have liked to have been able to use a font such as Font-Awesome to be able to keep the icons consistent. Which I would say is definitely the fall down of the page, but I also can't purchase icon packs at the moment, so I had to make do with googling various svg's  :)</div>";
        live.href = "https://jackgtanner.github.io/YoutubePlayer/";
        gitHub.href = "https://github.com/jackgtanner/YoutubePlayer";
    
    } else if (screenTitle.innerText === "HTML Form" || screenTitle.innerText === "\nHTML Form\n") {
        readME.innerHTML = "<div>Here's a link to <a href='https://www.theodinproject.com/courses/html-and-css/lessons/html-forms'>the Odin Project's</a>, project brief for this page</div><div>The idea of this was to test our eye for how pages are designed, by seeing if we're able to accurately recreate a page. Much like the youtube player in the previous project</div><div>The page we were set to recreate was <a href='https://wwws.mint.com/login.event?task=S'>Mint.com's signup page.</a> My version isn't 100% pixel perfect. But I'm incredibly pleased with the accuracy with which I was able to get mine to</div><div>I also learned a few things about the Inspector tool, like being able to see and save the source images! Which saved a lot of time trawling through the web to find simlilar resources, or making my own.</div>";
        live.href = "https://jackgtanner.github.io/Signup-Page/";
        gitHub.href = "https://github.com/jackgtanner/Signup-Page";
    
    } else if (screenTitle.innerText === "NYT-Article" || screenTitle.innerText === "\nNYT-Article\n") {
        readME.innerHTML = "<div>The task for this <a href='https://www.theodinproject.com/courses/html-and-css/lessons/positioning-and-floating-elements'>project</a> was to recreate <a href='http://www.nytimes.com/2014/03/18/science/space/detection-of-waves-in-space-buttresses-landmark-theory-of-big-bang.html?_r=0'>this New York Times Article,</a> minus the interactive parts which involved JavaScript</div><div>This was to get a feel for the layout of a blog/article site and make the most of the grid & flexbox display's</div><div>I would probably admit that I need to make myself use grid's slightly more to get as comfortable as I am with a flexbox</div><div>I'm definitely happy with how it turned out though, taking the best part of a day to do. I started to task myself with purposely making css classes which I could reuse. DRY - Dont Repeat Yourself :)</div>";
        live.href = "https://jackgtanner.github.io/Positioning-and-Floating-Elements/";
        gitHub.href = "https://github.com/jackgtanner/Positioning-and-Floating-Elements";
    
    } else if (screenTitle.innerText === "Snake" || screenTitle.innerText === "\nSnake\n") {
        readME.innerHTML = "<div>This game of snake wasn't part of the Odin Project. But I wanted to take a day to break away from the course to get stuck into some JavaScript.</div><div>So I found a tutorial online and went through it to make my own game of snake!</div><div>This was the first page which I've encorporated my own favicon & sound assets</div><div>In the future I think I'll come back to this again to add my pixel art to the snake itself, rather than it being a pink worm at the moment</div>";
        live.href = "https://jackgtanner.github.io/Snake/";
        gitHub.href = "https://github.com/jackgtanner/Snake";
    
    } else if (screenTitle.innerText === "The Courtyard Menu" || screenTitle.innerText === "\nThe Courtyard Menu\n") {
        readME.innerHTML = "<div>This was a page which was to aid a resteraunt called the Courtyard with an online menu</div><div>The idea was to also provide QR codes with logo's which would take you straight to the page. Which can be found in the assets file</div><div>Due to the coronavirus, and lockdowns, it's important for even independant businesses to have an online presence</div><div>This allows customers to not have to hangle paper menu's in person. Also with deliveries, being able to see it will speed up the ordering process over the phone.</div>";
        live.href = "http://www.eahpropertyservices.co.uk/Courtyard.html";
        gitHub.href = "https://github.com/jackgtanner/The-Courtyard";
    
    } else if (screenTitle.innerText === "Building With Responsive Design" || screenTitle.innerText === "\nBuilding With Responsive Design\n") {
        readME.innerHTML = "<div>This project was all about responsive design. Design which dynamically changes depending on the size of the browser window by using media queries. The project was to recreate the homepage of <a href="">TheNextWeb</a></div><div>It was a project I really enjoyed. It was great to really get to grips with the design process of this news site.</div><div>One thing I've 100% improved upon, and feel more comfortable using, is the grid display!</div><div>I would say that between flex and grid, I would be able to comfortably recreate almost any site</div>";
        live.href = "https://jackgtanner.github.io/Building-with-Responsive-Design/";
        gitHub.href = "https://github.com/jackgtanner/Building-with-Responsive-Design";
    
    }

    return
}


// else if (screenTitle.innerText === "" || screenTitle.innerText === "\n\n") {
//     readME.innerHTML = "";
//     live.href = "";
//     gitHub.href = "";

// }







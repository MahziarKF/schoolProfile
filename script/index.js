const body = document.getElementById('body')
const showSkillsButton = document.getElementById("showSkillsButton")
const showBioButton = document.getElementById("showBioButton")
const showProjectsButton = document.getElementById("showProjectsButton")
const hideSkillsButton = document.getElementById("hideSkillsButton")
const hideBioButton = document.getElementById("hideBioButton")
const hideProjectsButton = document.getElementById("hideProjectsButton")
const mainDiv = document.getElementById("holder")
const skillsDiv = document.getElementById("skillsDiv")
const projectsDiv = document.getElementById("projectsDiv")
const bioDiv = document.getElementById("bioDiv")
const activateButton = document.getElementById("activate")
const firstDiv = document.getElementById("first")
const holder1 = document.getElementById("holder1")
const pfp = document.getElementById('profilePic')
const name = document.getElementById("name")
const discord = document.getElementById("discord")
const instagram = document.getElementById("instagram")
const telegram = document.getElementById("telegram")
const github = document.getElementById("github")
const nextImageBtn = document.getElementById('nextImageBtn')
let currentImage = 1
nextImageBtn.addEventListener('click', function(){
    nextImage()
})
// gets the current image number ans it to renderImage() so the function shows the next image currectly
coverBackground()
function coverBackground(){
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}
function nextImage(){
    if (currentImage == 1) {
        currentImage = 2
        // it was late at night i'll add the fadeIn & fadeOut animations later ig :)
        pfp.src = 'pics/2.jpg'
    } else if (currentImage == 2) {
        currentImage = 3
        pfp.src = 'pics/3.jpg'
    }else if (currentImage == 3) {
        currentImage = 4
        pfp.src = 'pics/4.jpg'
    }else if (currentImage == 4) {
        currentImage = 1
        pfp.src = "pics/1.jpg"
    }
}


discord.addEventListener("mouseover", function(){
    discord.style.animationName = "expandIcons"
    discord.style.animationDuration = "2s"
    discord.style.width = "80px"
    discord.style.height = "80px"
})

discord.addEventListener("mouseout", function() {
    discord.style.animationName = "expandIcons2"
    discord.style.animationDuration = "1s"
    discord.style.width = "60px"
    discord.style.height = "60px"
})
telegram.addEventListener("mouseover", function(){
    telegram.style.animationName = "expandIcons"
    telegram.style.animationDuration = "2s"
    telegram.style.width = "80px"
    telegram.style.height = "80px"
})

telegram.addEventListener("mouseout", function() {
    telegram.style.animationName = "expandIcons2"
    telegram.style.animationDuration = "1s"
    telegram.style.height = "60px"
    telegram.style.width = "60px"
})
instagram.addEventListener("mouseover", function(){
    instagram.style.animationName = "expandIcons"
    instagram.style.animationDuration = "2s"
    instagram.style.width = "80px"
    instagram.style.height = "80px"
})

instagram.addEventListener("mouseout", function() {
    instagram.style.animationName = "expandIcons2"
    instagram.style.animationDuration = "1s"
    instagram.style.height = "60px"
    instagram.style.width = "60px"
})
github.addEventListener("mouseover", function(){
    github.style.animationName = "expandIcons"
    github.style.animationDuration = "2s"
    github.style.width = "80px"
    github.style.height = "80px"
})

github.addEventListener("mouseout", function() {
    github.style.animationName = "expandIcons2"
    github.style.animationDuration = "1s"
    github.style.height = "60px"
    github.style.width = "60px"
    
})

function showSkills() {
    document.getElementById("showProjectsButton").style.display = "none"
    document.getElementById("showBioButton").style.display = "none"
    document.getElementById("showSkillsButton").style.display = "none"
    document.getElementById("hideSkillsButton").style.display = "inline-block"
    document.getElementById("hideSkillsButton").style.marginLeft = "0px"
    //document.getElementById("holder").style.height = "750px"
    //document.getElementById("holder").style.width = "1000px"
    skillsDiv.innerHTML = `
    <ul id="skillsUl">
        <li><h2>SQL ( Beginner)</h2></li>
        <li><h2>Java ( Intermediate)</h2> </li>
        <li><h2>C# (Intermediate)</h2> </li>
        <li><h2>Python ( Beginner-Intermediate)</h2> </li>
        <li><h2>HTML,CSS ( Intermediate)</h2></li>
        <li><h2>JavaScript ( Intermediate-Advanced)</h2></li>
        
    </ul>`
    doDropAnimationSkills()
}
function hideSkills() {
    document.getElementById("showProjectsButton").style.display = "inline-block"
    document.getElementById("showBioButton").style.display = "inline-block"
    document.getElementById("showSkillsButton").style.display = "inline-block"
    document.getElementById("hideSkillsButton").style.display = "none"
    //document.getElementById("holder").style.height = "370px"
    skillsDiv.innerHTML = ""
    doUndropAnimationSkills()
}
// forgive me for using document.getElementById instead of the var to .style it :(

function showProjects() {
    showProjectsButton.style.display = "none"
    showBioButton.style.display = "none"
    showSkillsButton.style.display = "none"
    hideProjectsButton.style.display = "inline-block"
    hideProjectsButton.style.marginLeft = "0px"
   // mainDiv.style.height = "1100px"

    projectsDiv.innerHTML = `
    <ul>
        <li><a href="https://mahziarkf.github.io/Projects-signupLoginPage/" class="projectLinks">Login Page</a></li>
        <p><b>Description : </b> this is a login/signup page<br>
        with the ability to actualy create an account and login<br>
        First click on New? button then create an account<br>
        After creating an account go back to the login option<br>
        then type in your username and password.<br>
        <b></b> if multiple user are using the website on the<br>
        same System/browser your password and username is visible<br>
        <b>Inspect -> Applications -> LocalStorage</b></p>
        <li><a href="https://mahziarkf.github.io/poker/poker.html" class="projectLinks">BlackJack</a></li>
        <p><b>Description : </b>Have you ever played blackjack before?<br>
        well if not i can explain it real fast.<br>
        it is a card and luck based game that draws 3 random cards<br>
        from 1-13. if your total cards add up to more than 21 you<b>lose</b><br>
        ,if your total sum of cards are below 21 you can draw cards again
        and if you finally get a sum of 21 before losing you <b>Win!</b>.</p>
        
    </ul>
    `
    doDropAnimationProjects()
}
function hideProjects() {
    showBioButton.style.display = "inline-block"
    showProjectsButton.style.display = "inline-block"
    showSkillsButton.style.display = "inline-block"
    hideProjectsButton.style.display = "none"
   // mainDiv.style.height = "370px"
    projectsDiv.innerHTML = ""
    doUndropAnimationProjects()
}

function showBio() {
    showProjectsButton.style.display = "none"
    showBioButton.style.display = "none"
    showSkillsButton.style.display = "none"
    hideBioButton.style.display = "inline-block"
   // mainDiv.style.height = "820px"
    bioDiv.innerHTML = `
    <p class="bioDetails"><b>Thanks For clicking on me!</b></p>
    <p>if somehow you didn't catch my name, it is <b>Mahziar Karimifar</b>
    <br>
    <br>
    I am 16 years old and soon i'll turn 17 witch gets me excited<br>
    about getting my driver's license a year later.
    <br>
    <br>
    i also Wacth anime.
    <br>
    i have watched aot,jojo,jujusto kaison, opm, hell's paradise,tokyo revenger and ghoul<br>
    my favorite anime tho is ofcourse Jojo and my fav character is Diavolo from golden wind.</p>
    <br>
    <p>And for games i play R6 And Some chess!</p>
    <!--
    <button id="showSocials" onclick="doSocialAnimations()">SOCIALS</button>
    -->
    `
    doDropAnimationBio()
}

function hideBio() {
    showBioButton.style.display = "inline-block"
    showProjectsButton.style.display = "inline-block"
    showSkillsButton.style.display = "inline-block"
    hideBioButton.style.display = "none"
   // mainDiv.style.height = "370px"
    bioDiv.innerHTML = ""
    doUndropAnimationBio()
}
/*
function changeBg() {
    mainDiv.style.background = "none"
    mainDiv.style.animationName = "changeDiv"
    mainDiv.style.animationDuration = "3s"
    mainDiv.style.background = "white"

}
function changeBg2() {
    mainDiv.style.animationName = "changeDiv2"
    mainDiv.style.animationDuration = "2s"
    mainDiv.style.background = "none"
    mainDiv.style.height = "390px"
}
*/
function doDropAnimationSkills() {
    mainDiv.style.animationName = "doDropAnimationSkills"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfs1'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "900px"
    mainDiv.style.background = "white"
    body.style.height = '920px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}

function doUndropAnimationSkills() {
    mainDiv.style.animationName = "doUndropAnimationSkills"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfs2'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "500px"
    mainDiv.style.background = "none"
    body.style.height = '628px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}

function doDropAnimationBio() {
    mainDiv.style.animationName = "doDropAnimationBio"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfb1'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "910px"
    mainDiv.style.background = "white"
    body.style.height = '930px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}

function doUndropAnimationBio() {
    mainDiv.style.animationName = "doUndropAnimationBio"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfb2'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "500px"
    mainDiv.style.background = "none"
    body.style.height = '628px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}

function doDropAnimationProjects() {
    mainDiv.style.animationName = "doDropAnimationProjects"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfp1'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "1130px"
    mainDiv.style.background = "white"
    body.style.height = '1150px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}
function doUndropAnimationProjects() {
    mainDiv.style.animationName = "doUndropAnimationProjects"
    mainDiv.style.animationDuration = "2s"
    body.style.animationName = 'ebfp2w'
    body.style.animationDuration = '1s'
    mainDiv.style.height = "500px"
    mainDiv.style.background = "none"
    body.style.height = '628px'
    body.style.backgroundImage = 'url("styles/bgNew.jpg")'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}
let body = document.body;
    topNav = document.getElementById(`topnav`),
    showMoreFeatures = document.querySelector(`.features`),
    showMoreCompanys = document.querySelector(`.companys`),
    iconArrowDown = document.querySelectorAll(`.icon-arrow-down`),
    features = document.getElementById(`feature`),
    company = document.getElementById(`company`),
    conatinerMenuIcon = document.getElementById(`menu-icon`),
    makeParagraph = document.getElementById(`make-paragraph`);


const showAllFeatures = () => {
    features.addEventListener(`click`, () => {

        if (showMoreFeatures.style.display === `block` && iconArrowDown[0].style.transform === `rotate(180deg)`) {
            showMoreFeatures.style.display = `none`;
            iconArrowDown[0].style.animationName = `turn-back`;
            iconArrowDown[0].style.transform = `rotate(0deg)`;
        } else {
            showMoreFeatures.style.display = `block`;
            iconArrowDown[0].style.animationName = `turn`;
            iconArrowDown[0].style.transform = `rotate(180deg)`;
        }
    
        document.onclick = function(e){
            if(e.target.id !== `feature` && e.target.className !== `show-more features` && e.target.className !== `li` && e.target.className !== `icon`){
                showMoreFeatures.style.display = `none`;
                showMoreCompanys.style.display = `none`;
                for (let i = 0; i < iconArrowDown.length; i++) {
                    iconArrowDown[i].style.animationName = `turn-back`;
                    iconArrowDown[i].style.transform = `rotate(0deg)`;
                }
            }
        };
    
    });
}


const showAboutCompany = () => {
    company.addEventListener(`click`, () => {

        if (showMoreCompanys.style.display === `block` && iconArrowDown[1].style.transform === `rotate(180deg)`) {
            showMoreCompanys.style.display = `none`;
            iconArrowDown[1].style.animationName = `turn-back`;
            iconArrowDown[1].style.transform = `rotate(0deg)`;
        } else {
            showMoreCompanys.style.display = `block`;
            iconArrowDown[1].style.animationName = `turn`;
            iconArrowDown[1].style.transform = `rotate(180deg)`;
        }

        
        document.onclick = function(e){
            // Wenn alle Konditionen true(wahr) sind dann setzt der Display bei showMoreCompanys auf none
            if(e.target.id !== `company` && e.target.className !== `show-more companys` && e.target.className !== `li`){
                showMoreFeatures.style.display = `none`;
                showMoreCompanys.style.display = `none`;
                for (let i = 0; i < iconArrowDown.length; i++) {
                    iconArrowDown[i].style.animationName = `turn-back`;
                    iconArrowDown[i].style.transform = `rotate(0deg)`;
                }
            }
        };

    });
}

const changeMenuIcon = () => { 
    conatinerMenuIcon.addEventListener(`click`, () => {
        conatinerMenuIcon.classList.toggle(`change`);

        if(topNav.style.display === `block`){
            topNav.style.display = `none`;
            body.style.background = `#f0f0f0`;
        } else {
            topNav.style.display = `block`
            body.style.background = `hsl(0, 0%, 60%)`;
        }
    });
}

showAllFeatures()
showAboutCompany()
changeMenuIcon()
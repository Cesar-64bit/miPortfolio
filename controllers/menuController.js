const links = {
    linkAboutMe: "/",
    linkPorfolio: "/portfolio",
    linkLearn: "/learn"
}

const paginaSobreMi = (req, res) => {
    res.render('main/aboutMe.html', {
        title: "About me",
        image: "aboutme",
        links
    });
};

const paginaPortfolio = (req, res) => {
    res.render('main/portfolio.html', {
        title: "Portfolio",
        image: "portfolio",
        links
    });
};

const paginaAprender = (req, res) => {
    res.render('main/learn.html', {
        title: "Learn",
        image: "learn",
        links
    });
};

const paginaExercises = (req, res) => {
    res.render('main/exercises.html', {
        title: "Exercises"
    });
};

export {
    paginaSobreMi,
    paginaPortfolio,
    paginaAprender,
    paginaExercises
};
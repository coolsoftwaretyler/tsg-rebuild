(function () {
    var jesse = {
        name: 'Jesse Stout',
        pronouns: 'He/Him/His',
        bio: 'Jesse is passionate about reducing the harms of incarceration. Previously, Jesse advocated for criminal justice reform as Policy Director of the nonprofit Legal Services for Prisoners with Children. A graduate of Brown University and UC Hastings College of the Law, he helped start the Students for Sensible Drug Policy chapters at both schools. He has received awards including the Daily Journal CLAY Award (2016), SF Human Rights Commission HERO Award for Organizations Advancing Civil Rights (2014), SF Board of Supervisors Certificate of Honor (2014), the NORML Student Activist Award (2010), and the High Times Freedom Fighter of the Month Award (2007). Jesse practices business law with Greenbridge Corporate Counsel, and is based in San Francisco.'
    }
    var richard = {
        name: 'Richard Juang',
        pronouns: '',
        bio: "Richard M. Juang, Esq. is THC Staffing Group's new Diversity and Inclusion Consultant. Richard is the principal attorney for the Law Office of Richard M. Juang where he advises nonprofits, small businesses, and individual clients on employment, business transactions, and regulatory compliance. In the cannabis sector, Richard drafted the Minority Cannabis Business Association model state legislation for cannabis legalization. He also served the Massachusetts Cannabis Control Commission as a contract attorney for writing the state's licensing regulations. For other sectors, he has worked on a wide range of matters involving the intersection of law, diversity and inclusion, and socioeconomic justice including environmental justice legislation and regulations, transgender civil rights, and HIV/AIDS care. Richard is admitted to practice in the Commonwealth of Massachusetts and is a graduate of Northeastern University. Richard lives in South Hadley, Massachusetts."
    }
    var tiffany = {
        name: 'Tiffany Hogan',
        pronouns: 'She/Her/Hers',
        bio: "Tiffany helps cannabis businesses find diverse talent as a recruiter for THC Staffing Group. She works with a variety of companies and candidates from across the country. A former associate director of employer relations at the Sloan School of Management at Massachusetts Institute of Technology, she has 20 years of experience in recruiting, marketing and operations. Tiffany is a volunteer with Women Grow Boston, a networking organization for women in the cannabis industry. She holds a BS in Business Administration from UNC-Chapel Hill and an MBA from Simmons School of Management. She is based in the Boston area."
    }

    var name = document.getElementById("staffName");
    var pronouns = document.getElementById("staffPronouns");
    var bio = document.getElementById("staffBio");

    var jesseHeadshot = document.getElementById("jesseHeadshot");
    var richardHeadshot = document.getElementById("richardHeadshot");
    var tiffanyHeadshot = document.getElementById("tiffanyHeadshot");

    var clearActiveHeadshots = function() {
        jesseHeadshot.parentElement.classList.remove("active");
        richardHeadshot.parentElement.classList.remove("active");
        tiffanyHeadshot.parentElement.classList.remove("active");
    }
    var swapBio = function(staffer) {
        name.innerText = staffer.name;
        pronouns.innerText = staffer.pronouns;
        bio.innerText = staffer.bio;
    }
    var selectStaffer = function (target) {
        var selectedStaffer = target.dataset.staffer;

        switch (selectedStaffer) {
            case "jesse":
                swapBio(jesse);
                clearActiveHeadshots();
                jesseHeadshot.parentElement.classList.add("active");
                return;
            case "richard":
                swapBio(richard);
                clearActiveHeadshots();
                richardHeadshot.parentElement.classList.add("active");
                return;
            case "tiffany":
                swapBio(tiffany);
                clearActiveHeadshots();
                tiffanyHeadshot.parentElement.classList.add("active");
                return;
        }
    }

    jesseHeadshot.addEventListener("click", function (e) {
        selectStaffer(e.target);
    });
    richardHeadshot.addEventListener("click", function (e) {
        selectStaffer(e.target);
    });
    tiffanyHeadshot.addEventListener("click", function (e) {
        selectStaffer(e.target);
    });

})();
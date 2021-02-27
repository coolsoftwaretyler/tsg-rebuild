(function () {
    var richard = {
        name: 'Richard Juang',
        pronouns: '',
        bio: "Richard M. Juang, Esq. is THC Staffing Group's Diversity and Inclusion Consultant. Richard is the principal attorney for the Law Office of Richard M. Juang where he advises nonprofits, small businesses, and individual clients on employment, business transactions, and regulatory compliance. In the cannabis sector, Richard drafted the Minority Cannabis Business Association model state legislation for cannabis legalization. He also served the Massachusetts Cannabis Control Commission as a contract attorney for writing the state's licensing regulations. For other sectors, he has worked on a wide range of matters involving the intersection of law, diversity and inclusion, and socioeconomic justice including environmental justice legislation and regulations, transgender civil rights, and HIV/AIDS care. Richard is admitted to practice in the Commonwealth of Massachusetts and is a graduate of Northeastern University. Richard lives in South Hadley, Massachusetts."
    }
    var tiffany = {
        name: 'Tiffany Hogan',
        pronouns: 'She/Her/Hers',
        bio: "Tiffany helps cannabis businesses find diverse talent as a recruiter for THC Staffing Group. She works with a variety of companies and candidates from across the country. A former associate director of employer relations at the Sloan School of Management at Massachusetts Institute of Technology, she has 20 years of experience in recruiting, marketing and operations. Tiffany is a volunteer with Women Grow Boston, a networking organization for women in the cannabis industry. She holds a BS in Business Administration from UNC-Chapel Hill and an MBA from Simmons School of Management. She is based in the Boston area."
    }

    var name = document.getElementById("staffName");
    var pronouns = document.getElementById("staffPronouns");
    var bio = document.getElementById("staffBio");

    var richardHeadshot = document.getElementById("richardHeadshot");
    var tiffanyHeadshot = document.getElementById("tiffanyHeadshot");

    var clearActiveHeadshots = function() {
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
    richardHeadshot.addEventListener("click", function (e) {
        selectStaffer(e.target);
    });
    tiffanyHeadshot.addEventListener("click", function (e) {
        selectStaffer(e.target);
    });

})();
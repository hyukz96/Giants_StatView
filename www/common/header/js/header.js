//header.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("toggle");
    const navMove = document.querySelector('.mobile_nav');

    if (menuToggle && navMove) {
        navMove.style.top = navMove.style.top || "-500%";

        menuToggle.addEventListener('click', function() {
            if (navMove.style.top === "-500%") {
                navMove.style.top = "0";
            } else {
                navMove.style.top = "-500%";
            }
        });

        document.addEventListener('click', function(event) {
            if (!navMove.contains(event.target) && event.target !== menuToggle) {
                navMove.style.top = "-500%";
            }
        });
    }

    const highLight = document.querySelectorAll('.nav-wrap ul li span');

    highLight.forEach(span => {
        span.parentElement.addEventListener('mouseover', function() {
            span.style.display = "inline";
        });

        span.parentElement.addEventListener('mouseout', function() {
            span.style.display = "none";
        });
    });

    function goToPage(page) {
        window.location.href = page;
    }

    document.getElementById("entry").addEventListener('click', function(){
        goToPage('/subpage/entrycall/entrycall.html');
    });
    document.getElementById("firstTeam").addEventListener('click', function(){
        goToPage('/subpage/firstteam/firstteam.html');
    });
    document.getElementById("futuresTeam").addEventListener('click', function(){
        goToPage('/subpage/futuresteam/futuresteam.html');
    });
});
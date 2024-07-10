$(document).ready(function(){
    $("#modalChoice").load("../../common/pop_ups/modal-choice/modal-choice.html", function(){
        const choiceModal = document.getElementById("choice");
        const clickPlayer = document.querySelector('.player_info');

        clickPlayer.addEventListener("click", function(){
            if (choiceModal) {
                choiceModal.style.display = "none";
            }

            if (choiceModal.style.display === "none") {
                choiceModal.style.display = "block"
            } else {
                choiceModal.style.display = "none";
            }
        });
        
        const closeChoice = document.getElementById("ChoiceClose");
        closeChoice.addEventListener("click", function(){
            if (choiceModal) {
                choiceModal.style.display = "block";
            }

            if (choiceModal.style.display === "block") {
                choiceModal.style.display = "none"
            }
        });
    });
});
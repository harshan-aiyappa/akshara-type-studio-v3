var closeButton = document.getElementById('closeButton');
var modal = document.getElementById("donationBoxModel");

closeButton.addEventListener('click', function(){
    modal.parentElement.style.display = modal.style.display = "none";
})

function showModal(){
       modal.style.display = modal.parentElement.style.display = "block";
}


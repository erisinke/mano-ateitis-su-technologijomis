var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}


window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
document.getElementById('scrollToTopButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function() {
  const discordIcon = document.querySelector(".discord-icon");
  const dialogBox = document.createElement("div");
  dialogBox.classList.add("dialog-box");
  dialogBox.textContent = "Copied!";
  discordIcon.appendChild(dialogBox);

  discordIcon.addEventListener("click", function() {
    // Copy text to clipboard (you can replace it with your desired text)
    const textToCopy = "erisinke#8619";
    navigator.clipboard.writeText(textToCopy);

    // Show dialog box
    dialogBox.style.display = "block";

    // Hide dialog box after 2 seconds
    setTimeout(function() {
      dialogBox.style.display = "none";
    }, 2000);
  });
});





//Theme Light and Dark
document.addEventListener('DOMContentLoaded', function(){
  const themeButton = document.getElementById("change-theme");
  const body = document.body;
  
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "light") {
    applyLightTheme();
  }

  themeButton.addEventListener("click", function() {
    if(body.classList.contains("light-theme")) {
      applyDarkTheme();
      localStorage.setItem("theme", "dark");
    }
    else
    {
      applyLightTheme();
      localStorage.setItem("theme", "light");
    }
  });

   function applyLightTheme(){
    body.classList.add("light-theme");
    themeButton.textContent = "Dark Mode";
   }

   function applyDarkTheme(){
    body.classList.remove("light-theme");
    themeButton.textContent = "Light Mode"
   }
});

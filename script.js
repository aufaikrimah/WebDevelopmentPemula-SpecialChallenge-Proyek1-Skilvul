function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
  
    return { name, city, email, zipCode, status };
  }
  
  
  function isNumber(input) {
    return !isNaN(input);
  }
  
  function checkboxIsChecked() {
    return document.getElementById("status").checked;
  }
  
  function validateFormData(data) {
    return (
      data !== null &&
      isNumber(data.zipCode) &&
      checkboxIsChecked(data.status)
    );
  }
  
  function submit() {
      if (validateFormData(handleGetFormData()) == false) {
          return (document.getElementById("warning").innerHTML =
              "Periksa form anda sekali lagi");
      } else {
          return (document.getElementById("warning").innerHTML = "");
      }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
  
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); 
  
        const targetId = link.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId); 
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth", 
          });
        }
      });
    });
  });
  
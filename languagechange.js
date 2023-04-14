function loginForm() {
    document.getElementById("firstContainer").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("firstContainer").style.display = "none";
  }
  
  function myFunction() {
    var input = document.getElementById("passwordinput");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  
  const languageData = {
    en: {
      backToMainPage: "Back to the Main Page",
      showPassword: "Click me",
      submit: "Submit",
      aboutUs: "About Us",
      login: "Login",
      bookAReservation: "Book a Reservation",
      contactUs: "Contact Us",
      committedToYou: "Committed To You",
      eastforge:
        "East Forge Medical is the region's most trusted provider of women's healthcare. We have a highly trained team of medical experts, advanced facilities, and unwavering commitment to the welfare of our patients.",
      healthierPlace: "Making the world a Healthier and a Happier Place",
      history:
        "Established in 1990, East Forge Hospital is one of the most trust-worthy and professional hospital you can find in Albania. With our exceptional team, we will make your experience whilst visiting us, a true worry-free vacation of yours. You just need to come to us!",
      doctorAndFounder: "Doctor and Founder",
      contact: "Contact Us",
    },
    al: {
      backToMainPage: "Kthehu perseri te faqja kryesore",
      showPassword: "Trego Fjalekalimin",
      submit: "Dergo",
      aboutUs: "Rreth Nesh",
      login: "Hyr",
      bookAReservation: "Rezervo një Takim",
      contactUs: "Na Kontaktoni",
      committedToYou: "I përkushtuar për Ju",
      eastforge:
        "East Forge Medical është ofruesi më i besueshëm i shëndetit të grave në rajon. Ne kemi një ekip të stafit të trajnuar në mënyrë të lartë nga ekspertët mjekësorë, objekte të avancuara dhe një angazhim të pandërprerë për mirëqenien e pacientëve tanë.",
      healthierPlace: "Bota më e shëndetshme dhe më e lumtur",
      history:
        "Themeluar në vitin 1990, Spitali East Forge është një nga spitale më të besueshme dhe profesionale që mund të gjeni në Shqipëri. Me ekipin tonë të jashtëzakonshëm, do t'ju bëjmë përvojën tuaj gjatë vizitës tek ne një pushim të vërtetë pa shqetësime të juaja. Ju vetëm duhet të vini te ne!",
      doctorAndFounder: "Doktor & CEO & Themeluesi",
      contact: "Kontakto",
    },
    it: {
      backToMainPage: "Torna alla pagina principale",
      showPassword: "Mostra Password",
      submit: "Invia",
      aboutUs: "Chi Siamo",
      login: "Accedi",
      bookAReservation: "Prenota un Appuntamento",
      contactUs: "Contattaci",
      committedToYou: "Impegnati per te",
      eastforge:
      "East Forge Medical è il fornitore di assistenza sanitaria femminile più affidabile della regione. Abbiamo un team di personale altamente addestrato dagli esperti medici, strutture avanzate e un impegno costante per il benessere dei nostri pazienti.",
      healthierPlace: "Un luogo più sano e felice",
      history:
      "Fondato nel 1990, l'ospedale East Forge è uno dei più affidabili e professionali ospedali che potete trovare in Albania. Con il nostro eccezionale team, faremo sì che la vostra esperienza durante la visita da noi sia un vero riposo senza preoccupazioni. Dovete solo venire da noi!",
      doctorAndFounder: "Dottore & CEO & Fondatore",
      contact: "Contatto",
      },
  };
  
  // Get the language selector element
  const languageSelector = document.getElementById("language-selector");
  
  // Add event listener for language change
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = this.value;
  
    // Update the header title
    const backToMainPage = document.getElementById("backtoMainpage");
    backToMainPage.textContent = languageData[selectedLanguage].backToMainPage;
  
    // Update the navigation links
    const showPassword = document.getElementById("showPassword");
    showPassword.textContent = languageData[selectedLanguage].showPassword;
  
    const submit = document.getElementById("submit");
    submit.textContent = languageData[selectedLanguage].submit;
  
    const aboutUs = document.getElementById("aboutUs");
    aboutUs.textContent = languageData[selectedLanguage].aboutUs;
  
    // Update section 1 text
    const login = document.getElementById("login");
    login.textContent = languageData[selectedLanguage].login;
  
    // Update section 2 text
    const bookAReservation = document.getElementById("bookAReservation");
    bookAReservation.textContent =
      languageData[selectedLanguage].bookAReservation;
  
    const committedToYou = document.getElementById("commited-to-you");
    committedToYou.textContent = languageData[selectedLanguage].committedToYou;
  
    const eastforge = document.getElementById("east-forge");
    eastforge.textContent = languageData[selectedLanguage].eastforge;
  
    const healthierPlace = document.getElementById("healthier-place");
    healthierPlace.textContent = languageData[selectedLanguage].healthierPlace;
  
    const history = document.getElementById("history");
    history.textContent = languageData[selectedLanguage].history;
  
    const doctorAndFounder = document.getElementById("doctor-founder");
    doctorAndFounder.textContent =
      languageData[selectedLanguage].doctorAndFounder;
  
    const contact = document.getElementById("contact");
    contact.textContent = languageData[selectedLanguage].contact;
  });
  
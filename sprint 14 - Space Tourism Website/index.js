// Încarcă fișierul JSON folosind fetch și promisiuni
function loadJsonData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("Fișierul JSON nu a putut fi încărcat");
        }
        return response.json();
      })
      .then((data) => {
        // returnează datele JSON când sunt încărcate cu succes
        resolve(data); 
      })
      .catch((error) => {
        // respinge promisiunea în caz de eroare
        reject(error); 
      });
  });
}

// Încarcă și preia datele JSON
async function loadProgram() {
  try {
    const data = await loadJsonData("data.json");
    const { destinations, crew, technology } = data;

    // Obținem destinațiile direct din fișierul JSON
    const destinationsObj = destinations.reduce((acc, dest) => {
      acc[dest.name.toLowerCase()] = dest; 
      return acc;
    }, {});

    // Obținem rolurile echipajului din fișierul JSON
    const crewObj = crew.reduce((acc, member) => {
      acc[member.role.toLowerCase()] = member;
      return acc;
    }, {});

    // Obținem tehnologiile din fișierul JSON
    const technologyObj = technology.reduce((acc, tech) => {
      acc[tech.name.toLowerCase()] = tech;
      return acc;
    }, {});

    // Setăm event listener pentru destinații, echipaj și tehnologie
    setEventListeners(destinationsObj, crewObj, technologyObj);

  } catch (error) {
    console.error("Eroare la încărcarea fișierului JSON:", error);
  }
}
// Setează event listeners pentru destinație, echipaj și tehnologie
function setEventListeners(destinations, crew, technology) {
  document.getElementById("destination").addEventListener("click", () => {
    getDestinationInfo(destinations.moon); // Default to Moon
    document.body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg.png')";
  });

  document.getElementById("crew").addEventListener("click", () => {
    getCrewInformation(crew.commander); // Default to Commander
    document.body.style.backgroundImage = "url('assets/crew/background-crew-desktop.png')";
  });

  document.getElementById("technology").addEventListener("click", () => {
    getTechnologyInfo(technology["launch vehicle"]); // Default to Launch Vehicle
    document.body.style.backgroundImage = "url('assets/technology/background-technology-desktop.jpg')";
    updateTechnologyStyles(0); // Highlight launch vehicle button
  });

   // Setează evenimente pentru destinații dinamic
  Object.keys(destinations).forEach(name => {
    const button = document.createElement('button');
    button.classList.add('planet');
    button.id = `explore-${name}`;
    button.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    // Adaugă butonul în HTML
    document.querySelector('.information-planet .mb38').appendChild(button); 

    button.addEventListener("click", () => {
      getDestinationInfo(destinations[name]);
      document.body.style.backgroundImage = `url('assets/destination/background-destination-desktop.jpg.png')`;
    });
  });

  // Setează evenimente pentru echipaj dinamic
  Object.keys(crew).forEach(role => {
    const button = document.createElement('button');
    button.classList.add('crew-button');
    button.id = `${role}-button`;
    // Adaugă butonul în HTML
    document.querySelector('.next-crew').appendChild(button); 

    button.addEventListener("click", () => {
      getCrewInformation(crew[role]);
    });
  });

  // Setează evenimente pentru tehnologie dinamic
  Object.keys(technology).forEach((name, index) => {
    const button = document.createElement('button');
    button.classList.add('button-tech');
    button.id = `technology${index + 1}`;
    button.textContent = index + 1;
    // Adaugă butonul în HTML
    document.querySelector('.container-technology .button').appendChild(button); 

    button.addEventListener("click", () => {
      getTechnologyInfo(technology[name]);
      updateTechnologyStyles(index);
    });
  });
}

// Funcție pentru a actualiza stilurile butoanelor de tehnologie
function updateTechnologyStyles(index) {
  const buttons = ["technology1", "technology2", "technology3"];
  buttons.forEach((btn, idx) => {
    document.getElementById(btn).style.backgroundColor = idx === index ? 'white' : 'black';
  });
}

// Funcția care afișează informațiile destinației selectate
function getDestinationInfo(destination) {
  setImage("destination-image", destination.images);

  document.getElementById("nameDestination").textContent = destination.name;
  document.getElementById("destinationDescription").textContent = destination.description;
  document.getElementById("destinationDistance").textContent = destination.distance;
  document.getElementById("destinationTravel").textContent = destination.travel;

  toggleSections("destination-section");
}

// Funcția care afișează informațiile despre echipajul selectat
function getCrewInformation(crewMember) {
  setImage("crew-image", crewMember.images);

  document.getElementById("crew-name").textContent = crewMember.name;
  document.getElementById("crew-role").textContent = crewMember.role.toUpperCase();
  document.getElementById("crew-bio").textContent = crewMember.bio;

  toggleSections("crew-section");
}

// Funcția care afișează informațiile despre tehnologia selectată
function getTechnologyInfo(technology) {
  setImage("technology-image", technology.images);

  document.getElementById("technology-name").textContent = technology.name;
  document.getElementById("technology-description").textContent = technology.description;

  toggleSections("technology-section");
}

// Funcție comună pentru a ascunde toate secțiunile și a arăta una specifică
function toggleSections(activeSection) {
  const sections = ["destination-section", "crew-section", "technology-section"];
  sections.forEach(section => {
    document.getElementById(section).style.display = section === activeSection ? "block" : "none";
  });
  document.querySelector(".container").style.display = "none";
  document.getElementById("home").addEventListener("click", backToHome);
}

// Funcție pentru setarea imaginii
function setImage(elementId, imageObject) {
  const imageElement = document.getElementById(elementId);
  if (imageObject && imageObject.png) {
    imageElement.src = imageObject.png;
  } else {
    console.error("Imaginea nu există sau nu este definită în JSON!");
  }
}

// Funcție pentru a reveni la pagina principală
function backToHome() {
  document.querySelector(".container").style.display = "block";
  document.getElementById("destination-section").style.display = "none";
  document.getElementById("crew-section").style.display = "none";
  document.getElementById("technology-section").style.display = "none";

  document.body.style.backgroundImage = "url('assets/home/background-home-desktop.jpg.png')";
}

loadProgram();
const signupForm = document.getElementById('signup-form');

if(signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche la page de se recharger
        alert("Compte créé avec succès ! Bienvenue chez Molapay.");
        window.location.href = "dashboard.html"; // On créera cette page après
    });
}

// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            // On peut ajouter une petite animation ici
            console.log("Inscription validée !");
            
            // REDIRECTION : c'est cette ligne qui fait le lien
            window.location.href = "dashboard.html"; 
        });
    }
});

console.log("Le fichier JS est bien chargé !");

const WHATSAPP_NUMBER = "243895960400";
const COMMISSION_RATE = 0.10;

let currentService = "";
let currentType = "";

function openForm(service, type) {
  currentService = service;
  currentType = type;
  document.getElementById("serviceTitle").innerText = service;
  document.getElementById("modal").style.display = "block";
}

function closeForm() {
  document.getElementById("modal").style.display = "none";
}

function calculate() {
  const amount = Number(document.getElementById("amount").value) || 0;
  const commission = amount * COMMISSION_RATE;
  const total = amount + commission;

  document.getElementById("commission").innerText = commission.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

function sendWhatsApp() {
  const detail = document.getElementById("detail").value;
  const duration = document.getElementById("duration").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;
  const commission = document.getElementById("commission").innerText;
  const total = document.getElementById("total").innerText;

  const message = `
🧾 COMMANDE CLIENT

Service : ${currentService}
Type : ${currentType}
Détails : ${detail}
Durée / Quantité : ${duration}
Email : ${email}

Montant : ${amount} $
Commission : ${commission} $
Total à payer : ${total} $
`;

  window.open(
    https-//wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)},
    "_blank"
  );
}

function sendToWhatsApp() {
    // 1. On récupère les données saisies par le client
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const service = document.getElementById('userService').value;

    // Vérification de sécurité
    if (name === "" || email === "") {
        alert("S'il vous plaît, remplissez votre nom et votre email.");
        return;
    }

    // 2. Le texte que TU vas recevoir sur WhatsApp
    // Le \n sert à sauter une ligne pour que ce soit propre
    const message = "Bonjour Molapay,\n\n" +
                    "Je souhaite m'inscrire :\n" +
                    "• Nom : " + name + "\n" +
                    "• Email : " + email + "\n" +
                    "• Service choisi : " + service + "\n\n" +
                    "Merci de me guider pour la suite.";

    // 3. Ton numéro de téléphone (Format international sans le +)
    const monNumero = "243895960400"; 

    // 4. Création du lien WhatsApp
    const url = "https://wa.me/" + monNumero + "?text=" + encodeURIComponent(message);

    // 5. Ouverture de la discussion
    window.open(url, '_blank');
}


function sendToWhatsApp() {
  const service = service.value;
  const type = document.getElementById("type").value;
  const detail = detailInput.value;
  const duration = durationInput.value;
  const email = emailInput.value;
  const amount = amountInput.value;
  const commission = document.getElementById("commission").innerText;
  const total = document.getElementById("total").innerText;

  const message = `
🧾 COMMANDE CLIENT

Service : ${service}
Type : ${type}
Détail : ${detail}
Durée : ${duration}
Email : ${email}

Montant service : ${amount} $
Commission : ${commission} $
Total à payer : ${total} $
`;

  
}

document.querySelectorAll(".select-service-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = this.closest(".service-card");
    if (!card) return;

    const service = card.getAttribute("data-service");
    const type = card.getAttribute("data-type");

    document.getElementById("service").value = service;
    document.getElementById("type").value = type;

    // 🔥 OUVRIR LE FORMULAIRE
    document.getElementById("orderForm").style.display = "block";

    console.log("Formulaire ouvert pour :", service, type);
  });
});

function sendWhatsApp() {

  const detail = document.getElementById("detail")?.value || "";
  const duration = document.getElementById("duration")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const amount = document.getElementById("amount")?.value || "";

  if (!detail || !amount) {
    alert("Veuillez remplir les champs obligatoires");
    return;
  }

  const message = `
🧾 DEMANDE DE PAIEMENT

Détail produit :
${detail}

Durée / Quantité :
${duration}

Email du compte (si abonnement) :
${email}

Montant du service :
${amount} $
`;

  const whatsappURL =
    "https://wa.me/243895960400?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const burger = document.getElementById("burger");

burger.addEventListener("click", function() {
    alert("Ça clique !");
});
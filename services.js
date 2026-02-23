
let currentService = "";
let currentType = "";

function openForm(service, type) {
  currentService = service;
  currentType = type;

  document.getElementById("serviceTitle").innerText = service;
  document.getElementById("modal").style.display = "block";

  // reset formulaire
  document.getElementById("detail").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("email").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("commission").innerText = "0";
  document.getElementById("total").innerText = "0";
}

function closeForm() {
  document.getElementById("modal").style.display = "none";
}

function calculate() {
  const amount = parseFloat(document.getElementById("amount").value) || 0;
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

  if (!amount) {
    alert("Veuillez entrer le montant du service.");
    return;
  }

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

  
}
const COMMISSION_RATE = 0.10;

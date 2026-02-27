let currentRate = 0;
let currentService = "";
let currentType = "";

function openForm(service, rate, type) {
    currentService = service;
    currentRate = rate;
    currentType = type;

    document.getElementById('formTitle').innerText = service;
    document.getElementById('mainForm').style.display = "block";
    
    // Afficher les bons champs
    document.getElementById('intlFields').style.display = (type === 'intl') ? 'block' : 'none';
    document.getElementById('digitalFields').style.display = (type === 'digital') ? 'block' : 'none';
    
    // Reset des champs
    document.getElementById('amount').value = "";
    document.getElementById('totalDisplay').innerText = "0.00 $";
}

function closeForm() {
    document.getElementById('mainForm').style.display = "none";
}

function calculate() {
    let amount = document.getElementById('amount').value;
    if (amount > 0) {
        let total = (amount * currentRate).toFixed(2);
        document.getElementById('totalDisplay').innerText = total + " $";
        updateWhatsApp(amount, total);
    }
}

function updateWhatsApp(orig, tot) {
    // ⚠️ REMPLACE LES X PAR TON NUMÉRO CI-DESSOUS
    const phone = "243895960400"; 
    let details = "";

    if (currentType === 'intl') {
        let link = document.getElementById('itemLink').value;
        let desc = document.getElementById('itemDetails').value;
        details = "%0A*Lien:* " + link + "%0A*Détails:* " + desc;
        } else {
        // Partie pour les abonnements numériques
        let email = document.getElementById('accountEmail').value;
        let typeAbonnement = document.getElementById('subType').value; // Récupère Basic, Classique ou Premium
        
        details = "%0A*Forfait:* " + typeAbonnement + "%0A*Email Compte:* " + email;
    }

    // Message construit proprement pour éviter les erreurs
    let text = "COMMANDE MOLAPAY*%0A*Service: " + currentService + details + "%0A*Montant:* " + orig + "$%0A*TOTAL À PAYER:* " + tot + "$";
    
    document.getElementById('waLink').href = "https://wa.me/" + phone + "?text=" + text;
}
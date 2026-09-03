const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent('Demande de devis — NAOW OR NEVER');
  const body = encodeURIComponent(
    `Nom : ${data.get('nom')}\nE-mail : ${data.get('email')}\nTéléphone : ${data.get('telephone')}\n` +
    `Type : ${data.get('type')}\nDate : ${data.get('date')}\nInvités : ${data.get('invites')}\n` +
    `Prestations : ${data.get('prestations')}\n\nProjet :\n${data.get('message')}`
  );
  // À personnaliser : remplacez l'adresse ci-dessous par l'e-mail professionnel de NAOW OR NEVER.
  window.location.href = `mailto:VOTRE-EMAIL@EXEMPLE.FR?subject=${subject}&body=${body}`;
  document.getElementById('formStatus').textContent =
    'Votre logiciel de messagerie va s’ouvrir. Pensez à remplacer l’adresse e-mail dans script.js avant mise en ligne.';
});

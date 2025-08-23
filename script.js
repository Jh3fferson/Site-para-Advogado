const barra = document.getElementById('top-bar');
const secoes = document.querySelectorAll('.secao');
const links = document.querySelectorAll('a');
const consulte = document.getElementById('consulta')


consulte.addEventListener('click', function () {

  const mailtoLink = `https://docs.google.com/forms/d/e/1FAIpQLSd8y_kR56n7sRV-JidMuqgRhFZQLCnvi9X0A_ToKinScXgB-g/viewform?usp=header`;

  window.location.href = mailtoLink;
});

// Função para esconder todas as seções
function esconderSecoes() {
  secoes.forEach(secao => {
    secao.style.opacity = 0;
    secao.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      secao.style.display = 'none';
    }, 500);
  });
}

// Função para mostrar a seção clicada
function mostrarSecao(id) {
  esconderSecoes();
  const secao = document.querySelector(id);
  if (secao) {
    setTimeout(() => {
      secao.style.display = 'flex';
      secao.style.opacity = 0;
      setTimeout(() => {
        secao.style.opacity = 1;
      }, 50);
    }, 500);
  }
}

// Ao carregar a página, mostrar só o "Início"
document.addEventListener('DOMContentLoaded', () => {
  secoes.forEach(secao => secao.style.display = 'none');
  mostrarSecao('#Inicio');
});

// Adicionar evento de clique nos links
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o pulo automático
    links.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
    const destino = link.getAttribute('href');
    mostrarSecao(destino);
  });
});

const saibaMais = document.getElementById('saiba-mais');

saibaMais.addEventListener('click', function (e) {
  e.preventDefault(); // impede o comportamento padrão do link

  // Remove a classe ativo de todos os links
  links.forEach(l => l.classList.remove("ativo"));

  // Adiciona a classe ativo no link do menu correspondente
  const linkAtuacao = document.querySelector('a[href="#Atuacao"]');
  if (linkAtuacao) linkAtuacao.classList.add("ativo");

  // Mostra a seção "Atuação"
  mostrarSecao('#Atuacao');

  // Scroll suave opcional
  document.querySelector('#Atuacao').scrollIntoView({ behavior: 'smooth' });
});

// Script original da barra fixa
window.addEventListener('scroll', () => {
  const topoDaTela = barra.getBoundingClientRect().top;
  if (topoDaTela <= 0) {
    barra.classList.add('fixa');
  } else {
    barra.classList.remove('fixa');
  }
});

// Função para abrir as abas e exibir o conteúdo
function openTab(evt, tabName) {
  // Esconde todas as abas
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove a classe "active" de todos os botões
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Exibe a aba selecionada
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");

  // Se a aba "Sobre Mim" for selecionada, exibe o texto
  if (tabName === 'sobre') {
      var textoSobre = document.getElementById("sobre-texto");
      textoSobre.style.display = "block"; 
      textoSobre.classList.add("fade-in"); 
  } else {
      var textoSobre = document.getElementById("sobre-texto");
      textoSobre.style.display = "none";
  }

  // Atualiza o histórico do navegador
  history.pushState({ tab: tabName }, "", tabName);
}

// Lida com a navegação de histórico
window.addEventListener("popstate", function(event) {
  var tabName = event.state ? event.state.tab : "sobre"; 
  document.getElementById(tabName).style.display = "block"; 

  // Marca o botão ativo
  document.querySelector('button[onclick="openTab(event, \'' + tabName + '\')"]').classList.add("active");

});
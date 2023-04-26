

function menuLimpa(){
  document.getElementById('idDefinicao').style.display ='none';
  document.getElementById('idHistoria').style.display ='none';
  document.getElementById('idCriador').style.display ='none';
  document.getElementById('idBots').style.display = 'none';
  document.getElementById('idMenuDefinicao').style.color='black';
}

function menuDefinicao(){
  menuLimpa();
  document.getElementById('idDefinicao').style.display ='block';
  document.getElementById('idMenuDefinicao').style.color='blue';
}
function menuHistoria(){
  menuLimpa();
  document.getElementById('idHistoria').style.display ='block';
  document.getElementById('idMenuHistoria').style.color='blue';
  
}
function menuCriador(){
  menuLimpa();
  document.getElementById('idCriador').style.display = 'block';
  document.getElementById('idMenuCriador').style.color='blue';
}

function outraPagina(){
  menuLimpa();
  document.getElementById('idBots').style.display = 'block';
  document.getElementById('idMenuOutraPagina').style.color='blue';
}
function Menu(){
  document.getElementById().style.display
}
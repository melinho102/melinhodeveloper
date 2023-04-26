function page2(){
  window.location.href='http://www.google.com.br';
}
function limpaNome(){
  document.getElementById('idMenuDefinicao').style.color='';
  document.getElementById('idMenuHistoria').style.color='black';
  document.getElementById('idMenuCriador').style.color='black';
  document.getElementById('idMenuOutraPagina').style.color='black';


}

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
  document.getElementById('idMenuHistoria').style.color='black';
  document.getElementById('idMenuOutraPagina').style.color='black';
  
  document.getElementById('idMenuCriador').style.color='black';

  
}
function menuHistoria(){
  menuLimpa();
  document.getElementById('idHistoria').style.display ='block';
  
  document.getElementById('idMenuDefinicao').style.color='black';
  document.getElementById('idMenuHistoria').style.color='blue';
  document.getElementById('idMenuOutraPagina').style.color='black';
  
  document.getElementById('idMenuCriador').style.color='black';

  
}
function menuCriador(){
  menuLimpa();
  document.getElementById('idCriador').style.display = 'block';



  document.getElementById('idMenuDefinicao').style.color='black';
  document.getElementById('idMenuHistoria').style.color='black';
  document.getElementById('idMenuOutraPagina').style.color='black';
  
  document.getElementById('idMenuCriador').style.color='blue';

}

function outraPagina(){
  menuLimpa();
  document.getElementById('idBots').style.display = 'block';
  
  document.getElementById('idMenuDefinicao').style.color='black';
  document.getElementById('idMenuHistoria').style.color='black';
  document.getElementById('idMenuCriador').style.color='black';
  document.getElementById('idMenuOutraPagina').style.color='blue'
}
function Menu(){
  document.getElementById().style.display
}
(function(){
  document.documentElement.classList.add('js');
  var toggle=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Fechar menu de navegação':'Abrir menu de navegação');
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Abrir menu de navegação');
      });
    });
  }
  var dialog=document.querySelector('.lightbox');
  var image=dialog&&dialog.querySelector('img');
  var closeButton=document.querySelector('.lightbox-close');
  var opener=null;
  function close(){
    if(dialog&&dialog.open)dialog.close();
  }
  document.querySelectorAll('.gallery button[data-full]').forEach(function(button){
    button.addEventListener('click',function(){
      if(!dialog||!image)return;
      opener=button;
      image.src=button.getAttribute('data-full');
      var thumb=button.querySelector('img');
      image.alt=thumb?thumb.alt:'Foto ampliada da Pousada Lobo Guará';
      dialog.showModal();
      if(closeButton)closeButton.focus();
    });
  });
  if(closeButton)closeButton.addEventListener('click',close);
  if(dialog){
    dialog.addEventListener('click',function(event){
      if(event.target===dialog)close();
    });
    dialog.addEventListener('close',function(){
      if(image)image.removeAttribute('src');
      if(opener)opener.focus();
      opener=null;
    });
  }
})();
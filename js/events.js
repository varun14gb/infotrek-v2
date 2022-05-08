open1=document.getElementsByClassName('open1')[0]
        modalc=document.getElementsByClassName('open1')[1]
        modalb=document.getElementsByClassName('open1')[2]
        close1=document.getElementsByClassName('open1')[3]
        
        open1.addEventListener('click', ()=>{
            modalc.classList.add('modalactive')
            modalb.classList.add('popup')
        });
        
        close1.addEventListener('click', ()=>{
           modalc.classList.remove('modalactive')
           modalb.classList.remove('popup')
        });
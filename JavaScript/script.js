function carregar(){

     var msg = window.document.getElementById('msg')

     var img = window.document.getElementById('imagem')

     var data = new Date()

     var horas = data.getHours()

     //var horas = 11

     msg.innerHTML = `A gora são ${horas} horas`

     if (horas >= 0 && horas < 12 ){

         //BOM DIA
         img.src = 'imagens/pexels-souvenirpixels-1486974.jpg'
          
     }

     else if(horas >= 12 && horas < 18){
        //BOA TARDE
     img.src = 'imagens/pexels-andersonmartins-retratos-2386144 (1).jpg'

     }

     else{
        //BOA NOITE
     img.src = 'imagens/pexels-david-kanigan-239927285-24821865.jpg'

     }
}
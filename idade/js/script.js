function verificar(){
    var data = new Date() //criando variavel para data
    var ano = data.getFullYear() //pegando apenas o ano da data
    var formAno = document.getElementById('txtano') //var responsável por pegar o elemento de id "txtano"
    var res = document.getElementById('res') //var responsável por pegar o elemento de id "res"
    var img = document.createElement('img') //adicionando elemento de imagem através do JS
    img.style.marginTop = '15px' //adicionando espaçamento pois esse elemento não pode ser modificado por CSS
    img.setAttribute('id', 'foto') //adicionando o atributo id de valor 'foto' no elemento imagem criado
    if(formAno.value.length == 0 || Number(formAno.value) > ano){ 
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var definicao = ''
        var adjetivo = ''
        if(fsex[0].checked){
            adjetivo = "um"
            if(idade >=0 && idade <13){
                definicao = "criança"
                img.setAttribute('src','img/criaM.png')
            }
            else if(idade >=13 && idade <22){
                definicao = "jovem"
                img.setAttribute('src','img/jovemM.png')
            }
            else if(idade >=22 && idade <65){
                definicao = "audlto"
                img.setAttribute('src','img/adultoM.png')
            }
            else if(idade >= 65 && idade <130){
                definicao = "idoso"
                img.setAttribute('src','img/idosoM.png')
            }
            else{
                definicao = "fóssil"
                img.setAttribute('src','img/deadM.png')
            }
        }
        else{
            adjetivo = "uma"
            if(idade >=0 && idade <13){
                definicao = "criança"
                img.setAttribute('src','img/criaF.png')
            }
            else if(idade >=13 && idade <22){
                definicao = "jovem"
                img.setAttribute('src','img/jovemF.png')
            }
            else if(idade >=22 && idade <65){
                definicao = "adulta"
                img.setAttribute('src', 'img/adultoF.png')
            }
            else if(idade >= 65 && idade <130){
                definicao = "idosa"
                img.setAttribute('src','img/idosoF.png')
            }
            else{
                definicao = "fóssil"
                img.setAttribute('src','img/deadF.png')
            }
        }
        res.innerHTML = `detectado ${adjetivo} ${definicao} com ${idade} anos`
        res.appendChild(img)//adicionando o elemento img no local do id "res"
    }
}

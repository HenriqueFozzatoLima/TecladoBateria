document.body.addEventListener('keyup', (event)=>{//Adiciona o evento de tocar o áudio cada vez que uma tecla for apertada na tela inteira.
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;//Pega o valor do input e armazena na variável song
    if (song != '') {//Se tiver conteúdo no input
        let songArray = song.split('');//Ele divide o texto do input em uma array
        playComposition(songArray);
    }
})
function playSound(sound){//Função que executa o som
    let audioElement = document.querySelector(`#s_${sound}`);//Apos receber a tecla e usa-lá como parâmetro, o valor é armazenado dentro da variável audioElement, seu valor é o áudio salvo e para acessá-lo é necessário encontrar o seu ID, que no caso sera #s_(a tecla pressionada)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)//Essa variável é usada par acessa a tecla na tela, seu uso é para alterar a sua cor ao pressioná-la

    if (audioElement) {//Se o áudio for encontrado
        audioElement.currentTime = 0;//Comando usado para poder usar mais de um áudio ao mesmo tempo
        audioElement.play();//Toca o áudio
    }
    if (keyElement) {//Caso encontre a tecla na tela
        keyElement.classList.add('active');//Adicione o classe active do css que muda a sua cor
        setTimeout(()=>{//Usado para a cor sumir depois de 300 milisegundos
            keyElement.classList.remove('active');
        },300)
    }
}
function playComposition(songArray) {//Comando para tocar uma composição inteira  pelo input, recebendo o texto do input que foi convertido em array
    let wait = 0;
    
    for (let songItem of songArray) {//
        setTimeout(()=>{
            playSound(`key${songItem}`);//Executa o toque da música recebedo a letra que foi pressionada, essa letra que é um item da array que foi dividida
        }, wait)
        
        wait += 250;//Usado para haver um intervalo de tempo em cada tecla. Isso é necessário por conta de que ao fazer um loop tocando todas as teclas pressionadas no array, ela irá ocorrer ao mesmo tempo, havendo então uma necessidade de separar ela através de uma variável que irá aumentar o tempo para tocar e então voltar ao zero ao tocar a próxima tecla
    }
}
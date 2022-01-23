console.log('[andreziin] Flappy Bird');

const sprites = new Image();
sprites,src = './sprites.png'; 
/* um codigo que cria uma imagem no JavaScript com new image()
e associa uma url a ela com sprites.src */

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');
//define que é um jogo 2d

const FlappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura:34,
    altura:24,
    x: 10,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites,
            FlappyBird.spriteX, FlappyBird.spriteY, //Sprite X, Sprite Y
            FlappyBird.largura, FlappyBird.altura, //Tamanho do recorte na sprite
            FlappyBird.x, FlappyBird.y,
            FlappyBird.largura, FlappyBird.altura
        );
    },
};

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura:224,
    altura:112,
    x: 10,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, //Sprite X, Sprite Y
            chao.largura, chao.altura, //Tamanho do recorte na sprite
            chao.x, chao.y,
            chao.largura, chao.altura
        ); 
        
    },
    
};

const fundo = {
    spriteX: 389,
    spriteY: 0,
    largura:277,
    altura:204,
    x: 10,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites,
            fundo.spriteX, fundo.spriteY, //Sprite X, Sprite Y
            fundo.largura, fundo.altura, //Tamanho do recorte na sprite
            fundo.x, fundo.y,
            fundo.largura, fundo.altura
        ); 
        
    }

};

function loop(){
    FlappyBird.desenha();

    requestAnimationFrame(loop)
}

loop();
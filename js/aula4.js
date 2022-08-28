let letra = prompt('Digite uma letra do alfabeto');
letra = letra.toLowerCase();
if(!typeof(letra)=='string' || letra.length!== 1){
    alert('Deve digitar uma letra do alfabeto para obter um resultado!');
}else if(letra == 'a'|| letra == 'e'|| letra == 'i'|| letra == 'o'|| letra == 'u'){
    alert('A letra digitada é uma vogal!');
}else {
    alert('A letra digitada é uma consoante');
}

{
    let recebeAnimal = prompt('Qual o seu animal de estimação?')
    recebeAnimal = recebeAnimal[0].toUpperCase() + recebeAnimal.substring(1);

    switch(recebeAnimal){
        case "Cachorro" :
        case "Gato":
        case "Coelho":
            alert("Nossos serviços disponiveis para " + recebeAnimal + " são banho e tosa e ração.");
        break;
        case "Cavalo":
        case "Cabra":
        case "Jumento":
            alert(" Vendemos ração para " + recebeAnimal +  " e encaminhamos para um veterinário especializado.");
        break;
        case "Rato":
            alert("Para " + recebeAnimal + " vendemos ração e gaiolas especiais.");
        break;    
        case "Passarinho":
            alert("Venderemos ração para " +recebeAnimal+ " e oferecemos um serviço de implante de rastreador.");
        break;
        default:
            alert("Infelizmente não podemos atender " +recebeAnimal+ ".");

    }
}
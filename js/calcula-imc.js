//seletor de ID - #
var pacientes = document.querySelectorAll(".paciente");//array

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //Validações de peso e altura
    var pesoValido = true;//bool
    var alturaValida = true;

    // if (peso <= 0 || peso > 635) {
    //     console.log("Peso inválido");
    //     pesoValido = false;
    //     tdImc.textContent = "Peso inválido!";
    //     //paciente.style.backgroundColor = "lightcoral";
    //     paciente.classList.add("paciente-invalido");
    // }

    // if (altura <= 0 || altura > 3.0) {
    //     console.log("Altura inválido");
    //     alturaValida = false;
    //     tdImc.textContent = "Altura inválida!";
    //     paciente.classList.add("paciente-invalido");
    // }

    if (!alturaValida && !pesoValido) {
        tdImc.textContent = "Peso e Altura inválidos!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        //var imc = peso / Math.pow(altura, 2);
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}


function validaPeso(peso){
    if (peso >= 0 && peso < 635) {
        return true;
}else{
    return false;
}
}
function validaAltura(altura){
if(altura > 0 && altura < 3.0){
    return true;
}else{
    return false;
}
}

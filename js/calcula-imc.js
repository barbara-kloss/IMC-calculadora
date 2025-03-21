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
    var pesoValido = validaPeso(peso);//bool
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        tdImc.textContent = "Peso inválido!";
    }

    if(!alturaValida){
        tdImc.textContent = "Altura inválida!";
    }


    if (!alturaValida && !pesoValido) {
        tdImc.textContent = "Peso e/ou Altura inválidos!";
        // paciente.classList.add("paciente-invalido");
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
    if (peso >= 0 && peso < 600) {
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

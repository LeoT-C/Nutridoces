    var meta = "";
    var idade = document.getElementById("idade")
    var altura = document.getElementById("altura")
    var peso = document.getElementById("peso")
    var contato = document.getElementById("contato")
    var preferencias = document.getElementById("preferencias")

function encaminhar()
{

    opcao = document.getElementsByName("opcao");

    if(opcao[0].checked)
    {
        meta = "Ganhar";
    }
    else if(opcao[1].checked)
    {
        meta = "Perder"
    }
    else
    {
        alert("Selecione sua meta");
        return;
    }
    
    if(idade.value == "" || altura.value == "" || peso.value == "" || contato.value == "" || preferencias.value == "")
    {
        alert("Preencha todos os campos")
        return;
    }
    

    mostrarPopUp();
    
}

function mostrarPopUp()
{
    var fundoEscuro = document.getElementById("fundoEscuro");
    fundoEscuro.style.display = "flex";

    document.getElementById("metaValue").textContent = meta;
    document.getElementById("idadeValue").textContent = idade.value;
    document.getElementById("alturaValue").textContent = altura.value;
    document.getElementById("pesoValue").textContent = peso.value;
    document.getElementById("contatoValue").textContent = contato.value;
    document.getElementById("preferenciasValue").textContent = preferencias.value;

}

function fecharPopUp()
{
    var fundoEscuro = document.getElementById("fundoEscuro");
    fundoEscuro.style.display = "none"
}


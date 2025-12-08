function encaminhar()
{
    var meta = "";
    opcao = document.getElementsByName("opcao");
    var idade = document.getElementById("idade")
    var altura = document.getElementById("altura")
    var peso = document.getElementById("peso")
    var contato = document.getElementById("contato")
    var preferencias = document.getElementById("preferencias")

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

    alert("Meta: " + meta + " peso\n" +
        "Idade: " + idade.value + "\n" +
        "Altura: " + altura.value + " CM \n" +
        "Peso: " + peso.value + "KG \n" +
        "Contato: " + contato.value + "\n" +
        "Preferências: " + preferencias.value + "\n"
    )
    
}



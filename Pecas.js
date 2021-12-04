var ListaDePecas = ["Processadores","Mémorias","ssd","Placas de Vídeos","Fonte de alimentação","Mémorias Ram"]

if (ListaDePecas.length < 10) {
    //É possível o cadastro
    console.log ("É possível o cadastro.")
    } else {
        console.log ("Não é possível  o cadastro, pois a quantidade foi excedida.")
    }


    let peso = 50;
    if(peso<100){
        console.log("A peça deve pesar no mínimo 100g.")
    } else {
        console.log("A peça possui peso adequado.")
    }


    let nomePecas = "A"
    if (nomePecas.length> 3) {
        console.log("Nome da peça esta adequado para o cadastro")
    } else if(nomePecas.length ==0) {
        console.log("Nome da peça nao pode estar vazio.")
    } else{
        console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado.")
    }
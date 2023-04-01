function jogar(val){
    var valor = document.getElementById(val);
    var peca = document.getElementById("item");
    var final = [];

    if(valor.getAttribute("data-clicked") === "false"){  
        valor.innerHTML = peca.innerHTML;
        valor.setAttribute("data-clicked", "true");  
        peca.innerHTML = troca(peca.innerHTML);
        //fubnlcai getAttribute pega o atributoo para comparar ou atribuir/ o setAttribute substitue o valor do atributo
    }
    final = ganhador();

    
    if(final[0] == true){
        document.getElementById("item").innerHTML = ` "${troca(peca.innerHTML)}" ${final[1]}`;
        document.getElementById("reset").style.pointerEvents = "none";
        for(var c = 1; c <= 9; c++){
            document.getElementById(c).style.pointerEvents = "none";
        }

        document.getElementById("reset").innerHTML = 3;
        const timer = setInterval(() =>{
            document.getElementById("reset").innerHTML--;
            if(document.getElementById("reset").innerHTML < 1){
                clearInterval(timer);
                reseta();
            }
        }, 1000);
        /* setTimeout(function(){ 
            reseta(); 
        }, 3000) */
    }
};

//TROCA DE PEÇA
function troca(val){
    if(val == "X" || val == "&nbsp;")
        val = "O";
    
    else if(val == "O")
        val = "X";

    return val;
};

//RESETA O TABULEIRO
function reseta(){
    document.getElementById("item").innerHTML = "X";
    document.getElementById("reset").style.pointerEvents = "auto";
    document.getElementById("reset").innerHTML = "<b>RESET&nbsp;GAME</b>";
    for(var i = 1; i <= 9; i++){
        val = document.getElementById(i);
        val.innerHTML = "&nbsp;";
        val.setAttribute("data-clicked", "false");
        document.getElementById(i).style.pointerEvents = "auto";
    }
};

//GANHAR
function ganhador(){
    var val;
    var lin = 1;
    var li = 3;

    for(li; li <=9; li+=3, lin+=3){
        val = line(lin, li);
        if(val)
            return [true, " Venceu por linha"];
    }

    for(lin = 1, li = 7; lin <= 3; lin++, li++){
        val = colu(lin, li);
        if(val)
            return [true, " Venceu por coluna"];
    }

    val = incl(1, 9);
    if(val)
            return [true,  " Venceu por diaginal esquerda"];
    val = incl(3, 7); 
    if(val)
            return [true, " Venceu por diagonal direita"];
    
    val = empate();
    if(val)
        return [true, " Ultimo/Empate"];
}

function line(num1, num2){

    var ret = 0;
    if(document.getElementById(num1).innerHTML != "&nbsp;") {
        var ite = document.getElementById(num1).innerHTML;

        for(var x = num1; x <= num2; x++){
            if(document.getElementById(x).innerHTML === ite)
                ret+=1;
            //console.log("num1: "+num1+" num2: "+num2+" elemento: "+document.getElementById(x).innerHTML+" ret: "+ret);
        }
    }
    if(ret == 3)
        return true;
    else
        return false;
}

function colu(num1, num2){

    var ite = document.getElementById(num1).innerHTML;
    var ret = 0;
    if(document.getElementById(num1).innerHTML != "&nbsp;") {
        for(var y = num1; y <= num2; y+=3){
            if(document.getElementById(y).innerHTML === ite)
                ret+=1;
        }
    }

    if(ret == 3)
        return true;
    else
        return false;
}

function incl(num1, num2){
    // console.log("Linha: ");
    
    var ite = document.getElementById(num1).innerHTML;
    var ret = 0;
    
    var som = 2;
    if(num1 == 1)
        som = 4;

    if(document.getElementById(num1).innerHTML != "&nbsp;") {
        for(var l = num1; l <= num2; l+=som){
            if(document.getElementById(l).innerHTML === ite)
                ret+=1;
        }
    }
    if(ret == 3)
        return true;
    else
        return false;
}

function empate(){
    var cont = 0;
    for(var e = 1; e <=9; e++){
        if(document.getElementById(e).innerHTML != "&nbsp;"){
            cont+=1;
            console.log(cont);
        }
    }
    if(cont == 9)
        return 1;
    else
        return 0;
};

/* tabela
      1 | 2 | 3
    ----|---|----
      4 | 5 | 6
    ----|---|----
      7 | 8 | 9
    
 */
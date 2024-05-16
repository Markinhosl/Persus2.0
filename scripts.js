
//Atribuição dos elementos check e label por Id.
const elementoImpugnacao = document.querySelector('#lblimpugnacao');
const elementoRecurso = document.querySelector('#lblrecurso');

const checkImpugnacao = document.getElementById("impugnacao");
const checkRecurso = document.getElementById("recurso");



//Teste de click e seleção, juntamente com add de classe sumir
checkImpugnacao.onclick = () => {
    if(checkImpugnacao.checked){

        elementoRecurso.classList.add("sumir");
        checkRecurso.classList.add("sumir");
        checkImpugnacao.classList.add("sumirPrint");
        
    }
}

checkRecurso.onclick = () => {
    if(checkRecurso.checked){

        elementoImpugnacao.classList.add("sumir");
        checkImpugnacao.classList.add("sumir");
        checkRecurso.classList.add("sumirPrint");
        
    }
}

 //Atribuição dos elementos check e label por Id.

const elementoAih = document.querySelector('#lblaih');
const elementoApac = document.querySelector('#lblapac');


const checkedAih = document.getElementById("aih");
const checkedApac = document.getElementById("apac");

checkedAih.onclick = () => {
    if(checkedAih.checked){

        elementoApac.classList.add("sumir");
        checkedApac.classList.add("sumir");
        checkedAih.classList.add("sumirPrint");
        
    }
}

checkedApac.onclick = () => {
    if(checkedApac.checked){

        elementoAih.classList.add("sumir");
        checkedAih.classList.add("sumir");
        checkedApac.classList.add("sumirPrint");
        
    }
}


//Teste de click e seleção, juntamente com add de classe sumir
/* checkedIah.onclick = () => {
    if(checkedIah.checked){

        elementoApac.classList.add("sumir");
        checkedApac.classList.add("sumir");
        checkedIah.classList.add("sumirPrint");
        
    }
} */


const elementoOpcao1 = document.querySelector('#lblopcao1');
const elementoOpcao2 = document.querySelector('#lblopcao2');
const elementoOpcao3 = document.querySelector('#lblopcao3');
const elementoTxopcao2 = document.querySelector("#txopcao2");
const elementoTxopcao3 = document.querySelector("#xcopcao3");
const elementoBtnImprimir = document.querySelector("#btnimprimir");
const elementoFormCheck1 = document.querySelector("#formckeck1");
const elementoFormCheck2 = document.querySelector("#formckeck2");
const elementoFormCheck3 = document.querySelector("#formckeck3");

const checkedOpcao1 = document.getElementById("opcao1");
const checkedOpcao2 = document.getElementById("opcao2");
const checkedOpcao3 = document.getElementById("opcao3");


elementoBtnImprimir.onclick = () => {

    if(!checkedOpcao1.checked){
        
      elementoFormCheck1.remove();
            
    }
    
    if(!checkedOpcao2.checked){

        elementoFormCheck2.remove();
      }

    if(!checkedOpcao3.checked){

        elementoFormCheck3.remove();
    }

    if(!checkedApac.checked){

        elementoApac.remove();
        checkedApac.remove();
    }

    if(!checkedAih.checked){

        elementoAih.remove();
        checkedAih.remove();
    }

    if(!checkedOpcao1.checked){

        elementoOpcao1.remove();
        checkedOpcao1.remove();

    }

    if(!checkedOpcao2.checked){

        elementoOpcao2.remove();
        checkedOpcao2.remove();

    }

    if(!checkedOpcao3.checked){

        elementoOpcao3.remove();
        checkedOpcao3.remove();

    }  

    window.print()
}

var select = document.getElementById("motivoselect");
select.addEventListener("change", function(){
    capturarValor();
});

function capturarValor() {  
    
var selectedValue = select.value;    
var detalhamentoMotivo = document.getElementById("motivo");
    
    
if(selectedValue == "1"){

  detalhamentoMotivo.innerHTML = "A OPS já realizou pagamento por atendimento idêntico, realizado na mesma data do atendimento pelo SUS e ao mesmo paciente";  
}

if(selectedValue == "2"){

    detalhamentoMotivo.innerHTML = "O atendimento identificado foi realizado durante o prazo contratual de carência do beneficiário para a utilização dos serviços prestados.";
  }
  
  if(selectedValue == "3"){

    detalhamentoMotivo.innerHTML = "Caso de homonímia em que o paciente atendido pelo SUS não é a mesma pessoa que o beneficiário de produto da OPS.";
  }

  if(selectedValue == "4"){

    detalhamentoMotivo.innerHTML = "O produto da OPS ao qual está vinculado o beneficiário identificado não cobre procedimento realizado no atendimento pelo SUS.";
  }

  if(selectedValue == "5"){

    detalhamentoMotivo.innerHTML = "O estabelecimento onde foi realizado o atendimento identificado se localiza fora da abrangencia geografica delimitada pelo contrato ou regulamento do produto.";
  }

  if(selectedValue == "6"){

    detalhamentoMotivo.innerHTML = "A cobertura do atendimento identificado é afastada por vigência de cobertura parcial temporária por doença ou lesão preexistente.";
  }
  if(selectedValue == "7"){

    detalhamentoMotivo.innerHTML = "Atendimento identificado realizado em decorrência de acidente de trabalho, suas consequências ou moléstia profissional sem cobertura pelo produto ao qual está vinculado o beneficiário.";
  }

  if(selectedValue == "8"){

    detalhamentoMotivo.innerHTML = "O paciente deixou de ser beneficiário do produto em data anterior à do atendimento identificado.";  
  }
    
  if(selectedValue == "9"){

    detalhamentoMotivo.innerHTML = "O atendimento identificado, por decorrer de doença ou lesão preexistente à adesão do beneficiário, não é coberto por contrato de plano de assistência à saúde firmado até 01 de janeiro de 1999, ainda não adaptado.";  
  }

  if(selectedValue == "10"){

    detalhamentoMotivo.innerHTML = "O contrato ou regulamento do produto da OPS ao qual está vinculado o beneficiário identificado prevê fator moderador a ser pago pelo beneficiário, seja ele franquia ou coparticipação, aplicável ao atendimento identificado.";  
  }

  if(selectedValue == "11"){

    detalhamentoMotivo.innerHTML = "A quantidade do procedimento realizado no atendimento identificado ultrapassa a quantidade máxima coberta pelo produto.";  
  }

  if(selectedValue == "12"){

    detalhamentoMotivo.innerHTML = "O valor integral das despesas assistenciais é repassado de forma individualizada ao beneficiário que utilizou os serviços, nos termos do item 2 Súmula Normativa da ANS n° 9, de 10 de novembro de 2005.";  
  }

  if(selectedValue == "13"){

    detalhamentoMotivo.innerHTML = "Demais hipótese de impugnação de natureza administrativa.";  
  }

  if(selectedValue == "14"){

    detalhamentoMotivo.innerHTML = "Demais hipótese de impugnação de natureza técnica.";  
  }

}




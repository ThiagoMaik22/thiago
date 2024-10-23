// Armazenar os dados
let dados = [];

// gerar ID aleatorio comn 5 digitos 
function gerard(){return Math.floor(10000 + math.random)*90000};

// Adicionar dados a tabela
document.getElementById('form').addEventListener('submit',function(event)){

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value.replace(',''.'));//eceita centavos
    const tipo =document.getElementById('tipo').value;

    // captura a data do input e formata corretamente
    const datalnput = new Date(document.getElementById('data').value);
    const data = `${String(datalnput.getdate()).padStar(2,'0')/${String(datalnput.getMonth()+ 1).padStar(2,'0')}/${datalnput.getfullyear()}`; //formato DD/MM/AAAA

    
    







}

    
    
    
    
    
    
    
    
    }
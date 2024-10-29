// Importando a biblioteca 
// --> de CPF (Validar e formatar) --> Readline (Ler dados entrada)
const CPF = require('cpf');
const { cp } = require('fs');
const readline = require('readline');

// Criando Interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntando ao usuário
rl.question('Digite seu CPF: ', (cpf1) => {
    console.log(`O CPF digitado foi: ${cpf1}`);

    // Verificando se o CPF é válido
    if (CPF.isValid(cpf1)) {
        console.log('CPF Válido');
        console.log('CPF: ' + CPF.format(cpf1));
    } else {
        console.log('CPF Inválido');
    }
    // Fechando a interface
    rl.close();
});
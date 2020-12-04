import{ Central } from "./Central";
import{ Levantador } from "./Levantador";
import{ Libero }from "./Libero";
import{ Ponta  }from "./Ponta"
import{ Personagem }  from "./Personagem";
import prompt from "prompt-sync"

let central: Personagem = new Central ("Hinata Shoyo");
let levantador: Personagem = new Levantador ("Kagueyama Tobio");
let libero : Personagem = new Libero ("Nishinoyia");
let ponta: Personagem = new Ponta ("Asahi Azumane")

console.log("Central :>> ", central);
console.log("Levantador :>> ", levantador);
console.log("Libero :>> ", libero);
console.log("Ponta :>> ", ponta);

let teclado = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar Central                |");
    console.log("|2. Treinar Levantador             |");
    console.log("|3. Treinar Libero                 |");
    console.log("|4. Treinar Ponta                  |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            let teclado2 = prompt()
            let option2: number = 0;
            while (option2 != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar Salto                  |");
    console.log("|2. Treinar Saque                  |");
    console.log("|3. Treinar Bloqueio               |");
    console.log("|4. Treinar Resistencia            |");
    console.log("|5. Treinar Velocidade             |");
    console.log("|6. Descansar                      |");
    console.log("|7. Jogo Treino                    |");
    console.log("|8. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option2 = +teclado2("Escolha uma ação: ");

        switch (option2) {
        case 1:
            central.treinodesalto();
            console.log(central.status());
            break;
        case 2:
            central.treinarsaque();
            console.log(central.status());
            break;
        case 3:
           central.treinarbloqueio()
           console.log(central.status)
           break
        case 4:
            central.treinarrecistencia()
            console.log(central.status)
            break
        case 5:
            central.treinarvelocidade();
            console.log(central.status());
            break
        case 6: 
         let horas: number = +teclado("Digite o número de horas: ");
         central.descansar(horas);
         console.log(central.status());
         break;
        case 7:{
            central.jogotreino();
            console.log(central.status());
            break; 
        };
        case 8:
            console.log(central.status());
            break;
        default:
            break}};
    
    
        case 2:let teclado3 = prompt();
            let option3: number = 0;
            while (option3 != 9) {
        
         console.log("+========= Personagem =============+");
         console.log("|1. Treinar Salto                  |");
         console.log("|2. Treinar Saque                  |");
         console.log("|3. Treinar Bloqueio               |");
         console.log("|4. Treinar Resistencia            |");
         console.log("|5. Treinar Velocidade             |");
         console.log("|6. Descansar                      |");
         console.log("|7. Jogo Treino                    |");
         console.log("|8. Imprimir atributos             |");
         console.log("|9. Sair                           |");
         console.log("+==================================+");
     
         option3 = +teclado3("Escolha uma ação: ");
     
         switch (option3) {
             case 1:
                 levantador.treinodesalto();
                 console.log(levantador.status());
                 break;
             case 2:
                 levantador.treinarsaque();
                 console.log(levantador.status());
                 break;
             case 3:
                levantador.treinarbloqueio()
                console.log(levantador.status)
                break
             case 4:
                 levantador.treinarrecistencia()
                 console.log(levantador.status)
                 break
             case 5:
                 levantador.treinarvelocidade();
                 console.log(levantador.status());
                 break
             case 6: 
              let horas: number = +teclado("Digite o número de horas: ");
              levantador.descansar(horas);
              console.log(levantador.status());
              break;
             case 7:{
                 levantador.jogotreino();
                 console.log(levantador.status());
                 break; 
             };
             case 8:
                 console.log(levantador.status());
                 break;
             default:
                 break}};
        case 3:let teclado4 = prompt();


        let option4: number = 0;
        
        while (option4 != 9) {
            console.log("+========= Personagem =============+");
            console.log("|1. Treinar Salto                  |");
            console.log("|2. Treinar Saque                  |");
            console.log("|3. Treinar Bloqueio               |");
            console.log("|4. Treinar Resistencia            |");
            console.log("|5. Treinar Velocidade             |");
            console.log("|6. Descansar                      |");
            console.log("|7. Jogo Treino                    |");
            console.log("|8. Imprimir atributos             |");
            console.log("|9. Sair                           |");
            console.log("+==================================+");
        
            option4 = +teclado4("Escolha uma ação: ");
        
            switch (option4) {
                case 1:
                    libero.treinodesalto();
                    console.log(libero.status());
                    break;
                case 2:
                    libero.treinarsaque();
                    console.log(libero.status());
                    break;
                case 3:
                   libero.treinarbloqueio()
                   console.log(libero.status)
                   break
                case 4:
                    libero.treinarrecistencia()
                    console.log(libero.status)
                    break
                case 5:
                    libero.treinarvelocidade();
                    console.log(libero.status());
                    break
                case 6: 
                 let horas: number = +teclado("Digite o número de horas: ");
                 libero.descansar(horas);
                 console.log(libero.status());
                 break;
                case 7:{
                    libero.jogotreino();
                    console.log(libero.status());
                    break; 
                };
                case 8:
                    console.log(libero.status());
                    break;
                default:
                    break}};


        case 4:let teclado5 = prompt();
        let option5: number = 0;
        
        while (option5 != 9) {
            console.log("+========= Personagem =============+");
            console.log("|1. Treinar Salto                  |");
            console.log("|2. Treinar Saque                  |");
            console.log("|3. Treinar Bloqueio               |");
            console.log("|4. Treinar Resistencia            |");
            console.log("|5. Treinar Velocidade             |");
            console.log("|6. Descansar                      |");
            console.log("|7. Jogo Treino                    |");
            console.log("|8. Imprimir atributos             |");
            console.log("|9. Sair                           |");
            console.log("+==================================+");
        
            option5 = +teclado5("Escolha uma ação: ");
        
            switch (option5) {
                case 1:
                    ponta.treinodesalto();
                    console.log(ponta.status());
                    break;
                case 2:
                    ponta.treinarsaque();
                    console.log(ponta.status());
                    break;
                case 3:
                   ponta.treinarbloqueio()
                   console.log(ponta.status)
                   break
                case 4:
                    ponta.treinarrecistencia()
                    console.log(ponta.status)
                    break
                case 5:
                    ponta.treinarvelocidade();
                    console.log(ponta.status());
                    break
                case 6: 
                 let horas: number = +teclado("Digite o número de horas: ");
                 ponta.descansar(horas);
                 console.log(ponta.status());
                 break;
                case 7:{
                    ponta.jogotreino();
                    console.log(ponta.status());
                    break; 
                };
                case 8:
                    console.log(ponta.status());
                    break;
                default:
                    break}};
        default:
            break}}
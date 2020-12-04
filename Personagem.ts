import { Util } from "./Util";
export class Personagem {
    
   
    protected _nome: string;
    protected _energia: number;
    protected _salto: number;
    protected _saque: number;
    protected _velocidade: number;
    protected _bloqueio: number;
    protected _resistencia: number;
    
    constructor(nome: string) {
        this._nome = nome;
        this._energia = Util.randomizar(100, 100000);
        this._salto = Util.randomizar(0, 371);
        this._saque = Util.randomizar(0,100);
        this._velocidade = Util.randomizar(40,100 );
        this._bloqueio = Util.randomizar(0,100);
        this._resistencia = Util.randomizar(0,100);
    }
    status(): string {
         return (
            "Jogador: \n" +
            "\nNome: " +
            this._nome +
            ("\nEnergia: " + this._energia.toFixed(1)) +
            ("\nSalto: " + this._salto.toFixed(1)) +
            ("\nSaque: " + this._saque.toFixed(1)) +
            ("\nVelociade: " + this._velocidade.toFixed(1)) +
            ("\nBloqueio: " + this._bloqueio.toFixed(1)) +
            ("\nResistencia: " + this._resistencia.toFixed(1))
            );
    }
    treinodesalto(): void {
        this._salto += Math.random() * 7;
        this._energia -= Math.random() * 10;
        if (this._saque > 100) {
            this._saque = 0;
        }
    }
    treinarsaque(): void {
        this._saque += Math.random() * 5;
        this._energia -= Math.random() * 10;
        if (this._saque > 100) {
            this._saque = 0;
        }
    }

    treinarbloqueio():void{
        this._bloqueio += Math.random() * 5;
        
    }
    treinarrecistencia():void{
        this._resistencia += Math.random() *3
    }
    treinarvelocidade():void{
        this._velocidade += Math.random() * 2
    }
    
    descansar(hour: number): void {
        this._energia += hour * (Math.random() * 10);
        if (this._energia > 100) {
            this._energia = 100;
        }
    }
    jogotreino(): number {
        let cansaso: number = Math.random() * 100;
        this._energia -= cansaso;
        return cansaso;
    
    
}}

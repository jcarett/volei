import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Levantador extends Personagem {
    private _precisao: number;
    private _inteligencia: number;

    constructor(nome: string) {
        super(nome);
        this._nome = nome;
        this._energia = Util.randomizar(100, 100000);
        this._salto = Util.randomizar(0, 371);
        this._velocidade = Util.randomizar(40,100 );
        this._bloqueio = Util.randomizar(0,100);
        this._saque = Util.randomizar(0,100)
        this._resistencia = Util.randomizar(0,100);
        this._precisao = Util.randomizar(0,100);
        this._inteligencia = Util.randomizar(0,100)
    }
}
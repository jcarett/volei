import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Libero extends Personagem {
    private _defesas: number;

    constructor(nome: string) {
        super(nome);
        this._nome = nome;
        this._energia = Util.randomizar(100, 100000);
        this._salto = Util.randomizar(0, 371);
        this._velocidade = Util.randomizar(40,100 );
        this._bloqueio = Util.randomizar(0,100);
        this._saque = Util.randomizar(0,10)
        this._resistencia = Util.randomizar(0,100);
        this._defesas = Util.randomizar(0,100)
    }}

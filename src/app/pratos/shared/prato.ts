export class Prato {

    public Id: number;

    constructor(
        public Nome: string,
        public Preco: number,
        public RestauranteId: number
    ) {}
}

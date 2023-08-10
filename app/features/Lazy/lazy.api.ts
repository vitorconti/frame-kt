import { Cidades } from "./types";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCidades(): Promise<Cidades[]> {
    return fetch(
        "https://brasilapi.com.br/api/ibge/municipios/v1/SP?providers=dados-abertos-br"
    ).then((res) => delay(5000).then(() => res.json()));

}
export async function getEndereco() {
    return fetch(
        "https://brasilapi.com.br/api/cep/v1/15970000"
    ).then((res) => res.json());;

}
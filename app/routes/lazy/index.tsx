import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { getCidades, getEndereco } from "~/features/Lazy";
import { Cidades, Endereco } from "~/features/Lazy/types";
export async function loader() {

    const cidades: Promise<Cidades[]> = getCidades()

    const endereco: Endereco = await getEndereco()

    return defer({
        cidades,
        endereco,
    });
};

export default function () {
    const { cidades, endereco } = useLoaderData<typeof loader>();
    return (
        <div>
            <div>
                <p>
                    {endereco.street} {endereco.neighborhood} {endereco.city}{" "}
                    {endereco.state} {endereco.cep}
                </p>
            </div>
            <Suspense fallback={<p>Carregando Cidades</p>}>
                <Await resolve={cidades}>
                    {(cidades) => (

                        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                            {cidades.map((cidade) => (

                                <li key={cidade.codigo_ibge} className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>{cidade.nome}</span>
                                </li>
                            ))}


                        </ul>


                    )}
                </Await>
            </Suspense>
        </div>
    );
}
export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
  }

//unknown eh similar ao any, porem eh mais seguro, o unknown nao deixa acessar propriedades da lista1 ou 2 se a gente nao souber o tipo
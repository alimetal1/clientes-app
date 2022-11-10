import { Cliente } from "../clientes/cliente";

export class publicacion{
    id: number;
    contenido: string;
    createAt: string;
    cliente: Cliente;
}
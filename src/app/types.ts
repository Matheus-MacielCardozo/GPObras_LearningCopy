// Isso define como um "Item" se parece no nosso sistema.
// Baseado no que vimos que o backend Python vai esperar.

export interface ItemOrcamento {
    id: number;
    descricao: string;
    unidade: string;       // Ex: 'm²', 'kg', 'un'
    valor_unitario: number;
    quantidade: number;
}
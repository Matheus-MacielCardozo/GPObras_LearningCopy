import { ItemOrcamento } from "../app/types";

interface ItemCardProps {
    item: ItemOrcamento;
}

export function ItemCard({ item }: ItemCardProps) {
    // Calculando o total desse item (Preço x Quantidade)
    const total = item.valor_unitario * item.quantidade;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-gray-800">{item.descricao}</h3>
                    <p className="text-sm text-gray-500">Unidade: {item.unidade}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    #{item.id}
                </span>
            </div>
            
            <div className="mt-4 flex justify-between items-end">
                <div>
                    <p className="text-gray-600 text-sm">Qtd: {item.quantidade}</p>
                    <p className="text-gray-600 text-sm">Unit: R$ {item.valor_unitario.toFixed(2)}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase">Subtotal</p>
                    <p className="text-xl font-bold text-green-600">
                        R$ {total.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
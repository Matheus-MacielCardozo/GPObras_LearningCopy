import { ITENS_MOCK } from "./data/mock";
import { ItemCard } from "@/components/ItemCard";

export default function Home() {
  // Cálculo do Total Geral da Obra (Já usando o reduce que você ia estudar amanhã!)
  const totalObra = ITENS_MOCK.reduce((acc, item) => {
    return acc + (item.quantidade * item.valor_unitario);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Orçamento de Obra #001</h1>
            <p className="text-gray-600">Simulação de Itens (Ambiente de Teste)</p>
        </header>

        {/* Lista de Cards (Grid Responsivo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ITENS_MOCK.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>

        {/* Rodapé com Total */}
        <div className="mt-8 bg-gray-900 text-white p-6 rounded-xl flex justify-between items-center shadow-xl">
            <span className="text-lg font-light">Valor Total Estimado</span>
            <span className="text-3xl font-bold text-green-400">
                R$ {totalObra.toFixed(2)}
            </span>
        </div>

      </div>
    </div>
  );
}
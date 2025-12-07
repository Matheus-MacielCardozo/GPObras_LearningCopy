import { ItemOrcamento } from "../types";

export const ITENS_MOCK: ItemOrcamento[] = [
    {
        id: 1,
        descricao: "Cimento Portland CP II-32 (Saco 50kg)",
        unidade: "sc",
        valor_unitario: 32.90,
        quantidade: 10
    },
    {
        id: 2,
        descricao: "Areia Média Lavada",
        unidade: "m³",
        valor_unitario: 65.00,
        quantidade: 2
    },
    {
        id: 3,
        descricao: "Tijolo Cerâmico 9x19x19 (Milheiro)",
        unidade: "mil",
        valor_unitario: 780.00,
        quantidade: 1.5
    },
    {
        id: 4,
        descricao: "Vergalhão CA-50 10.0mm (Barra 12m)",
        unidade: "barra",
        valor_unitario: 42.50,
        quantidade: 20
    }
];
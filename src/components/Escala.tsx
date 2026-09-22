import { useState } from "react";
import { cn } from "@/utils/cn";

interface Props {
  pergunta: string;
  opcoes: string[];
  dica?: string;
  destaque?: boolean;
}

export default function Escala({ pergunta, opcoes, dica, destaque }: Props) {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  return (
    <div className="rounded-xl border border-petroleo-100 bg-petroleo-50/40 p-4">
      <p className="font-semibold text-ink">{pergunta}</p>
      {dica ? <p className="mt-1 text-sm text-ink-soft">{dica}</p> : null}
      <div
        role="group"
        aria-label={pergunta}
        className="mt-3 flex flex-wrap gap-2"
      >
        {opcoes.map((opcao, indice) => {
          const ativo = selecionado === indice;
          return (
            <button
              key={opcao}
              type="button"
              aria-pressed={ativo}
              onClick={() => setSelecionado(ativo ? null : indice)}
              className={cn(
                "min-h-11 cursor-pointer rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors",
                ativo
                  ? destaque
                    ? "border-amarelo bg-amarelo text-[#3d2c00]"
                    : "border-petroleo-700 bg-petroleo-600 text-white"
                  : "border-petroleo-200 bg-white text-ink hover:border-petroleo-400",
              )}
            >
              {opcao}
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="nao-imprimir mt-2 min-h-6 text-sm font-semibold text-petroleo-700">
        {selecionado !== null ? `Registrado nesta tela: ${opcoes[selecionado]}` : ""}
      </p>
    </div>
  );
}

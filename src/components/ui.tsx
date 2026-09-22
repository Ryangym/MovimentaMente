import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-petroleo-100 bg-white p-5 sombra-suave sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Chip({
  children,
  tone = "neutro",
  className,
}: {
  children: ReactNode;
  tone?: "neutro" | "primario" | "amarelo" | "claro";
  className?: string;
}) {
  const tons = {
    neutro: "bg-petroleo-50 text-petroleo-800 border-petroleo-200",
    primario: "bg-petroleo-600 text-white border-petroleo-700",
    amarelo: "bg-amarelo-suave text-[#6b4e00] border-amarelo",
    claro: "bg-white text-ink-soft border-petroleo-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold",
        tons[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type BotaoProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variante?: "primario" | "secundario" | "amarelo" | "fantasma";
  className?: string;
  disabled?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export function Botao({
  children,
  onClick,
  type = "button",
  variante = "primario",
  className,
  disabled,
  ariaExpanded,
  ariaControls,
}: BotaoProps) {
  const variantes = {
    primario:
      "bg-petroleo-600 text-white hover:bg-petroleo-700 active:bg-petroleo-800 border-petroleo-700",
    secundario:
      "bg-white text-petroleo-800 hover:bg-petroleo-50 border-petroleo-300",
    amarelo:
      "bg-amarelo text-[#3d2c00] hover:brightness-95 border-[#c79200] font-bold",
    fantasma: "bg-transparent text-petroleo-700 hover:bg-petroleo-50 border-transparent underline",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={cn(
        "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-3 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantes[variante],
        className,
      )}
    >
      {children}
    </button>
  );
}

export function TituloSecao({
  eyebrow,
  titulo,
  descricao,
  id,
}: {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
  id?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      {eyebrow ? (
        <p className="mb-1 text-sm font-bold tracking-[0.18em] text-petroleo-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-2xl font-bold text-ink sm:text-3xl">
        {titulo}
      </h2>
      {descricao ? <p className="mt-3 text-base text-ink-soft">{descricao}</p> : null}
    </div>
  );
}

export function Aviso({
  titulo = "Atenção",
  children,
  tone = "amarelo",
}: {
  titulo?: string;
  children: ReactNode;
  tone?: "amarelo" | "petroleo";
}) {
  const tons = {
    amarelo: "border-amarelo bg-amarelo-suave",
    petroleo: "border-petroleo-300 bg-petroleo-50",
  };
  return (
    <div className={cn("rounded-2xl border-2 p-5 sm:p-6", tons[tone])}>
      <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-ink">
        <span aria-hidden="true">{tone === "amarelo" ? "⚠️" : "ℹ️"}</span>
        {titulo}
      </h3>
      <div className="space-y-2 text-[0.95rem] text-ink">{children}</div>
    </div>
  );
}

export function ListaComMarcador({
  itens,
  marcador = "•",
}: {
  itens: string[];
  marcador?: string;
}) {
  return (
    <ul className="space-y-2">
      {itens.map((item, indice) => (
        <li key={item + indice} className="flex gap-2.5 text-[0.95rem] text-ink">
          <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-petroleo-500">
            {marcador}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

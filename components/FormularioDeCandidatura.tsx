"use client";

import { useActionState } from "react";
import { enviarCandidatura } from "@/app/vagas/actions";
import { ESTADO_INICIAL } from "@/lib/tipos";

export default function FormularioDeCandidatura({
  vagaId,
}: {
  vagaId: string;
}) {
  const [estado, formAction, pendente] = useActionState(enviarCandidatura, ESTADO_INICIAL);

  if (estado.ok) {
    return (
      <p className="ok" role="status">{estado.mensagem}</p>
    );
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="vagaId" value={vagaId} />

      <label htmlFor="nome-candidatura">
        Nome
        <input
          id="nome-candidatura"
          name="nome"
          autoComplete="name"
          minLength={3}
          required
          defaultValue={estado.valores.nome ?? ""}
          aria-invalid={Boolean(estado.erros.nome)}
          aria-describedby={estado.erros.nome ? "erro-nome-candidatura" : undefined}
        />
      </label>
      {estado.erros.nome && <p id="erro-nome-candidatura" className="erro">{estado.erros.nome}</p>}

      <label htmlFor="email-candidatura">
        E-mail
        <input
          id="email-candidatura"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={estado.valores.email ?? ""}
          aria-invalid={Boolean(estado.erros.email)}
          aria-describedby={estado.erros.email ? "erro-email-candidatura" : undefined}
        />
      </label>
      {estado.erros.email && <p id="erro-email-candidatura" className="erro">{estado.erros.email}</p>}
      {estado.mensagem && <p className="erro" role="alert">{estado.mensagem}</p>}

      <button type="submit" disabled={pendente}>
        Enviar candidatura
      </button>
    </form>
  );
}
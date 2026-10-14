"use client";

import { useState } from "react";
import { useActionState } from "react";
import { salvarPerfilEmpresa } from "@/app/empresas/[slung]/editar/actions";
import { ESTADO_INICIAL, type Empresa, type Estado } from "@/lib/tipos";

type Props = { empresa: Empresa };

export default function FormularioDeEmpresa({ empresa }: Props) {
  const salvarComSlug = salvarPerfilEmpresa.bind(null, empresa.slug);
  const [estado, formAction, pendente] = useActionState<Estado, FormData>(
    salvarComSlug,
    ESTADO_INICIAL,
  );
  const [valores, setValores] = useState({
    nome: empresa.nome,
    sobre: empresa.sobre,
    site: empresa.site,
  });

  return (
    <form action={formAction} className="formulario">
      <label>
        Nome
        <input
          name="nome"
          required
          minLength={2}
          value={valores.nome}
          onChange={(event) =>
            setValores({ ...valores, nome: event.currentTarget.value })
          }
          aria-invalid={Boolean(estado.erros.nome)}
          aria-describedby={estado.erros.nome ? "erro-nome" : undefined}
        />
        {estado.erros.nome && (
          <span className="erro-campo" id="erro-nome">{estado.erros.nome}</span>
        )}
      </label>

      <label>
        Sobre
        <textarea
          name="sobre"
          required
          minLength={40}
          maxLength={600}
          value={valores.sobre}
          onChange={(event) =>
            setValores({ ...valores, sobre: event.currentTarget.value })
          }
          aria-invalid={Boolean(estado.erros.sobre)}
          aria-describedby={estado.erros.sobre ? "erro-sobre" : undefined}
        />
        {estado.erros.sobre && (
          <span className="erro-campo" id="erro-sobre">{estado.erros.sobre}</span>
        )}
      </label>

      <label>
        Site
        <input
          name="site"
          type="url"
          required
          value={valores.site}
          onChange={(event) =>
            setValores({ ...valores, site: event.currentTarget.value })
          }
          aria-invalid={Boolean(estado.erros.site)}
          aria-describedby={estado.erros.site ? "erro-site" : undefined}
        />
        {estado.erros.site && (
          <span className="erro-campo" id="erro-site">{estado.erros.site}</span>
        )}
      </label>

      <button type="submit" disabled={pendente}>
        {pendente ? "Salvando..." : "Salvar perfil"}
      </button>
      {estado.mensagem && (
        <p className={estado.ok ? "mensagem-acao" : "erro-campo"} role="status">
          {estado.mensagem}
        </p>
      )}
    </form>
  );
}

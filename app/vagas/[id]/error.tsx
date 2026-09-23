"use client";   // obrigatório: este arquivo tem onClick, e o React precisa
              // dele no navegador para conseguir se recuperar do erro.

export default function ErroDaVaga({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;   // o Next passa esta função. Ela tenta renderizar de novo.
}) {
  return (
    <div className="erro">
      <h2>Não conseguimos carregar esta vaga</h2>

      {/* Português de gente. NÃO mostre error.message para quem usa o site:
          "fetch failed" não ajuda ninguém e ainda assusta. */}
      <p>A conexão com a nossa fonte de dados falhou. Isso costuma ser
         momentâneo.</p>

      <button type="button" onClick={() => reset()}>
        Tentar de novo
      </button>
    </div>
  );
  }
export default function Filtros({
  busca,
  aoMudarBusca,
  area,
  aoMudarArea,
  areas,
}: {
  busca: string;
  // o tipo de uma função: recebe texto, não devolve nada
  aoMudarBusca: (valor: string) => void;
  area: string;
  aoMudarArea: (valor: string) => void;
  areas: string[];
}) {
  // Nenhum useState aqui. Este componente não lembra de nada:
  // ele mostra o que recebe e avisa quando alguém mexe.
  return (
    <div className="filtros">
      <input
        type="search"
        placeholder="Buscar por título ou empresa"
        value={busca}
        // sem este onChange o campo não deixa digitar
        onChange={(e) => aoMudarBusca(e.target.value)}
      />

      <div className="chips">
        {areas.map((nome) => (
          <button
            key={nome}
            type="button"
            className={nome === area ? "chip ativo" : "chip"}
            onClick={() => aoMudarArea(nome)}
          >
            {nome}
          </button>
        ))}
      </div>
    </div>
  );
}
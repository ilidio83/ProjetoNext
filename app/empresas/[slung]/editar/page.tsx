import { notFound } from "next/navigation";
import { buscarEmpresa } from "@/lib/api";
import FormularioDeEmpresa from "@/components/FormularioDeEmpresa";

type Props = { params: Promise<{ slung: string }> };

export default async function EditarEmpresaPage({ params }: Props) {
  const { slung } = await params;
  const empresa = await buscarEmpresa(slung);

  if (!empresa) notFound();

  return (
    <section>
      <a href={`/empresas/${empresa.slug}`}>Voltar ao perfil</a>
      <h1>Editar perfil da {empresa.nome}</h1>
      <FormularioDeEmpresa empresa={empresa} />
    </section>
  );
}

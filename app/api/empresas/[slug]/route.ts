import { buscarEmpresa } from "@/lib/api";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const empresa = await buscarEmpresa(slug);

  if (!empresa) {
    return Response.json({ erro: "Empresa não encontrada." }, { status: 404 });
  }

  return Response.json(empresa);
}

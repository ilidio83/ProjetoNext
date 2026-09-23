import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresas · Leque de Vagas",
  description: "As empresas que publicam vagas para quem está migrando para tecnologia.",
};

export default function EmpresasPage() {
  return (
    <section>
      <h1>Empresas</h1>
      <p>Lista de empresas parceiras do Leque de Vagas.</p>
    </section>
  );
}
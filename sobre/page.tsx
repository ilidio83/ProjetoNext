import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim · Meu primeiro Next",
};

export default function Sobre() {
  return (
    <section>
      <h1>Sobre mim</h1>
      <p>
        Quem eu sou e o que espero deste semestre.
      </p>
    </section>
  );
}
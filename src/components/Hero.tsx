import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fundo */}
      <Image
        src="/hero-bg.png"
        alt="Pudim artesanal"
        fill
        priority
        className="object-cover blur-sm scale-105"
      />

      {/* Overlay mais escuro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center sm:justify-between px-6 py-16 sm:px-8 lg:px-12">

        {/* TEXTO */}
        <div className="max-w-2xl text-white sm:text-left">
          <h1 className="mt-12 font-amatic text-5xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            O sabor que transforma qualquer momento em{" "}
            <span className="text-amber-600 font-bold drop-shadow-sm">
              inesquecível
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
            Pudins artesanais preparados com ingredientes selecionados e muito carinho.
          </p>
        </div>

        {/* BOTÕES */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center">

          {/* Cardápio (principal) */}
          <a
            href="#cardapio"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-500 hover:scale-105 active:scale-95 sm:text-base"
          >
            Ver Menu
          </a>

          {/* Encomendar (secundário) */}
          <a
            href="https://wa.me/5583999098009?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda%20de%20pudim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5  text-amber-600" />
            Encomendar no Whatsapp
          </a>

        </div>

      </div>
    </section>
  );
}
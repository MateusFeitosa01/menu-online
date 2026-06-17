// src/components/sections/Cardapio.tsx

export default function Cardapio() {
  const pudins = [
  {
    nome: "Pudim Tradicional",
    preco: "R$ 12,00",
    descricao:
      "O clássico perfeito: textura cremosa, lisinha e com uma calda de caramelo dourada que derrete na boca.",
  },
  {
    nome: "Pudim de Café",
    preco: "R$ 12,00",
    descricao:
      "Combinação marcante de café suave com cremosidade equilibrada, ideal para quem gosta de um sabor mais intenso e sofisticado.",
  },
  {
    nome: "Pudim de Milho Verde",
    preco: "R$ 12,00",
    descricao:
      "Sabor caseiro e delicado de milho verde, com textura extremamente cremosa e aquele gostinho de receita feita no interior.",
  },
  {
    nome: "Pudim de Paçoca",
    preco: "R$ 12,00",
    descricao:
      "Doce e equilibrado, com o sabor característico da paçoca e uma textura cremosa que lembra festa junina o ano inteiro.",
  },
];

  return (
    <section id="cardapio" className="bg-white py-20 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Subtítulo */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          Nossos Sabores
        </p>

        {/* Título */}
        <h2 className="mt-2 text-center font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
          Cardápio de Pudins
        </h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pudins.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.nome}
              </h3>

              <p className="mt-1 text-sm font-bold text-amber-600">
                {item.preco}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
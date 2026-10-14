import type { Metadata } from "next";
import "./testefit.css";

export const metadata: Metadata = {
  title: "Godeguesi Fit — Sua evolução começa aqui",
  description: "Explore cinco caminhos para treinar, cuidar da rotina e se movimentar no seu ritmo.",
  alternates: { canonical: "/testefit" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Godeguesi Fit — Seu movimento começa aqui",
    description: "Seu ritmo. Suas regras. Sua evolução.",
    url: "/testefit",
    type: "website",
  },
};

/**
 * Página demonstrativa: substitua cada url quando os cinco links reais
 * de afiliado da Hotmart forem fornecidos.
 * Links ausentes NÃO levam a uma oferta inexistente.
 */
const programs: {
  key: string;
  eyebrow: string;
  name: string;
  details: string;
  image: string;
  url: string | null;
}[] = [
  {
    key: "casa",
    eyebrow: "PRATICIDADE · MOVIMENTO",
    name: "Treino em casa",
    details: "Seu espaço. Seu tempo. Um bom motivo para começar.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=950&q=85",
    url: null,
  },
  {
    key: "forca",
    eyebrow: "TREINO · SUPERAÇÃO",
    name: "Força & definição",
    details: "Para quem quer explorar novos limites com consistência.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=950&q=85",
    url: null,
  },
  {
    key: "nutricao",
    eyebrow: "ALIMENTAÇÃO · HÁBITOS",
    name: "Nutrição & rotina",
    details: "Inspiração para escolhas mais conscientes no dia a dia.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=950&q=85",
    url: null,
  },
  {
    key: "mobilidade",
    eyebrow: "BEM-ESTAR · FLEXIBILIDADE",
    name: "Mobilidade & equilíbrio",
    details: "Mais atenção ao corpo e ao prazer de se movimentar.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=950&q=85",
    url: null,
  },
  {
    key: "cardio",
    eyebrow: "ENERGIA · RESISTÊNCIA",
    name: "Cardio & resistência",
    details: "Encontre novos jeitos de colocar sua energia em movimento.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=950&q=85",
    url: null,
  },
];

const steps = [
  ["01", "Escolha seu foco", "Encontre a área que mais combina com o que você procura agora."],
  ["02", "Conheça o conteúdo", "Confira a proposta e as condições do produtor na Hotmart."],
  ["03", "Comece do seu jeito", "Se fizer sentido, escolha seu programa e siga no seu ritmo."],
] as const;

const faq = [
  ["Os conteúdos são gratuitos?", "Os produtos podem ter preços e condições diferentes, definidos por seus produtores. Consulte os valores na página oficial de cada produto."],
  ["Onde acontece a compra?", "As compras são realizadas nas páginas externas da Hotmart, mediante os links disponibilizados pelos produtores."],
  ["Preciso já ter experiência com exercícios?", "Depende dos requisitos de cada programa. Consulte as orientações do produtor e, se tiver limitações ou questões de saúde, busque orientação profissional."],
  ["Quem é responsável pelos programas?", "O Godeguesi Fit é uma página demonstrativa de curadoria. A autoria, suporte, entrega e condições comerciais dos produtos são responsabilidade dos respectivos produtores."],
] as const;

export default function TesteFitPage() {
  return (
    <main className="fit" id="topo">
      <a className="fit-skip" href="#programas">Pular para os programas</a>
      <div className="fit-strip"><span>✳</span> EVOLUA NO SEU TEMPO <i>/</i> COMECE COM O QUE VOCÊ TEM <span>✳</span></div>
      <header className="fit-header">
        <div className="fit-shell fit-header-inner">
          <a href="#topo" className="fit-brand" aria-label="Godeguesi Fit, voltar ao início"><span className="fit-brand-mark">✳</span> GODEGUESI<span>FIT.</span></a>
          <nav aria-label="Navegação Godeguesi Fit">
            <a href="#programas">PROGRAMAS</a><a href="#sobre">NOSSA IDEIA</a><a href="#duvidas">DÚVIDAS</a>
          </nav>
          <a className="fit-nav-cta" href="#programas">ENCONTRE SEU CAMINHO <span>↗</span></a>
        </div>
      </header>

      <section className="fit-hero" aria-labelledby="fit-hero-title">
        <div className="fit-shell fit-hero-grid">
          <div className="fit-hero-content">
            <p className="fit-kicker"><span /> UM NOVO JEITO DE COMEÇAR <small>/ 001</small></p>
            <h1 id="fit-hero-title">SEU RITMO.<br />SUAS REGRAS.<br /><em>SUA EVOLUÇÃO.</em></h1>
            <p className="fit-lead">Não existe fórmula única. Existe o próximo passo. Descubra conteúdos para treinar, ganhar energia e construir uma rotina que combina com você.</p>
            <div className="fit-actions"><a className="fit-button" href="#programas">EXPLORE OS PROGRAMAS <span>↗</span></a><a className="fit-text-link" href="#sobre">CONHEÇA A IDEIA ↓</a></div>
            <p className="fit-micro">✳ &nbsp; O PRIMEIRO PASSO NÃO PRECISA SER PERFEITO. SÓ PRECISA ACONTECER.</p>
          </div>
          <div className="fit-hero-art" role="img" aria-label="Academia com equipamentos de musculação">
            <div className="fit-monogram">GF</div>
            <div className="fit-art-tag"><b>↗ &nbsp; MOVE FOR YOU</b><span>Movimento é para todos.</span></div>
            <span className="fit-art-side">MOVE / FOCUS / REPEAT</span>
            <span className="fit-art-index">EST. 2026 — GODEGUESI FIT</span>
          </div>
        </div>
      </section>

      <div className="fit-marquee" aria-hidden="true"><span>MAIS MOVIMENTO</span> ✳ <span>MENOS DESCULPAS</span> ✳ <span>MAIS EQUILÍBRIO</span> ✳ <span>SEU TEMPO. SEU PROGRESSO.</span> ✳</div>

      <section className="fit-intro" id="sobre">
        <div className="fit-shell fit-intro-grid">
          <p className="fit-label"><span>■</span> O QUE MOVE A GENTE <small>/ 01</small></p>
          <div><h2>UMA ESCOLHA HOJE.<br /><em>OUTRA VERSÃO DE VOCÊ</em> AMANHÃ.</h2><p>O movimento pode ter muitas formas. Reunimos cinco caminhos para você encontrar o conteúdo que faz sentido para seus objetivos e para sua rotina.</p></div>
        </div>
      </section>

      <section className="fit-programs" id="programas">
        <div className="fit-shell">
          <div className="fit-section-head"><div><p className="fit-label"><span>■</span> EXPLORE POSSIBILIDADES <small>/ 02</small></p><h2>ESCOLHA SEU <em>PRÓXIMO PASSO.</em></h2></div><p>05 caminhos. Diferentes objetivos.<br />Um ponto de partida: você.</p></div>
          <div className="fit-cards">
            {programs.map((program, index) => (
              <article className="fit-card" key={program.key} style={{ backgroundImage: `linear-gradient(180deg, rgba(12,18,12,.16), rgba(10,15,11,.94)),url("${program.image}")` }}>
                <div className="fit-card-top"><span>{String(index + 1).padStart(2, "0")} / 05</span><span aria-hidden="true">↗</span></div>
                <div className="fit-card-bottom">
                  <p>{program.eyebrow}</p>
                  <h3>{program.name}<em>.</em></h3>
                  <span className="fit-card-description">{program.details}</span>
                  {program.url ? (
                    <a href={program.url} rel="sponsored noopener noreferrer" target="_blank" className="fit-card-button">CONHECER PROGRAMA <span>↗</span></a>
                  ) : (
                    <span className="fit-card-button fit-card-button-disabled" aria-label="Link do programa ainda não configurado">LINK EM BREVE <span>↗</span></span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="fit-disclaimer">ⓘ &nbsp; Página demonstrativa. Os produtos divulgados futuramente poderão ser comercializados na Hotmart por terceiros. Alguns links poderão ser de afiliado. Consulte os detalhes de cada oferta antes de comprar.</p>
        </div>
      </section>

      <section className="fit-steps">
        <div className="fit-shell fit-steps-grid"><div><p className="fit-label"><span>■</span> SIMPLES ASSIM <small>/ 03</small></p><h2>COMECE<br /><em>POR AQUI.</em></h2><p>Não precisa mudar tudo de uma vez. O próximo passo já é um começo.</p></div><div className="fit-step-list">{steps.map(([num, title, detail]) => <div className="fit-step" key={num}><b>{num}</b><div><h3>{title}</h3><p>{detail}</p></div><span>↗</span></div>)}</div></div>
      </section>

      <section className="fit-faq" id="duvidas">
        <div className="fit-shell fit-faq-grid"><div><p className="fit-label"><span>■</span> SEM COMPLICAÇÃO <small>/ 04</small></p><h2>DÚVIDAS<br /><em>FREQUENTES.</em></h2><p>Informações claras para explorar com tranquilidade.</p></div><div className="fit-faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="fit-closing"><div className="fit-shell"><p>✳ QUEM SE MOVE, EVOLUI</p><h2>SEU PRÓXIMO<br /><em>CAPÍTULO</em><br />COMEÇA AGORA.</h2><a className="fit-button fit-button-dark" href="#programas">ENCONTRE SEU PROGRAMA <span>↗</span></a></div></section>
      <footer className="fit-footer"><div className="fit-shell fit-footer-inner"><strong>GODEGUESI<span>FIT.</span></strong><span>© 2026 GODEGUESI FIT · DEMONSTRAÇÃO</span><a href="#topo">VOLTAR AO TOPO ↑</a></div><div className="fit-shell fit-footer-disclaimer">Informações gerais sobre fitness não substituem orientação individual de profissionais de saúde e educação física.</div></footer>
    </main>
  );
}

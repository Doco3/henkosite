import React, { useState, useEffect, useRef } from 'react';

// COPIE TODO O CÓDIGO DO SITE DA HENKO PARA CÁ (ÍCONES, UI, PAGES, ETC)

import React, { useState, useEffect, useRef } from 'react';

// =============================================================================
// --- 1. SISTEMA DE ÍCONES (SVG NATIVO) ---
// =============================================================================

const Icons = {
  Menu: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>,
  X: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  Monitor: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
  Zap: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  ArrowRight: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  ArrowLeft: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>,
  Instagram: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  Mail: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Award: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Cpu: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>,
  ShieldCheck: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
  TrendingUp: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  DollarSign: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  Eye: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  MessageCircle: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
  Calculator: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><path d="M8 14h8"/><path d="M12 18h4"/></svg>,
  Music: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  Trophy: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
  Store: (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>,
};

// =============================================================================
// --- 2. COMPONENTES DE UI ---
// =============================================================================

const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 transform h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const TrustSeals = ({ iconSize = 32, textSize = "text-[10px]", alignment = "justify-start" }) => (
  <div className={`grid grid-cols-3 gap-6 ${alignment}`}>
    {[
      { label: "Garantia de Fábrica", icon: Icons.Award },
      { label: "Certificação Técnica", icon: Icons.ShieldCheck },
      { label: "Engenharia Própria", icon: Icons.Cpu }
    ].map((seal, i) => (
      <div key={i} className="flex flex-col items-center text-center gap-3 group">
        <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 text-blue-500 group-hover:border-blue-600 transition-all">
          <seal.icon size={iconSize} />
        </div>
        <p className={`${textSize} font-black uppercase text-zinc-400 tracking-tighter leading-tight group-hover:text-white transition-colors`}>
          {seal.label.split(' ')[0]}<br/>{seal.label.split(' ').slice(1).join(' ')}
        </p>
      </div>
    ))}
  </div>
);

const WhatsAppButton = () => (
  <div className="fixed bottom-8 right-8 z-50">
    <a href="https://wa.me/5511999700703" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:-translate-y-2 block">
      <Icons.MessageCircle size={28} />
    </a>
  </div>
);

// =============================================================================
// --- 3. PÁGINAS E NAVEGAÇÃO ---
// =============================================================================

const Navbar = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Início', view: 'home' }, { name: 'Sobre', view: 'sobre' }, { name: 'Soluções', view: 'solucoes' }, { name: 'Contato', view: 'contato' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled || currentView !== 'home' ? 'bg-black/90 backdrop-blur-xl border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-left">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
          <img src="https://i.imgur.com/zXQw6Jy.png" alt="Henko Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </div>
        <div className="hidden md:flex items-center space-x-10 text-left">
          {navLinks.map((link) => (
            <button key={link.view} onClick={() => setView(link.view)} className={`text-[10px] font-black uppercase tracking-widest transition-all hover:text-blue-500 ${currentView === link.view ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-zinc-500'}`}>{link.name}</button>
          ))}
          <button onClick={() => setView('contato')} className="group relative px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black text-xs uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all text-left">Orçamento Rápido</button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">{isOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}</button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-8 space-y-6 flex flex-col text-left">
          {navLinks.map((link) => (
            <button key={link.view} onClick={() => { setView(link.view); setIsOpen(false); }} className={`text-lg font-black uppercase text-left ${currentView === link.view ? 'text-blue-500' : 'text-white'}`}>{link.name}</button>
          ))}
          <button onClick={() => { setView('contato'); setIsOpen(false); }} className="bg-blue-600 text-center py-4 rounded-xl text-white font-bold uppercase">Solicitar Orçamento</button>
        </div>
      )}
    </nav>
  );
};

const HomePage = ({ setView }) => {
  const marqueeList = [
    { name: "SBT", url: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/2048px-Logotipo_do_SBT.svg.png", scale: 0.95 },
    { name: "NBA House", url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/320px-National_Basketball_Association_logo.svg.png", scale: 0.9 },
    { name: "São Paulo FC", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/320px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png", scale: 1.1 },
    { name: "Brahma", url: "https://www.brahma.com.br/sites/g/files/wnfebl12751/files/styles/webp/public/Logo_typografico.png.webp?itok=FyV-saVb", scale: 0.9 },
    { name: "RodOil", url: "https://arhserrana.com.br/wp-content/uploads/elementor/forms/679d01a39c16e.png", scale: 0.9 },
  ];

  return (
    <div className="animate-in fade-in duration-1000 text-left">
      <style>{`
        @keyframes marquee-infinite { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-infinite { animation: marquee-infinite 40s linear infinite; display: flex; width: max-content; }
        .marquee-mask { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}</style>
      <section className="relative min-h-screen py-32 flex flex-col justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 overflow-hidden text-left">
          <video src="https://i.imgur.com/MXrAThc.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent text-left"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-left">
          <ScrollReveal>
            <div className="max-w-5xl text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Tecnologia Global</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight uppercase pr-8 text-left">PAINEL DE LED <br/> NÃO É TUDO IGUAL. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">PAINEL DE LED É HENKO.</span></h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium mb-12 leading-relaxed text-left">Performance real em cada pixel. A solução definitiva em LED para quem quer ser visto, sentido e lembrado.</p>
              <div className="flex flex-wrap gap-6 mb-16 text-left">
                <button onClick={() => setView('solucoes')} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all">Ver Soluções</button>
                <button onClick={() => setView('contato')} className="bg-transparent border border-zinc-700 hover:border-white text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all">Falar com Consultor</button>
              </div>
              <ScrollReveal delay={400}><div className="pt-8 border-t border-zinc-800/50 max-w-lg text-left"><TrustSeals iconSize={20} textSize="text-[8px]" alignment="justify-start" /></div></ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Seção Vantagens */}
      <section className="py-24 bg-black border-b border-zinc-900 text-left">
        <div className="container mx-auto px-6 md:px-12 text-left text-left">
          <ScrollReveal>
            <div className="mb-20 text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight text-left">POR QUE <span className="text-blue-600">LED?</span></h2>
              <p className="text-zinc-500 max-w-2xl text-sm md:text-base font-medium text-left">A sinalização digital é a ferramenta mais poderosa de conversão do mercado moderno.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { label: "Mais Vendas", value: "68%", icon: Icons.TrendingUp, desc: "A sinalização digital influencia diretamente na decisão de compra." },
              { label: "Custo x Benefício", value: "R$ 0,15", icon: Icons.DollarSign, desc: "Custo médio por mil impressões (CPM). Mais eficaz que mídia tradicional." },
              { label: "Retenção Visual", value: "8/10", icon: Icons.Eye, desc: "O brilho e movimento do LED Henko captam a atenção instintivamente." },
              { label: "Visibilidade", value: "+30%", icon: Icons.Zap, desc: "Aumento imediato na percepção da marca em locais de alto tráfego." }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2.5rem] group hover:border-blue-500/40 transition-all text-left">
                <div className="mb-8 p-4 bg-black rounded-2xl inline-block border border-zinc-800 group-hover:scale-110 transition-transform"><stat.icon className="text-blue-500" /></div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4">{stat.label}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Parceiros */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900 marquee-mask overflow-hidden text-left">
        <div className="container mx-auto px-6 mb-12 text-left"><p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] text-left">Nossos Parceiros</p></div>
        <div className="animate-marquee-infinite flex items-center">
          {[...marqueeList, ...marqueeList].map((p, i) => (
            <div key={i} className="flex-shrink-0 px-24 md:px-32 min-w-[250px] flex items-center justify-center transition-all duration-500 hover:scale-110">
              <img src={p.url} alt={p.name} style={{ transform: `scale(${p.scale})` }} className="h-20 w-auto object-contain pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 min-h-screen bg-black text-left">
    <div className="container mx-auto px-6 md:px-12 py-12 text-left">
      <ScrollReveal>
        <div className="max-w-4xl mb-20 text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-blue-500/20 rounded-full bg-blue-500/10 backdrop-blur-md mb-8"><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span><span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Autoridade Máxima</span></div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight uppercase leading-[0.9] pr-4">QUASE 20 ANOS <br/> <span className="text-blue-600">DE INOVAÇÃO.</span></h1>
          <p className="text-zinc-400 text-xl font-medium max-w-3xl mt-8">Líderes em engenharia visual de alta performance, transformando marcas através de pixels e tecnologia de ponta no Brasil.</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 text-left">
        {[{ label: "Anos de Estrada", value: "19+" }, { label: "Projetos Ativos", value: "500+" }, { label: "m² Instalados", value: "15k+" }, { label: "Refresh Rate (Hz)", value: "7680" }].map((stat, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] text-center group hover:border-blue-600 transition-all text-left">
              <p className="text-blue-500 text-4xl md:text-6xl font-black mb-2 tracking-tighter text-center">{stat.value}</p>
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest text-center">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
);

const SolutionsPage = ({ setView }) => {
  const solutions = [
    { title: "Shows e Eventos", desc: "Festivais e turnês com montagem de alta performance.", icon: Icons.Music, image: "https://i.imgur.com/WBzKu1z.mp4" },
    { title: "Shopping & Varejo", desc: "Vitrines digitais de alta definição.", icon: Icons.Store, image: "https://i.imgur.com/aSbF4Z6.mp4" },
    { title: "Arenas & Estádios", desc: "Placares e perímetros de campo.", icon: Icons.Trophy, image: "https://i.imgur.com/chcoJzz.mp4" }
  ];
  return (
    <div className="pt-32 min-h-screen bg-zinc-950 pb-20 text-left">
      <div className="container mx-auto px-6 md:px-12 py-12 text-left">
        <ScrollReveal><div className="mb-16 max-w-4xl text-left"><h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight uppercase">NOSSAS <span className="text-blue-600">SOLUÇÕES</span></h1></div></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left text-left">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 100}>
              <div className="bg-zinc-900/50 rounded-[2.5rem] overflow-hidden border border-zinc-800 hover:border-blue-600 group flex flex-col h-full transition-all relative text-left">
                <div className="h-64 overflow-hidden relative text-left text-left">
                  <video src={sol.image} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-zinc-800"><sol.icon size={24} className="text-blue-500" /></div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between text-left">
                  <div className="text-left text-left">
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase text-left">{sol.title}</h3>
                    <p className="text-zinc-500 text-sm mb-8 font-medium text-left">{sol.desc}</p>
                  </div>
                  <button onClick={() => setView('contato')} className="w-full py-4 border border-zinc-700 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Solicitar Orçamento</button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [calcWidth, setCalcWidth] = useState('');
  const [calcHeight, setCalcHeight] = useState('');
  const [calcDistance, setCalcDistance] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  const calculateLed = () => {
    const w = parseFloat(calcWidth); const h = parseFloat(calcHeight); const d = parseFloat(calcDistance);
    if (!w || !h || !d) return;
    let pitch = 3.9; let modelName = "P3.9 PERFORMANCE";
    if (d < 2) { pitch = 1.9; modelName = "P1.9 ULTRA-HD"; } 
    else if (d < 4) { pitch = 2.6; modelName = "P2.6 HIGH DEFINITION"; }
    setCalcResult({ area: (w * h).toFixed(2), pitch, recommendedModel: modelName });
  };

  return (
    <div className="pt-32 bg-black pb-20 text-left min-h-screen">
      <div className="container mx-auto px-6 md:px-12 text-left">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase text-left">VAMOS <br/> CRIAR <span className="text-blue-600">ALGO.</span></h1>
        <div className="max-w-2xl bg-zinc-900/40 border border-zinc-800 rounded-[3rem] p-10 text-left text-left">
          <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 text-left">Simulador Técnico</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
            <input type="number" placeholder="Largura (m)" value={calcWidth} onChange={(e) => setCalcWidth(e.target.value)} className="bg-black border border-zinc-800 p-4 text-white rounded-2xl outline-none focus:border-blue-600 text-left" />
            <input type="number" placeholder="Altura (m)" value={calcHeight} onChange={(e) => setCalcHeight(e.target.value)} className="bg-black border border-zinc-800 p-4 text-white rounded-2xl outline-none focus:border-blue-600 text-left" />
            <input type="number" placeholder="Visão (m)" value={calcDistance} onChange={(e) => setCalcDistance(e.target.value)} className="bg-black border border-zinc-800 p-4 text-white rounded-2xl outline-none focus:border-blue-600 text-left" />
          </div>
          <button onClick={calculateLed} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all">Gerar Configuração</button>
          {calcResult && (
            <div className="mt-6 bg-black/60 border border-blue-600/20 rounded-[2rem] p-6 animate-in fade-in text-left text-left">
              <p className="text-blue-500 font-bold mb-2 uppercase text-xs text-left">{calcResult.recommendedModel}</p>
              <p className="text-white text-2xl font-black text-left">{calcResult.area}m² | P{calcResult.pitch}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setView }) => (
  <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 text-left">
    <div className="container mx-auto px-6 md:px-12 text-left">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-left">
        <div className="md:col-span-2 space-y-8 text-left">
          <img src="https://i.imgur.com/zXQw6Jy.png" alt="Henko Logo" className="h-10 w-auto cursor-pointer" onClick={() => setView('home')} />
          <p className="text-zinc-500 max-w-sm text-sm text-left">Do Brasil para o mundo. Líder em soluções de LED de alta performance.</p>
        </div>
        <div className="text-left">
          <h4 className="text-white font-black mb-8 uppercase text-[10px] text-left">Navegação</h4>
          <ul className="space-y-4 text-xs font-bold uppercase text-zinc-500 text-left">
            {['home', 'sobre', 'solucoes', 'contato'].map((v) => (
              <li key={v} className="text-left"><button onClick={() => setView(v)} className="text-left">{v}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-zinc-700 text-[10px] font-mono text-left">© 2026 HENKO PRODUÇÕES. TODOS OS DIREITOS RESERVADOS.</p>
    </div>
  </footer>
);

const HenkoSite = () => {
  const [currentView, setCurrentView] = useState('home');
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentView]);

  return (
    <>
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="bg-black">
        {currentView === 'home' && <HomePage setView={setCurrentView} />}
        {currentView === 'sobre' && <AboutPage />}
        {currentView === 'solucoes' && <SolutionsPage setView={setCurrentView} />}
        {currentView === 'insights' && <div className="pt-32 text-center text-4xl uppercase font-black">Insights</div>}
        {currentView === 'contato' && <ContactPage />}
      </main>
      <WhatsAppButton />
      <Footer setView={setCurrentView} />
    </>
  );
};

// =============================================================================
// --- CENTRAL DE DEPLOY (GERADOR DE DOWNLOADS) ---
// =============================================================================

const DeployHub = () => {
  const download = (filename, content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = filename;
    link.click();
  };

  const packageJson = `{
  "name": "henko-web",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vite": "^4.3.9",
    "@vitejs/plugin-react": "^4.0.0"
  }
}`;

  const indexHtml = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Henko LED</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-black text-white"><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>`;

  const mainJsx = `import React from 'react';import ReactDOM from 'react-dom/client';import App from './App.jsx';ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);`;

  const viteConfig = `import { defineConfig } from 'vite';import react from '@vitejs/plugin-react';export default defineConfig({plugins: [react()],});`;

  // --- CÓDIGO COMPLETO DO APP.JSX PARA DOWNLOAD ---
  const fullAppCode = `import React, { useState, useEffect, useRef } from 'react';

// COPIE TODO O CÓDIGO DO SITE DA HENKO PARA CÁ (ÍCONES, UI, PAGES, ETC)`;

  return (
    <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl animate-in fade-in duration-700 text-left text-left">
      <h1 className="text-6xl font-black uppercase italic mb-8 text-left">DEPLOY <span className="text-blue-600">HUB</span></h1>
      <p className="text-zinc-500 mb-12 text-left">Siga o fluxo abaixo no seu Mac para subir ao Vercel sem erros.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-left">
        {[
          { name: 'package.json', content: packageJson },
          { name: 'index.html', content: indexHtml },
          { name: 'vite.config.js', content: viteConfig },
          { name: 'main.jsx', content: mainJsx, folder: 'src/' },
          { name: 'App.jsx', content: fullAppCode, folder: 'src/' }
        ].map(file => (
          <div key={file.name} className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex justify-between items-center text-left">
            <div>
               <p className="text-[10px] text-zinc-500 font-mono text-left">{file.folder || './'}</p>
               <h3 className="font-black uppercase text-sm text-left">{file.name}</h3>
            </div>
            <button onClick={() => download(file.name, file.content)} className="bg-white text-black px-4 py-2 rounded-xl font-bold text-[10px] uppercase">Baixar</button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-blue-600/10 border border-blue-600/20 rounded-[2.5rem] text-xs font-mono text-zinc-400 text-left">
        <p className="text-blue-500 font-bold mb-4 uppercase text-left">Como resolver o erro 'vite build':</p>
        <p className="text-left text-left">1. No Terminal: <span className="text-white">npm install</span> (Instala o Vite localmente).</p>
        <p className="text-left text-left">2. No Terminal: <span className="text-white">npm run build</span> (Gera a pasta dist).</p>
        <p className="mt-4 text-left text-left">No Vercel: Se o erro persistir, em <strong>Build & Development Settings</strong>, garanta que o <strong>Framework Preset</strong> esteja como <strong>Vite</strong>.</p>
      </div>
    </div>
  );
};

// =============================================================================
// --- COMPONENTE MESTRE ---
// =============================================================================

export default function App() {
  const [tab, setTab] = useState('site');
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden text-left">
      <div className="fixed top-24 right-8 z-[100] flex flex-col gap-3">
        <button onClick={() => setTab('site')} className={`px-6 py-3 rounded-full font-black uppercase text-[10px] border ${tab === 'site' ? 'bg-blue-600 border-blue-400' : 'bg-zinc-900 border-zinc-800 text-left'}`}>Site Live</button>
        <button onClick={() => setTab('deploy')} className={`px-6 py-3 rounded-full font-black uppercase text-[10px] border ${tab === 'deploy' ? 'bg-blue-600 border-blue-400' : 'bg-zinc-900 border-zinc-800 text-left'}`}>Deploy Hub</button>
      </div>
      {tab === 'site' ? <HenkoSite /> : <DeployHub />}
    </div>
  );
}

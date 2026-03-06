/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Layout, 
  Flower2, 
  Type, 
  Hash, 
  Dog, 
  Smile, 
  BookOpen, 
  Gift, 
  Egg,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const TopBanner = () => {
  const today = new Date().toLocaleDateString('pt-BR');
  return (
    <div className="bg-[#f9a8d4] text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
      <Sparkles size={16} />
      Oferta Válida Somente Hoje ({today})
      <Sparkles size={16} />
    </div>
  );
};

const Hero = () => (
  <section className="section-padding text-center pt-12 pb-8">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
    >
      <span className="text-[#fb923c]">+5000 moldes de EVA</span> para <br />
      <span className="text-slate-800">Professores que Querem</span> <br />
      <span className="text-[#f472b6]">Começar o Ano na Frente</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
    >
      Enquanto <span className="text-[#fb923c] font-bold">algumas</span> ainda estão se <span className="text-[#fb923c] font-bold">organizando</span>, você já entra em sala com <span className="text-[#f472b6] font-bold">tudo pronto</span>.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
    >
      <a 
        href="#vsl"
        className="gradient-btn text-xl px-12 py-6 inline-flex items-center justify-center gap-2"
      >
        Quero Meus Moldes Agora! 🎨
      </a>
    </motion.div>
  </section>
);

const VideoSection = () => (
  <section id="vsl" className="section-padding pt-0">
    <div className="max-w-[400px] mx-auto">
      <div className="relative shadow-2xl rounded-2xl overflow-hidden" style={{ padding: '177.78% 0 0 0' }}>
        <iframe 
          src="https://player.vimeo.com/video/1171183067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
          title="MOLDES DE EVA"
        ></iframe>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="bg-white py-8 text-center border-y border-slate-100">
    <div className="flex items-center justify-center gap-2 text-slate-500 mb-4">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      <span className="text-sm font-medium">192 pessoas vendo agora</span>
    </div>
    <h2 className="text-2xl font-bold">
      Veja o que você vai <span className="text-[#f472b6]">receber</span>:
    </h2>
    <div className="mt-8 overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex justify-center gap-6 px-4 min-w-max">
        {[
          { url: 'https://moldeseva.shop/assets/moldes-letras-TYfCpokg.jpeg', label: 'Moldes de Letras' },
          { url: 'https://moldeseva.shop/assets/moldes-flores-CuUDxYwA.jpeg', label: 'Moldes de Flores' },
          { url: 'https://moldeseva.shop/assets/moldes-animais-V6Oluh2Q.jpeg', label: 'Moldes de Animais' }
        ].map((item, i) => {
          // Using images.weserv.nl as a proxy to convert to WebP and resize for better performance
          const optimizedUrl = `https://images.weserv.nl/?url=${encodeURIComponent(item.url)}&output=webp&w=512&h=640&fit=cover&q=80`;
          
          return (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 w-64">
              <div className="bg-[#f472b6] text-white text-xs font-bold py-1 px-3 rounded-full mb-4 inline-block">
                {item.label}
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
                <img 
                  src={optimizedUrl} 
                  alt={item.label} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="256"
                  height="320"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-slate-50 py-6">
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
      <div className="flex items-center gap-2 text-slate-600 font-medium">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        Acesso Imediato
      </div>
      <div className="flex items-center gap-2 text-slate-600 font-medium">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        Garantia de 7 Dias
      </div>
      <div className="flex items-center gap-2 text-slate-600 font-medium">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        Pagamento Único
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { url: "https://moldeseva.shop/assets/depoimento-whatsapp-2-cRJNlXFd.jpeg", name: "Ana Paula" },
    { url: "https://moldeseva.shop/assets/depoimento-whatsapp-4-BFE4enO0.jpeg", name: "Mariana Silva" },
    { url: "https://moldeseva.shop/assets/depoimento-whatsapp-5--VbFSgvf.jpeg", name: "Juliana Costa" },
    { url: "https://moldeseva.shop/assets/depoimento-whatsapp-3-CB5FaWW7.jpeg", name: "Fernanda Lima" },
  ];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">
        O que nossos <span className="text-[#f472b6]">clientes</span> estão dizendo
      </h2>
      
      <div className="max-w-4xl mx-auto relative px-12">
        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-[#f472b6] transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={28} />
        </button>
        
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-[#f472b6] transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-sm"
            >
              <div className="relative group">
                <img 
                  src={images[index].url} 
                  alt={`Depoimento de ${images[index].name}`} 
                  className="rounded-[2rem] shadow-2xl w-full aspect-[9/16] object-cover border-4 border-white" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-6 rounded-full shadow-xl border border-white/20">
                  <p className="text-[#f472b6] font-bold text-sm whitespace-nowrap">
                    {images[index].name} • Cliente Satisfeita
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-[#f472b6]' : 'w-2 bg-slate-200'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: 'Flores', icon: <Flower2 className="text-[#f472b6]" size={32} /> },
    { name: 'Letras', icon: <Type className="text-[#fb923c]" size={32} /> },
    { name: 'Números', icon: <Hash className="text-[#a855f7]" size={32} /> },
    { name: 'Animais', icon: <Dog className="text-[#ec4899]" size={32} /> },
    { name: 'Personagens', icon: <Smile className="text-[#f97316]" size={32} /> },
    { name: 'Temas Bíblicos', icon: <BookOpen className="text-[#8b5cf6]" size={32} /> },
    { name: 'Natal', icon: <Gift className="text-[#f43f5e]" size={32} /> },
    { name: 'Páscoa', icon: <Egg className="text-[#fb923c]" size={32} /> },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Moldes para <span className="text-[#fb923c]">Todas as Ocasiões</span></h2>
        <p className="text-slate-500">Mais de 5000 moldes organizados por categoria</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cats.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
              {cat.icon}
            </div>
            <span className="font-semibold text-slate-700">{cat.name}</span>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-[#f472b6] font-bold">E muito mais! 🎨</p>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Economize Tempo', desc: 'Nunca mais perca horas procurando moldes na internet', icon: <Clock className="text-white" /> },
    { title: 'Acesso Imediato', desc: 'Baixe todos os moldes assim que confirmar o pagamento', icon: <Zap className="text-white" /> },
    { title: 'Organização Total', desc: 'Moldes categorizados e prontos para usar', icon: <Layout className="text-white" /> },
    { title: 'Garantia de 7 Dias', desc: 'Se não gostar, devolvemos 100% do seu dinheiro', icon: <ShieldCheck className="text-white" /> },
  ];

  return (
    <section className="section-padding bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher Nosso <span className="text-[#f472b6]">Kit?</span></h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f472b6] rounded-full flex-shrink-0 flex items-center justify-center shadow-md">
              {f.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="section-padding bg-slate-50">
    <h2 className="text-3xl font-bold text-center mb-12">Escolha Seu <span className="text-[#fb923c]">Plano Ideal</span></h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Basic Plan */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
        <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
        <p className="text-slate-400 line-through text-sm">R$97</p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-lg font-bold">R$</span>
          <span className="text-5xl font-extrabold">10,00</span>
        </div>
        <p className="text-xs text-slate-500 mb-4">pagamento único</p>
        <p className="text-green-600 font-bold text-sm mb-6">Você economiza R$87,00</p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" /> +5000 Moldes de EVA
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" /> Acesso digital vitalício
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" /> Garantia de 7 dias
          </li>
        </ul>

        <a 
          href="https://pay.hotmart.com/L104359058M?checkoutMode=10&bid=1772811602532"
          className="block w-full bg-gradient-to-r from-[#f472b6] to-[#fb923c] text-white text-center font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          ESCOLHER PLANO BÁSICO
        </a>
      </div>

      {/* Premium Plan */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-[#fb923c] relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fb923c] text-white text-xs font-bold py-1 px-4 rounded-full flex items-center gap-1">
          <Sparkles size={12} /> MAIS POPULAR
        </div>
        <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
        <p className="text-slate-400 line-through text-sm">R$197</p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-lg font-bold">R$</span>
          <span className="text-5xl font-extrabold">19,90</span>
        </div>
        <p className="text-xs text-slate-500 mb-4">pagamento único</p>
        <p className="text-green-600 font-bold text-sm mb-2">Você economiza R$179,00</p>
        <p className="text-[10px] text-slate-400 mb-6">+ 2.736 pessoas escolheram essa oferta</p>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" /> +5000 Moldes de EVA
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" /> Acesso digital vitalício
          </li>
          {[
            'BÔNUS: Kit Volta às Aulas Completo',
            'BÔNUS: Moldes de Carnaval',
            'BÔNUS: Moldes Para a Páscoa',
            'BÔNUS: Moldes da Festa Junina',
            'BÔNUS: Moldes Para a Copa do Mundo',
            'BÔNUS: Moldes do Folclore Brasileiro',
            'BÔNUS: Minicurso'
          ].map((bonus, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <CheckCircle2 size={18} className="text-green-500" /> {bonus}
            </li>
          ))}
        </ul>

        <a 
          href="https://pay.hotmart.com/Y104624681X?checkoutMode=10&bid=1772810709191"
          className="block w-full bg-gradient-to-r from-[#f472b6] to-[#fb923c] text-white text-center font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          ESCOLHER PLANO PREMIUM
        </a>
      </div>
    </div>
  </section>
);

const Checklist = () => (
  <section className="section-padding bg-white">
    <h2 className="text-3xl font-bold text-center mb-4">O Que Vem no <span className="text-[#f472b6]">Kit?</span></h2>
    <p className="text-slate-500 text-center mb-12">Veja tudo o que você vai receber</p>
    <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-3xl border border-slate-100">
      <ul className="space-y-4">
        {[
          'Moldes de flores (rosas, margaridas, girassóis e muito mais)',
          'Alfabeto completo em diversos estilos',
          'Números de 0 a 9 em vários formatos',
          'Animais da fazenda, selvagens e marinhos',
          'Moldes de frutas (maçã, banana, morango, laranja)',
          'Personagens infantis e desenhos populares',
          'Temas bíblicos (Arca de Noé, Jonas, Davi e mais)',
          'Decorações natalinas (Papai Noel, árvore, presentes)',
          'Páscoa (coelhinhos, ovos, cenouras)',
          'Moldes de corações, estrelas e formas geométricas',
          'E centenas de outros modelos exclusivos!'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600">
            <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="section-padding bg-slate-50 text-center">
    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
      <ShieldCheck className="text-white" size={40} />
    </div>
    <h2 className="text-4xl font-extrabold mb-4">Garantia <span className="text-[#f472b6]">Incondicional</span></h2>
    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
      Você tem <span className="font-bold">7 dias</span> para testar o kit completo. Se por qualquer motivo você não ficar satisfeita, devolvemos <span className="text-green-600 font-bold">100% do seu investimento</span>, sem perguntas.
    </p>
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-xl mx-auto mb-12">
      <p className="text-sm italic text-slate-500">
        Isso significa que o risco é todo nosso! Você pode experimentar todos os moldes, usar em suas aulas e se não valer a pena, basta nos avisar.
      </p>
    </div>
    <a 
      href="#pricing"
      className="gradient-btn text-xl px-12 py-6 flex items-center justify-center gap-2 mx-auto max-w-fit"
    >
      Quero Meus Moldes! 🎨
    </a>
  </section>
);

const FloatingNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: 'Ana P.', city: 'Belo Horizonte, MG', plan: 'Básico' });

  const names = ['Carla M.', 'Beatriz R.', 'Camila A.', 'Fernanda S.', 'Juliana L.'];
  const cities = ['Porto Alegre, RS', 'São Paulo, SP', 'Rio de Janeiro, RJ', 'Curitiba, PR'];
  const plans = ['Básico', 'Premium'];

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        plan: plans[Math.floor(Math.random() * plans.length)]
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-4 left-4 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 max-w-xs"
        >
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="text-green-500" size={20} />
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-800">Compra realizada! 🎉</p>
            <p className="text-slate-500">
              <span className="font-bold">{data.name}</span> de {data.city} acabou de adquirir o <span className="text-[#f472b6] font-bold">plano {data.plan}</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">há poucos minutos</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como vou receber o acesso ao kit?",
      a: "O acesso é imediato! Assim que o seu pagamento for confirmado, você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva onde poderá baixar todos os moldes."
    },
    {
      q: "Em qual formato os moldes são enviados?",
      a: "Todos os moldes estão em formato PDF de alta qualidade, prontos para imprimir em folha A4 comum. Você pode imprimir quantas vezes quiser!"
    },
    {
      q: "Posso usar os moldes para vender meus trabalhos?",
      a: "Sim! Você tem total liberdade para usar os moldes para criar peças físicas em EVA e vendê-las. O que não é permitido é a revenda ou distribuição dos arquivos digitais do kit."
    },
    {
      q: "O acesso aos moldes tem prazo de validade?",
      a: "Não! O seu acesso é vitalício. Você paga uma única vez e poderá acessar e baixar os moldes sempre que precisar, para o resto da vida."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="text-[#f472b6] mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold">Perguntas <span className="text-[#fb923c]">Frequentes</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-700">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-[#f472b6]" /> : <Plus size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Hero />
      <VideoSection />
      <SocialProof />
      <TrustBar />
      <Testimonials />
      <Categories />
      <Features />
      <Pricing />
      <Checklist />
      <FAQ />
      <Guarantee />
      
      <footer className="bg-slate-900 text-slate-500 py-12 px-4 text-center text-xs">
        <p className="mb-4">© 2026 Moldes de EVA. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Políticas de Privacidade</a>
        </div>
        <p className="max-w-2xl mx-auto opacity-50">
          Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </footer>

      <FloatingNotification />
    </div>
  );
}

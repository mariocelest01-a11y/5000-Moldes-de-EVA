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
  FileText, 
  MessageSquare, 
  Trophy, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  FileCheck,
  BookOpen,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const TopBanner = () => {
  const today = new Date().toLocaleDateString('pt-BR');
  return (
    <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
      <Sparkles size={16} />
      Oferta Válida Somente Hoje ({today})
      <Sparkles size={16} />
    </div>
  );
};

const Hero = () => (
  <section className="section-padding text-center pt-12 pb-16">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
    >
      <span className="text-blue-700">Seu Currículo Está Sendo Ignorado</span> <br />
      <span className="text-slate-800">E Você Nem Sabe Por Quê</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6"
    >
      Descubra como um currículo moderno e profissional pode te colocar na frente de centenas de candidatos e finalmente conseguir a entrevista que você merece.
    </motion.p>

    <div className="max-w-4xl mx-auto mt-4 mb-10 px-4">
      <div className="relative shadow-2xl rounded-2xl overflow-hidden">
        <img 
          src="https://plain-apac-prod-public.komododecks.com/202604/01/0RkxoVh75319B7BS7RWw/image.png" 
          alt="Mockup VSL" 
          className="w-full h-auto block"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <a 
        href="#pricing"
        className="gradient-btn text-xl px-12 py-6 inline-flex items-center justify-center gap-2"
      >
        Quero Meu Currículo Novo Agora! 🚀
      </a>
    </motion.div>
  </section>
);

const WhatYouReceive = () => (
  <section className="section-padding bg-white">
    <h2 className="text-3xl font-bold text-center mb-4">O Que Você Vai <span className="text-blue-600">Receber</span></h2>
    <p className="text-slate-500 text-center mb-12">Tudo o que você precisa para se destacar no mercado</p>
    <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
      <ul className="space-y-6">
        {[
          { text: 'Template de currículo moderno e editável', icon: <FileCheck className="text-blue-600" /> },
          { text: 'Carta de apresentação pronta com espaços para preencher', icon: <FileText className="text-blue-600" /> },
          { text: 'Guia rápido de como preencher em menos de 20 minutos', icon: <Clock className="text-blue-600" /> },
          { text: 'Dicas do que NUNCA colocar no currículo', icon: <Zap className="text-blue-600" /> }
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-slate-700 text-lg">
            <div className="mt-1">{item.icon}</div>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="section-padding bg-slate-50">
    <h2 className="text-3xl font-bold text-center mb-12">Bônus <span className="text-indigo-600">Exclusivos</span></h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col gap-4">
        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
          <MessageSquare size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">1- Script de WhatsApp para Contato com RH (PDF)</h3>
        <p className="text-slate-600 leading-relaxed">
          Mensagem pronta para a candidata enviar no WhatsApp da empresa após mandar o currículo. Pouquíssimas pessoas fazem isso e quem faz se destaca.
        </p>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col gap-4">
        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
          <Trophy size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">2- Como Arrasar na Entrevista (PDF de 1 página)</h3>
        <p className="text-slate-600 leading-relaxed">
          As 10 perguntas mais feitas em entrevistas + respostas estratégicas prontas para adaptar. Complemento natural do currículo.
        </p>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="section-padding bg-white">
    <div className="max-w-xl mx-auto">
      <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/20 rounded-full -ml-16 -mb-16 blur-3xl" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Acesso Completo</h2>
          <p className="text-slate-400 line-through text-sm mb-2">R$37,00</p>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-xl font-bold">R$</span>
            <span className="text-7xl font-extrabold text-blue-400">10,00</span>
          </div>
          <p className="text-sm text-slate-400 mb-6">Pagamento único • Acesso vitalício</p>
          
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-4 mb-8">
            <p className="text-blue-300 text-sm font-medium">
              ⚠️ Esse preço é de lançamento. Assim que as primeiras vagas forem preenchidas, o valor volta para R$37.
            </p>
          </div>

          <ul className="text-left space-y-4 mb-10">
            {[
              'Template de Currículo Moderno',
              'Carta de Apresentação Pronta',
              'Guia Rápido de Preenchimento',
              'BÔNUS: Script WhatsApp RH',
              'BÔNUS: Guia de Entrevista'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="https://pay.hotmart.com/X105080926C?checkoutMode=10"
            className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            QUERO MEU ACESSO AGORA!
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-1"><ShieldCheck size={12} /> Compra Segura</div>
            <div className="flex items-center gap-1"><Clock size={12} /> Acesso Imediato</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    { 
      text: "Mandei meu currículo novo numa segunda e na quarta já tinha entrevista marcada.", 
      author: "Ana Paula, 28 anos",
      city: "Rio de Janeiro, RJ",
      image: "https://media.istockphoto.com/id/1483329842/photo/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=N4Puu0y0FaYrUMcaANbSs8SRF8IbTvsh-sr10fiCyqM="
    },
    { 
      text: "Nunca imaginei que o problema era o formato. Mudei e em uma semana recebi 3 ligações.", 
      author: "Fernanda, 34 anos",
      city: "Curitiba, PR",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
    },
    { 
      text: "Fiquei 4 meses mandando currículo e nada. Mudei o formato e em 10 dias recebi duas propostas. Não acreditei quando vi meu celular tocando.", 
      author: "Camila R., 31 anos",
      city: "São Paulo, SP",
      image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100067744734817"
    },
    { 
      text: "Achei que por ter pouca experiência não ia conseguir nada. O guia me ensinou a valorizar o que eu tinha. Na primeira semana já fui chamada pra entrevista.", 
      author: "Juliana M., 22 anos",
      city: "Belo Horizonte, MG",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg"
    },
  ];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">
        Quem já <span className="text-blue-600">mudou</span> de vida
      </h2>
      
      <div className="max-w-4xl mx-auto relative px-12">
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronRight size={28} />
        </button>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-2xl bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-inner">
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8">
                "{testimonials[index].text}"
              </p>
              <div>
                <p className="font-bold text-blue-600">{testimonials[index].author}</p>
                <p className="text-sm text-slate-400">{testimonials[index].city}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como vou receber o acesso?",
      a: "O acesso é imediato! Assim que o seu pagamento for confirmado, você receberá um e-mail com o link para baixar o template e todos os bônus."
    },
    {
      q: "Preciso de algum programa pago para editar?",
      a: "Não! O template é editável em ferramentas gratuitas que você provavelmente já tem no seu computador ou celular."
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim, utilizamos a Hotmart, a maior e mais segura plataforma de produtos digitais do Brasil. Seus dados estão 100% protegidos."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro na hora."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="text-blue-600 mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-bold">Perguntas <span className="text-indigo-600">Frequentes</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-700">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-400" />}
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

const Guarantee = () => (
  <section className="section-padding bg-slate-50 text-center">
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
      <ShieldCheck className="text-white" size={40} />
    </div>
    <h2 className="text-4xl font-extrabold mb-4">Garantia <span className="text-blue-600">Incondicional</span></h2>
    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
      Você tem <span className="font-bold">7 dias</span> para testar o template completo. Se por qualquer motivo você não conseguir sua primeira entrevista ou não gostar do material, devolvemos <span className="text-blue-600 font-bold">100% do seu investimento</span>.
    </p>
    <a 
      href="#pricing"
      className="gradient-btn text-xl px-12 py-6 flex items-center justify-center gap-2 mx-auto max-w-fit"
    >
      Quero Meu Currículo Novo! 🚀
    </a>
  </section>
);

const FloatingNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: 'Ana P.', city: 'Belo Horizonte, MG' });

  const names = ['Carla M.', 'Beatriz R.', 'Camila A.', 'Fernanda S.', 'Juliana L.'];
  const cities = ['Porto Alegre, RS', 'São Paulo, SP', 'Rio de Janeiro, RJ', 'Curitiba, PR'];

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)]
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
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="text-blue-600" size={20} />
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-800">Compra realizada! 🎉</p>
            <p className="text-slate-500">
              <span className="font-bold">{data.name}</span> de {data.city} acabou de adquirir o <span className="text-blue-600 font-bold">Template Moderno</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">há poucos minutos</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Hero />
      <WhatYouReceive />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Guarantee />
      
      <footer className="bg-slate-900 text-slate-500 py-12 px-4 text-center text-xs">
        <p className="mb-4">© 2026 Template de Currículo Moderno. Todos os direitos reservados.</p>
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

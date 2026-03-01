import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Star, 
  Lock, 
  Camera, 
  MessageCircle, 
  Heart, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  ShieldCheck,
  Zap,
  Play
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: "Mensal",
      price: "R$ 49,90",
      period: "/mês",
      description: "Acesso total por 30 dias",
      features: ["Fotos exclusivas", "Vídeos semanais", "Chat privado", "Acesso ao feed"],
      recommended: false
    },
    {
      name: "Trimestral",
      price: "R$ 119,90",
      period: "/3 meses",
      description: "Economize 20% no plano",
      features: ["Tudo do mensal", "Conteúdo extra VIP", "Prioridade no chat", "Descontos em PPV"],
      recommended: true
    },
    {
      name: "Anual",
      price: "R$ 399,90",
      period: "/ano",
      description: "O melhor custo-benefício",
      features: ["Tudo do trimestral", "Brinde exclusivo", "Acesso vitalício ao grupo", "Chamada de vídeo mensal"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen luxury-gradient selection:bg-gold/30 selection:text-gold">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter"
          >
            EDUARDA <span className="text-gold">OFICIAL</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#planos" className="hover:text-gold transition-colors">Planos</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
          </nav>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gold-hover transition-colors"
          >
            Acessar Agora
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/luxury-model/1920/1080?blur=2" 
            alt="Eduarda Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Acesso Exclusivo
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Sua dose diária de <br />
              <span className="text-gold italic">Sedução & Luxo</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Bem-vindo ao meu mundo privado. Conteúdos sem censura, bastidores exclusivos e uma conexão real que você não encontra em nenhum outro lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="gold-gradient text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 w-full sm:w-auto">
                Ver Planos VIP
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                <Play size={20} className="text-gold" /> Preview
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="sobre" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">O que te espera no VIP</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Camera size={32} />, title: "Fotos 4K", desc: "Ensaios profissionais e amadores com a mais alta qualidade de imagem." },
              { icon: <Play size={32} />, title: "Vídeos HD", desc: "Conteúdos dinâmicos, bastidores e vídeos exclusivos toda semana." },
              { icon: <MessageCircle size={32} />, title: "Chat Direto", desc: "Fale comigo pessoalmente. Respondo todos os meus assinantes VIP." },
              { icon: <Lock size={32} />, title: "Sem Censura", desc: "A liberdade total que as redes sociais não permitem." },
              { icon: <Zap size={32} />, title: "Lives VIP", desc: "Transmissões ao vivo interativas exclusivas para membros." },
              { icon: <ShieldCheck size={32} />, title: "Privacidade", desc: "Ambiente 100% seguro e discreto para sua tranquilidade." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Escolha seu nível</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">Planos de Assinatura</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-[2.5rem] flex flex-col ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-gold shadow-[0_20px_50px_rgba(212,175,55,0.15)] scale-105 z-10' 
                    : 'glass-card border-white/5'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-black px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Mais Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm font-light">{plan.description}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                        <Check size={12} />
                      </div>
                      <span className="text-sm text-zinc-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest transition-all duration-300 ${
                  plan.recommended 
                    ? 'gold-gradient text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  Assinar VIP
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-y border-white/5 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2">
              <Star className="text-gold fill-gold" size={24} />
              <span className="text-xl font-bold tracking-tighter italic">OnlyFans Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-gold" size={24} />
              <span className="text-xl font-bold tracking-tighter italic">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-gold fill-gold" size={24} />
              <span className="text-xl font-bold tracking-tighter italic">10k+ Subscribers</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-zinc-400 font-light">Tudo o que você precisa saber antes de entrar para o time.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "O conteúdo é atualizado com que frequência?", a: "Posto novos conteúdos quase todos os dias. Ensaios completos são lançados semanalmente." },
              { q: "Quais as formas de pagamento?", a: "Aceitamos Cartão de Crédito, PIX e Criptomoedas através de nossa plataforma segura." },
              { q: "Posso cancelar a qualquer momento?", a: "Sim, você tem total liberdade para cancelar sua assinatura quando desejar, sem taxas ocultas." },
              { q: "Como funciona o chat privado?", a: "Assim que assinar, você terá um botão de mensagem direta no meu perfil para falarmos em particular." }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <ChevronRight size={16} className="text-gold" /> {item.q}
                </h4>
                <p className="text-zinc-400 text-sm font-light pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-serif font-bold tracking-tighter mb-2">
                EDUARDA <span className="text-gold">OFICIAL</span>
              </div>
              <p className="text-zinc-500 text-xs font-light tracking-widest uppercase">
                © 2024 Todos os direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>

            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Suporte</a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-zinc-700 max-w-2xl mx-auto leading-relaxed">
              AVISO: Este site contém conteúdo adulto. Você deve ter pelo menos 18 anos de idade para acessar. Ao entrar, você concorda com nossos termos e confirma sua maioridade legal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

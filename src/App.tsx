import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Star, 
  Lock, 
  Camera, 
  MessageCircle, 
  Heart, 
  Play,
  Instagram,
  Twitter,
  ShieldCheck,
  Zap
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
      name: "30 DIAS",
      price: "R$ 9,90",
      period: "/mês",
      description: "Acesso total por 30 dias",
      features: ["Fotos exclusivas", "Vídeos semanais", "Chat privado", "CHAMADA DE VIDEO COMIGO HOJE!"],
      recommended: true,
      link: "https://pay.risepay.com.br/Pay/5ed4ccc92a1f4e8e9aecab93cb07685d"
    },
    {
      name: "3 MESES",
      price: "R$ 14,90",
      period: "/trimestre",
      description: "Economia garantida",
      features: ["Tudo do mensal", "Conteúdo extra VIP", "Prioridade no chat", "Descontos em PPV"],
      recommended: false,
      link: "https://pay.risepay.com.br/Pay/a3476d093c5d45a09c188e2b758270ff"
    },
    {
      name: "1 ANO",
      price: "R$ 29,90",
      period: "/ano",
      description: "Melhor oferta",
      features: ["Tudo do trimestral", "Brinde exclusivo", "Acesso vitalício ao grupo", "Chamada de vídeo mensal"],
      recommended: false,
      link: "https://pay.risepay.com.br/Pay/e5c0236d2d8c447bb658a5da5143259e"
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
            EDUARDA <span className="text-gold">OFC</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#planos" className="hover:text-gold transition-colors">Planos</a>
          </nav>

          <motion.a 
            href="https://pay.risepay.com.br/Pay/5ed4ccc92a1f4e8e9aecab93cb07685d"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gold-hover transition-colors"
          >
            Acessar Agora
          </motion.a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/duda-vip/1920/1080?blur=2" 
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
            <div className="mb-6">
              <img 
                src="https://picsum.photos/seed/duda-profile/200/200" 
                alt="Eduarda Oficial" 
                className="w-32 h-32 rounded-full border-4 border-gold mx-auto object-cover shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              @eduardaoficial1_
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Eduarda <span className="text-gold italic">Oficial 💋</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/5">
              Oi, meu amor! 🔥💦 Sou a Duda, e hoje vou revelar um lado meu que vai te deixar sem fôlego… vídeos gozando com meus ficantes, trisal com amigas safadas e momentos íntimos onde me entrego de corpo e alma. 😏 Cada centímetro do meu corpo é pura tentação e minhas fotos peladas são um convite exclusivo para você explorar seus desejos mais secretos tudo sem censura! Se você tem coragem de se perder nessa paixão sem limites, vem comigo... Estou te esperando para uma experiência única e irresistível.😈💋
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#planos" className="gold-gradient text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 w-full sm:w-auto">
                VER CONTEÚDO AGORA
              </a>
            </div>
          </motion.div>
        </div>
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
              { icon: <Camera size={32} />, title: "Fotos Sem Censura", desc: "Ensaios picantes e amadores com a mais alta qualidade." },
              { icon: <Play size={32} />, title: "Vídeos Explícitos", desc: "Vídeos gozando, trisal e momentos íntimos toda semana." },
              { icon: <MessageCircle size={32} />, title: "Chat Privado", desc: "Fale comigo pessoalmente. Respondo todos os meus assinantes VIP." },
              { icon: <Lock size={32} />, title: "Acesso Vitalício", desc: "No plano anual você garante seu lugar no meu mundo para sempre." },
              { icon: <Zap size={32} />, title: "Chamada de Vídeo", desc: "Ganhe uma chamada de vídeo exclusiva assinando o plano mensal hoje!" },
              { icon: <ShieldCheck size={32} />, title: "100% Discreto", desc: "Ambiente seguro e cobrança discreta no seu cartão." }
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
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Escolha sua experiência</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">Assinaturas VIP</h2>
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
                    MAIS POPULAR 🔥🔥
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
                      <span className={`text-sm font-light ${feature.includes('CHAMADA') ? 'text-gold font-bold' : 'text-zinc-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href={plan.link}
                  className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-center transition-all duration-300 ${
                    plan.recommended 
                      ? 'gold-gradient text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  ASSINAR AGORA
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://pay.risepay.com.br/Pay/5ed4ccc92a1f4e8e9aecab93cb07685d"
              className="inline-block bg-gold text-black px-12 py-5 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              VEJA TUDO POR APENAS R$ 9,90
            </a>
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

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-serif font-bold tracking-tighter mb-2">
                EDUARDA <span className="text-gold">OFC</span>
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
              <a href="https://dudaconteudos.shop/duda/termos.html" className="hover:text-gold transition-colors">Termos de Uso</a>
              <a href="https://dudaconteudos.shop/duda/privacidade.html" className="hover:text-gold transition-colors">Privacidade</a>
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

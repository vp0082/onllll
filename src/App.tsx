import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Instagram, 
  Twitter, 
  MessageCircle,
  Play,
  Star,
  Zap,
  Heart,
  Flame,
  Crown,
  ChevronRight,
  Settings
} from 'lucide-react';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeAlert, setActiveAlert] = useState<{ name: string; time: string } | null>(null);
  
  // Editable Content State
  const [content, setContent] = useState({
    name: "Eduarda Oficial 💋",
    username: "@eduardaoficial1_",
    bio: "Oi, meu amor! 🔥💦 Sou a Duda, e hoje vou revelar um lado meu que vai te deixar sem fôlego… vídeos exclusivos, momentos íntimos e conteúdo sem censura. Estou te esperando para uma experiência única e irresistível. 😈💋",
    bannerUrl: "https://picsum.photos/seed/duda_banner/800/400",
    profileUrl: "https://picsum.photos/seed/duda_model/300/300",
    prices: {
      monthly: "9,90",
      quarterly: "14,90",
      yearly: "29,90"
    },
    videoCount: "124"
  });

  const ALERTS = [
    { name: "Marcos acabou de assinar!", time: "agora" },
    { name: "Lucas renovou o plano VIP", time: "2 min atrás" },
    { name: "Felipe entrou no grupo VIP", time: "5 min atrás" },
    { name: "Ricardo assinou o plano Anual", time: "10 min atrás" },
    { name: "Gabriel garantiu o acesso", time: "12 min atrás" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const alert = ALERTS[Math.floor(Math.random() * ALERTS.length)];
      setActiveAlert(alert);
      setTimeout(() => setActiveAlert(null), 4000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleAdminChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setContent(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value
        }
      }));
    } else {
      setContent(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Admin Toggle (Hidden in bottom corner) */}
      <button 
        onClick={() => setIsAdmin(!isAdmin)}
        className="fixed bottom-4 right-4 z-[100] w-8 h-8 bg-zinc-900/50 rounded-full flex items-center justify-center opacity-20 hover:opacity-100 transition-opacity"
      >
        <Settings className="w-4 h-4 text-zinc-500" />
      </button>

      {/* Admin Dashboard Overlay */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-xl p-6 overflow-y-auto"
          >
            <div className="max-w-lg mx-auto bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-500" /> Painel Administrativo
                </h2>
                <button onClick={() => setIsAdmin(false)} className="p-2 bg-zinc-800 rounded-full">
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500">Nome de Exibição</label>
                  <input 
                    type="text" 
                    value={content.name}
                    onChange={(e) => handleAdminChange('name', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500">Username</label>
                  <input 
                    type="text" 
                    value={content.username}
                    onChange={(e) => handleAdminChange('username', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500">Biografia</label>
                  <textarea 
                    value={content.bio}
                    onChange={(e) => handleAdminChange('bio', e.target.value)}
                    rows={3}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none resize-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500">Mensal (R$)</label>
                    <input 
                      type="text" 
                      value={content.prices.monthly}
                      onChange={(e) => handleAdminChange('prices.monthly', e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500">Trimestral (R$)</label>
                    <input 
                      type="text" 
                      value={content.prices.quarterly}
                      onChange={(e) => handleAdminChange('prices.quarterly', e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500">Anual (R$)</label>
                    <input 
                      type="text" 
                      value={content.prices.yearly}
                      onChange={(e) => handleAdminChange('prices.yearly', e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500">URL do Banner</label>
                  <input 
                    type="text" 
                    value={content.bannerUrl}
                    onChange={(e) => handleAdminChange('bannerUrl', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-500">URL do Perfil</label>
                  <input 
                    type="text" 
                    value={content.profileUrl}
                    onChange={(e) => handleAdminChange('profileUrl', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none"
                  />
                </div>
                <button 
                  onClick={() => setIsAdmin(false)}
                  className="w-full py-4 bg-orange-600 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl shadow-orange-600/20"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-orange-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {activeAlert && (
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 bg-zinc-900/90 backdrop-blur-md border border-orange-500/30 shadow-2xl p-4 rounded-2xl flex items-center gap-3 w-72"
          >
            <div className="bg-orange-500 p-2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Zap className="w-4 h-4 text-white fill-current" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{activeAlert.name}</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{activeAlert.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-lg mx-auto pb-24 flex flex-col items-center">
        {/* Banner Image - Improved Format */}
        <div className="w-full h-64 relative overflow-hidden rounded-b-[48px] shadow-2xl">
          <img 
            src={content.bannerUrl} 
            alt="Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlays for professional look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0F0F0F]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-b-[48px]"></div>
        </div>

        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-6 z-20 -mt-16"
        >
          <div className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-orange-600 to-yellow-400 shadow-[0_15px_35px_rgba(249,115,22,0.4)]">
            <img 
              src={content.profileUrl} 
              alt={content.name}
              className="w-full h-full object-cover rounded-full border-[6px] border-[#0F0F0F]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-orange-500 p-2 rounded-full border-4 border-[#0F0F0F] shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-white fill-current" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8 px-6"
        >
          <h1 className="text-3xl font-black tracking-tight mb-1 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            {content.name}
          </h1>
          <p className="text-orange-500 font-black text-sm mb-6 tracking-widest uppercase opacity-80">
            {content.username}
          </p>
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[32px] backdrop-blur-xl shadow-inner">
            <p className="text-sm text-zinc-300 leading-relaxed italic font-medium">
              "{content.bio}"
            </p>
          </div>
        </motion.div>

        {/* Video Panel Section */}
        <div className="w-full px-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Play className="w-4 h-4 text-orange-500 fill-current" /> Conteúdo Exclusivo
            </h3>
            <span className="text-[10px] font-black text-orange-500 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full uppercase tracking-tighter">
              {content.videoCount} Vídeos
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative aspect-[9/16] rounded-[24px] overflow-hidden group cursor-pointer border border-zinc-800/50 shadow-xl"
              >
                <img 
                  src={`https://picsum.photos/seed/duda_vid_${i}/400/700`} 
                  alt={`Preview ${i}`} 
                  className="w-full h-full object-cover blur-[3px] group-hover:blur-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">Desbloquear</p>
                </div>
                <div className="absolute top-3 left-3 bg-orange-600/90 backdrop-blur-md text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter border border-orange-400/30">
                  4K + Audio
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-4 mb-12 px-6">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative block w-full bg-gradient-to-r from-orange-600 to-orange-500 p-0.5 rounded-[24px] shadow-[0_20px_40px_rgba(249,115,22,0.25)]"
          >
            <div className="bg-orange-600 group-hover:bg-orange-500 transition-colors px-6 py-6 rounded-[22px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/20">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-200 mb-0.5">Mais Popular 🔥</p>
                  <p className="text-xl font-black text-white">30 DIAS - R$ {content.prices.monthly}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <div className="absolute -top-3 right-8 bg-white text-orange-600 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl border border-orange-100">
              Chamada de Vídeo Inclusa
            </div>
          </motion.a>

          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group block w-full bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all px-6 py-6 rounded-[24px] backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-2.5 rounded-xl border border-orange-500/20">
                  <Crown className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-0.5">Economia Garantida</p>
                  <p className="text-xl font-black text-white">3 MESES - R$ {content.prices.quarterly}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-zinc-700 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>

          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group block w-full bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all px-6 py-6 rounded-[24px] backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-2.5 rounded-xl border border-orange-500/20">
                  <Star className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-0.5">Melhor Oferta</p>
                  <p className="text-xl font-black text-white">1 ANO - R$ {content.prices.yearly}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-zinc-700 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12 px-6">
          <a href="#" className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="w-full grid grid-cols-2 gap-4 mb-12 px-6">
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
            <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-tighter">Acesso Seguro</span>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-2xl flex items-center gap-3">
            <Lock className="w-5 h-5 text-orange-500" />
            <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-tighter">Privacidade Total</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full text-center space-y-4">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Eduarda Oficial © 2024</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-[9px] text-zinc-500 uppercase font-bold hover:text-orange-500 transition-colors">Termos de Uso</a>
            <a href="#" className="text-[9px] text-zinc-500 uppercase font-bold hover:text-orange-500 transition-colors">Privacidade</a>
          </div>
        </footer>
      </main>

      {/* Floating CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
      >
        <button className="w-full py-4 bg-orange-600 text-white font-black rounded-2xl shadow-2xl shadow-orange-600/40 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
          <Play className="w-4 h-4 fill-current" /> Ver Conteúdo Agora
        </button>
      </motion.div>
    </div>
  );
};

export default App;

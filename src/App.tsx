import { motion, useScroll, useTransform } from "motion/react";
import { Heart, Stars, MessageCircle, Calendar, ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-pink-200 selection:text-pink-900">
      {/* Background Atmosphere */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 opacity-60"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 inline-block"
          >
            <Heart className="w-12 h-12 text-pink-400 fill-pink-400/20" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 text-neutral-800 leading-tight">
            Hey Rujuta, it’s been <br />
            <span className="text-gradient font-handwriting not-italic">quiet without you…</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            The days feel a little longer, and the coffee doesn't taste quite the same. 
            Just a small space on the internet to remind you that you're missed.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Countdown / Message Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-50" />
            
            <Stars className="w-8 h-8 text-purple-400 mx-auto mb-8" />
            
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-neutral-800">
              Counting days until you come back…
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { label: "Moments Missed", value: "Countless" },
                { label: "Thinking of You", value: "Always" },
                { label: "Distance", value: "Just Numbers" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <span className="text-4xl md:text-5xl font-handwriting text-pink-500 mb-2">{item.value}</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">{item.label}</span>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-12 text-neutral-600 italic font-serif text-lg">
              "Distance is just a test to see how far love can travel."
            </p>
          </motion.div>
        </div>
      </section>


      {/* Message Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-10 h-10 text-blue-400 mx-auto mb-10 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-800 mb-10 leading-relaxed">
              “I don’t know if I’ll say this perfectly, <br />
              but I really <span className="text-pink-500 italic">miss talking to you.</span>”
            </h2>
            <div className="w-20 h-px bg-neutral-300 mx-auto mb-10" />
            <p className="text-neutral-600 leading-loose font-light text-lg">
              It's the small things—the random thoughts, the shared jokes, and even the comfortable silences. 
              The world feels a bit more colorful when you're around to see it with me. 
              Hurry back, okay?
            </p>
          </motion.div>
        </div>
        
        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] text-pink-200 hidden lg:block"
        >
          <Heart className="w-24 h-24 fill-current" />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[10%] text-blue-200 hidden lg:block"
        >
          <Stars className="w-20 h-20 fill-current" />
        </motion.div>
      </section>

      {/* Final Section */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-12">
            <Calendar className="w-8 h-8 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-400 uppercase tracking-[0.4em] text-xs font-bold">Waiting for your return</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-handwriting text-neutral-800 mb-16">
            Can’t wait to see you again, Rujuta.
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-neutral-900 text-white rounded-full text-sm uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors shadow-xl shadow-neutral-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-neutral-100">
        <p className="text-neutral-400 text-xs tracking-widest uppercase">
          Made with heart • 2026
        </p>
      </footer>
    </div>
  );
}


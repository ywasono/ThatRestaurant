/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Utensils, 
  Flame,
  Instagram,
  Facebook
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DISHES, TESTIMONIALS, OPENING_HOURS, CONTACT_INFO } from './constants';
import { useRef } from 'react';

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-charcoal text-foreground selection:bg-gold selection:text-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Utensils className="w-6 h-6 text-gold" />
          <span className="text-xl font-bold tracking-tighter uppercase">That Restaurant</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#late-night" className="hover:text-gold transition-colors">Late Night</a>
          <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <Button 
          variant="outline" 
          className="border-gold text-gold hover:bg-gold hover:text-charcoal rounded-none px-8 uppercase tracking-widest text-xs font-bold"
          asChild
        >
          <a href={`tel:${CONTACT_INFO.phone}`}>Book Now</a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          {/* Placeholder for Cinematic Video */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal z-10" />
          <img 
            src="https://i.imgur.com/z69bSQm.jpg" 
            alt="Cinematic Wok Cooking" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay for "Cinematic feel" */}
          <div className="absolute inset-0 bg-crimson/20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-crimson text-white border-none rounded-none px-4 py-1 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold">
              Late Night Dining • Gouger St
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              The Heat of <br />
              <span className="text-gold">Authentic</span> <br />
              Sichuan
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-bold tracking-wide">
              Experience the sizzle of the wok and the bold flavors of the night. 
              Open until 2:30 AM for the night owls and flavor seekers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gold text-charcoal hover:bg-gold/90 rounded-none px-10 py-6 text-sm font-bold uppercase tracking-widest w-full sm:w-auto">
                Explore Menu
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none px-10 py-6 text-sm font-bold uppercase tracking-widest w-full sm:w-auto">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Late Night Section */}
      <section id="late-night" className="py-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-crimson font-bold uppercase tracking-[0.2em] text-xs">
              <Clock className="w-4 h-4" />
              <span>Late Night Identity</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              Dining Without <br />
              <span className="text-gold">Boundaries</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              When the rest of the city sleeps, our kitchen comes alive. 
              We specialize in the bold, the spicy, and the satisfying. 
              Whether it's a post-shift meal or a late-night celebration, 
              we're here until the early hours.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-gold pl-6 py-2">
                <div className="text-3xl font-bold text-white mb-1">1:30 AM</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Weeknight Closing</div>
              </div>
              <div className="border-l-2 border-crimson pl-6 py-2">
                <div className="text-3xl font-bold text-white mb-1">2:30 AM</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Weekend Closing</div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-[600px] group overflow-hidden">
            <img 
              src="https://i.imgur.com/fvmCYLt.jpg" 
              alt="Late Night Vibes" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-crimson/10 mix-blend-color group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-charcoal/80 backdrop-blur-md border border-white/10">
              <p className="text-sm italic text-muted-foreground">
                "The neon glow of Gouger Street is where our story begins every evening."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Banner Dish */}
      <section className="relative h-[60vh] overflow-hidden group">
        <img 
          src="https://i.imgur.com/tcLTy19.jpg" 
          alt="Spicy Crispy Beef Banner" 
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-24">
          <div className="max-w-xl space-y-6">
            <Badge className="bg-gold text-charcoal rounded-none px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Signature Dish</Badge>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Spicy Chilli <br /><span className="text-gold">Pack</span></h2>
            <p className="text-muted-foreground text-lg font-light">A macro shot of perfection. Sizzling, glazed, and steaming—the heart of our late-night menu.</p>
            <Button 
              className="bg-white text-charcoal hover:bg-gold hover:text-charcoal rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold transition-all"
              asChild
            >
              <a href={`tel:${CONTACT_INFO.phone}`}>Order Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes - Masonry Style */}
      <section id="menu" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4">
                <Flame className="w-4 h-4" />
                <span>Signature Flavors</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">The Gallery</h2>
            </div>
            <div className="flex gap-4">
              {['All', 'Seafood', 'Dumplings', 'Stir-fry'].map((cat) => (
                <button key={cat} className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-gold transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hero Dish 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 relative group overflow-hidden h-[500px]"
            >
              <img 
                src={DISHES[0].image} 
                alt={DISHES[0].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className="bg-gold text-charcoal mb-4 rounded-none">{DISHES[0].category}</Badge>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">{DISHES[0].name}</h3>
                <p className="text-muted-foreground max-w-md text-sm line-clamp-2">{DISHES[0].description}</p>
              </div>
            </motion.div>

            {/* Side Dish 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 relative group overflow-hidden h-[500px]"
            >
              <img 
                src={DISHES[1].image} 
                alt={DISHES[1].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <Badge className="bg-crimson text-white mb-4 rounded-none">{DISHES[1].category}</Badge>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{DISHES[1].name}</h3>
                <p className="text-muted-foreground text-sm">{DISHES[1].price}</p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 relative group overflow-hidden h-[400px]"
            >
              <img 
                src={DISHES[2].image} 
                alt={DISHES[2].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">{DISHES[2].name}</h3>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 relative group overflow-hidden h-[400px]"
            >
              <img 
                src={DISHES[3].image} 
                alt={DISHES[3].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">{DISHES[3].name}</h3>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 relative group overflow-hidden h-[400px]"
            >
              <img 
                src={DISHES[4].image} 
                alt={DISHES[4].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">{DISHES[4].name}</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">4.5/5 from 200+ Reviews</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">What our late-night guests are saying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="bg-muted/30 border-white/5 rounded-none p-8 hover:border-gold/30 transition-colors">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg font-light italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-8 h-[1px] bg-gold" />
                    <span className="text-xs uppercase tracking-widest font-bold text-gold">{t.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Contact */}
      <section id="contact" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-8">Opening Hours</h2>
              <div className="space-y-4">
                {OPENING_HOURS.map((oh) => (
                  <div key={oh.day} className="flex justify-between items-center py-3 border-b border-white/5 group">
                    <span className={`text-sm uppercase tracking-widest ${oh.isClosed ? 'text-muted-foreground' : 'text-white group-hover:text-gold transition-colors'}`}>
                      {oh.day}
                    </span>
                    <span className={`text-sm font-mono ${oh.isClosed ? 'text-crimson' : 'text-muted-foreground'}`}>
                      {oh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest">Contact Us</h3>
              <div className="space-y-4">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-lg">{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-lg">{CONTACT_INFO.address}</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" className="rounded-none border-white/10 hover:border-gold hover:text-gold">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-none border-white/10 hover:border-gold hover:text-gold">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-auto border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.18334460613!2d138.58746537672!3d-34.9308065728384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf82fc2d0ae1%3A0xb9b8ec800c4a6e8a!2sThat%20Restaurant%20on%20Gouger!5e0!3m2!1sen!2sau!4v1713250000000!5m2!1sen!2sau" 
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-charcoal/50" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Utensils className="w-5 h-5 text-gold" />
            <span className="text-lg font-bold tracking-tighter uppercase">That Restaurant on Gouger</span>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.4em]">
            © 2026 That Restaurant on Gouger. All Rights Reserved.
          </p>
          <Separator className="bg-white/5 max-w-xs mx-auto" />
          <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest text-muted-foreground/50">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

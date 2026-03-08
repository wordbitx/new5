import { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(imageRef.current,
        { opacity: 0, x: 100, scale: 0.85 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(pillRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    'Social Media Management',
    'Content Creation',
    'Virtual Assistance',
    'Brand Strategy',
    'Digital Marketing',
    'Web Development'
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="section-light py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <div ref={pillRef} className="pill-motif mb-6 origin-left" />
            
            <h2 className="animate-item text-3xl md:text-4xl lg:text-5xl font-bold text-[#11114D] mb-6 leading-tight">
              Services that move the needle.
            </h2>

            <p className="animate-item text-lg text-[#6C6C8A] mb-8 leading-relaxed">
              From content systems to virtual assistance—built for speed, clarity, and real outcomes. Let us handle the heavy lifting while you focus on growth.
            </p>

            <div className="animate-item grid sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7B3FE4]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#7B3FE4]" />
                  </div>
                  <span className="text-[#11114D] text-sm">{service}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="animate-item btn-primary"
            >
              <a href="#contact">
                See Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="image-portal w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
              style={{ borderColor: 'rgba(17,17,77,0.18)' }}
            >
              <img
                src="/images/sections/services.jpg"
                alt="Our services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

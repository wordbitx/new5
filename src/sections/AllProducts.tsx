import { useEffect, useRef, useState } from 'react';
import { Search, Filter, Grid3X3, List, Share2, Headphones, Code, BookOpen, GraduationCap } from 'lucide-react';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Share2,
  Headphones,
  Code,
  BookOpen,
  GraduationCap
};

export function AllProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.product-item');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  return (
    <section 
      ref={sectionRef}
      id="all-products" 
      className="section-light py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="pill-motif mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11114D] mb-4">
            All Products
          </h2>
          <p className="text-[#6C6C8A] max-w-2xl mx-auto text-lg">
            Browse our complete collection of digital products and services designed to help you grow.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C6C8A]" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-[#11114D]/10 focus:border-[#7B3FE4] focus:ring-[#7B3FE4]"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-[#7B3FE4] hover:bg-[#9b6af0]' : 'bg-white border-[#11114D]/20 text-[#11114D]'}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-[#7B3FE4] hover:bg-[#9b6af0]' : 'bg-white border-[#11114D]/20 text-[#11114D]'}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              size="sm"
              className={selectedCategory === null ? 'bg-[#7B3FE4] hover:bg-[#9b6af0] text-white' : 'bg-white border-[#11114D]/20 text-[#11114D] hover:bg-[#F6F7FB]'}
            >
              <Filter className="w-4 h-4 mr-2" />
              All
            </Button>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                size="sm"
                className={selectedCategory === category.name ? 'bg-[#7B3FE4] hover:bg-[#9b6af0] text-white' : 'bg-white border-[#11114D]/20 text-[#11114D] hover:bg-[#F6F7FB]'}
              >
                {getIcon(category.icon)}
                <span className="ml-2">{category.name}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.name ? 'bg-white/20 text-white' : 'bg-[#7B3FE4]/10 text-[#7B3FE4]'}`}>
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard 
                product={product} 
                variant={viewMode === 'list' ? 'compact' : 'default'} 
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#F6F7FB] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-[#6C6C8A]" />
            </div>
            <h3 className="text-lg font-semibold text-[#11114D] mb-2">No products found</h3>
            <p className="text-[#6C6C8A]">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

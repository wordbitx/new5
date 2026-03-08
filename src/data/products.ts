import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Social Media Growth Toolkit",
    description: "Complete guide to growing your social media presence with proven strategies, templates, and automation tools. Perfect for creators and businesses.",
    price: 29.99,
    category: "Social Media",
    image: "/images/products/product-1.jpg",
    rating: 4.8,
    reviews: 124,
    features: ["30+ Page Strategy Guide", "Content Calendar Templates", "Hashtag Research Tool", "Analytics Dashboard"]
  },
  {
    id: 2,
    name: "Instagram Engagement Bundle",
    description: "Boost your Instagram engagement with our comprehensive bundle of tools, guides, and caption templates designed to increase reach.",
    price: 24.99,
    category: "Social Media",
    image: "/images/products/product-2.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["100+ Caption Templates", "Story Highlight Icons", "Engagement Booster Checklist", "Reels Script Templates"]
  },
  {
    id: 3,
    name: "TikTok Viral Blueprint",
    description: "Learn the secrets to creating viral TikTok content that reaches millions. Includes trending formats and optimization techniques.",
    price: 34.99,
    category: "Social Media",
    image: "/images/products/product-3.jpg",
    rating: 4.7,
    reviews: 156,
    features: ["Viral Content Formulas", "Trending Audio Library", "Hook Templates", "Algorithm Guide"]
  },
  {
    id: 4,
    name: "LinkedIn Business Pro",
    description: "Professional LinkedIn growth system for entrepreneurs and business owners. Build authority and generate leads.",
    price: 39.99,
    category: "Social Media",
    image: "/images/products/product-4.jpg",
    rating: 4.8,
    reviews: 67,
    features: ["Profile Optimization Guide", "Connection Scripts", "Content Strategy", "Lead Generation Templates"]
  },
  {
    id: 5,
    name: "YouTube Starter Pack",
    description: "Everything you need to start and grow a successful YouTube channel from scratch to monetization.",
    price: 49.99,
    category: "Social Media",
    image: "/images/products/product-5.jpg",
    rating: 4.9,
    reviews: 203,
    features: ["Channel Setup Guide", "Thumbnail Templates", "SEO Optimization", "Monetization Roadmap"]
  },
  {
    id: 6,
    name: "Twitter/X Engagement Booster",
    description: "Increase your Twitter engagement with proven strategies for growing your audience and influence.",
    price: 19.99,
    category: "Social Media",
    image: "/images/products/product-6.jpg",
    rating: 4.6,
    reviews: 78,
    features: ["Tweet Thread Templates", "Viral Tweet Formulas", "Engagement Calendar", "Growth Hacks"]
  },
  {
    id: 7,
    name: "Pinterest Traffic Generator",
    description: "Drive massive traffic to your website using Pinterest marketing strategies and pin optimization techniques.",
    price: 22.99,
    category: "Social Media",
    image: "/images/products/product-7.jpg",
    rating: 4.7,
    reviews: 45,
    features: ["Pin Design Templates", "Keyword Strategy", "Board Optimization", "Traffic Analytics"]
  },
  {
    id: 8,
    name: "Social Media Content Calendar",
    description: "12-month content calendar with 365 post ideas for all major platforms. Never run out of content ideas again.",
    price: 14.99,
    category: "Social Media",
    image: "/images/products/product-8.jpg",
    rating: 4.8,
    reviews: 112,
    features: ["365 Post Ideas", "Holiday Content", "Platform-Specific Tips", "Editable Calendar"]
  },
  {
    id: 9,
    name: "Facebook Ads Mastery",
    description: "Complete guide to Facebook advertising. Learn to create high-converting ad campaigns that scale.",
    price: 59.99,
    category: "Social Media",
    image: "/images/products/product-9.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["Ad Creation Framework", "Targeting Strategies", "Budget Optimization", "A/B Testing Guide"]
  },
  {
    id: 10,
    name: "Virtual Assistant Pro",
    description: "Professional virtual assistance service for 10 hours. Handle tasks, emails, scheduling, and more.",
    price: 99.00,
    category: "Virtual Services",
    image: "/images/products/product-10.jpg",
    rating: 4.9,
    reviews: 134,
    features: ["10 Hours of Service", "Email Management", "Calendar Scheduling", "Data Entry"]
  },
  {
    id: 11,
    name: "Content Writing Package",
    description: "Professional content writing service including 5 blog posts or 20 social media posts. SEO-optimized content.",
    price: 79.99,
    category: "Virtual Services",
    image: "/images/products/product-11.jpg",
    rating: 4.8,
    reviews: 56,
    features: ["5 Blog Posts (1000 words)", "SEO Optimized", "2 Revisions Included", "48-Hour Delivery"]
  },
  {
    id: 12,
    name: "Brand Identity Kit",
    description: "Complete brand identity package including logo concepts, color palette, and brand guidelines.",
    price: 89.99,
    category: "Virtual Services",
    image: "/images/products/product-12.jpg",
    rating: 4.7,
    reviews: 43,
    features: ["3 Logo Concepts", "Color Palette", "Typography Guide", "Brand Guidelines PDF"]
  },
  {
    id: 13,
    name: "Email Marketing Setup",
    description: "Complete email marketing setup including automation flows, templates, and list segmentation strategy.",
    price: 69.99,
    category: "Virtual Services",
    image: "/images/products/product-13.jpg",
    rating: 4.8,
    reviews: 67,
    features: ["Welcome Sequence", "5 Email Templates", "Automation Setup", "List Segmentation"]
  },
  {
    id: 14,
    name: "SEO Optimization Guide",
    description: "Comprehensive SEO guide to rank higher on Google. Includes keyword research and on-page optimization.",
    price: 44.99,
    category: "Virtual Services",
    image: "/images/products/product-14.jpg",
    rating: 4.6,
    reviews: 98,
    features: ["Keyword Research", "On-Page SEO Checklist", "Technical SEO Guide", "Link Building Strategies"]
  },
  {
    id: 15,
    name: "Web Developer Starter Kit",
    description: "Complete web development starter kit with code templates, components, and project boilerplates.",
    price: 54.99,
    category: "Dev Kits",
    image: "/images/products/product-15.jpg",
    rating: 4.9,
    reviews: 178,
    features: ["React Components", "CSS Framework", "Project Templates", "Documentation"]
  },
  {
    id: 16,
    name: "Digital Marketing Mastery Ebook",
    description: "200-page comprehensive ebook covering all aspects of digital marketing. Perfect for beginners and pros.",
    price: 19.99,
    category: "Ebooks",
    image: "/images/products/product-16.jpg",
    rating: 4.8,
    reviews: 234,
    features: ["200 Pages", "PDF & EPUB", "Actionable Strategies", "Case Studies"]
  },
  {
    id: 17,
    name: "Kids Learning Adventure Pack",
    description: "Fun and educational digital resource pack for children including alphabet games, math activities, and more.",
    price: 12.99,
    category: "Kids Learning",
    image: "/images/products/product-17.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["Alphabet Games", "Math Activities", "Coloring Pages", "Printable Worksheets"]
  },
  {
    id: 18,
    name: "Mobile App Dev Starter",
    description: "Start your mobile app development journey with this comprehensive starter kit and tutorials.",
    price: 49.99,
    category: "Dev Kits",
    image: "/images/products/product-18.jpg",
    rating: 4.7,
    reviews: 56,
    features: ["React Native Templates", "UI Components", "API Integration", "Deployment Guide"]
  },
  {
    id: 19,
    name: "Analytics Dashboard Template",
    description: "Professional analytics dashboard template for tracking business metrics and KPIs.",
    price: 39.99,
    category: "Dev Kits",
    image: "/images/products/product-19.jpg",
    rating: 4.8,
    reviews: 45,
    features: ["Pre-built Widgets", "Chart Components", "Data Visualization", "Customizable Themes"]
  },
  {
    id: 20,
    name: "Freelancer Success Guide",
    description: "Complete guide to building a successful freelancing career. From finding clients to scaling your business.",
    price: 29.99,
    category: "Ebooks",
    image: "/images/products/product-20.jpg",
    rating: 4.9,
    reviews: 167,
    features: ["Client Acquisition", "Pricing Strategies", "Contract Templates", "Growth Tactics"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Growth Labs",
    content: "Thrive Code turned our content chaos into a system we actually use. The social media toolkit paid for itself in the first week!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "TechStart Inc",
    content: "Fast, clear, and weirdly fun to work with. The virtual assistant service saved me 20 hours a month.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Creative Studio",
    content: "The TikTok Viral Blueprint helped me gain 100K followers in just 3 months. Absolutely worth every penny!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Digital Ventures",
    content: "Professional quality products that deliver real results. Their dev kits accelerated our project timeline by weeks.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Social Media Manager",
    company: "Brand Co",
    content: "The Instagram Engagement Bundle is a game-changer. Our engagement rate increased by 340% in just one month!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Entrepreneur",
    company: "Taylor Consulting",
    content: "From ebooks to virtual services, everything is top-notch quality. Thrive Code is my go-to for digital resources.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5
  }
];

export const categories = [
  { name: "Social Media", count: 9, icon: "Share2" },
  { name: "Virtual Services", count: 5, icon: "Headphones" },
  { name: "Dev Kits", count: 3, icon: "Code" },
  { name: "Ebooks", count: 2, icon: "BookOpen" },
  { name: "Kids Learning", count: 1, icon: "GraduationCap" }
];

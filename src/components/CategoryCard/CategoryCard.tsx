import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StudioCategory } from '@/types/category';
import { ArrowRight, Camera } from 'lucide-react'; // প্রয়োজন অনুযায়ী আইকন ব্যবহার করতে পারেন

interface CategoryCardProps {
     category: StudioCategory;
}

const CategoryCard = async ({ category }: CategoryCardProps) => {
     const { name, slug, description, image, studioCount } = category;

     return (
          <Link  href={`/studios?category=${slug}`} className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
               <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

               <div>
                    <div className="flex items-center justify-between mb-5">
                         <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                         {/* যদি ইমেজ ইউআরএল থাকে তবে Next Image অথবা Lucide Icon */}
                         {image ? (
                         <div className="relative w-8 h-8">
                              <Image 
                              src={image} 
                              alt={name} 
                              fill 
                              className="object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                              />
                         </div>
                         ) : (
                         <Camera className="w-6 h-6" />
                         )}
                         </div>
                    </div>

                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 mb-2">{name}</h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6">{description}</p>
               </div>

               <div>
                    <div className="w-full h-px bg-border/60 mb-4 group-hover:bg-primary/20 transition-colors" />

                    <div className="flex items-center justify-between text-sm font-medium">
                         <span className="text-muted-foreground group-hover:text-foreground transition-colors">{studioCount > 0 ? studioCount : 0} <span>Spaces</span></span>

                         <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:translate-x-1">
                              <ArrowRight className="w-4 h-4" />
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default CategoryCard;

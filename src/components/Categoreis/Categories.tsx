import React, { Suspense } from 'react'
import CategoryList from '../CategoryList/CategoryList'

const Categories = () => {
     return (
          <div className='categories py-20'>
               <div className='w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20'>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                         <div>
                              <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-1">CURATED PRODUCTION CATEGORIES</div>
                              <div className="text-2xl md:text-3xl font-semibold text-foreground">Browse by Creative Discipline</div>
                         </div>

                         {/* ডান পাশের লিংক/বাটন */}
                         <div>
                              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 cursor-pointer transition-colors">
                                   <span>Explore All Workspaces</span>
                                   <span>→</span>
                              </div>
                         </div>
                    </div>

                    <div>
                         <Suspense fallback={<p>Categories loading...</p>}>
                              <CategoryList />
                         </Suspense>
                    </div>
               </div>
          </div>
     )
}

export default Categories

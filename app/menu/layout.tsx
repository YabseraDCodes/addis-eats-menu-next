import React from 'react'
import { categories } from '@/data/categories'
import { CategoryBar } from './CatagoryBar'

function CategoryLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <section className="Header">
        <div className="Title">
          <h1>Addis Eats Menu</h1>
        </div>
      </section>
      <div className='menu-layout'>
        <aside className='side-category'>
          <CategoryBar categories={categories} />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default CategoryLayout

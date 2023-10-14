import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'
import { menuLinks } from '../sectionsMenu'

const HeaderLanding = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              NextJS Blog & GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {menuLinks.map((menuLink) => (
            <Link key={menuLink.key} href={menuLink.href}>
              <span className="md-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {menuLink.label}
              </span>
            </Link>
          ))}
          {/* <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderLanding

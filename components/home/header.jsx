'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import taygoLogo from "@/public/logo/taygoLogo.png"
import { useRouter } from 'next/navigation'

// import ContactSidebar from './sidebar'

const menuItems = [
  // { title: 'Home', slug: '/', hasSubmenu: false }, 
  { title: 'Products', slug: '/products', hasSubmenu: true },
  // { title: 'Hire', slug: '/hire/node-developer', hasSubmenu: true },
  { title: 'Solutions', slug: '/about-us', hasSubmenu: false },
  { title: 'Pricing', slug: '/contact-us', hasSubmenu: false },
  { title: 'Contact', slug: '/contact-us', hasSubmenu: false },
]


const product = {
  categories: [
    { name: 'Products', slug: 'products' },
  ],
  content: {
    Products: {
      title: 'Products',
      slug: 'products',
      description: 'Our Products',
      products: [
        { name: 'Taygo LeadFlow™', slug: 'leadflow', description: "Mortgage CRM & Lead Automation" },
        { name: 'Taygo PipelineOS™', slug: 'pipeline-os', description: "Mortgage Pipeline & Refinance Workflow Automation" },
        { name: 'Taygo BorrowerHub™', slug: 'borrowerhub', description: "Mortgage POS & Borrower Portal" },
        { name: 'Taygo VoiceAI™', slug: 'voice-aI', description: "AI Call Center & Phone Automation" },
        { name: 'Taygo LoanCore™', slug: 'loan-core', description: "Loan Management & Tracking System" },
      ],
      hiring: [
        {
          title: 'Staff Augmentation',
          slug: 'staff-augmentation',
          description: 'Access top technical resources on-demand',
        },
        {
          title: 'Hire Software Developer',
          slug: 'hire-software-developer-india',
          description: 'Work with skilled & dedicated developers',
        },

      ],
    },

  },


}






export default function Header() {


  const router = useRouter()

  const [activeMenu, setActiveMenu] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuHover = (menu) => {
    setActiveMenu(menu)
    // setActiveCategory(menu === 'Service' ? 'Software Development' : 'Backend')
    setActiveCategory("Products")
  }

  const handleCategoryHover = (category) => {
    setActiveCategory(category)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const clickEventForPhoneViewMenu = (hasSubmenu, slug) => {
    if (!hasSubmenu) {
      router.push(slug);
      toggleMobileMenu()
      setActiveMenu('')
    }
  };



  const renderHireDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row">

        {product.content[activeCategory] && (
          <>
            <div className='flex w-full flex-col lg:flex-row h-screen sm:h-auto overflow-auto'>

              <div className="w-full lg:w-7/12 p-6">

                <div className="mb-4 py-4 flex items-center border-b">
                  {/* <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="p-2 rounded-full mr-3">
                    <TbCodeDots className=' font-semibold text-2xl' />
                  </span> */}
                  <span>
                    <span className='text-lg font-semibold text-gray-800'> {product.content[activeCategory].title} </span>
                    {/* <p className="text-gray-600">{product.content[activeCategory].description}</p> */}
                  </span>
                </div>


                <div className="grid md:grid-cols-2 gap-2">
                  {product.content[activeCategory].products.map((tech, index) => (
                    <Link href={`/hire/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }} className="p-4 borde space-y-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-teal-50">
                      <div className='flex gap-3'>
                        <Image src="https://www.insightly.com/wp-content/uploads/2025/03/CRM-Icon.svg" width={20} height={20} alt='crmIcon' /> {tech.name}
                      </div>
                      <p className='text-gray-700 font-medium text-xs'>{tech.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-5/12 p-6 border-l">

                <div className="mb-4 borderb py-4">
                  <span className='text-lg font-semibold text-gray-700'>More solutions by Taygo™</span>
                  <p className="text-xs text-gray-700 mt-1">Build faster with on-demand team</p>
                </div>

                {product.content[activeCategory].hiring.map((item, index) => (
                  <Link href={`/hire/${item.slug}`} key={index}>
                    <div className="mb-4 hover:border hover:bg-teal-50 rounded-lg p-3 cursor-pointer">
                      <h3 className="font-medium mb-2 flex items-center gap-3">
                        <Image src="https://www.insightly.com/wp-content/uploads/2025/03/unbounce-Symbol.svg" width={20} height={20} alt='crmIcon' /> 
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-700">{item.description}</p>
                    </div>
                  </Link>
                ))}


              </div>

            </div>

          </>
        )}
      </div>
    </div>
  )

  // const renderServicesDropdown = (currentActiveMenu) => (
  //   <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
  //     onMouseLeave={() => setActiveMenu('')}
  //     className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
  //     <div className="container mx-auto flex flex-col lg:flex-row">

  //       <div className="w-full lg:w-1/4 border-r p-4 hidden md:block">
  //         {servicesData.categories.map((category, i) => (
  //           <Link href={`/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
  //             <div
  //               key={category.name}
  //               className={`py-2.5 px-4 cursor-pointer flex flex-nowrap justify-between items-center my-4 rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-amber-50 text-amber-600' : ''
  //                 }`}
  //               onMouseEnter={() => handleCategoryHover(category.name)}
  //             >
  //               <span> {category.name} </span>
  //               <ChevronRight className="float-right h-5 w-5" />
  //             </div>
  //           </Link>
  //         ))}
  //       </div>

  //       {/* border border-red-500 */}
  //       {servicesData.content[activeCategory] && (
  //         <>
  //           <div className='flex w-full flex-col lg:flex-row hscreen sm:min-h-96 sm:h-auto overflow-auto'>

  //             <div className="w-full p-6">
  //               <div className="mb-4 py-4 flex items-center border-b">
  //                 <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-amber-500 p-2 rounded-full mr-3">
  //                   <TbCodeDots className=' font-semibold text-2xl' />
  //                 </span>
  //                 <span>
  //                   <h2 className='text-xl font-bold'> {servicesData.content[activeCategory].title} </h2>
  //                   <p className="text-gray-600">{servicesData.content[activeCategory].description}</p>
  //                 </span>
  //               </div>

  //               <div className="grid grid-cols-1 md:grid-cols-3 sm:mt-8 gap-2 sm:gap-6">
  //                 {servicesData.content[activeCategory].products.map((tech, index) => (
  //                   <Link className="transition-colors duration-200 font-medium cursor-pointer group" href={`/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }}>

  //                     <div className='group-hover:bg-amber-50 py-2 px-4 rounded-md'> {tech.name}
  //                       {/* <p className="text-sm text-gray-600">Lorem ipsum dolor sit.</p> */}
  //                     </div>

  //                   </Link>
  //                 ))}
  //               </div>
  //             </div>


  //           </div>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // )

  return (
    // <header className={`${isScrolled ? "bg-[#00214E]" : "bg-white"} shadow-md sm:sticky sm:top-0 left-0 w-full z-40`} ref={dropdownRef}>
    <header className={`bg-white ${isScrolled && "shadow-md"} sm:sticky sm:top-0 left-0 w-full z-40`} ref={dropdownRef}>

      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between lg:px-10">
          <Link href="/" className="flex items-center py-2">
            <Image
              className=""
              src={taygoLogo}
              alt="Bunnx logo"
              width={125}
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.hasSubmenu && handleMenuHover(item.title)}
                onMouseLeave={() => setActiveMenu('')}
              >
                <Link href={item.slug} onClick={() => setActiveMenu('')}
                  className={` hover:text-crm-green px-3 py-8 rounded-md text-lg text-gray-700 font-medium transition-colors duration-200 ${activeMenu === item.title ? 'text-teal-800' : ''
                    }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>



          <div className="hidden lg:flex items-center space-x-4">

            <Link href="contact-us" className="bg-btn-green font-semibold text-white cursor-pointer  px-6 py-3 rounded-xs text-md hover:bg-btn-green-hover transition-colors duration-300">
              Get in Touch
            </Link>
          </div>

          <div className="lg:hidden flex items-center justify-center">
            <button onClick={() => {
              toggleMobileMenu();
              setActiveMenu("");
            }}
              className="transition-colors duration-200">
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className="absolute lg:flex hidden left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
          {renderHireDropdown(activeMenu)}
          {/* {activeMenu === 'Product' && renderHireDropdown(activeMenu)} */}
        </div>
      )}

      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden h-screen sm:h-auto overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="w-full block text-left text-lg px-3 py-2 rounded-md font-medium transition-colors duration-200"
                    onClick={() => { item.hasSubmenu && setActiveMenu(activeMenu === item.title ? '' : item.title), clickEventForPhoneViewMenu(item?.hasSubmenu, item?.slug) }}
                  >

                    {item.title}

                    {item.hasSubmenu && (
                      <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                    )}

                  </button>

                  {item.hasSubmenu && activeMenu === item.title && (
                    <div className="pl-4 mt-2 space-y-2">
                      {(item.title === 'Service' ? servicesData.categories : product.categories).map((category) => (
                        <button
                          key={category.name}
                          className="w-full text-left font-medium text-gray-700 text-md hover:text-orange-500 block px-3 py-2 transition-colors duration-200"
                          onClick={() => activeCategory === category.name ? handleCategoryHover("") : handleCategoryHover(category.name)}
                        >
                          {category.name}

                          <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeCategory === category.name ? 'rotate-180' : ''}`} />

                        </button>

                      ))}

                      {activeMenu && (
                        <div className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
                          {renderHireDropdown(activeMenu)}
                          {/* {activeMenu === 'Products' && renderHireDropdown(activeMenu)} */}
                        </div>
                      )}

                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-3 flex items-center justify-center">

              <Link href="contact-us"
                onClick={() => {
                  toggleMobileMenu();
                  setActiveMenu("");
                }} className="bg-btn-green text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-btn-green-hover transition-colors duration-300">
                Get in Touch
              </Link>

            </div>
          </div>

        </>


      )}

      {/* <ContactSidebar /> */}

    </header>
  )
}





















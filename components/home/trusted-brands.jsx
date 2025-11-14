export function TrustedBrands() {
  const brands = [
    { name: "Walmart", logo: "/images/walmart-logo.png" },
    { name: "HBO", logo: "/images/hbo-logo.png" },
    { name: "Vanguard", logo: "/images/vanguard-logo.png" },
    { name: "Vimeo", logo: "https://logo.clearbit.com/vimeo.com" },
    { name: "Levi's", logo: "https://logo.clearbit.com/levi.com" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by 500,000 leading teams
          </p>
        </div>

        <div className="flex flex-wrap max-w-7xl mx-auto items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-24 md:w-28 transition-transform"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="max-h-full max-w-full object-contain filter contrast-0 hover:contrast-100 transition-all"
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

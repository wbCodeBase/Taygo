export function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          {/* Sparkle watermarks */}
          <div className="absolute top-8 right-16 opacity-20">
            <img src="/images/sparkle-icon.png" alt="" className="w-16 h-16" />
          </div>
          <div className="absolute bottom-12 left-20 opacity-15">
            <img src="/images/sparkle-icon.png" alt="" className="w-24 h-24" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-10">
            <img src="/images/sparkle-icon.png" alt="" className="w-12 h-12" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supercharge your sales with Lisa Agents</h2>

            <p className="text-lg md:text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Harness the power of a multi-agent platform that delivers the best of artificial intelligence and human
              experience.
            </p>

            <button className="group cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Read more
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

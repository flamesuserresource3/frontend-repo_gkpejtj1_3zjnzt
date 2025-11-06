import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-b-3xl border-b border-indigo-100/60 bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-8">
        <div className="rounded-2xl bg-white/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Digital Identity</h1>
          <p className="mt-1 text-sm text-gray-600">A modern, iridescent profile experience with secure account controls.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

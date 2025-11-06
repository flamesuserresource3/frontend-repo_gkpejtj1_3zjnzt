function ProfileCard({ name = 'Alex Johnson', title = 'Product Designer', location = 'San Francisco, CA', avatar }) {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative grid md:grid-cols-[320px,1fr] gap-8 items-start">
          <div className="md:sticky md:top-24">
            <div className="rounded-2xl bg-white shadow/10 shadow-black/5 ring-1 ring-black/5 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                {avatar ? (
                  <img src={avatar} alt={`${name} avatar`} className="h-full w-full object-cover" />
                ) : (
                  <div className="text-6xl">👋</div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">{name}</h2>
                <p className="text-gray-600">{title}</p>
                <p className="mt-2 text-sm text-gray-500">{location}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Design','UX','Prototyping','Figma'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-black/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow/10 shadow-black/5 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">
                I craft user-centered products with a focus on clarity and motion. I love turning complex
                problems into elegant experiences. Outside work, you’ll find me exploring coffee shops and
                sketching ideas.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow/10 shadow-black/5 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              <ul className="space-y-4">
                {[{role:'Senior Product Designer', org:'Nova Labs', time:'2022 — Present'},{role:'Product Designer', org:'Stellar Apps', time:'2019 — 2022'},{role:'Design Intern', org:'Acme Co.', time:'2018 — 2019'}].map((e)=> (
                  <li key={e.role} className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                    <div>
                      <p className="font-medium">{e.role}</p>
                      <p className="text-sm text-gray-600">{e.org}</p>
                      <p className="text-xs text-gray-500">{e.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow/10 shadow-black/5 ring-1 ring-black/5">
              <h3 className="text-lg font-semibold mb-4">Projects</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[1,2,3,4].map((i)=> (
                  <a key={i} href="#" className="group block rounded-xl border border-black/5 overflow-hidden bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100" />
                    <div className="p-4">
                      <p className="font-medium group-hover:text-indigo-600">Case Study #{i}</p>
                      <p className="text-sm text-gray-600">A quick look at process and outcomes.</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard

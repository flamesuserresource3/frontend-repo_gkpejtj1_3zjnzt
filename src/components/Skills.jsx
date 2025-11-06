function Skills() {
  const skills = [
    { name: 'Product Design', level: 90 },
    { name: 'Interaction', level: 85 },
    { name: 'Prototyping', level: 80 },
    { name: 'Design Systems', level: 75 },
  ]
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-white p-6 shadow/10 shadow-black/5 ring-1 ring-black/5">
          <h3 className="text-lg font-semibold mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-gray-600">{s.level}%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

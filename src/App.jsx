import Topbar from './components/Topbar'
import Hero from './components/Hero'
import CollapsibleProfile from './components/CollapsibleProfile'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-white text-gray-900">
      <Topbar />
      <Hero />

      <main className="relative mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Welcome back</h2>
              <p className="mt-1 text-sm text-gray-600">Hover the profile button in the bottom-left to open your profile panel with Security, Organisation, Clients, and Teams.</p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">Quick actions</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Manage MFA and email verification</li>
                  <li>• Review organisation details</li>
                  <li>• View clients and teams</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">What’s new</h3>
                <p className="mt-2 text-sm text-gray-600">A modern, professional profile panel with a collapsible sidebar and section views.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Status</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border p-3"><div className="text-gray-500">MFA</div><div className="font-medium">Enabled</div></div>
                <div className="rounded-xl border p-3"><div className="text-gray-500">Email</div><div className="font-medium">Verified</div></div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Shortcuts</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Invite teammate</li>
                <li>• Create client</li>
                <li>• Billing</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <CollapsibleProfile />
    </div>
  )
}

export default App

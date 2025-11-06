import { useMemo, useState } from 'react'
import Sidebar from './Sidebar'
import ProfilePanel from './ProfilePanel'
import { User } from 'lucide-react'

function CollapsibleProfile() {
  const [active, setActive] = useState('profile')
  const [open, setOpen] = useState(false)

  const user = useMemo(() => ({
    name: 'Alex Carter',
    role: 'Identity Engineer',
    mfaEnabled: true,
    emailVerified: true,
  }), [])

  const org = useMemo(() => ({
    id: 'org_2x9k1',
    name: 'Hologram Labs',
    description: 'Secure digital identity platform',
    employees: 128,
    region: 'US-East',
    plan: 'Enterprise',
  }), [])

  return (
    <div className="relative">
      {/* Docked profile entry at bottom-left */}
      <div className="fixed bottom-6 left-6 z-20">
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="group grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-gray-900 shadow-xl ring-1 ring-gray-200 backdrop-blur transition hover:shadow-2xl"
          aria-label="Open profile panel"
        >
          <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow">9</span>
          <User className="transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Hover panel with sections */}
      {open && (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="fixed bottom-6 left-24 z-30 h-[70vh] w-[760px] overflow-hidden rounded-2xl border bg-white/90 shadow-2xl backdrop-blur-md">
          <div className="grid h-full grid-cols-[auto,1fr]">
            <Sidebar active={active} onSelect={setActive} onHoverOpen={() => {}} />
            <div className="border-l bg-white/80">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-600">{user.role}</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200">{user.mfaEnabled ? 'MFA On' : 'MFA Off'}</span>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-700 ring-1 ring-indigo-200">{user.emailVerified ? 'Email Verified' : 'Email Unverified'}</span>
                </div>
              </div>
              <ProfilePanel active={active} user={user} org={org} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollapsibleProfile

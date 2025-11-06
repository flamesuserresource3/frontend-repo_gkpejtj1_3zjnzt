import { User, ShieldCheck, MailCheck, Building2, Users, FolderGit2, Settings } from 'lucide-react'
import { useState } from 'react'

const items = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'security', label: 'Security', icon: ShieldCheck },
  { key: 'verification', label: 'Verification', icon: MailCheck },
  { key: 'org', label: 'Organisation', icon: Building2 },
  { key: 'clients', label: 'Clients', icon: FolderGit2 },
  { key: 'teams', label: 'Teams', icon: Users },
  { key: 'settings', label: 'Settings', icon: Settings },
]

function Sidebar({ active, onHoverOpen, onSelect }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside
      onMouseEnter={() => { setExpanded(true); onHoverOpen?.(true) }}
      onMouseLeave={() => { setExpanded(false); onHoverOpen?.(false) }}
      className={`group fixed bottom-6 left-6 z-30 flex flex-col rounded-2xl border bg-white/90 backdrop-blur-md shadow-xl transition-[width] duration-300 ${expanded ? 'w-64' : 'w-14'} overflow-hidden`}
    >
      <div className="flex items-center gap-2 px-3 py-3 border-b">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-600 text-white shadow">
          <User size={18} />
        </div>
        <div className={`text-sm font-semibold text-gray-900 transition-opacity ${expanded ? 'opacity-100' : 'opacity-0'}`}>Profile</div>
      </div>
      <nav className="py-2">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSelect?.(key)}
            className={`flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-indigo-50/80 ${active === key ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700'}`}
            title={!expanded ? label : undefined}
          >
            <Icon size={18} className="shrink-0" />
            <span className={`truncate transition-opacity ${expanded ? 'opacity-100' : 'opacity-0'}`}>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

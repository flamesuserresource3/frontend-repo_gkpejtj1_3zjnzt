import { ShieldCheck, MailCheck, KeyRound, Lock, CheckCircle2, XCircle, Building2, Users, UserMinus } from 'lucide-react'

function Badge({ on = false, label }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${on ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'}`}>
      {on ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
      {label}
    </span>
  )
}

export function SecuritySection({ user }) {
  const mfaEnabled = user?.mfaEnabled ?? true
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Security</h3>
      <div className="rounded-xl border p-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800"><ShieldCheck size={18} /><span className="font-medium">Multi‑factor Authentication</span></div>
          <Badge on={mfaEnabled} label={mfaEnabled ? 'Enabled' : 'Disabled'} />
        </div>
        <p className="mt-2 text-sm text-gray-600">Protect your account with an extra verification step at sign‑in.</p>
        <div className="mt-3 flex gap-2">
          <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white shadow hover:bg-indigo-700">Manage MFA</button>
          <button className="rounded-lg border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Backup Codes</button>
        </div>
      </div>

      <div className="rounded-xl border p-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800"><MailCheck size={18} /><span className="font-medium">Email Verification</span></div>
          <Badge on={user?.emailVerified ?? false} label={(user?.emailVerified ?? false) ? 'Verified' : 'Unverified'} />
        </div>
        <p className="mt-2 text-sm text-gray-600">We use your email to send security alerts and recovery links.</p>
        <div className="mt-3">
          <button className="rounded-lg border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Resend verification</button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-4 bg-white">
          <div className="flex items-center gap-2 text-gray-800"><KeyRound size={18} /><span className="font-medium">Devices & Sessions</span></div>
          <p className="mt-2 text-sm text-gray-600">Review where you’re signed in and sign out remotely.</p>
          <button className="mt-3 rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">View activity</button>
        </div>
        <div className="rounded-xl border p-4 bg-white">
          <div className="flex items-center gap-2 text-gray-800"><Lock size={18} /><span className="font-medium">Password</span></div>
          <p className="mt-2 text-sm text-gray-600">Use a strong, unique password for your account.</p>
          <button className="mt-3 rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">Change password</button>
        </div>
      </div>
    </div>
  )
}

export function OrganisationSection({ org }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Organisation</h3>
      <div className="rounded-xl border bg-white p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-gray-900 font-medium"><Building2 size={18} /> {org?.name ?? 'Hologram Labs'}</div>
            <p className="mt-1 text-sm text-gray-600">{org?.description ?? 'Building secure digital identity experiences.'}</p>
          </div>
          <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700 ring-1 ring-indigo-200">{org?.plan ?? 'Enterprise'}</span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-4">
          <div><dt className="text-gray-500">ID</dt><dd className="font-medium">{org?.id ?? 'org_2x9k1'}</dd></div>
          <div><dt className="text-gray-500">Employees</dt><dd className="font-medium">{org?.employees ?? 128}</dd></div>
          <div><dt className="text-gray-500">Region</dt><dd className="font-medium">{org?.region ?? 'US-East'}</dd></div>
          <div><dt className="text-gray-500">Status</dt><dd className="font-medium">Active</dd></div>
        </dl>
      </div>
    </div>
  )
}

export function ClientsSection({ clients = [] }) {
  const list = clients.length ? clients : [
    { id: 'cl_01', name: 'Neon Bank', since: '2022', status: 'Active' },
    { id: 'cl_02', name: 'Skyline Media', since: '2023', status: 'Trial' },
    { id: 'cl_03', name: 'Aurora Health', since: '2021', status: 'Active' },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Clients</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map(c => (
          <div key={c.id} className="rounded-xl border bg-white p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="font-medium text-gray-900">{c.name}</div>
              <span className={`rounded-full px-2 py-0.5 text-xs ring-1 ${c.status === 'Active' ? 'bg-emerald-50 text-emerald-700 ring-emerald-200' : 'bg-amber-50 text-amber-700 ring-amber-200'}`}>{c.status}</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Client since {c.since}</div>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">View</button>
              <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">Invoice</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TeamsSection({ teams = [] }) {
  const list = teams.length ? teams : [
    { id: 'tm_01', name: 'Platform', members: 12 },
    { id: 'tm_02', name: 'Design', members: 7 },
    { id: 'tm_03', name: 'Risk & Trust', members: 4 },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Teams</h3>
      <ul className="space-y-2">
        {list.map(t => (
          <li key={t.id} className="flex items-center justify-between rounded-xl border bg-white p-3">
            <div className="flex items-center gap-2 text-gray-800"><Users size={18} /><span className="font-medium">{t.name}</span></div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>{t.members} members</span>
              <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"><UserMinus size={16} />Manage</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProfilePanel({ active, user, org, clients, teams }) {
  return (
    <div className="h-full w-full overflow-y-auto p-4">
      {active === 'profile' && (
        <div className="space-y-4">
          <div className="rounded-2xl border bg-white p-4">
            <h3 className="text-sm font-semibold text-gray-900">Overview</h3>
            <p className="mt-1 text-sm text-gray-600">Quick glance at your account status, organisation, and access.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">MFA</div>
                <div className="mt-1 text-gray-900 font-medium">{user?.mfaEnabled ? 'Enabled' : 'Disabled'}</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">Email</div>
                <div className="mt-1 text-gray-900 font-medium">{user?.emailVerified ? 'Verified' : 'Unverified'}</div>
              </div>
            </div>
          </div>
          <OrganisationSection org={org} />
        </div>
      )}
      {active === 'security' && <SecuritySection user={user} />}
      {active === 'verification' && <SecuritySection user={{ ...(user || {}), mfaEnabled: user?.mfaEnabled ?? false }} />}
      {active === 'org' && <OrganisationSection org={org} />}
      {active === 'clients' && <ClientsSection clients={clients} />}
      {active === 'teams' && <TeamsSection teams={teams} />}
      {active === 'settings' && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900">Settings</h3>
          <div className="rounded-xl border bg-white p-4 text-sm text-gray-600">General preferences and profile settings can be configured here.</div>
        </div>
      )}
    </div>
  )
}

export default ProfilePanel

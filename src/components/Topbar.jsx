import { Rocket, Search, Bell } from 'lucide-react'

function Topbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white shadow">
            <Rocket size={18} />
          </div>
          <div className="text-sm">
            <div className="font-semibold leading-none text-gray-900">HoloID</div>
            <div className="text-[11px] text-gray-500">Identity Platform</div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden sm:block">
            <input className="h-9 w-72 rounded-xl border bg-white px-3 text-sm shadow-sm outline-none ring-0 placeholder:text-gray-400 focus:border-indigo-300" placeholder="Search" />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-xl border bg-white shadow-sm hover:bg-gray-50"><Bell size={18} /></button>
        </div>
      </div>
    </header>
  )
}

export default Topbar

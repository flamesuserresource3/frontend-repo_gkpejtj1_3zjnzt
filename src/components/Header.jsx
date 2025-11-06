import { User, Mail } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <span className="font-semibold tracking-tight">Profile</span>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          <Mail size={16} /> Contact
        </a>
      </div>
    </header>
  )
}

export default Header

import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Heart, MessageCircle, ShieldCheck, ClipboardList, Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: '홈', icon: Heart },
  { path: '/community', label: '수다방', icon: MessageCircle },
  { path: '/factcheck', label: '정보방', icon: ShieldCheck },
  { path: '/care', label: '케어', icon: ClipboardList },
]

export default function Layout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-pink-800">PinkLog</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium no-underline transition-all ${
                    active
                      ? 'bg-pink-500 text-white'
                      : 'text-pink-700 hover:bg-pink-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-pink-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-pink-100 bg-white p-4 flex flex-col gap-2">
            {navItems.map(({ path, label, icon: Icon }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium no-underline ${
                    active
                      ? 'bg-pink-500 text-white'
                      : 'text-pink-700 hover:bg-pink-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              )
            })}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-pink-400">
          <p className="flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 fill-pink-400" />
            PinkLog - 당신의 여정을 함께합니다
          </p>
          <p className="mt-2 text-pink-300">
            본 사이트의 의료 정보는 참고용이며, 전문의 상담을 대체하지 않습니다.
          </p>
        </div>
      </footer>
    </div>
  )
}

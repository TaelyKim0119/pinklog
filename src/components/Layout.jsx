import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PinkLogLogo from './PinkLogLogo'

const navItems = [
  { path: '/shop', label: '스토어' },
  { path: '/community', label: '커뮤니티' },
  { path: '/factcheck', label: '팩트체크' },
  { path: '/care', label: '케어 정보' },
]

export default function Layout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/20 px-6 lg:px-20 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
              <PinkLogLogo size="md" />
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map(({ path, label }) => {
                const active = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`text-sm font-semibold transition-colors no-underline ${
                      active ? 'text-primary' : 'text-slate-700 hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex flex-1 justify-end gap-3 items-center">
            <label className="hidden md:flex items-center bg-primary/10 rounded-xl px-4 py-2 border border-primary/20 focus-within:border-primary transition-all w-full max-w-xs">
              <span className="material-symbols-outlined text-primary text-xl">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full placeholder:text-primary/60 ml-2"
                placeholder="검색..."
                type="text"
              />
            </label>

            {user ? (
              <>
                <Link
                  to="/diary"
                  className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold no-underline transition-colors ${
                    location.pathname === '/diary' ? 'bg-primary text-white' : 'text-primary hover:bg-primary/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">book</span>
                  케어일기
                </Link>
                <Link
                  to="/consult"
                  className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold no-underline transition-colors ${
                    location.pathname === '/consult' ? 'bg-accent text-white' : 'text-accent hover:bg-accent/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">smart_toy</span>
                  AI상담
                </Link>
                <div className="relative group">
                  <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {user.avatar}
                  </button>
                  <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl border border-slate-200 py-2 w-48 hidden group-hover:block">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="font-bold text-sm text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                    </div>
                    <Link to="/diary" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 no-underline">
                      <span className="material-symbols-outlined text-lg">book</span> 케어 일기
                    </Link>
                    <Link to="/consult" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 no-underline">
                      <span className="material-symbols-outlined text-lg">smart_toy</span> AI 상담
                    </Link>
                    <button onClick={logout} className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 w-full text-left">
                      <span className="material-symbols-outlined text-lg">logout</span> 로그아웃
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary-deep transition-all shadow-lg shadow-primary/20 no-underline"
              >
                로그인
              </Link>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-primary/10 bg-white p-4 flex flex-col gap-2 mt-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold no-underline ${
                  location.pathname === path ? 'bg-primary text-white' : 'text-slate-700 hover:bg-primary/5'
                }`}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/diary" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold no-underline text-primary hover:bg-primary/5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">book</span> 케어 일기
                </Link>
                <Link to="/consult" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold no-underline text-accent hover:bg-accent/5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">smart_toy</span> AI 상담
                </Link>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold no-underline bg-primary text-white text-center">
                로그인 / 가입하기
              </Link>
            )}
          </nav>
        )}
      </header>

      <main className="max-w-[1280px] mx-auto w-full px-6 lg:px-20 py-8 flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-primary/10 py-12 px-6 lg:px-20 mt-auto">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <PinkLogLogo size="md" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              유방암 환우분들의 여정을 함께하는 따뜻한 커뮤니티입니다.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">스토어</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/shop" className="hover:text-primary transition-colors no-underline text-slate-500">건강식품</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors no-underline text-slate-500">부종 관리 기구</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors no-underline text-slate-500">가발 & 모자</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors no-underline text-slate-500">스킨케어</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/diary" className="hover:text-primary transition-colors no-underline text-slate-500">케어 일기</Link></li>
              <li><Link to="/consult" className="hover:text-primary transition-colors no-underline text-slate-500">AI 상담</Link></li>
              <li><Link to="/factcheck" className="hover:text-primary transition-colors no-underline text-slate-500">팩트 체크</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors no-underline text-slate-500">커뮤니티</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">소식 받기</h4>
            <div className="flex gap-4 mb-6">
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
            <p className="text-xs text-slate-400">뉴스레터를 구독하고 최신 소식을 받아보세요</p>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto border-t border-primary/5 mt-12 pt-8 text-center text-xs text-slate-400">
          © 2024 PinkLog. 본 사이트의 의료 정보는 참고용이며, 전문의 상담을 대체하지 않습니다.
        </div>
      </footer>
    </div>
  )
}

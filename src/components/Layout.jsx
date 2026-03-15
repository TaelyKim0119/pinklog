import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/community', label: '커뮤니티' },
  { path: '/factcheck', label: '팩트체크' },
  { path: '/shop', label: '케어 스토어' },
  { path: '/care', label: '케어로그' },
]

export default function Layout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/20 px-6 lg:px-20 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="material-symbols-outlined text-3xl text-primary font-bold">favorite</span>
              <h2 className="text-slate-900 text-xl font-extrabold tracking-tight">PinkLog</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
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

          <div className="flex flex-1 justify-end gap-4 lg:gap-6">
            <label className="hidden sm:flex items-center bg-primary/10 rounded-xl px-4 py-2 border border-primary/20 focus-within:border-primary transition-all w-full max-w-xs">
              <span className="material-symbols-outlined text-primary text-xl">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full placeholder:text-primary/60 ml-2"
                placeholder="검색..."
                type="text"
              />
            </label>
            <button className="hidden sm:flex items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary-deep transition-all shadow-lg shadow-primary/20">
              가입하기
            </button>
            <div
              className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqURNRRiKae0jRjQegl9mclNkXG1_iZSp16mfkfYvlkNZuz-1kvnpMPLhhO05CIOQB4uu0izTYFffKQS3ythlsv4d5zSg7UK5KOcJO4j_LiVrl0BrPYKbj95YImA3axO730WqsqwOXmv7gmN6ngC7JSNptsQYxztBE4AR6IbTxLIB22YeHJtiUsbCiQiQS5oQgSTKCKj7aitjg07gzhuaOeKPolwMAFhky3D4fk3b6aMyFMNJFYYGsNpXCuAxyTzMS7s7YQajMJCQ')`,
              }}
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-primary/10 bg-white p-4 flex flex-col gap-2 mt-4">
            {navItems.map(({ path, label }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold no-underline ${
                    active ? 'bg-primary text-white' : 'text-slate-700 hover:bg-primary/5'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto w-full px-6 lg:px-20 py-8 flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-primary/10 py-12 px-6 lg:px-20 mt-auto">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-6">
              <span className="material-symbols-outlined text-3xl font-bold">favorite</span>
              <h2 className="text-slate-900 text-xl font-extrabold tracking-tight">PinkLog</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              유방암 환우분들의 여정을 함께하는 따뜻한 커뮤니티입니다.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">리소스</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/factcheck" className="hover:text-primary transition-colors no-underline text-slate-500">전문가 칼럼</Link></li>
              <li><Link to="/factcheck" className="hover:text-primary transition-colors no-underline text-slate-500">치료 가이드</Link></li>
              <li><Link to="/factcheck" className="hover:text-primary transition-colors no-underline text-slate-500">의학 용어집</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors no-underline text-slate-500">환우 이야기</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">지원</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/community" className="hover:text-primary transition-colors no-underline text-slate-500">소모임 찾기</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">24시간 상담</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">심리 상담</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">권익 옹호</a></li>
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
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">notifications</span>
              </a>
            </div>
            <p className="text-xs text-slate-400">뉴스레터를 구독하고 최신 소식을 받아보세요</p>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto border-t border-primary/5 mt-12 pt-8 text-center text-xs text-slate-400">
          © 2024 PinkLog. All rights reserved. 본 사이트의 의료 정보는 참고용이며, 전문의 상담을 대체하지 않습니다.
        </div>
      </footer>
    </div>
  )
}

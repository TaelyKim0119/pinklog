import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, name || email.split('@')[0])
    navigate('/diary')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-3xl">favorite</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            {isSignup ? 'PinkLog 가입하기' : 'PinkLog 로그인'}
          </h1>
          <p className="text-slate-500">
            {isSignup ? '함께하는 여정을 시작하세요' : '로그인하고 나만의 케어 일기를 기록하세요'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5">
          {isSignup && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">이름</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              required
            />
          </div>

          {isSignup && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">진단 단계 (선택)</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                <option value="">선택하세요</option>
                <option>1기</option>
                <option>2기</option>
                <option>3기</option>
                <option>4기</option>
                <option>치료 완료</option>
                <option>미지정</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-deep transition-colors shadow-lg shadow-primary/20"
          >
            {isSignup ? '가입하기' : '로그인'}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white px-4 text-slate-400">또는</span></div>
          </div>

          <button
            type="button"
            className="w-full border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">g_mobiledata</span>
            Google로 계속하기
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          {isSignup ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-primary font-bold ml-1 hover:underline"
          >
            {isSignup ? '로그인' : '가입하기'}
          </button>
        </p>
      </div>
    </div>
  )
}

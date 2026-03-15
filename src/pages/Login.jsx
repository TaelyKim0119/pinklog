import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [stage, setStage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { user, login, signup, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  if (user) return <Navigate to="/diary" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      if (isSignup) {
        await signup(email, password, name, stage)
        setSuccess('가입 확인 이메일을 보냈습니다. 이메일을 확인해주세요!')
      } else {
        await login(email, password)
        navigate('/diary')
      }
    } catch (err) {
      const msg = err.message
      if (msg.includes('Invalid login')) setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      else if (msg.includes('already registered')) setError('이미 가입된 이메일입니다.')
      else if (msg.includes('Password should be')) setError('비밀번호는 6자 이상이어야 합니다.')
      else setError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  const handleGoogle = async () => {
    try {
      await loginWithGoogle()
    } catch (err) {
      setError('Google 로그인에 실패했습니다.')
    }
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
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              {success}
            </div>
          )}

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
              placeholder={isSignup ? '6자 이상 입력하세요' : '••••••••'}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              required
              minLength={6}
            />
          </div>

          {isSignup && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">진단 단계 (선택)</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
              >
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
            disabled={submitting}
            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-deep transition-colors shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting && (
              <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
            )}
            {isSignup ? '가입하기' : '로그인'}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white px-4 text-slate-400">또는</span></div>
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google로 계속하기
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          {isSignup ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}
          <button
            onClick={() => { setIsSignup(!isSignup); setError(''); setSuccess('') }}
            className="text-primary font-bold ml-1 hover:underline"
          >
            {isSignup ? '로그인' : '가입하기'}
          </button>
        </p>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SYMPTOMS = [
  { id: 'nausea', label: '구토/메스꺼움', icon: 'sick' },
  { id: 'fatigue', label: '피로감', icon: 'battery_low' },
  { id: 'hairloss', label: '탈모', icon: 'face' },
  { id: 'appetite', label: '식욕감소', icon: 'no_food' },
  { id: 'oral', label: '구내염', icon: 'oral_disease' },
  { id: 'numbness', label: '손발저림', icon: 'back_hand' },
  { id: 'joint', label: '관절통', icon: 'accessibility' },
  { id: 'insomnia', label: '불면', icon: 'bedtime_off' },
  { id: 'skin', label: '피부변화', icon: 'dermatology' },
  { id: 'swelling', label: '부종/림프부종', icon: 'water_drop' },
  { id: 'hotflash', label: '안면홍조', icon: 'thermostat' },
  { id: 'mood', label: '우울/불안', icon: 'mood_bad' },
]

const MOODS = ['', '😢', '😟', '😐', '😊', '😄']

const INITIAL_ENTRIES = [
  {
    id: 1,
    date: '2026-03-15',
    type: '항암 3차',
    mood: 3,
    symptoms: [
      { id: 'nausea', severity: 2 },
      { id: 'fatigue', severity: 3 },
      { id: 'swelling', severity: 2 },
    ],
    memo: '구토 억제제 효과 좋았음. 오후부터 피로감 증가. 왼팔 부종 약간 있음.',
    vitals: { weight: 55.2, temp: 36.5, bp: '120/80' },
  },
  {
    id: 2,
    date: '2026-03-12',
    type: '외래 진료',
    mood: 4,
    symptoms: [{ id: 'fatigue', severity: 2 }],
    memo: '혈액 검사 결과 양호. 백혈구 수치 회복 중. 다음 항암 일정 확정.',
    vitals: { weight: 55.5, temp: 36.3, bp: '118/75' },
  },
  {
    id: 3,
    date: '2026-03-08',
    type: '항암 2차',
    mood: 2,
    symptoms: [
      { id: 'nausea', severity: 4 },
      { id: 'fatigue', severity: 4 },
      { id: 'appetite', severity: 3 },
      { id: 'swelling', severity: 3 },
    ],
    memo: '이번에는 구토가 심했음. 3일간 식사 어려웠음. 팔 부종도 심해져서 압박밴드 착용.',
    vitals: { weight: 54.8, temp: 37.1, bp: '125/82' },
  },
]

export default function Diary() {
  const { user } = useAuth()
  const [entries] = useState(INITIAL_ENTRIES)
  const [showNew, setShowNew] = useState(false)
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [selectedMood, setSelectedMood] = useState(0)
  const [expandedId, setExpandedId] = useState(null)

  if (!user) return <Navigate to="/login" replace />

  const toggleSymptom = (id) => {
    setSelectedSymptoms(prev =>
      prev.find(s => s.id === id)
        ? prev.filter(s => s.id !== id)
        : [...prev, { id, severity: 3 }]
    )
  }

  const setSeverity = (id, severity) => {
    setSelectedSymptoms(prev => prev.map(s => s.id === id ? { ...s, severity } : s))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-3xl">book</span>
              {user.name}님의 케어 일기
            </h1>
            <p className="text-slate-500 text-sm">매일의 증상과 컨디션을 기록하고 변화를 추적하세요</p>
          </div>
          <Link
            to="/consult"
            className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-accent/90 transition-colors no-underline shadow-lg shadow-accent/20"
          >
            <span className="material-symbols-outlined">smart_toy</span>
            AI 상담하기
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: '기록 일수', value: '45일', icon: 'calendar_month', color: 'bg-primary/10 text-primary' },
          { label: '이번 달 평균', value: '3.2/5', icon: 'favorite', color: 'bg-pink-100 text-pink-500' },
          { label: '치료 진행', value: '3/6회', icon: 'medication', color: 'bg-blue-100 text-blue-500' },
          { label: '약 복용률', value: '94%', icon: 'check_circle', color: 'bg-green-100 text-green-500' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile AI Button */}
      <Link
        to="/consult"
        className="md:hidden flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-semibold no-underline shadow-lg shadow-accent/20"
      >
        <span className="material-symbols-outlined">smart_toy</span>
        AI 상담 - 내 증상에 대해 물어보기
      </Link>

      {/* New Entry */}
      <button
        onClick={() => setShowNew(!showNew)}
        className="w-full bg-white rounded-2xl p-4 border-2 border-dashed border-primary/30 text-primary flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors font-semibold"
      >
        <span className="material-symbols-outlined">add</span>
        오늘의 증상 기록하기
      </button>

      {showNew && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-6">
          <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">edit_note</span>
            새 기록
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">날짜</label>
              <input type="date" defaultValue="2026-03-15" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">유형</label>
              <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white">
                <option>항암 치료</option>
                <option>방사선 치료</option>
                <option>외래 진료</option>
                <option>검사</option>
                <option>일상 기록</option>
              </select>
            </div>
          </div>

          {/* Mood */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">오늘의 컨디션</label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedMood(m)}
                  className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center text-2xl transition-all hover:scale-110 ${
                    selectedMood === m ? 'border-primary bg-primary/10 scale-110' : 'border-slate-200'
                  }`}
                >
                  {MOODS[m]}
                </button>
              ))}
            </div>
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">증상 체크 (해당하는 것을 모두 선택)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {SYMPTOMS.map(s => {
                const selected = selectedSymptoms.find(ss => ss.id === s.id)
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleSymptom(s.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-all text-left ${
                      selected
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{s.icon}</span>
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Severity for selected */}
          {selectedSymptoms.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">증상 강도 (1~5)</label>
              <div className="space-y-3">
                {selectedSymptoms.map(s => {
                  const symptom = SYMPTOMS.find(ss => ss.id === s.id)
                  return (
                    <div key={s.id} className="flex items-center gap-4 bg-red-50/50 p-3 rounded-xl">
                      <span className="text-sm font-medium text-slate-700 w-32">{symptom.label}</span>
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map(level => (
                          <button
                            key={level}
                            onClick={() => setSeverity(s.id, level)}
                            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                              s.severity === level
                                ? level <= 2 ? 'bg-green-500 text-white' : level <= 3 ? 'bg-amber-500 text-white' : 'bg-red-500 text-white'
                                : level <= 2 ? 'bg-green-100 text-green-600' : level <= 3 ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Vitals */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">바이탈 (선택)</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-slate-500">체중 (kg)</label>
                <input type="number" step="0.1" placeholder="55.0" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs text-slate-500">체온 (°C)</label>
                <input type="number" step="0.1" placeholder="36.5" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs text-slate-500">혈압</label>
                <input type="text" placeholder="120/80" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>
          </div>

          {/* Memo */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">메모</label>
            <textarea
              placeholder="오늘의 상태, 느낀 점, 의사 소견 등을 자유롭게 기록하세요..."
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none h-28 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={() => setShowNew(false)} className="px-6 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-slate-100">취소</button>
            <button className="px-6 py-2.5 rounded-xl text-sm bg-primary text-white font-semibold hover:bg-primary-deep shadow-lg shadow-primary/20">저장하기</button>
          </div>
        </div>
      )}

      {/* Entry List */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-slate-900">기록 히스토리</h3>
        {entries.map(entry => (
          <div key={entry.id} className="bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
            <div
              className="p-5 cursor-pointer"
              onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{entry.type}</div>
                    <div className="text-xs text-slate-400">{entry.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {entry.symptoms.slice(0, 3).map(s => {
                      const sym = SYMPTOMS.find(ss => ss.id === s.id)
                      return (
                        <span key={s.id} className="material-symbols-outlined text-red-400 text-lg" title={sym?.label}>
                          {sym?.icon}
                        </span>
                      )
                    })}
                  </div>
                  <span className="text-xl">{MOODS[entry.mood]}</span>
                  <span className="material-symbols-outlined text-slate-400">
                    {expandedId === entry.id ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
              </div>

              {expandedId === entry.id && (
                <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{entry.memo}</p>

                  <div className="flex flex-wrap gap-2">
                    {entry.symptoms.map(s => {
                      const sym = SYMPTOMS.find(ss => ss.id === s.id)
                      return (
                        <span key={s.id} className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-medium">
                          <span className="material-symbols-outlined text-sm">{sym?.icon}</span>
                          {sym?.label} ({s.severity}/5)
                        </span>
                      )
                    })}
                  </div>

                  {entry.vitals && (
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span>체중: {entry.vitals.weight}kg</span>
                      <span>체온: {entry.vitals.temp}°C</span>
                      <span>혈압: {entry.vitals.bp}</span>
                    </div>
                  )}

                  <Link
                    to="/consult"
                    className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:underline no-underline"
                  >
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                    이 기록으로 AI 상담하기
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { ClipboardList, Plus, Calendar, Pill, AlertCircle, TrendingUp, Clock, Check, ChevronDown, ChevronUp, Bell, Thermometer, Heart } from 'lucide-react'

const SIDE_EFFECTS = [
  '구토/메스꺼움', '피로감', '탈모', '식욕감소', '구내염',
  '손발저림', '관절통', '불면', '피부변화', '부종',
]

const SAMPLE_LOGS = [
  {
    id: 1,
    date: '2026-03-15',
    type: '항암 3차',
    memo: '구토 억제제 효과 좋았음. 오후부터 피로감 증가.',
    sideEffects: ['구토/메스꺼움', '피로감'],
    severity: { '구토/메스꺼움': 2, '피로감': 3 },
    mood: 3,
  },
  {
    id: 2,
    date: '2026-03-12',
    type: '외래 진료',
    memo: '혈액 검사 결과 양호. 다음 항암 일정 확정.',
    sideEffects: ['피로감'],
    severity: { '피로감': 2 },
    mood: 4,
  },
  {
    id: 3,
    date: '2026-03-08',
    type: '항암 2차',
    memo: '이번에는 구토가 심했음. 3일간 식사 어려웠음.',
    sideEffects: ['구토/메스꺼움', '피로감', '식욕감소'],
    severity: { '구토/메스꺼움': 4, '피로감': 4, '식욕감소': 3 },
    mood: 2,
  },
]

const MEDICATIONS = [
  { name: '타목시펜 20mg', time: '08:00', taken: true },
  { name: '오메프라졸 20mg', time: '07:30', taken: true },
  { name: '비타민 D 1000IU', time: '12:00', taken: false },
  { name: '철분제', time: '20:00', taken: false },
]

const MOODS = ['', '😢', '😟', '😐', '😊', '😄']

export default function Care() {
  const [activeSection, setActiveSection] = useState('diary')
  const [showNewEntry, setShowNewEntry] = useState(false)
  const [selectedEffects, setSelectedEffects] = useState([])
  const [expandedLog, setExpandedLog] = useState(null)

  const toggleEffect = (effect) => {
    setSelectedEffects(prev =>
      prev.includes(effect)
        ? prev.filter(e => e !== effect)
        : [...prev, effect]
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-pink-100">
        <h1 className="text-2xl font-bold text-pink-800 flex items-center gap-2 mb-2">
          <ClipboardList className="w-7 h-7" />
          케어
        </h1>
        <p className="text-pink-500">항암 일지, 부작용 체크, 약 복용 관리를 한곳에서</p>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { id: 'diary', label: '항암 일지', icon: Calendar },
          { id: 'medication', label: '약 복용 관리', icon: Pill },
          { id: 'sideeffects', label: '부작용 체크', icon: AlertCircle },
          { id: 'trends', label: '경과 추이', icon: TrendingUp },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeSection === id
                ? 'bg-lavender-500 text-white shadow-md'
                : 'bg-white text-purple-600 border border-purple-200 hover:bg-lavender-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Diary Section */}
      {activeSection === 'diary' && (
        <div className="space-y-4">
          {/* New Entry Button */}
          <button
            onClick={() => setShowNewEntry(!showNewEntry)}
            className="w-full bg-white rounded-2xl p-4 border-2 border-dashed border-pink-300 text-pink-500 flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            새 기록 작성하기
          </button>

          {/* New Entry Form */}
          {showNewEntry && (
            <div className="bg-white rounded-2xl p-6 border border-pink-100 space-y-5">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-lavender-500" />
                오늘의 기록
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">날짜</label>
                  <input
                    type="date"
                    defaultValue="2026-03-15"
                    className="w-full border border-pink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">유형</label>
                  <select className="w-full border border-pink-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white">
                    <option>항암 치료</option>
                    <option>방사선 치료</option>
                    <option>외래 진료</option>
                    <option>검사</option>
                    <option>일상 기록</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">오늘의 컨디션</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(mood => (
                    <button
                      key={mood}
                      className="w-12 h-12 rounded-xl border-2 border-pink-200 hover:border-pink-400 flex items-center justify-center text-xl transition-all hover:scale-110"
                    >
                      {MOODS[mood]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">부작용 체크</label>
                <div className="flex flex-wrap gap-2">
                  {SIDE_EFFECTS.map(effect => (
                    <button
                      key={effect}
                      onClick={() => toggleEffect(effect)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedEffects.includes(effect)
                          ? 'bg-red-100 text-red-600 border border-red-200'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {effect}
                    </button>
                  ))}
                </div>
              </div>

              {selectedEffects.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">부작용 강도</label>
                  <div className="space-y-2">
                    {selectedEffects.map(effect => (
                      <div key={effect} className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 w-28">{effect}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(level => (
                            <button
                              key={level}
                              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                                level <= 2 ? 'bg-green-100 text-green-600 hover:bg-green-200' :
                                level <= 3 ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' :
                                'bg-red-100 text-red-600 hover:bg-red-200'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">메모</label>
                <textarea
                  placeholder="오늘의 상태, 느낀 점, 의사 소견 등을 기록하세요..."
                  className="w-full border border-pink-200 rounded-xl px-4 py-3 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="px-5 py-2.5 rounded-full text-sm text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  취소
                </button>
                <button className="px-5 py-2.5 rounded-full text-sm bg-lavender-500 text-white font-medium hover:bg-purple-600 transition-colors">
                  저장하기
                </button>
              </div>
            </div>
          )}

          {/* Existing Logs */}
          {SAMPLE_LOGS.map(log => (
            <div
              key={log.id}
              className="bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="p-5 cursor-pointer"
                onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-lavender-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-lavender-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{log.type}</div>
                      <div className="text-xs text-gray-400">{log.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{MOODS[log.mood]}</span>
                    {expandedLog === log.id
                      ? <ChevronUp className="w-5 h-5 text-gray-400" />
                      : <ChevronDown className="w-5 h-5 text-gray-400" />
                    }
                  </div>
                </div>

                {expandedLog === log.id && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed">{log.memo}</p>
                    <div className="flex flex-wrap gap-2">
                      {log.sideEffects.map(e => (
                        <span key={e} className="flex items-center gap-1 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs">
                          <Thermometer className="w-3 h-3" />
                          {e} (강도: {log.severity[e]}/5)
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Medication Section */}
      {activeSection === 'medication' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-pink-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-lavender-500" />
              오늘의 약 복용
            </h3>
            <div className="space-y-3">
              {MEDICATIONS.map((med, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    med.taken
                      ? 'border-green-200 bg-green-50'
                      : 'border-pink-200 bg-white'
                  }`}
                >
                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      med.taken
                        ? 'bg-green-500 text-white'
                        : 'border-2 border-gray-300 hover:border-pink-400'
                    }`}
                  >
                    {med.taken && <Check className="w-4 h-4" />}
                  </button>
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${med.taken ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                      {med.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {med.time}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-pink-300 text-pink-500 py-3 rounded-xl hover:bg-pink-50 transition-colors text-sm font-medium">
              <Plus className="w-4 h-4" />
              약 추가하기
            </button>
          </div>

          {/* Alarm Setting */}
          <div className="bg-white rounded-2xl p-6 border border-pink-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-warm-500" />
              복용 알림 설정
            </h3>
            <div className="space-y-3">
              {MEDICATIONS.map((med, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-pink-50 last:border-0">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{med.name}</div>
                    <div className="text-xs text-gray-400">매일 {med.time}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Side Effects Section */}
      {activeSection === 'sideeffects' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-pink-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              부작용 모니터링
            </h3>
            <p className="text-sm text-gray-500 mb-5">최근 기록된 부작용 현황입니다. 강도가 지속적으로 높은 경우 주치의와 상담하세요.</p>

            <div className="space-y-4">
              {[
                { name: '구토/메스꺼움', recent: 2, trend: 'down', history: [4, 3, 2] },
                { name: '피로감', recent: 3, trend: 'stable', history: [3, 3, 3] },
                { name: '식욕감소', recent: 1, trend: 'down', history: [3, 2, 1] },
                { name: '탈모', recent: 3, trend: 'up', history: [1, 2, 3] },
                { name: '손발저림', recent: 2, trend: 'stable', history: [2, 2, 2] },
              ].map((effect, i) => (
                <div key={i} className="p-4 rounded-xl border border-pink-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-gray-800">{effect.name}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      effect.trend === 'down' ? 'bg-green-100 text-green-600' :
                      effect.trend === 'up' ? 'bg-red-100 text-red-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {effect.trend === 'down' ? '감소 추세' :
                       effect.trend === 'up' ? '증가 추세' : '유지'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          effect.recent <= 2 ? 'bg-green-400' :
                          effect.recent <= 3 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${(effect.recent / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-600 w-10 text-right">{effect.recent}/5</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {effect.history.map((h, j) => (
                      <span key={j} className="text-xs text-gray-400">
                        {j > 0 && ' → '}{h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trends Section */}
      {activeSection === 'trends' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-pink-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-lavender-500" />
              치료 경과 추이
            </h3>

            {/* Simple visual chart */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  컨디션 변화 (최근 7일)
                </h4>
                <div className="flex items-end gap-2 h-32">
                  {[3, 2, 2, 3, 4, 3, 4].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs">{MOODS[val]}</span>
                      <div
                        className="w-full bg-pink-200 rounded-t-lg transition-all hover:bg-pink-400"
                        style={{ height: `${(val / 5) * 100}%` }}
                      />
                      <span className="text-xs text-gray-400">
                        {['월', '화', '수', '목', '금', '토', '일'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-pink-100" />

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">치료 요약</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: '총 치료 횟수', value: '3/6회', sub: '항암' },
                    { label: '기록 일수', value: '45일', sub: '연속 기록' },
                    { label: '평균 컨디션', value: '3.2', sub: '5점 만점' },
                    { label: '약 복용률', value: '94%', sub: '이번 달' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-pink-50 rounded-xl">
                      <div className="text-xl font-bold text-pink-800">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="text-xs text-pink-400 mt-1">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

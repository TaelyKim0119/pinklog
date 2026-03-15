import { useState } from 'react'

const TABS = [
  { id: 'myths', label: '팩트 체크', icon: 'fact_check' },
  { id: 'diet', label: '식단 가이드', icon: 'restaurant' },
  { id: 'treatment', label: '치료 정보', icon: 'medication' },
  { id: 'lifestyle', label: '생활 관리', icon: 'self_improvement' },
]

const FACT_CHECKS = [
  {
    id: 1,
    claim: '"유방암 환자는 콩(두부)을 먹으면 안 된다"',
    verdict: 'myth',
    explanation: '식품 형태의 콩(두부, 된장 등)은 안전하며 오히려 유방암 재발 위험을 줄일 수 있습니다. 다만 이소플라본 보충제는 고용량 섭취를 피하는 것이 좋습니다.',
    source: '대한유방암학회 가이드라인 2024',
    tags: ['식단', '콩', '이소플라본'],
  },
  {
    id: 2,
    claim: '"항암 치료 중에는 운동을 하면 안 된다"',
    verdict: 'myth',
    explanation: '적절한 운동은 항암 치료 중 피로감 감소, 체력 유지, 정서적 안정에 도움이 됩니다. 주 150분의 중등도 유산소 운동이 권장됩니다.',
    source: 'American Cancer Society 운동 가이드라인',
    tags: ['운동', '항암', '피로'],
  },
  {
    id: 3,
    claim: '"유기농 식품만 먹으면 암이 낫는다"',
    verdict: 'myth',
    explanation: '유기농 식품이 일반 식품보다 암 치료에 효과적이라는 과학적 근거는 없습니다. 균형 잡힌 식단이 더 중요합니다.',
    source: '국립암센터',
    tags: ['유기농', '식단', '민간요법'],
  },
  {
    id: 4,
    claim: '"항암 치료 부작용으로 인한 탈모는 영구적이다"',
    verdict: 'myth',
    explanation: '대부분의 경우 항암 치료 종료 후 3~6개월 내에 모발이 다시 자라기 시작합니다. 다만 모발의 질감이나 색상이 일시적으로 달라질 수 있습니다.',
    source: '대한종양간호학회',
    tags: ['탈모', '부작용', '항암'],
  },
  {
    id: 5,
    claim: '"유방암 환자는 정기적인 검진이 중요하다"',
    verdict: 'fact',
    explanation: '치료 완료 후에도 정기적인 추적 검사가 매우 중요합니다. 처음 5년간은 3~6개월마다, 이후에는 매년 검진을 받는 것이 권장됩니다.',
    source: 'NCCN 가이드라인',
    tags: ['검진', '추적검사', '관리'],
  },
]

const DIET_GUIDES = [
  {
    title: '항암 치료 중 식단',
    items: [
      { text: '충분한 단백질 섭취 (살코기, 생선, 달걀, 두부)', good: true },
      { text: '신선한 과일과 채소 다양하게 섭취', good: true },
      { text: '충분한 수분 섭취 (하루 8잔 이상)', good: true },
      { text: '고지방, 고당분 가공식품 제한', good: false },
      { text: '날것 음식 주의 (면역력 저하 시)', good: false },
      { text: '과도한 음주 피하기', good: false },
    ],
  },
  {
    title: '면역력 강화 식품',
    items: [
      { text: '브로콜리, 시금치 등 녹색 채소', good: true },
      { text: '버섯류 (표고, 느타리, 양송이)', good: true },
      { text: '견과류 (아몬드, 호두) 적정량', good: true },
      { text: '발효식품 (된장, 김치, 요구르트)', good: true },
      { text: '검증되지 않은 건강보조식품', good: false },
      { text: '과도한 보충제 복용', good: false },
    ],
  },
]

const TREATMENT_INFO = [
  { title: '수술 치료', icon: 'surgical', desc: '유방보존술 또는 유방절제술로 종양을 제거합니다.', details: '종양의 크기, 위치, 병기에 따라 수술 방법이 결정됩니다. 최근에는 유방보존술의 비율이 높아지고 있으며, 재건술도 함께 고려됩니다.' },
  { title: '항암 화학요법', icon: 'medication', desc: '약물을 통해 암세포를 파괴하는 전신 치료입니다.', details: '보통 3~6개월간 진행되며, 수술 전(선행항암) 또는 수술 후(보조항암) 시행됩니다.' },
  { title: '방사선 치료', icon: 'radiology', desc: '고에너지 방사선으로 잔여 암세포를 제거합니다.', details: '유방보존술 후 거의 필수적으로 시행됩니다. 보통 5~6주간 주 5회 진행됩니다.' },
  { title: '호르몬 치료', icon: 'science', desc: '호르몬 수용체 양성인 경우 시행하는 치료입니다.', details: '타목시펜, 아로마타제 억제제 등을 5~10년간 복용합니다.' },
  { title: '표적 치료', icon: 'target', desc: 'HER2 양성인 경우 특이적으로 작용하는 치료입니다.', details: '트라스투주맙(허셉틴) 등의 약물이 대표적입니다. 1년간 투여하며, 재발률을 약 50% 감소시킵니다.' },
]

export default function FactCheck() {
  const [activeTab, setActiveTab] = useState('myths')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  const filteredFacts = FACT_CHECKS.filter(f =>
    f.claim.includes(searchQuery) || f.tags.some(t => t.includes(searchQuery))
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-accent text-3xl">fact_check</span>
          정보방
        </h1>
        <p className="text-slate-500 mb-4">검증된 의료 정보로 올바른 건강 관리를 시작하세요</p>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="궁금한 정보를 검색하세요 (예: 콩, 운동, 탈모)"
            className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm bg-primary/5"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {TABS.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === id
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Myths */}
      {activeTab === 'myths' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-amber-500 mt-0.5">warning</span>
            <p className="text-sm text-amber-800">
              아래 정보는 의학적 연구에 기반한 팩트 체크입니다. 개인의 상태에 따라 다를 수 있으므로 반드시 주치의와 상담하세요.
            </p>
          </div>
          {filteredFacts.map(fact => (
            <div key={fact.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 cursor-pointer" onClick={() => setExpandedId(expandedId === fact.id ? null : fact.id)}>
                <div className="flex items-start gap-3">
                  <span className={`material-symbols-outlined mt-0.5 ${fact.verdict === 'myth' ? 'text-red-500' : 'text-green-500'}`}>
                    {fact.verdict === 'myth' ? 'cancel' : 'check_circle'}
                  </span>
                  <div className="flex-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      fact.verdict === 'myth' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {fact.verdict === 'myth' ? '거짓' : '사실'}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-2">{fact.claim}</h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">
                    {expandedId === fact.id ? 'expand_less' : 'expand_more'}
                  </span>
                </div>
                {expandedId === fact.id && (
                  <div className="mt-4 ml-9 space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">{fact.explanation}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-xs">menu_book</span>
                      출처: {fact.source}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {fact.tags.map(tag => (
                        <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">#{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Diet */}
      {activeTab === 'diet' && (
        <div className="grid md:grid-cols-2 gap-6">
          {DIET_GUIDES.map(guide => (
            <div key={guide.title} className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">restaurant</span>
                {guide.title}
              </h3>
              <div className="space-y-3">
                {guide.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`material-symbols-outlined mt-0.5 ${item.good ? 'text-green-500' : 'text-red-400'}`}>
                      {item.good ? 'check_circle' : 'cancel'}
                    </span>
                    <span className="text-sm text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Treatment */}
      {activeTab === 'treatment' && (
        <div className="space-y-4">
          {TREATMENT_INFO.map((info, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">{info.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                  <p className="text-sm text-accent-pink mb-3">{info.desc}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{info.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lifestyle */}
      {activeTab === 'lifestyle' && (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: '수면 관리', icon: 'bedtime', tips: ['규칙적인 수면 시간 유지', '취침 전 스마트폰 사용 줄이기', '편안한 수면 환경 조성', '카페인 오후 이후 제한'] },
            { title: '스트레스 관리', icon: 'spa', tips: ['명상, 요가 등 이완 활동', '충분한 휴식 시간 확보', '감정 일기 쓰기', '전문 심리상담 활용'] },
            { title: '운동 가이드', icon: 'fitness_center', tips: ['주 150분 중등도 유산소 운동', '스트레칭으로 유연성 유지', '무리하지 않는 선에서 점진적 증가', '수술 후 팔 운동 꾸준히'] },
            { title: '정서적 건강', icon: 'favorite', tips: ['환우 모임 참여로 공감대 형성', '가족, 친구와 솔직한 대화', '취미활동으로 긍정적 에너지', '필요시 전문 도움 요청'] },
          ].map((section, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.tips.map((tip, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const QUICK_QUESTIONS = [
  '항암 후 구토가 심한데 어떻게 해야 하나요?',
  '부종을 줄이는 방법이 궁금해요',
  '항암 중 먹으면 좋은 음식은?',
  '탈모가 시작됐는데 관리법을 알려주세요',
  '피로감이 너무 심해요',
  '림프부종 자가관리 방법은?',
]

const AI_RESPONSES = {
  default: `안녕하세요! PinkLog AI 상담사입니다. 🩷

증상이나 궁금한 점을 자유롭게 말씀해주세요. 기록된 증상 데이터를 바탕으로 맞춤 정보를 드릴게요.

⚠️ 본 상담은 일반적인 정보 제공 목적이며, 의학적 진단이나 치료를 대체하지 않습니다. 증상이 심각하거나 지속되면 반드시 주치의와 상담하세요.`,

  '구토': `**항암 후 구토 관리 안내** 🤢

구토는 항암 치료의 가장 흔한 부작용 중 하나입니다.

**즉시 도움이 되는 방법:**
• 소량씩 자주 드세요 (하루 5~6끼)
• 차가운 음식이 냄새가 적어 먹기 편합니다
• 생강차, 레몬수가 도움됩니다
• 식후 바로 눕지 말고 30분 정도 앉아계세요

**병원에 연락해야 할 때:**
• 24시간 이상 물도 못 드실 때
• 구토에 피가 섞여 나올 때
• 심한 어지러움이 동반될 때

**추천 상품:** PinkLog 스토어의 '생강 진저티'와 '구토억제 아로마밴드'를 확인해보세요.

📋 최근 기록을 보니 구토 강도가 4→3→2로 감소 추세예요. 좋은 방향입니다!`,

  '부종': `**부종/림프부종 관리 안내** 💧

유방암 수술 후 림프부종은 약 20~30%의 환자에서 발생합니다.

**자가 관리 방법:**
• 압박 슬리브/밴드를 낮 시간 동안 착용하세요
• 팔을 심장보다 높이 올려놓으세요
• 가벼운 림프 배액 마사지를 해주세요
• 무거운 물건 들기를 피하세요
• 해당 팔에서 혈압 측정, 채혈을 피하세요

**운동 추천:**
• 수영, 물속 걷기 (수압이 도움됨)
• 가벼운 요가, 스트레칭
• 공 쥐었다 풀기 반복

**추천 상품:**
• '메디컬 압박 슬리브' - 의사 추천, 순환 촉진
• '림프 마사지 롤러' - 집에서 간편 사용
• '부종 케어 에센스' - 냉감 보습 효과

📋 최근 부종 기록이 3→2로 개선되고 있어요!`,

  '음식': `**항암 중 식단 가이드** 🥗

**적극 추천 식품:**
• 단백질: 달걀, 두부, 살코기, 생선 (면역력 유지)
• 항산화 식품: 블루베리, 브로콜리, 토마토
• 발효식품: 요구르트, 된장 (장건강 유지)
• 견과류: 호두, 아몬드 (하루 한줌)

**주의할 식품:**
• 날것 음식 (면역 저하 시 감염 위험)
• 과도한 건강보조식품 (주치의 상의 필수)
• 자몽 (일부 항암제와 상호작용)

**추천 상품:**
• '유기농 항산화 스무디 세트' - 간편한 영양 보충
• '환우 맞춤 영양제 패키지' - 전문의 감수
• '항암식단 레시피북' - 50가지 쉬운 레시피`,

  '탈모': `**항암 탈모 관리 안내** 💇‍♀️

항암 치료 2~3주 후 시작되며, 치료 종료 후 3~6개월 내 다시 자랍니다.

**관리 팁:**
• 부드러운 베개커버 사용 (실크 또는 뱀부 소재)
• 순한 샴푸로 부드럽게 세척
• 두피 자극을 최소화하세요
• 미리 짧게 자르면 심리적 충격이 적어요

**두피 건강:**
• 두피 보습제를 사용하세요
• 직사광선 차단 (모자 착용)
• 헤어드라이어 사용 자제

**추천 상품:**
• '뱀부 수면캡' - 민감 두피 보호
• '인피니티 레이스 프론트 가발' - 자연스러운 룩
• '두피 진정 에센스' - 항암 중 두피 케어
• '실크 베개커버' - 마찰 최소화`,

  '피로': `**항암 피로 관리 안내** 😴

항암 피로는 환자의 80~90%가 경험하는 가장 흔한 부작용입니다.

**에너지 관리법:**
• 활동과 휴식의 균형을 맞추세요
• 가장 컨디션 좋은 시간에 중요한 일을 하세요
• 낮잠은 30분 이내로 제한
• 가벼운 산책이 오히려 피로 감소에 도움

**수면 질 개선:**
• 규칙적인 수면 시간 유지
• 취침 전 스마트폰 사용 줄이기
• 카페인은 오후 2시 이전까지만

**추천 상품:**
• '에너지 부스트 비타민 세트' - 피로 회복 맞춤
• '아로마테라피 세트' - 숙면 도움
• '온열 안대' - 눈 피로와 수면 개선`,

  '림프': `**림프부종 자가관리 가이드** 🩺

**매일 해야 할 것:**
1. 아침저녁 팔 둘레 측정 (변화 추적)
2. 압박 슬리브 착용 (낮 시간)
3. 가벼운 림프 배액 운동 (10~15분)
4. 피부 보습 관리

**림프 배액 마사지 순서:**
1. 쇄골 위 부드럽게 원형 마사지
2. 겨드랑이 방향으로 쓸어올리기
3. 팔 안쪽을 손끝→겨드랑이 방향으로
4. 각 동작 5~10회 반복

**주의사항:**
• 해당 팔 사우나, 뜨거운 물 노출 자제
• 곤충 물림, 상처 감염 주의
• 꽉 끼는 옷, 액세서리 피하기

**추천 상품:**
• '메디컬 압박 슬리브' - 등급별 압박
• '림프 마사지 건' - 진동 마사지
• '부종 측정 줄자 세트' - 일일 모니터링`,
}

function getAIResponse(message) {
  const lower = message.toLowerCase()
  if (lower.includes('구토') || lower.includes('메스') || lower.includes('토하')) return AI_RESPONSES['구토']
  if (lower.includes('부종') || lower.includes('붓') || lower.includes('림프')) return AI_RESPONSES['림프']
  if (lower.includes('음식') || lower.includes('식단') || lower.includes('먹') || lower.includes('영양')) return AI_RESPONSES['음식']
  if (lower.includes('탈모') || lower.includes('머리') || lower.includes('가발')) return AI_RESPONSES['탈모']
  if (lower.includes('피로') || lower.includes('피곤') || lower.includes('졸') || lower.includes('힘들')) return AI_RESPONSES['피로']
  return `말씀해주신 "${message}"에 대해 안내드릴게요.

증상이 지속되거나 심해지면 주치의와 상담하시는 것을 권장합니다.

**일반적인 관리 팁:**
• 충분한 수분 섭취
• 무리하지 않는 범위에서 가벼운 활동
• 증상을 케어 일기에 기록해서 변화를 추적하세요
• PinkLog 스토어에서 관련 케어 상품을 확인해보세요

다른 궁금한 점이 있으시면 말씀해주세요! 🩷`
}

export default function Consult() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([
    { role: 'ai', content: AI_RESPONSES.default },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!user) return <Navigate to="/login" replace />

  const sendMessage = (text) => {
    const msg = text || input.trim()
    if (!msg) return

    setMessages(prev => [...prev, { role: 'user', content: msg }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: getAIResponse(msg) }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[800px]">
      {/* Header */}
      <div className="bg-white rounded-t-2xl p-4 border border-slate-200 border-b-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white">smart_toy</span>
          </div>
          <div>
            <h2 className="font-bold text-slate-900">PinkLog AI 상담</h2>
            <p className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
              온라인
            </p>
          </div>
        </div>
        <Link to="/diary" className="text-sm text-primary font-semibold hover:underline no-underline flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">book</span>
          케어 일기
        </Link>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 border-x border-slate-200 p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'ai' && (
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2 mt-1 shrink-0">
                <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-tr-md'
                  : 'bg-white border border-slate-200 text-slate-700 rounded-tl-md'
              }`}
              dangerouslySetInnerHTML={{
                __html: msg.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/•/g, '&bull;')
              }}
            />
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2 shrink-0">
              <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-md px-5 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick Questions */}
      <div className="bg-white border-x border-slate-200 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {QUICK_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              className="shrink-0 bg-primary/5 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-primary/10 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white rounded-b-2xl border border-slate-200 border-t-0 p-4">
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage() }}
          className="flex gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="증상이나 궁금한 점을 입력하세요..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
        <p className="text-[10px] text-slate-400 mt-2 text-center">
          AI 상담은 일반적인 정보 제공 목적이며, 의학적 진단을 대체하지 않습니다. 심각한 증상은 즉시 주치의와 상담하세요.
        </p>
      </div>
    </div>
  )
}

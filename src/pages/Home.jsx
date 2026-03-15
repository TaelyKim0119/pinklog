import { Link } from 'react-router-dom'
import { MessageCircle, ShieldCheck, ClipboardList, Heart, Users, Sparkles } from 'lucide-react'

const features = [
  {
    title: '수다방',
    subtitle: '커뮤니티',
    description: '기수별, 연령별, 지역별 소모임에서 같은 경험을 나누는 분들과 이야기해요.',
    icon: MessageCircle,
    color: 'bg-pink-100 text-pink-600',
    link: '/community',
    btnColor: 'bg-pink-500 hover:bg-pink-600',
  },
  {
    title: '정보방',
    subtitle: '팩트 체크',
    description: '검증된 의료 정보와 식단 가이드로 올바른 건강 관리를 시작하세요.',
    icon: ShieldCheck,
    color: 'bg-sage-100 text-sage-600',
    link: '/factcheck',
    btnColor: 'bg-sage-500 hover:bg-sage-600',
  },
  {
    title: '케어',
    subtitle: '치료 다이어리',
    description: '항암 일지, 부작용 체크, 약 복용 알림으로 체계적으로 관리해요.',
    icon: ClipboardList,
    color: 'bg-lavender-100 text-lavender-500',
    link: '/care',
    btnColor: 'bg-lavender-500 hover:bg-purple-600',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          유방암 환우를 위한 따뜻한 공간
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4 leading-tight">
          당신은 혼자가 아닙니다
        </h1>
        <p className="text-lg text-pink-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          PinkLog는 유방암 환우분들이 서로의 경험을 나누고,
          <br className="hidden md:block" />
          검증된 정보를 얻고, 치료를 체계적으로 관리할 수 있는 플랫폼입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/community"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors no-underline"
          >
            <Users className="w-5 h-5" />
            커뮤니티 참여하기
          </Link>
          <Link
            to="/care"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-8 py-3 rounded-full font-medium border border-pink-200 hover:bg-pink-50 transition-colors no-underline"
          >
            <ClipboardList className="w-5 h-5" />
            치료 기록 시작하기
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        {features.map(({ title, subtitle, description, icon: Icon, color, link, btnColor }) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-100"
          >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
              {subtitle}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">{description}</p>
            <Link
              to={link}
              className={`inline-flex items-center gap-2 ${btnColor} text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors no-underline`}
            >
              바로가기
            </Link>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="bg-white rounded-2xl p-8 border border-pink-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '2,847', label: '함께하는 환우', icon: Users },
            { num: '156', label: '활성 소모임', icon: MessageCircle },
            { num: '423', label: '검증된 정보', icon: ShieldCheck },
            { num: '12,590', label: '기록된 케어 일지', icon: Heart },
          ].map(({ num, label, icon: Icon }) => (
            <div key={label}>
              <Icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-pink-800">{num}</div>
              <div className="text-sm text-pink-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 fill-white/30" />
        <blockquote className="text-lg md:text-xl font-medium mb-4 leading-relaxed">
          "같은 기수 분들과 이야기를 나누면서 치료 과정이 덜 외롭게 느껴졌어요.
          <br className="hidden md:block" />
          정보방 덕분에 잘못된 민간요법에 현혹되지 않게 되었습니다."
        </blockquote>
        <p className="text-pink-200 text-sm">- 3기 치료 중 김OO님</p>
      </section>
    </div>
  )
}

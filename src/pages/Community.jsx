import { useState } from 'react'
import { Link } from 'react-router-dom'

const CIRCLES = [
  { icon: 'medical_services', label: '1기 & 2기 모임', active: true },
  { icon: 'cake', label: '청년 환우 (40세 미만)' },
  { icon: 'favorite', label: '4기 환우 모임' },
  { icon: 'self_improvement', label: '치료 후 건강관리' },
  { icon: 'diversity_1', label: '보호자의 공간' },
]

const POSTS = [
  {
    id: 1,
    author: '희망나무',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoTDRqJ4CDbcmbR_lEkD4-YhtbhVbIeJpUF-PuWMhuGFNzED8u8xvzQTRPsdISV8J5Gn1DKC97XFMXOfI1ap-ERXU-UEvpWMw8ImyZNa4wtdF6fqNFy8viDkOUb78xxr0-jDKndq7CWLYdTn5mXQQ5C962DzW-Un3x0nOWOLCMKPQOHzJ_zjefMayOJP2E5-VlVA61gq-08BCiWe7Ik6wWqwWCRLxoXx5TgbRXifeI1M36JCrCk9Rk-WhD3QXDBGgimPb6qqXGKpI',
    time: '2시간 전',
    group: '2기 모임',
    content: '오늘 마지막 항암을 끝냈어요! 6개월 동안 항상 응원해주신 모든 분들께 감사드립니다. 함께여서 더 강해질 수 있었어요! 🎀',
    likes: 124,
    comments: 42,
  },
]

const PRODUCTS = [
  {
    title: '프리미엄 실크 스카프',
    desc: '초부드러운 수분흡수 실크',
    price: '42,000원',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfWBPrAY87C5zy2O4li7qOa0n3Rw--TjkYHEtWSSblu9Bt7LzlOisj8VXFHblx-Mu6z8snGjXOC5lPE1ke-Jbbw2LtOPT_DOaLZOBC5nkR_e_N22CHh9FEUqSo0jm7c15wHAW4uQ57iAOUwPKzMyPWsE2i0OD4CWaf0JKZcDUfTS1ZH3RPdOiJBugeJjo32YuZe9ZP2m4DxhOqsk1IL_kNVLueefP21oTcOpf5g9QkhhzlT2ZN3MCJU3XcxTTu0CqwymmXMSsu7Qg',
  },
  {
    title: '뱀부 수면 비니',
    desc: '민감한 두피를 위한 통기성 소재',
    price: '24,900원',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8n3j1-nt7Kz7M1TZ3Z07KpRyPZqaRPIqxChjWaIHg1_DUfaBD21zQn3knGpsyp5Y4jxDmvRWG-an4tZL62A3v4NBRLUSzykvbS9LMx7f41z7RjWU_s9mH-uuORWzDAsy37bZRrShiLf96KrgyEJ1W-jvsMb-cVX0eB7Rk1-32unGckdj0gtqKhe11-AQoODUyrwTF-4lwvRfXHl8r8j9WwjbDTpcOFoQGAMqNk9Snbal1QKz8GieLsCY9C-wflsMhMHWVYqp2_YA',
  },
]

export default function Community() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 to-orange-50 p-8 md:p-12 lg:p-16 border border-pink-100">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/10 text-accent-pink text-xs font-bold uppercase tracking-wider">
              커뮤니티
            </div>
            <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] text-slate-900">
              당신은 <span className="text-accent">혼자가</span> 아닙니다.
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              서바이버와 치료 중인 분들의 글로벌 자매 커뮤니티에 참여하세요. 여정의 모든 단계에서 필요한 힘, 자원, 동료를 찾을 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-accent/20 transition-all flex items-center gap-2">
                커뮤니티 가입 <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="bg-white border border-slate-200 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all">
                더 알아보기
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-pink/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <img
                alt="함께하는 여성들"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hoYbrY9pqImMPJyeNXUDleDXQsqLVcQwIezFozaQd6S06vyThaIpyIkEyQZd7U_8qf5FbBeeFThZbhzE1GhUPDd3hT06sE4TjOGLk7yek3pgl47jC5e761BCx0DxUMM-Rf0I7iVHNFtzifF3wBaNxP_lwZ8V2ibmGKn_mm87KBQQhrUyGYH-5x5INpxf1Y_6fCHRfqstJawsbEGNuRgnkXJidbL14Lr2Ltd13LT7Gw5Q4R0Ky-e44X6AJZMgJvCMuHFKDngqkyk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Circles */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-pink">groups</span> 활성 소모임
            </h3>
            <div className="space-y-2">
              {CIRCLES.map(c => (
                <a
                  key={c.label}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    c.active
                      ? 'bg-accent/5 text-accent border border-accent/10'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{c.icon}</span>
                  <span className="text-sm font-semibold">{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Donate */}
          <div className="bg-accent-pink p-6 rounded-2xl text-white shadow-xl shadow-accent-pink/20">
            <span className="material-symbols-outlined text-3xl mb-4">volunteer_activism</span>
            <h3 className="text-xl font-bold mb-2">함께 응원해요</h3>
            <p className="text-sm text-pink-50 mb-6 leading-relaxed">
              여러분의 후원으로 케어 패키지와 무료 가발 상담을 제공합니다.
            </p>
            <button className="w-full bg-white text-accent-pink font-bold py-3 rounded-xl hover:bg-pink-50 transition-colors">
              후원하기
            </button>
          </div>
        </aside>

        {/* Center: Products + Posts */}
        <div className="lg:col-span-6 space-y-8">
          {/* Product Recommendations */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">가발 & 모자 추천</h2>
              <Link to="/shop" className="text-accent text-sm font-bold flex items-center gap-1 hover:underline no-underline">
                스토어 방문 <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map(p => (
                <div key={p.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="aspect-square w-full bg-center bg-cover"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900">{p.title}</h4>
                    <p className="text-slate-500 text-xs mb-3">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold">{p.price}</span>
                      <button className="bg-slate-100 p-2 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined text-sm">shopping_bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Posts */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">커뮤니티 인기글</h2>
            {POSTS.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-start gap-4">
                  <img className="w-10 h-10 rounded-full object-cover" alt="" src={post.avatar} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{post.author}</span>
                      <span className="text-xs text-slate-400">&bull; {post.time} &bull; {post.group}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">{post.content}</p>
                    <div className="flex items-center gap-6 text-slate-400">
                      <button className="flex items-center gap-1.5 hover:text-accent-pink transition-colors">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                        <span className="text-xs font-bold">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                        <span className="material-symbols-outlined text-xl">chat_bubble</span>
                        <span className="text-xs font-bold">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                        <span className="material-symbols-outlined text-xl">share</span>
                        <span className="text-xs font-bold">공유</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 space-y-8">
          {/* Webinars */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">event_upcoming</span> 다가오는 웨비나
            </h3>
            <div className="space-y-6">
              {[
                { date: '3/20 &bull; 오후 6시', title: '항암 중 영양 관리', speaker: '김수진 전문의', highlight: true },
                { date: '3/25 &bull; 오후 4시', title: '회복을 위한 요가', speaker: '마야 젠 강사' },
                { date: '4/2 &bull; 오후 7시', title: '관계 네비게이팅', speaker: '패널 토론 & Q&A' },
              ].map((w, i) => (
                <div key={i} className="group cursor-pointer">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                      w.highlight ? 'text-accent-pink' : 'text-slate-400'
                    }`}
                    dangerouslySetInnerHTML={{ __html: w.date }}
                  />
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-accent transition-colors">{w.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{w.speaker}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-accent text-sm font-bold border-t border-slate-100 pt-4 hover:opacity-80">
              전체 일정 보기
            </button>
          </div>

          {/* Weekly Fact Check */}
          <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-accent">fact_check</span>
              <h3 className="text-lg font-bold">주간 팩트체크</h3>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-2">오해 vs 사실: 콩과 에스트로겐</p>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              최근 연구에 따르면 적절한 콩 섭취는 재발 위험을 높이지 않습니다. 전문가 분석을 확인하세요...
            </p>
            <Link
              to="/factcheck"
              className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all no-underline"
            >
              전체 기사 읽기
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}

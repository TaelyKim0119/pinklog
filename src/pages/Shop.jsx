import { useState } from 'react'

const COLLECTIONS = [
  { id: 'fav', label: '환우 인기 상품', icon: 'clinical_notes', active: true },
  { id: 'wigs', label: '내추럴 가발', icon: 'face' },
  { id: 'skincare', label: '항암 스킨케어', icon: 'spa' },
  { id: 'bamboo', label: '뱀부 웨어', icon: 'checkroom' },
]

const PRODUCTS = [
  {
    title: '울트라 소프트 뱀부 수면캡',
    desc: '민감한 두피를 위한 통기성, 무봉제 디자인',
    price: '24,000원',
    rating: 5,
    reviews: 124,
    badges: ['인기 상품', '환우 추천'],
    review: '"항암 밤에 생명의 은인이었어요. 너무 부드러워요!" - 사라, 2기',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMqsbeOrQeR8R-eJJ8PRRmaBNCW7zzTu7DBockNHc_f9KWj7uSkXgYwd3i3GSMq4j-Juif2WSQbPTBuBijam4j5kR4oFqI8R4FqXACM_0PG-TKE-YREOCnIDJaCCZ9kPjvu4fwGL9ap8lX2sIW4d2tok_hA1e5iPjtj9nn_9R4yyEsfFptQTcWIrqs8IYj7Z1QJbXwxLxoweloSK3mvmTlzrXh9Q1JEMyhSjRv_e8KQr214dckDRViN34RcMEHnUV6moHeYkjT6Cs',
  },
  {
    title: "'인피니티' 레이스 프론트 가발",
    desc: '자연스러운 룩의 프리미엄 합성 가발',
    price: '189,000원',
    rating: 4.5,
    reviews: 89,
    badges: ['신상품'],
    review: '"오늘 회사에서 아무도 몰랐어요!" - 엘레나',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR-jJjT_k8w69GpxdqZtYbWu20wFLmAOVSaLPeVg5c8iD8mpGeQ_2cDnAM5y6MlBO03TWTScbE8km9GZmfe9v0izzn-vM8zgwCd0-eNt5c3xjCEBgJI98CPJzwuZsOV5CbgCOMRFFOCyJospFMCIQelBXXBhazCD3hY_kiI2VNp9VmIDJGpUH7INgxXuDIluUi2oFviUnajZ2SUaEMdTEwx2ee5BQu--Gg6dx6AiBPOswgNZLMp8JQARYlWkCWPccJKkx-Q36MiVI',
  },
  {
    title: '카밍 수딩 페이셜 오일',
    desc: '항암 건조 피부를 위한 무향, 집중 보습',
    price: '32,000원',
    rating: 5,
    reviews: 240,
    badges: ['의사 추천'],
    review: '"가려움이 멈춘 유일한 제품이에요." - 마리아',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FblWm-2P107dnLvOJQdGF4_SrNMJsc_ZpGjB70LEwS4t_PCUcmQdhZx4ipDwpxUy-mK9V7YgU1Ks5qRZnTBFCmXBqmS_R3owg8gCfmXuQ6By6kzWIVQD3vgnsCA847PPdT7nACRNw-PdIQOdqqhHa4X6FKIfMVPwJ_WAuzrk4tca0VGsvMYtsa-JXdyF1GhPj_iI93dsbCtKQPL194_MccqGySJWyo5o426vA7DfSQ4Dy2v8yEdBL53QYl7PjhybJ9VVVcXIQK8',
  },
  {
    title: '이지 액세스 리커버리 세트',
    desc: '수술 후 앞여밈 라운지웨어',
    price: '75,000원',
    rating: 5,
    reviews: 56,
    badges: [],
    review: '"수술 후 필수품이에요." - 커뮤니티 투표',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBChewDauVTcBHf1lCSyTxH2yysJW_inUUlTFtiivNV_6Mg6kVArjowXQsPfSV0m2JQV2iw4hsBfksZb92OoJcmBnkpdXF_W5CjyP92sbeahaoPHw7J_BqBsNGRHPHRXYzFHhrEImTUCAysR4xzlLHf7ap-pZAnnp_SQ8t-EW8wsT91Tvb0KcKOqFaxcuCDkUDqWTEEAG9RNbpW_5eR3_Hf-mnRpYliGo599RqpN1Ef4tmnD0SOkHnCTf6JU5eisgKsjQiCytwZCrg',
  },
]

export default function Shop() {
  const [activeCollection, setActiveCollection] = useState('fav')

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 bg-brand-rose p-8 rounded-3xl border border-primary/10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-slate-500 text-sm">PinkLog</span>
            <span className="text-slate-400 text-sm">/</span>
            <span className="text-accent font-semibold text-sm">케어 스토어</span>
          </div>
          <h1 className="text-slate-900 text-4xl md:text-5xl font-black mb-4 leading-tight">
            편안한 회복을 응원합니다.
          </h1>
          <p className="text-slate-600 text-lg">
            환우 커뮤니티가 직접 추천하고 검증한 필수 아이템 컬렉션입니다.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex -space-x-4">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCJZYMTL4rHTSg4UmshHfZ3Tq7jSDbFfcS9ETjeGMbUsWcZeHRyIzMQdFM7ujhApyLD0YlDlx5a-hwEx0l6u_FMKjWUgy3wAxDpr4KwmfzX1nDMbYzcy4DY0B5Wyi5n8F00zEOH_0y-QjG0IxEC2xgh2VE0R5GJI7D_uTgFmB4QzY5A7upxzz0-AaRyCoRtFyWRMPL-w8JaZpxjSIQMk5u-fRofbi1l17osEbE-xZYN9v_Gzr_LGz1d4Isn8QfxhT6kNpP8hlYvGKk',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA86rTyBkknN9nF0GbQ-2Hmz3Fye2ohhckFU6rkxHqIvhbtoW6imeCFsvJyLzywTbrZkVhwmrbiyHS34irE-5Yl5wOx6P_ZUfrJfZaVQBCH3c5J2aOUsm0m0ke7u1lnThtqpXtgABSStCNazg935PBhlHKaAi0fSA7MJMT-2HxtU6dE6mnof-AA1IU3Jaz4Yh1Wv3gX_QG5Wbe85tjjx_jfr2z4cYjyl8K3H8WTyCZe0Xitywroz1v3nDGoPGNDQoa2B_3pnwzXvKU',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDnT1qwE4JbmV8K9Im5ZMX_ksQ3E6OVnxWsKCt52KlP1w9wXlxjAKAMCoxZSyjUfYRRY2MY_fLVdz2CulytM2ddnC0Rndn-M2rq8CC08wCA82dQNlz13NLGYFVDjjZoxzDF_J5swRq3vcMJQeUvCvSBenfncbo53Lv8qCQ0R2nkg-CPY1FTkMSCGM3J5IUsq3_dXniiXeI3XxhYVjw2WzsjIfD0WyIlLBq-9SA_17MUe-PLNs50QUa3Iwv2YhyVsk5lm8FQfUFEgTk',
            ].map((url, i) => (
              <div
                key={i}
                className="h-12 w-12 rounded-full border-2 border-white bg-cover bg-center"
                style={{ backgroundImage: `url('${url}')` }}
              />
            ))}
            <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold">
              +12k
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">12,000+ 회원과 함께</p>
        </div>
      </div>

      {/* Collections */}
      <div>
        <h3 className="text-xl font-bold mb-4">컬렉션별 쇼핑</h3>
        <div className="flex gap-3 overflow-x-auto pb-4">
          {COLLECTIONS.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCollection(c.id)}
              className={`flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-all ${
                activeCollection === c.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-white border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{c.icon}</span>
              <span className="text-sm">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(p => (
          <div key={p.title} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="relative aspect-[4/5] bg-slate-200 overflow-hidden">
              {p.badges.length > 0 && (
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {p.badges.map(b => (
                    <span key={b} className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <div className="absolute top-3 right-3 z-10">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={p.title}
                src={p.image}
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      {i < Math.floor(p.rating) ? 'star' : p.rating % 1 ? 'star_half' : 'star_border'}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-slate-500">({p.reviews})</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{p.title}</h4>
              <p className="text-xs text-slate-500 mb-4">{p.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold">{p.price}</span>
                <button className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors p-2 rounded-lg">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
            </div>
            <div className="px-5 py-3 border-t border-slate-50 bg-slate-50/50">
              <p className="text-[11px] text-slate-600 italic">{p.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vetted Section */}
      <section className="p-10 bg-white rounded-[2rem] border border-brand-rose-deep/20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <span className="text-brand-rose-deep font-bold tracking-widest text-sm uppercase mb-4 block">환우 검증</span>
          <h2 className="text-3xl font-black mb-6 leading-tight">직접 겪어본 분들이 검증했습니다.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            얼마나 막막한지 잘 압니다. 그래서 우리 커뮤니티가 실제 회복 경험을 바탕으로 모든 제품을 태그합니다. 광고가 아닌, 환우가 인정한 필수품만 모았습니다.
          </p>
          <div className="flex items-start gap-4 p-4 bg-brand-rose rounded-2xl">
            <span className="material-symbols-outlined text-brand-rose-deep">chat_bubble</span>
            <div>
              <p className="font-bold text-sm">환우 리뷰</p>
              <p className="text-sm text-slate-500 mt-1">"뱀부 모자가 야간 발한기에 훨씬 나아요. 실크 안감이 필수!" - 지혜님</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-brand-rose-deep/20 to-accent/20 flex items-center justify-center p-8">
            <img
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
              alt="함께하는 여성들"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhcTygEgYTKbjgp2e9-L7halWpB4JeFANznfpVV93Vm6b50h9pocSJtEI8ReoJSX7dDqFhw6IyFRTAx41yKA90rCOUiqoLayTaWwLH6QSJE5aDulht_lbMzPEshZzeX4Fb2L6bptl6yGy2fk8eMnlHNl81S8JBOKz4LlfHUQRTXxH1KrQXAp_STs3SxWMk0PRsRRFUUX6iAA_2rMinkN1nrjyo0oOn4U89y6F_DaU_RMVfOX4VYUB8ftoalGo5-BKXLugD4rqvJRk"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-xs font-bold">100% 검증 완료</p>
              <p className="text-[10px] text-slate-500">환우 인증</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'

const CATEGORIES = [
  { id: 'all', label: '전체', icon: 'grid_view' },
  { id: 'food', label: '건강식품', icon: 'nutrition' },
  { id: 'swelling', label: '부종 관리', icon: 'water_drop' },
  { id: 'skincare', label: '스킨/헤어케어', icon: 'spa' },
  { id: 'recovery', label: '회복 용품', icon: 'healing' },
  { id: 'wigs', label: '가발/모자', icon: 'face' },
]

const PRODUCTS = [
  // 건강식품
  {
    id: 1, category: 'food',
    title: '유기농 항산화 스무디 세트 (7일분)',
    desc: '블루베리, 브로콜리, 케일 베이스. 항암 중 간편 영양 보충',
    price: '35,000',
    originalPrice: '42,000',
    rating: 4.8, reviews: 312,
    badges: ['베스트셀러'],
    review: '"항암 중 입맛 없을 때 이것만 먹었어요" - 2기 김OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FblWm-2P107dnLvOJQdGF4_SrNMJsc_ZpGjB70LEwS4t_PCUcmQdhZx4ipDwpxUy-mK9V7YgU1Ks5qRZnTBFCmXBqmS_R3owg8gCfmXuQ6By6kzWIVQD3vgnsCA847PPdT7nACRNw-PdIQOdqqhHa4X6FKIfMVPwJ_WAuzrk4tca0VGsvMYtsa-JXdyF1GhPj_iI93dsbCtKQPL194_MccqGySJWyo5o426vA7DfSQ4Dy2v8yEdBL53QYl7PjhybJ9VVVcXIQK8',
  },
  {
    id: 2, category: 'food',
    title: '환우 맞춤 종합영양제 (30일분)',
    desc: '종양전문의 감수. 비타민D, 오메가3, 프로바이오틱스 포함',
    price: '48,000',
    rating: 4.9, reviews: 567,
    badges: ['의사 추천', '환우 인기'],
    review: '"주치의도 괜찮다고 하셨어요. 컨디션이 좋아졌어요" - 3기 박OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBChewDauVTcBHf1lCSyTxH2yysJW_inUUlTFtiivNV_6Mg6kVArjowXQsPfSV0m2JQV2iw4hsBfksZb92OoJcmBnkpdXF_W5CjyP92sbeahaoPHw7J_BqBsNGRHPHRXYzFHhrEImTUCAysR4xzlLHf7ap-pZAnnp_SQ8t-EW8wsT91Tvb0KcKOqFaxcuCDkUDqWTEEAG9RNbpW_5eR3_Hf-mnRpYliGo599RqpN1Ef4tmnD0SOkHnCTf6JU5eisgKsjQiCytwZCrg',
  },
  {
    id: 3, category: 'food',
    title: '진저 허브티 세트 (구토 완화)',
    desc: '생강, 페퍼민트, 캐모마일 블렌딩. 구토·메스꺼움 완화',
    price: '18,000',
    rating: 4.7, reviews: 234,
    badges: [],
    review: '"항암 후 이것만 마시면 속이 편해져요" - 1기 이OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSvuOcFsqFdhyyKsaIQLlwuIQyPm0gATYYbiI9HHiAxqNjTd0uNo_0qsaviCiC4iUyy2ptQU3eTDyoCIxjdP_IwdiQo56ha-_paDhowsjM02s6jXD2_ztBh9-8o5GJ6vr12xboDBxGSGw9FR3e2fNM_XjgPogj-w52xpQf4wP0fgCUFO_gTeARL8lsqWhOkKvUawRV3MtMm2vLoBieB04otkcCQ1PWtbuyi0V5ESZX5_pF5N3JhOh4D6lg2oOdLdfFGOgA8QhAIvg',
  },
  // 부종 관리
  {
    id: 4, category: 'swelling',
    title: '메디컬 압박 슬리브 (등급별)',
    desc: '의료용 등급 압박. 림프부종 예방 및 관리. 1~3등급 선택',
    price: '45,000',
    rating: 4.9, reviews: 421,
    badges: ['의사 추천', '베스트셀러'],
    review: '"붓기가 확실히 줄었어요. 필수템!" - 수술 후 최OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMqsbeOrQeR8R-eJJ8PRRmaBNCW7zzTu7DBockNHc_f9KWj7uSkXgYwd3i3GSMq4j-Juif2WSQbPTBuBijam4j5kR4oFqI8R4FqXACM_0PG-TKE-YREOCnIDJaCCZ9kPjvu4fwGL9ap8lX2sIW4d2tok_hA1e5iPjtj9nn_9R4yyEsfFptQTcWIrqs8IYj7Z1QJbXwxLxoweloSK3mvmTlzrXh9Q1JEMyhSjRv_e8KQr214dckDRViN34RcMEHnUV6moHeYkjT6Cs',
  },
  {
    id: 5, category: 'swelling',
    title: '림프 마사지 건 (진동 마사지기)',
    desc: '6단계 진동. 림프 배액 촉진. 가정용 물리치료 기기',
    price: '89,000',
    originalPrice: '120,000',
    rating: 4.6, reviews: 189,
    badges: ['할인 중'],
    review: '"물리치료실 안 가도 집에서 관리돼요" - 림프부종 환우',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQhVcrDIQdQ5HLZOmlBl1EoaynAwwNcZ_zloJ5lFStNcm3PneiLmv0rS3ECA3dmWx5bimm89b32tWU13DGeIERM19YoJtDw6JRR98QSoC7XhkFDf6X0TpVNSxTXu1vQOI7FpKdXJyxPxcfVtZOrngNS3PIT-MeybId1D9RO-etfFglY4gPhFF9CzQtvN92Fhp5Ayf065Eo9IHtAoqFef5tU4tZqWCPlYQgK5b59Ti12pC1O3H4UfQVu8sXAQIhufRqB3PMDJTfB8',
  },
  {
    id: 6, category: 'swelling',
    title: '에어 압박 마사지기 (팔/다리)',
    desc: '공기압 순환. 부종 완화 전문 기기. 6개 에어백',
    price: '159,000',
    rating: 4.8, reviews: 156,
    badges: ['프리미엄'],
    review: '"병원급 퀄리티예요. 매일 써요" - 림프부종 3년차',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANdcS0I1r0LjVd6KnpfRMK6yXtjl08o_qKAyskEaRfvWewj7v_ES9Fq0n1tkrK5p1MWps318r407BUcKOHmd6_u_7Tl8ug5B5H3mQATznJqBuSeIGWOA3CZwqoPM114xIs0DJtHhSjLwqWuzJSgbrrOmtrSo-ztpByByp78o_F5NVulq6c_jyrUtb6jpLz73jDRdaISt-DngX2ULsqk977J42xqo05eMnHc9QelvdOrxYjEZjydyZDD2o2RjFJizPHUY82AOi3Bx8',
  },
  // 스킨/헤어케어
  {
    id: 7, category: 'skincare',
    title: '카밍 수딩 페이셜 오일',
    desc: '항암 건조 피부를 위한 무향, 집중 보습. 피부과 테스트 완료',
    price: '32,000',
    rating: 5, reviews: 240,
    badges: ['의사 추천'],
    review: '"가려움이 멈춘 유일한 제품이에요" - 마리아',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FblWm-2P107dnLvOJQdGF4_SrNMJsc_ZpGjB70LEwS4t_PCUcmQdhZx4ipDwpxUy-mK9V7YgU1Ks5qRZnTBFCmXBqmS_R3owg8gCfmXuQ6By6kzWIVQD3vgnsCA847PPdT7nACRNw-PdIQOdqqhHa4X6FKIfMVPwJ_WAuzrk4tca0VGsvMYtsa-JXdyF1GhPj_iI93dsbCtKQPL194_MccqGySJWyo5o426vA7DfSQ4Dy2v8yEdBL53QYl7PjhybJ9VVVcXIQK8',
  },
  {
    id: 8, category: 'skincare',
    title: '두피 진정 에센스 (항암 탈모 케어)',
    desc: '판테놀, 알로에 베이스. 민감 두피 보습 및 진정',
    price: '28,000',
    rating: 4.7, reviews: 198,
    badges: [],
    review: '"두피가 따갑지 않아졌어요" - 항암 중 정OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQHVUemxXgCw9uiJub6S6OgNe4za38-_1WXrhpTgqJnledpWbm2-S5Pl6yyF55YNtfpvawMYAV2QLEhzKpmd77HQ70u5sNVV2KKUy3t_DAgBiu_hdXdnkUlL8DrYKvL84Ze65NM4b6wdxNSAo-evWm5hfXQ2jvZ29b1YTH2SZf6A_IIFxW7PUz_L5Ntn8e09VGRnLFWndmPY-t1zzuneTTtm1X2ib6NcMUZi_5BME0_M8b7CNIDVIH4cXzoO_-YfUhlYTij6aVMWw',
  },
  // 회복 용품
  {
    id: 9, category: 'recovery',
    title: '수술 후 앞여밈 리커버리 세트',
    desc: '수술 부위 자극 없는 앞 지퍼. 면100%, 4계절 착용',
    price: '75,000',
    rating: 5, reviews: 56,
    badges: ['신상품'],
    review: '"수술 후 팔 못 올릴 때 필수예요" - 수술 후 강OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBChewDauVTcBHf1lCSyTxH2yysJW_inUUlTFtiivNV_6Mg6kVArjowXQsPfSV0m2JQV2iw4hsBfksZb92OoJcmBnkpdXF_W5CjyP92sbeahaoPHw7J_BqBsNGRHPHRXYzFHhrEImTUCAysR4xzlLHf7ap-pZAnnp_SQ8t-EW8wsT91Tvb0KcKOqFaxcuCDkUDqWTEEAG9RNbpW_5eR3_Hf-mnRpYliGo599RqpN1Ef4tmnD0SOkHnCTf6JU5eisgKsjQiCytwZCrg',
  },
  {
    id: 10, category: 'recovery',
    title: '구토 억제 아로마밴드 (3개입)',
    desc: '페퍼민트 아로마요법. 손목 지압 + 아로마 이중 효과',
    price: '15,000',
    rating: 4.5, reviews: 445,
    badges: ['베스트셀러'],
    review: '"약 없이 메스꺼움이 줄어요" - 항암 중 윤OO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSvuOcFsqFdhyyKsaIQLlwuIQyPm0gATYYbiI9HHiAxqNjTd0uNo_0qsaviCiC4iUyy2ptQU3eTDyoCIxjdP_IwdiQo56ha-_paDhowsjM02s6jXD2_ztBh9-8o5GJ6vr12xboDBxGSGw9FR3e2fNM_XjgPogj-w52xpQf4wP0fgCUFO_gTeARL8lsqWhOkKvUawRV3MtMm2vLoBieB04otkcCQ1PWtbuyi0V5ESZX5_pF5N3JhOh4D6lg2oOdLdfFGOgA8QhAIvg',
  },
  // 가발/모자
  {
    id: 11, category: 'wigs',
    title: "'인피니티' 레이스 프론트 가발",
    desc: '프리미엄 합성. 자연스러운 헤어라인. 3가지 컬러',
    price: '189,000',
    rating: 4.5, reviews: 89,
    badges: ['프리미엄'],
    review: '"회사에서 아무도 몰랐어요!" - 항암 중 엘레나',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR-jJjT_k8w69GpxdqZtYbWu20wFLmAOVSaLPeVg5c8iD8mpGeQ_2cDnAM5y6MlBO03TWTScbE8km9GZmfe9v0izzn-vM8zgwCd0-eNt5c3xjCEBgJI98CPJzwuZsOV5CbgCOMRFFOCyJospFMCIQelBXXBhazCD3hY_kiI2VNp9VmIDJGpUH7INgxXuDIluUi2oFviUnajZ2SUaEMdTEwx2ee5BQu--Gg6dx6AiBPOswgNZLMp8JQARYlWkCWPccJKkx-Q36MiVI',
  },
  {
    id: 12, category: 'wigs',
    title: '울트라 소프트 뱀부 수면캡',
    desc: '대나무 섬유. 민감 두피 보호. 통기성 우수',
    price: '24,000',
    rating: 5, reviews: 124,
    badges: ['환우 인기'],
    review: '"항암 밤에 생명의 은인이에요" - 2기 사라',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMqsbeOrQeR8R-eJJ8PRRmaBNCW7zzTu7DBockNHc_f9KWj7uSkXgYwd3i3GSMq4j-Juif2WSQbPTBuBijam4j5kR4oFqI8R4FqXACM_0PG-TKE-YREOCnIDJaCCZ9kPjvu4fwGL9ap8lX2sIW4d2tok_hA1e5iPjtj9nn_9R4yyEsfFptQTcWIrqs8IYj7Z1QJbXwxLxoweloSK3mvmTlzrXh9Q1JEMyhSjRv_e8KQr214dckDRViN34RcMEHnUV6moHeYkjT6Cs',
  },
]

const BADGE_COLORS = {
  '베스트셀러': 'bg-red-500',
  '의사 추천': 'bg-blue-600',
  '환우 인기': 'bg-primary',
  '할인 중': 'bg-green-600',
  '프리미엄': 'bg-slate-800',
  '신상품': 'bg-accent',
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-8 md:p-12 rounded-3xl border border-primary/10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">verified</span>
            환우 검증 상품
          </div>
          <h1 className="text-slate-900 text-4xl md:text-5xl font-black mb-4 leading-tight">
            PinkLog 케어 스토어
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            건강식품, 부종 관리 기구, 스킨케어까지 — 환우 커뮤니티가 직접 사용하고 추천한 상품만 모았습니다.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition-all ${
              activeCategory === c.id
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-white border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{c.icon}</span>
            <span className="text-sm">{c.label}</span>
          </button>
        ))}
      </div>

      {/* Product Count */}
      <p className="text-sm text-slate-500">{filtered.length}개 상품</p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
              {p.badges.length > 0 && (
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  {p.badges.map(b => (
                    <span key={b} className={`${BADGE_COLORS[b] || 'bg-accent'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={p.title}
                src={p.image}
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      {i < Math.floor(p.rating) ? 'star' : p.rating % 1 >= 0.5 ? 'star_half' : 'star_border'}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-slate-500">({p.reviews})</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-1 leading-snug">{p.title}</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-slate-900">₩{p.price}</span>
                  {p.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">₩{p.originalPrice}</span>
                  )}
                </div>
                <button className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors p-2.5 rounded-xl">
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
    </div>
  )
}

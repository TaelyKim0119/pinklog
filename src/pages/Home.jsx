import { Link } from 'react-router-dom'

const GROUPS = [
  {
    title: '초기 진단 모임',
    desc: '진단, 초기 치료 단계, 새로운 정보 관리에 집중하는 모임입니다.',
    badge: '신규 환영',
    members: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6igUk-3f2lcxVpby6OAi_y7r6sguxUg1tfIEQ1WNMTEu1_sbwlBKUfWbYiGsZSYK33VUyhJL_TbfdXiCeczn_cqyOpFo5l0Ng26I9xtZHDlxEfjcKCG9X6wQ9RIb7HHSGQ6gBnqzK1s6JNW_yUERJTbuW9MUOC4jjR57nIbuVtArb9ukV4X3hT4Yxc8-nQfrZ9yVc8cC89rY5-ZOnrgu3VTjvYnlvrN97TEd4ySTZdW5Rt4P0W1E_tu_FNkP3lwabicBtaKh3muQ',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB32Zug8Ji9WVko0BGw0mO85_sADSuvgekgLLG5yaCU8CFWRdQTfem4hLwjlTl7mSeqEkXJlFzfSSSmwRBovUED43jrVqjpdNjbcyYL7Xwy5A4u7CKhWU7bY_0UZHH_IJnSd6clQVf7QRR1ZVYRWk5H-jUsjJh3EwGoBr8N8OYs9rTO9eYfl-G8HoZh-k4C76K_25uJfwZ-wt-LHEGj2nlhwfAoievGrpqYlps0bxxJxwo_GefwETc5rRBd6ZtRGgSREBscdNo6Kwg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAul-hSqndQMsAM_71fbyiAeRB5Dm4DtNmyexZaGEvzi_PkOBCb7awGQPRrvEOOh6qvPxcXXJnPvnNjkjD7ys4HqRKrQLYgzhvFuO1sh3f60H22MLgqYN5qnfvMzoAkWhNLF5Kj2kqZVuBCknv3hMxntRqzxTTa0luU4-yyx082L550zm9ToL19qVfn7htgiuvPxMD95EgCi18lrd3D5S_yy23R-A0kqp6pyCY1eHfi2iuyyXAZzAmutxBS5m9GJAElsPrOKj61qW8',
    ],
  },
  {
    title: '치료 완료 네트워크',
    desc: '치료 후 장기적 건강관리와 생존자 마일스톤을 축하하는 모임입니다.',
    members: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzpOggDszCHv9D6gPYDPfqeOSy4KBihKiL5I-vQ4DN_vX-29UXvfOUIPDW5K_Sur0t0kBxdTSttTSzpPLI_iozhPxLBbbZ-az8tBSK4AldEbtcskiMgHiiJ6PsniQcikbWxvx_QRZPRCFYnPyBR3EMz77M0FnEEI9xDU5aP8ybVQp4dlQ_s9LjHn9lJYsrKN-1TgIVzoU3-5bVWEJqc_aXEQZ1ap-6nGXQZBfyBNfZgcqmIMvyZFUUW08fl8DGWsr9ELxttCzTCoA',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAelRteh5zh9xytvmFs5jS9K3dOEovJEEp0uIWc56eZX-PTO-UznCSX-6_-lIRb51Lh-MAs8GCziPOe3T6yWnYar5PBcroGEmXLs8wsKYwl-oJXNMU_li5LyQeC0sB-u1nBI7Sglx9zeaEG7O6BFKhm2WXQ3oxTkRPGMVlNAOcEpbW0nWlRVQ_2xSC2GMfIyElsridDzLema1iWvdgtbL02W4n6ahBFOEafzYQe5TlEIywQ3mXsSlypPeMBCAIiwtiH1D19AL9lApc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4KkaOhhaB-KyQw-R8q4lqmuckSZIrIWK0_-m2oz3ekS11hYs5YSrljbblZVafRtdcj7NygJE82tZlw19abwRseubOaw6UNpQFSyzQL0zNZF9K-cL2FRVKX5v2dS5bdL79eoqvOK_hHQBmZ4-sW3y-lF4uMn4TESfcVVG_9pK5dE-9SVAxvpug1UymSGPLLrDifQ6KO-jHHQ_021YVNd5YPo_mYzJ6jHPoSzLeeJpIvBdfbBsqx1NYVZBFGBVdqrskDhcPUP4tdew',
    ],
  },
  {
    title: '지역 소모임',
    desc: '같은 지역의 환우분들과 오프라인 모임을 통해 교류합니다.',
    members: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB1y_ilY0t1Vs9InKqHq0GFd_7bxQu5w8htxqk4ckm-1EojdnWCJ9-hg1qg5ohdL3DmHSmnwKoY-Q15S2dM2gUGWnECURPeE7NClok1EnFkSVDD5vgpqTz2zr-keg4lHf2RFXLqkpSllM7HED3D1_9JeRsr9PA4_8QL8HvknbbZ1lLmVzJ4iljBPw8TYmapvirYmbvGj42InAiilfHED-tzU5ZyYWjyoigJH0hEWhpWQpSOiwZYhCpSZL3hlxUvcIifsn1WQh-1E4',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6kB-19NbOIwMDsOfMsUq4CqWe-e6YZ1JxNoXR-mrIyhd9Isja_TnRLRUxWq-5mbbX3TItU8LqP9lj5glzflm_9QnG5AEIC9YG5OCZ3ejQafy6eK1BupYweDMTuRCMULGb-0jO-3eazo57NvVbgtedlrS-rY6UgOvXwceb-JTyCwUw61vJBtXqvEU7fsse26yTuWP0etH5QM_RgWHA615BWeYah6d0hfZyoWtGRYzuqm0EPp1ct4bWi717d-B644rVGsuZQJdsFX4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm8OsMxP10ttFzP7BHKD1PJqH-a3nWTcfM2ZjQPDnxTCXAYe_oKBojg7fC-yYy-M9vqkjYeUZewdlmOuSde-A4wZKvZ8kCSyCXOLqes4fY3yjFuhUldj9lin-n21Iw1OE2mHrm2tu4oCwRbYHrOuSmsyEW0k-XFE4IPysKzYM_RsFMHIOEKQLdWdWIbvDp3mCkQBWTC1JVqGOTWfTCVqQzz_rCuy2ar6U7RHo1B05mIOpaP4Ob5U_S7eko9T7jl3oJyAnf9uE56cA',
    ],
  },
  {
    title: '4기 전사들',
    desc: '전이성 유방암을 존엄과 희망으로 함께 이겨내는 모임입니다.',
    members: 62,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSvuOcFsqFdhyyKsaIQLlwuIQyPm0gATYYbiI9HHiAxqNjTd0uNo_0qsaviCiC4iUyy2ptQU3eTDyoCIxjdP_IwdiQo56ha-_paDhowsjM02s6jXD2_ztBh9-8o5GJ6vr12xboDBxGSGw9FR3e2fNM_XjgPogj-w52xpQf4wP0fgCUFO_gTeARL8lsqWhOkKvUawRV3MtMm2vLoBieB04otkcCQ1PWtbuyi0V5ESZX5_pF5N3JhOh4D6lg2oOdLdfFGOgA8QhAIvg',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkMaS7dT-0tNYScWTbzQipUpyANqMI1_-sqk0eN7fRXWr-YxNZPcuG1IAfE_egF7e1Q7ZAreXIpc-xDfS7AQi81SoYcm5ilchHgPN5tD4qvUJDIfbQk4fC4AEiQFU7kqT0cr66J1XmmFJpkLIgXtfWsNwdhQMHCjPrjNhcMsdHsbzEagCWdbZKJGPeQSsEPaRJnU4IeuIeLWNDDXgvL9a8e-QK9Huw0Gwz_cFVwl0oiucJakNEpKRsa246DyXFluPaH3JBRpaiyzk',
    ],
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex flex-col gap-8 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              모든 단계를 함께합니다
            </div>
            <h1 className="text-slate-900 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
              이 여정에서 당신은 <span className="text-primary">혼자가 아닙니다.</span>
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-xl">
              유방암의 모든 단계에서 힘, 정보, 맞춤 케어를 제공하는 따뜻한 커뮤니티입니다. 함께하면 더 강해집니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/community"
                className="h-14 px-8 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30 flex items-center no-underline"
              >
                커뮤니티 참여하기
              </Link>
              <Link
                to="/factcheck"
                className="h-14 px-8 border-2 border-primary/30 text-primary rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors flex items-center no-underline"
              >
                더 알아보기
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl group-hover:bg-primary/30 transition-all" />
              <div
                className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMG9BkOFtXEE7HdhGxsizqjGQHcok2v5KmEMjb4qzGeaYFMsLgLornA7p1OzybgU90dpRa5kJfxhS4I7jpRQYxlN2wQ8lnvEITYC_OnOowXL0_O-bE1gC5mfcXtW-WgBRs6CXdgTg3Laj7_jMRPG3BE8IA5565uVZNK8XLmTwpE0X_3AKUQo8jJhjrzasTwwy3E_OFfd9MQZw2pBMGC0NHLbpsHKW9WLcwYRpKHkYuyP0qgqLG-mobSzZUREfJILtPXeQRgwILSQw')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Groups + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
        {/* Main: Groups */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-slate-900 text-3xl font-extrabold tracking-tight">활성 소모임</h2>
            <Link to="/community" className="text-primary font-bold text-sm hover:underline no-underline">전체 보기</Link>
          </div>
          {/* Tabs */}
          <div className="flex border-b border-primary/10 mb-8 gap-8 overflow-x-auto pb-1">
            <a className="flex items-center gap-2 border-b-2 border-primary text-primary pb-4 font-bold whitespace-nowrap cursor-pointer">
              <span className="material-symbols-outlined text-sm">groups</span> 전체
            </a>
            <a className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-primary pb-4 font-bold transition-all whitespace-nowrap cursor-pointer">
              <span className="material-symbols-outlined text-sm">rebase_edit</span> 기수별
            </a>
            <a className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-primary pb-4 font-bold transition-all whitespace-nowrap cursor-pointer">
              <span className="material-symbols-outlined text-sm">cake</span> 연령별
            </a>
            <a className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-primary pb-4 font-bold transition-all whitespace-nowrap cursor-pointer">
              <span className="material-symbols-outlined text-sm">distance</span> 지역별
            </a>
          </div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GROUPS.map((g) => (
              <div key={g.title} className="bg-white p-5 rounded-2xl border border-primary/5 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group cursor-pointer">
                <div
                  className="w-full h-48 bg-primary/10 rounded-xl mb-4 overflow-hidden relative bg-cover bg-center"
                  style={{ backgroundImage: `url('${g.image}')` }}
                >
                  {g.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] font-black text-primary uppercase">
                      {g.badge}
                    </div>
                  )}
                </div>
                <h3 className="text-slate-900 text-xl font-bold mb-2 group-hover:text-primary transition-colors">{g.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{g.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {g.avatars.map((a, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                        style={{ backgroundImage: `url('${a}')` }}
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                      +{g.members - g.avatars.length}
                    </div>
                  </div>
                  <span className="text-primary text-xs font-bold uppercase">{g.members}명</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          {/* Wellness Tips */}
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <h3 className="text-slate-900 text-xl font-bold">웰니스 팁</h3>
            </div>
            <ul className="space-y-6">
              {[
                { num: '01', title: '가벼운 움직임', desc: '15분 스트레칭으로 혈액순환과 기분을 개선할 수 있어요.' },
                { num: '02', title: '수분 보충', desc: '레몬 물로 하루 에너지 레벨을 꾸준히 유지하세요.' },
                { num: '03', title: '마음 일기', desc: '잠들기 전 감사한 것 3가지를 적으면 수면의 질이 높아져요.' },
              ].map(tip => (
                <li key={tip.num} className="flex gap-4">
                  <span className="font-black text-primary text-2xl opacity-50">{tip.num}</span>
                  <div>
                    <h4 className="font-bold text-slate-800">{tip.title}</h4>
                    <p className="text-sm text-slate-500">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 py-3 bg-white text-primary font-bold rounded-xl shadow-sm hover:shadow-md transition-all">
              더 많은 팁 보기
            </button>
          </div>

          {/* Upcoming Webinars */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[80px]">video_call</span>
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event</span>
              다가오는 웨비나
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="group cursor-pointer">
                <div className="text-primary text-xs font-black uppercase mb-1">LIVE &bull; 3/20 오후 6시</div>
                <h4 className="font-bold group-hover:text-primary transition-colors">항암 중 영양 관리</h4>
                <p className="text-xs text-slate-400 mt-1">김수진 종양내과 전문의</p>
              </div>
              <div className="group cursor-pointer">
                <div className="text-slate-400 text-xs font-black uppercase mb-1">3/25 오후 4시</div>
                <h4 className="font-bold group-hover:text-primary transition-colors">치료비 지원 안내</h4>
                <p className="text-xs text-slate-400 mt-1">박민정 사회복지사</p>
              </div>
              <div className="group cursor-pointer">
                <div className="text-slate-400 text-xs font-black uppercase mb-1">4/2 오후 7시</div>
                <h4 className="font-bold group-hover:text-primary transition-colors">수술 후 심리 케어</h4>
                <p className="text-xs text-slate-400 mt-1">PinkLog 상담팀</p>
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-deep transition-all">
              참가 신청하기
            </button>
          </div>

          {/* Donation CTA */}
          <div className="bg-gradient-to-br from-primary to-pink-400 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-black mb-2">PinkLog를 응원해주세요</h3>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              여러분의 후원으로 무료 상담과 케어 자원을 제공할 수 있습니다.
            </p>
            <button className="bg-white text-primary px-6 py-2 rounded-lg font-black text-sm uppercase tracking-wider">
              후원하기
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

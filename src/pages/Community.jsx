import { useState } from 'react'
import { MessageCircle, Users, MapPin, Calendar, Heart, Send, ThumbsUp, MessageSquare } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: '전체', icon: MessageCircle },
  { id: 'stage', label: '기수별', icon: Calendar },
  { id: 'age', label: '연령별', icon: Users },
  { id: 'region', label: '지역별', icon: MapPin },
]

const GROUPS = {
  stage: ['1기', '2기', '3기', '4기', '치료 완료'],
  age: ['20대', '30대', '40대', '50대', '60대 이상'],
  region: ['서울', '경기/인천', '충청', '전라', '경상', '강원/제주'],
}

const SAMPLE_POSTS = [
  {
    id: 1,
    author: '희망나무',
    category: 'stage',
    tag: '2기',
    time: '30분 전',
    title: '항암 3차 후기 공유합니다',
    content: '오늘 3차 항암을 끝냈어요. 이번에는 구토가 덜했는데, 선생님이 처방해주신 구토 억제제가 잘 맞는 것 같아요. 혹시 같은 약 드시는 분 계실까요?',
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: '봄날의꽃',
    category: 'age',
    tag: '40대',
    time: '1시간 전',
    title: '가발 추천 부탁드려요',
    content: '탈모가 시작되면서 가발을 알아보고 있는데, 자연스러운 가발 추천해주실 분 계실까요? 가격대도 같이 알려주시면 감사하겠습니다.',
    likes: 31,
    comments: 15,
  },
  {
    id: 3,
    author: '따뜻한햇살',
    category: 'region',
    tag: '서울',
    time: '2시간 전',
    title: '서울 강남 환우 모임 안내',
    content: '이번 주 토요일 오후 2시에 강남역 근처 카페에서 소모임 있어요! 가벼운 차 한잔 하면서 이야기 나눠요. 참석 희망하시는 분은 댓글 남겨주세요.',
    likes: 42,
    comments: 22,
  },
  {
    id: 4,
    author: '용기있는나',
    category: 'stage',
    tag: '치료 완료',
    time: '3시간 전',
    title: '치료 완료 1년 후기',
    content: '작년 이맘때 마지막 방사선 치료를 끝냈어요. 1년이 지난 지금, 체력도 많이 회복되고 일상으로 돌아왔답니다. 지금 치료 중이신 분들, 끝이 보여요! 힘내세요!',
    likes: 89,
    comments: 34,
  },
  {
    id: 5,
    author: '건강한내일',
    category: 'age',
    tag: '50대',
    time: '4시간 전',
    title: '항암 중 운동 어떻게 하세요?',
    content: '주치의가 가벼운 운동은 괜찮다고 하셨는데, 어떤 운동을 어느 정도로 하면 좋을지 경험 공유 부탁드려요. 저는 요즘 30분 산책을 시작했어요.',
    likes: 18,
    comments: 11,
  },
]

export default function Community() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeGroup, setActiveGroup] = useState(null)
  const [newPost, setNewPost] = useState('')

  const filteredPosts = activeCategory === 'all'
    ? SAMPLE_POSTS
    : SAMPLE_POSTS.filter(p => {
        if (activeGroup) return p.category === activeCategory && p.tag === activeGroup
        return p.category === activeCategory
      })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-pink-100">
        <h1 className="text-2xl font-bold text-pink-800 flex items-center gap-2 mb-2">
          <MessageCircle className="w-7 h-7" />
          수다방
        </h1>
        <p className="text-pink-500">같은 경험을 나누는 분들과 편하게 이야기해요</p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setActiveCategory(id); setActiveGroup(null) }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === id
                ? 'bg-pink-500 text-white shadow-md'
                : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Sub-groups */}
      {activeCategory !== 'all' && GROUPS[activeCategory] && (
        <div className="flex gap-2 flex-wrap">
          {GROUPS[activeCategory].map(group => (
            <button
              key={group}
              onClick={() => setActiveGroup(activeGroup === group ? null : group)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeGroup === group
                  ? 'bg-pink-200 text-pink-800'
                  : 'bg-pink-50 text-pink-500 hover:bg-pink-100'
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Posts */}
        <div className="md:col-span-2 space-y-4">
          {/* Write Box */}
          <div className="bg-white rounded-2xl p-5 border border-pink-100">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="오늘의 이야기를 나눠보세요..."
              className="w-full border border-pink-200 rounded-xl p-4 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
            />
            <div className="flex justify-end mt-3">
              <button className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
                <Send className="w-4 h-4" />
                게시하기
              </button>
            </div>
          </div>

          {/* Post List */}
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-5 border border-pink-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">{post.author}</div>
                  <div className="text-xs text-gray-400">{post.time}</div>
                </div>
                <span className="ml-auto bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium">
                  {post.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.content}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Popular Groups */}
          <div className="bg-white rounded-2xl p-5 border border-pink-100">
            <h3 className="font-bold text-pink-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              인기 소모임
            </h3>
            <div className="space-y-3">
              {[
                { name: '2기 환우 모임', members: 234, active: true },
                { name: '서울 환우회', members: 189 },
                { name: '40대 동기 모임', members: 156 },
                { name: '항암 식단 공유', members: 298 },
                { name: '운동 같이해요', members: 127 },
              ].map(group => (
                <div
                  key={group.name}
                  className="flex items-center justify-between py-2 border-b border-pink-50 last:border-0"
                >
                  <div>
                    <div className="text-sm font-medium text-gray-800">{group.name}</div>
                    <div className="text-xs text-gray-400">{group.members}명 참여 중</div>
                  </div>
                  <button className="text-xs bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full hover:bg-pink-100 transition-colors font-medium">
                    참여
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Online Now */}
          <div className="bg-white rounded-2xl p-5 border border-pink-100">
            <h3 className="font-bold text-pink-800 mb-3">접속 중</h3>
            <div className="flex flex-wrap gap-2">
              {['희망나무', '봄날의꽃', '따뜻한햇살', '용기있는나', '건강한내일'].map(name => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-xs"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

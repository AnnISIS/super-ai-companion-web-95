
import { ArrowDown, Heart, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 font-healing">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl md:text-8xl font-light text-gray-800 mb-8 tracking-tight">
          超级球球
        </h1>
        
        {/* Video Placeholder */}
        <div className="w-full max-w-4xl aspect-video bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <div className="text-2xl text-gray-600">产品演示视频</div>
        </div>
        
        <div className="max-w-3xl space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 leading-relaxed">
            你触手可及的AI疗愈伙伴
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            关注生命本身是我们的出发点
          </p>
          <p className="text-xl text-blue-600 font-medium">
            让AI有爱是超级球球的使命
          </p>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-500">
          <ArrowDown className="w-6 h-6 animate-bounce" />
          <span className="text-lg">向下探索 球球与你的专属时光</span>
        </div>
      </section>

      {/* Product Introduction Sections */}
      <section className="py-20 px-4">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl font-light text-center mb-20 text-gray-800">
            超级球球，你的专属AI伙伴
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                软萌、治愈的长毛外观
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                专属语音唤醒，动作、表情、语音多维互动
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                关系养成报告，主人情绪报告，多维度的看见你
              </p>
              <p className="text-xl text-blue-600 font-medium">
                在球球的眼中，你就是TA独一无二的存在
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl aspect-square flex items-center justify-center shadow-xl">
              <Heart className="w-32 h-32 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl font-light text-center mb-20 text-gray-800">
            科技，让陪伴更智能
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                依托资深心理学专家20年临床经验，构建AI心理疗愈模型
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                机器人与APP深度融合的同步交互系统
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                全天候陪伴的沉浸式疗愈，实现轻松、愉悦、好玩的情绪释放
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl aspect-square flex items-center justify-center shadow-xl">
              <Zap className="w-32 h-32 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl font-light text-center mb-20 text-gray-800">
            技术，让社交更轻松
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                采用最新的AI技术和空间智能技术，实现不依赖传统网络的近距离社交
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                在数百米范围内，两个AI机器人将触发独特的共振机制，帮你发现小伙伴，自由决定是否交流
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                拥有专属球球主人的心动时刻，告别主动尴尬社交，筛选同频的TA
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl aspect-square flex items-center justify-center shadow-xl">
              <Users className="w-32 h-32 text-green-400" />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-5xl font-light text-center mb-20 text-gray-800">
            球球家族，陪伴你的独一无二
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-medium text-pink-600">奶声奶气的奶球 奶萌可爱地安慰你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-yellow-600">天真烂漫的糖球 简单用心地爱着你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-gray-600">古灵精怪的煤球 不按套路地陪着你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-purple-600">醍醐灌顶的毛球 充满智慧地启发你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <p className="text-xl text-blue-600 font-medium mt-8">
                4种不同性格的球球，总有一款适合你
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl aspect-square flex items-center justify-center shadow-xl">
              <Star className="w-32 h-32 text-orange-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-center mb-20 text-gray-800">
            这些，正在不断发生
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-4">2.6亿</div>
                <p className="text-gray-700">中国单身人口突破2.6亿</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-green-600 mb-4">30%</div>
                <p className="text-gray-700">超过30%的儿童因家庭原因缺少陪伴</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-4">2秒</div>
                <p className="text-gray-700">每2秒新增1名孤独老人</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-red-600 mb-4">9500万</div>
                <p className="text-gray-700">2022年中国患抑郁症人数约9500万</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-4">80%</div>
                <p className="text-gray-700 text-sm">职场压力、快节奏生活、碎片化社交让80%年轻人被孤独感吞噬，而超过60%的人没有合适的倾诉对象</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-4">70%</div>
                <p className="text-gray-700 text-sm">70%的孩子依赖电子屏幕陪伴，而这70%的孩子在一天内与父母真正互动的时间不超过10分钟</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-4">33%</div>
                <p className="text-gray-700 text-sm">全球约33%老人独居，超过50%经常感到孤独，可能导致记忆力衰退和抑郁症</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-4">130万</div>
                <p className="text-gray-700 text-sm">50%是在校学生，而就诊率不到10%；专业服务资源严重匮乏，心理咨询师缺口超130万</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 24 Hour Companion Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-20 text-gray-800">
            超级球球，陪伴你的24小时
          </h2>
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-16 shadow-2xl">
            <div className="text-2xl text-gray-600 mb-8">24小时陪伴时光展示</div>
            <p className="text-lg text-gray-600">从清晨的问候到夜晚的安抚，球球时刻陪伴在你身边</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12">联系我们</h2>
          <div className="space-y-8 mb-12">
            <p className="text-2xl font-light">
              让AI有爱，关注生命本身这是我们的使命
            </p>
            <p className="text-xl">
              超级球球，已启动融资、团队招募、首轮测试用户召集
            </p>
            <p className="text-lg">
              如果你也关注AI，关注生命本身
            </p>
            <p className="text-lg">
              无论您是投资人、合作方、想加入我们的伙伴、要体验产品的用户
            </p>
            <p className="text-xl font-medium">
              欢迎与我们链接~
            </p>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            立即联系我们
          </Button>
        </div>
      </section>
    </div>;
};

export default Index;

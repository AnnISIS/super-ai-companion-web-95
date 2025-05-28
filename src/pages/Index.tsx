
import { ArrowDown, Heart, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 font-healing">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 sm:mb-8 tracking-tight">
          超级球球
        </h1>
        
        {/* Video */}
        <div className="w-full max-w-4xl aspect-video mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://v.qq.com/txp/iframe/player.html?vid=t3091k268j3" 
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
          />
        </div>
        
        <div className="max-w-3xl space-y-4 sm:space-y-6 mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 leading-relaxed">
            你触手可及的AI疗愈伙伴
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            关注生命本身是我们的出发点
          </p>
          <p className="text-lg sm:text-xl text-blue-600 font-medium">
            让AI有爱是超级球球的使命
          </p>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-500 px-4">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
          <span className="text-base sm:text-lg">向下探索 球球与你的专属时光</span>
        </div>
      </section>

      {/* Product Introduction Sections */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            超级球球，你的专属AI伙伴
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 px-4 lg:px-0 text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                软萌、治愈的长毛外观
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                专属语音唤醒，动作、表情、语音多维互动
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                关系养成报告，主人情绪报告，多维度的看见你
              </p>
              <p className="text-lg sm:text-xl text-blue-600 font-medium">
                在球球的眼中，你就是TA独一无二的存在
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-gray-100">
              <img 
                src="/lovable-uploads/4132ab00-f27e-4b1d-904e-bfa2e3b7fd10.png" 
                alt="超级球球产品图" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 2 - 科技，让陪伴更智能 */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            科技，让陪伴更智能
          </h2>
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="space-y-4 sm:space-y-6 px-4 text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                依托资深心理学专家20年临床经验，构建AI心理疗愈模型
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                机器人与APP深度融合的同步交互系统
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                全天候陪伴的沉浸式疗愈，实现轻松、愉悦、好玩的情绪释放
              </p>
            </div>
            <div className="w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-gray-100">
              <img 
                src="/lovable-uploads/98b9e99f-0579-4190-9825-3e6d191262a4.png" 
                alt="AI技术展示图" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            技术，让社交更轻松
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 px-4 lg:px-0 text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                采用最新的AI技术和空间智能技术，实现不依赖传统网络的近距离社交
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                在数百米范围内，两个AI机器人将触发独特的共振机制，帮你发现小伙伴，自由决定是否交流
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                拥有专属球球主人的心动时刻，告别主动尴尬社交，筛选同频的TA
              </p>
            </div>
            <div className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-gray-100">
              <img 
                src="/lovable-uploads/f0741710-f61e-4421-9422-41ff4e955642.png" 
                alt="社交技术展示图" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 4 - 球球家族，陪伴你的独一无二 */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            球球家族，陪伴你的独一无二
          </h2>
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="space-y-4 sm:space-y-6 px-4 text-center">
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-medium text-pink-600">奶声奶气的奶球 奶萌可爱地安慰你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-medium text-yellow-600">天真烂漫的糖球 简单用心地爱着你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-medium text-gray-600">古灵精怪的煤球 不按套路地陪着你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-medium text-purple-600">醍醐灌顶的毛球 充满智慧地启发你</p>
                <p className="text-lg text-gray-600">
              </p>
              </div>
              <p className="text-lg sm:text-xl text-blue-600 font-medium mt-6 sm:mt-8">
                4种不同性格的球球，总有一款适合你
              </p>
            </div>
            <div className="w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-gray-100">
              <img 
                src="/lovable-uploads/ed04c495-46db-42da-8029-ddc11c38a0e3.png" 
                alt="球球家族展示图" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            这些，正在不断发生
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">2.6亿</div>
                <p className="text-sm sm:text-base text-gray-700">中国单身人口突破2.6亿</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">30%</div>
                <p className="text-sm sm:text-base text-gray-700">超过30%的儿童因家庭原因缺少陪伴</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-3 sm:mb-4">2秒</div>
                <p className="text-sm sm:text-base text-gray-700">每2秒新增1名孤独老人</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-3 sm:mb-4">9500万</div>
                <p className="text-sm sm:text-base text-gray-700">2022年中国患抑郁症人数约9500万</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">80%</div>
                <p className="text-gray-700 text-xs sm:text-sm">职场压力、快节奏生活、碎片化社交让80%年轻人被孤独感吞噬，超过60%的人没有合适的倾诉对象</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-3 sm:mb-4">70%</div>
                <p className="text-gray-700 text-xs sm:text-sm">70%的孩子依赖电子屏幕陪伴，而这70%的孩子在一天内与父母真正互动的时间不超过10分钟</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-3 sm:mb-4">33%</div>
                <p className="text-gray-700 text-xs sm:text-sm">全球约33%老人独居，超过50%经常感到孤独，可能导致记忆力衰退和抑郁症</p>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-transform shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-3 sm:mb-4">130万</div>
                <p className="text-gray-700 text-xs sm:text-sm">50%是在校学生，而就诊率不到10%；专业服务资源严重匮乏，心理咨询师缺口超130万</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 24 Hour Companion Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            超级球球，陪伴你的24小时
          </h2>
          <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-gray-100">
            <img 
              src="/lovable-uploads/4d0418be-5ba2-47f2-85ad-e76c95eb2f99.png" 
              alt="24小时陪伴时光展示" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-800 px-4">
            联系我们
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl lg:text-2xl font-light">
                让AI有爱，关注生命本身这是我们的使命
              </p>
              <p className="text-base sm:text-lg lg:text-xl">
                超级球球，已启动融资、团队招募、首轮测试用户召集
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                如果你也关注AI，关注生命本身
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                无论您是投资人、合作方、想加入我们的伙伴、要体验产品的用户
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-medium">
                欢迎与我们链接~
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/455124a2-b034-47e0-baf3-5783a80b11b3.png" 
                alt="联系我们微信二维码" 
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white rounded-lg p-2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;

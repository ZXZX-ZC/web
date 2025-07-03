import Link from 'next/link'
import { ArrowLeft, User, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export const metadata = {
  title: '个人简历页面 - HTML & CSS 练习',
  description: 'HTML5语义化标签与CSS样式美化实践'
}

export default function Exercise1() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/exercises/html-css"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">个人简历页面</h1>
          <p className="text-gray-600 mt-1">HTML5语义化标签与CSS样式实践</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Resume Display */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Resume Header */}
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">张三</h1>
                  <p className="text-xl text-blue-100">前端开发工程师</p>
                  <p className="text-blue-100 mt-2">
                    热爱Web开发，专注于用户体验和现代前端技术
                  </p>
                </div>
              </div>
            </header>

            <main className="p-8">
              {/* Contact Info */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                  联系方式
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>zhangsan@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+86 138-0013-8000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>北京市朝阳区</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-blue-600" />
                    <span>github.com/zhangsan</span>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                  技能专长
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">前端技术</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">HTML/CSS</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">JavaScript</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">React</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">工具框架</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Next.js</li>
                      <li>• Tailwind CSS</li>
                      <li>• Git/GitHub</li>
                      <li>• VS Code</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">软技能</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 团队协作</li>
                      <li>• 问题解决</li>
                      <li>• 学习能力</li>
                      <li>• 沟通表达</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                  项目经验
                </h2>
                <div className="space-y-6">
                  <article className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">个人作品集网站</h3>
                    <p className="text-sm text-gray-600 mb-2">2024年6月 - 至今</p>
                    <p className="text-gray-700 mb-2">
                      使用Next.js和React构建的个人作品集，展示Web开发学习成果
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 响应式设计，适配多种设备</li>
                      <li>• 集成WakaTime API展示编码统计</li>
                      <li>• 实现AI问答功能</li>
                      <li>• 部署在Vercel平台</li>
                    </ul>
                  </article>

                  <article className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">待办事项管理应用</h3>
                    <p className="text-sm text-gray-600 mb-2">2024年5月</p>
                    <p className="text-gray-700 mb-2">
                      使用原生JavaScript开发的任务管理工具
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 实现CRUD操作和本地存储</li>
                      <li>• 任务过滤和搜索功能</li>
                      <li>• 拖拽排序交互</li>
                    </ul>
                  </article>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                  教育背景
                </h2>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">计算机科学与技术</h3>
                  <p className="text-sm text-gray-600 mb-2">某某大学 | 2020年9月 - 2024年6月</p>
                  <p className="text-gray-700">
                    主修课程：数据结构与算法、计算机网络、数据库原理、软件工程
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Code Explanation */}
        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold">技术要点</h3>
            </div>
            <div className="card-body">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">HTML5语义化</h4>
                  <p className="text-gray-600">使用header、main、section、article等语义化标签构建文档结构</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">CSS布局</h4>
                  <p className="text-gray-600">运用Flexbox和Grid实现响应式布局设计</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">视觉设计</h4>
                  <p className="text-gray-600">渐变背景、阴影效果、进度条等现代UI元素</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">可访问性</h4>
                  <p className="text-gray-600">合理的颜色对比度和清晰的信息层次</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="font-semibold">学习收获</h3>
            </div>
            <div className="card-body">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 掌握HTML5语义化标签的正确使用</li>
                <li>• 理解CSS盒模型和布局原理</li>
                <li>• 学会设计美观的用户界面</li>
                <li>• 实践响应式设计思维</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <Link
                href="https://github.com/yourusername/course-portfolio/tree/main/exercises/html-css/exercise1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                查看源码
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
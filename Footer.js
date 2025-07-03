import Link from 'next/link'
import { Github, Mail, Clock, Code2 } from 'lucide-react'
import WakaTimeStats from '@/components/wakatime/WakaTimeStats'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      {/* WakaTime Stats Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">编码时长统计</h3>
          </div>
          <WakaTimeStats />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="font-semibold text-gray-900">Course Portfolio</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              展示本学期Web开发学习成果的综合性应用，集成现代前端技术栈与AI服务，
              体现从基础到进阶的完整学习路径。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/exercises" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  课程练习展示
                </Link>
              </li>
              <li>
                <Link href="/qanything" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  QAnything AI问答
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  关于项目
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername/course-portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  GitHub仓库
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">技术栈</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>Next.js 14</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>React 18</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>WakaTime API</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>QAnything API</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code2 className="w-3 h-3" />
                <span>JavaScript ES6+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {currentYear} Course Portfolio. 基于 Next.js 构建，用于学习展示目的。
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/yourusername/course-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
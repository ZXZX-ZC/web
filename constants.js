// 应用配置常量
export const APP_CONFIG = {
  name: 'Course Portfolio',
  description: '个人课程练习展示与AI问答集成应用',
  version: '1.0.0',
  author: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername/course-portfolio',
  demo: 'https://course-portfolio.vercel.app'
}

// API配置
export const API_CONFIG = {
  wakatime: {
    baseUrl: 'https://wakatime.com/api/v1',
    timeout: 10000,
    retries: 3
  },
  qanything: {
    timeout: 30000,
    maxTokens: 1000,
    temperature: 0.7
  }
}

// 路由配置
export const ROUTES = {
  home: '/',
  exercises: '/exercises',
  htmlCss: '/exercises/html-css',
  javascript: '/exercises/javascript',
  react: '/exercises/react',
  qanything: '/qanything',
  about: '/about'
}

// 练习分类
export const EXERCISE_CATEGORIES = {
  HTML_CSS: {
    id: 'html-css',
    title: 'HTML & CSS 基础',
    description: '掌握网页结构与样式设计，学习响应式布局和现代CSS特性',
    color: 'from-orange-500 to-red-500',
    icon: 'Palette'
  },
  JAVASCRIPT: {
    id: 'javascript',
    title: 'JavaScript 交互',
    description: '学习DOM操作、事件处理、异步编程等现代JavaScript核心技术',
    color: 'from-yellow-500 to-orange-500',
    icon: 'Zap'
  },
  REACT: {
    id: 'react',
    title: 'React 组件化',
    description: '掌握React组件开发、状态管理、生命周期等现代前端框架核心概念',
    color: 'from-blue-500 to-purple-500',
    icon: 'Code2'
  }
}

// 难度等级
export const DIFFICULTY_LEVELS = {
  BEGINNER: {
    label: '初级',
    color: 'bg-green-100 text-green-700',
    value: 1
  },
  INTERMEDIATE: {
    label: '中级',
    color: 'bg-yellow-100 text-yellow-700',
    value: 2
  },
  ADVANCED: {
    label: '高级',
    color: 'bg-red-100 text-red-700',
    value: 3
  }
}

// 技术栈分类
export const TECH_STACK = {
  frontend: {
    label: '前端技术',
    technologies: [
      { name: 'HTML5', description: '现代网页结构标准' },
      { name: 'CSS3', description: '样式设计和动画' },
      { name: 'JavaScript ES6+', description: '现代JavaScript语法' },
      { name: 'React 18', description: '组件化前端框架' },
      { name: 'Next.js 14', description: '全栈React框架' },
      { name: 'Tailwind CSS', description: '实用优先CSS框架' }
    ]
  },
  tools: {
    label: '开发工具',
    technologies: [
      { name: 'Git', description: '版本控制系统' },
      { name: 'GitHub', description: '代码托管平台' },
      { name: 'VS Code', description: '代码编辑器' },
      { name: 'Chrome DevTools', description: '浏览器开发工具' },
      { name: 'Vercel', description: '部署和托管平台' },
      { name: 'npm', description: '包管理工具' }
    ]
  },
  apis: {
    label: '集成服务',
    technologies: [
      { name: 'WakaTime API', description: '编码时长统计服务' },
      { name: 'QAnything API', description: '大语言模型问答服务' }
    ]
  }
}

// 编程语言颜色映射
export const LANGUAGE_COLORS = {
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'HTML': '#e34f26',
  'CSS': '#1572b6',
  'React': '#61dafb',
  'Vue': '#4fc08d',
  'Python': '#3776ab',
  'Java': '#007396',
  'JSON': '#000000',
  'Markdown': '#083fa1',
  'SCSS': '#cf649a',
  'Less': '#1d365d',
  'PHP': '#777bb4',
  'C++': '#00599c',
  'C#': '#239120',
  'Go': '#00add8',
  'Rust': '#000000',
  'Swift': '#fa7343',
  'Kotlin': '#0095d5'
}

// 动画配置
export const ANIMATION_CONFIG = {
  durations: {
    fast: 150,
    normal: 300,
    slow: 500
  },
  easings: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
}

// 响应式断点
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

// 主题配置
export const THEME = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  fonts: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
  }
}

// 错误消息
export const ERROR_MESSAGES = {
  network: '网络连接失败，请检查网络状态',
  timeout: '请求超时，请稍后重试',
  unauthorized: '未授权访问，请检查API密钥',
  forbidden: '禁止访问，权限不足',
  notFound: '请求的资源不存在',
  serverError: '服务器内部错误，请稍后重试',
  unknown: '发生未知错误，请稍后重试'
}

// 成功消息
export const SUCCESS_MESSAGES = {
  copySuccess: '已复制到剪贴板',
  saveSuccess: '保存成功',
  uploadSuccess: '上传成功',
  deleteSuccess: '删除成功',
  updateSuccess: '更新成功'
}

// 本地存储键名
export const STORAGE_KEYS = {
  theme: 'course-portfolio-theme',
  language: 'course-portfolio-language',
  chatHistory: 'course-portfolio-chat-history',
  userPreferences: 'course-portfolio-user-preferences'
}

// 正则表达式
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  phone: /^1[3-9]\d{9}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
}

// 时间格式
export const TIME_FORMATS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
  display: 'YYYY年MM月DD日',
  iso: 'YYYY-MM-DDTHH:mm:ss.sssZ'
}

// 文件类型映射
export const FILE_TYPES = {
  image: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
  document: ['.pdf', '.doc', '.docx', '.txt', '.md'],
  code: ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json'],
  archive: ['.zip', '.rar', '.7z', '.tar', '.gz']
}

// SEO元数据
export const SEO = {
  defaultTitle: 'Course Portfolio - 课程练习作品集',
  titleTemplate: '%s | Course Portfolio',
  defaultDescription: '展示HTML、CSS、JavaScript、React及Next.js学习成果的综合性作品集，集成WakaTime统计和QAnything AI问答服务',
  keywords: [
    'Next.js',
    'React',
    'Portfolio',
    'WakaTime',
    'QAnything',
    'AI',
    '前端开发',
    '课程练习',
    'Web开发',
    '编程学习'
  ],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Course Portfolio'
  },
  twitter: {
    cardType: 'summary_large_image'
  }
}

// 外部链接
export const EXTERNAL_LINKS = {
  github: 'https://github.com/yourusername/course-portfolio',
  demo: 'https://course-portfolio.vercel.app',
  wakatime: 'https://wakatime.com',
  nextjs: 'https://nextjs.org',
  react: 'https://reactjs.org',
  tailwind: 'https://tailwindcss.com',
  vercel: 'https://vercel.com'
}

// 开发环境配置
export const DEV_CONFIG = {
  showDebugInfo: process.env.NODE_ENV === 'development',
  enableHotReload: process.env.NODE_ENV === 'development',
  logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'error'
}
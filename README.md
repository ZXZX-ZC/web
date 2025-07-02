# Course Portfolio - 课程练习作品集

<div align="center">

![Course Portfolio](https://img.shields.io/badge/Course-Portfolio-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

一个展示Web开发学习历程的综合性作品集，集成WakaTime编码统计和QAnything AI问答服务

[🚀 在线演示](https://course-portfolio.vercel.app) | [📖 项目文档](docs/README.md) | [🐛 问题反馈](https://github.com/yourusername/course-portfolio/issues)

</div>

## 📋 项目简介

Course Portfolio 是一个基于 Next.js 14 构建的现代化课程作品集网站，系统性展示HTML/CSS、JavaScript、React等Web开发技术的学习成果。项目采用**进阶路径**设计，通过API集成展示实际的开发能力。

### ✨ 核心特性

- 🎯 **完整技术栈展示** - 从基础HTML/CSS到React组件化开发
- 🤖 **QAnything AI集成** - 自主开发的问答界面，支持多轮对话
- ⏰ **WakaTime统计** - 实时展示编码时长和语言分布
- 📱 **响应式设计** - 适配桌面端、平板和移动设备
- 🎨 **现代UI设计** - 基于Tailwind CSS的美观界面
- ⚡ **性能优化** - 代码分割、懒加载等优化策略

## 🛠️ 技术架构

### 前端技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [Next.js](https://nextjs.org/) | 14.0.0 | 全栈React框架，支持SSR和API路由 |
| [React](https://reactjs.org/) | 18.2.0 | 组件化前端框架 |
| [Tailwind CSS](https://tailwindcss.com/) | 3.3.5 | 实用优先的CSS框架 |
| [Lucide React](https://lucide.dev/) | 0.292.0 | 现代图标库 |

### API集成服务

| 服务 | 用途 | 集成方式 |
|------|------|----------|
| **WakaTime API** | 编码时长统计 | 后端API路由 + 环境变量管理 |
| **QAnything API** | AI问答服务 | 自主开发前端界面 + API调用 |

### 开发工具

- **包管理**: npm
- **代码规范**: ESLint + Prettier
- **版本控制**: Git + GitHub
- **部署平台**: Vercel

## 🚀 快速开始

### 环境要求

- Node.js 18.0+ 
- npm 8.0+
- Git

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/course-portfolio.git
   cd course-portfolio
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **环境配置**
   ```bash
   cp .env.example .env.local
   ```
   
   编辑 `.env.local` 文件，配置以下环境变量：
   ```env
   # WakaTime API配置
   WAKATIME_API_KEY=your_wakatime_api_key_here
   WAKATIME_USERNAME=your_wakatime_username
   
   # QAnything API配置
   QANYTHING_API_URL=http://your-qanything-server.com/api
   QANYTHING_API_KEY=your_qanything_api_key_here
   
   # 应用配置
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```
   
   访问 [http://localhost:3000](http://localhost:3000) 查看应用

5. **构建生产版本**
   ```bash
   npm run build
   npm start
   ```

## 📁 项目结构

```
course-portfolio/
├── README.md                  # 项目说明文档
├── next.config.js            # Next.js配置文件
├── tailwind.config.js        # Tailwind CSS配置
├── package.json              # 项目依赖配置
├── .env.example              # 环境变量示例
├── public/                   # 静态资源目录
│   ├── favicon.ico
│   └── screenshots/          # 运行截图
├── src/                      # 源代码目录
│   ├── app/                  # Next.js 13+ App Router
│   │   ├── layout.js         # 根布局组件
│   │   ├── page.js           # 首页
│   │   ├── globals.css       # 全局样式
│   │   ├── api/              # API路由
│   │   │   ├── wakatime/     # WakaTime API集成
│   │   │   └── qanything/    # QAnything API集成
│   │   ├── exercises/        # 课程练习页面
│   │   │   ├── html-css/     # HTML&CSS练习
│   │   │   ├── javascript/   # JavaScript练习
│   │   │   └── react/        # React练习
│   │   ├── qanything/        # QAnything问答页面
│   │   └── about/            # 关于页面
│   ├── components/           # React组件
│   │   ├── ui/               # 通用UI组件
│   │   ├── layout/           # 布局组件
│   │   ├── exercises/        # 练习相关组件
│   │   ├── qanything/        # AI问答组件
│   │   └── wakatime/         # WakaTime组件
│   ├── lib/                  # 工具函数库
│   │   ├── api.js            # API调用工具
│   │   ├── utils.js          # 通用工具函数
│   │   └── constants.js      # 常量定义
│   └── styles/               # 样式文件
└── docs/                     # 项目文档
```

## 🎯 功能详解

### 1. 课程练习展示

#### HTML & CSS 基础
- **个人简历页面**: HTML5语义化标签 + CSS样式美化
- **响应式导航栏**: 移动端适配 + CSS动画效果
- **CSS Grid布局**: 现代布局技术实践

#### JavaScript 交互
- **DOM元素操作**: 选择器使用 + 事件处理
- **交互式计算器**: 状态管理 + 键盘支持
- **待办事项应用**: CRUD操作 + 本地存储

#### React 组件化
- **组件基础示例**: JSX语法 + Props传递
- **Hooks状态管理**: useState + useEffect应用
- **状态管理进阶**: Context API + useReducer

### 2. WakaTime API集成

**实现路径**: 后端API路由 + 安全的环境变量管理

**功能特性**:
- ✅ 实时编码时长统计（今日/本周/总计）
- ✅ 编程语言分布可视化
- ✅ 历史数据缓存机制
- ✅ 错误处理和降级方案
- ✅ 响应式数据展示组件

**技术实现**:
```javascript
// API路由设计
app/api/wakatime/route.js
- 环境变量安全管理
- 多端点并行请求
- 15分钟智能缓存
- 错误处理 + 模拟数据后备

// 前端组件
components/wakatime/WakaTimeStats.js
- React Hooks状态管理
- 加载状态处理
- 实时数据更新
- 响应式设计
```

### 3. QAnything AI问答集成

**实现路径**: 进阶路径 - 自主开发前端界面 + API调用

**功能特性**:
- ✅ 自主开发的聊天界面
- ✅ 多轮对话上下文管理
- ✅ 流式响应处理
- ✅ 错误处理和重试机制
- ✅ 对话历史记录
- ✅ 消息复制和导出功能
- ✅ 键盘快捷键支持

**技术实现**:
```javascript
// API路由设计
app/api/qanything/route.js
- 安全的API密钥管理
- 请求参数验证
- 超时和重试机制
- 错误分类处理

// 前端聊天界面
components/qanything/ChatInterface.js
- React状态管理
- 实时消息渲染
- 自动滚动优化
- 用户体验增强
```

## 📸 运行截图

### QAnything AI问答界面

![QAnything Demo](public/screenshots/qanything-demo.png)

**功能展示**:
- 自主开发的现代化聊天界面
- 支持多轮对话和上下文理解
- 实时响应和加载状态展示
- 消息复制和对话管理功能

### WakaTime编码统计

![WakaTime Demo](public/screenshots/wakatime-demo.png)

**数据展示**:
- 今日/本周/总计编码时长
- 编程语言分布统计
- 实时数据更新
- 响应式数据可视化

### 课程练习导航

![Exercises Demo](public/screenshots/exercises-demo.png)

**内容组织**:
- 分类展示不同技术方向练习
- 练习难度和时长标识
- 交互式演示链接
- 学习路径可视化

## 🔧 API配置说明

### WakaTime API配置

1. **获取API密钥**
   - 访问 [WakaTime Settings](https://wakatime.com/settings/account)
   - 复制API Key

2. **配置环境变量**
   ```env
   WAKATIME_API_KEY=waka_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   WAKATIME_USERNAME=your_username
   ```

3. **API调用示例**
   ```javascript
   // 获取编码统计
   const response = await fetch('/api/wakatime')
   const data = await response.json()
   ```

### QAnything API配置

1. **部署QAnything服务**
   - 参考 [QAnything官方文档](https://github.com/netease-youdao/QAnything)
   - 获取API服务地址和密钥

2. **配置环境变量**
   ```env
   QANYTHING_API_URL=http://your-server.com/api
   QANYTHING_API_KEY=your_api_key
   ```

3. **API调用示例**
   ```javascript
   // 发送聊天消息
   const response = await fetch('/api/qanything', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       message: '用户问题',
       conversation_id: 'conversation_id'
     })
   })
   ```

## 🎨 设计理念

### 用户体验优先
- **直观导航**: 清晰的信息架构和导航设计
- **响应式设计**: 完美适配各种设备尺寸
- **加载优化**: 智能加载状态和错误处理
- **无障碍访问**: 语义化HTML和键盘导航支持

### 技术卓越
- **现代架构**: Next.js 13+ App Router + React 18
- **性能优化**: 代码分割、懒加载、缓存策略
- **代码质量**: TypeScript类型安全、ESLint规范
- **安全性**: 环境变量管理、API密钥保护

### 学习展示
- **循序渐进**: 从基础到进阶的完整学习路径
- **实践导向**: 每个练习都有可交互的演示
- **技术深度**: 展示对现代Web开发的深入理解

## 🚀 部署指南

### Vercel部署 (推荐)

1. **连接GitHub仓库**
   ```bash
   # 推送代码到GitHub
   git push origin main
   ```

2. **导入Vercel项目**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择GitHub仓库

3. **配置环境变量**
   - 在Vercel项目设置中添加环境变量
   - 复制`.env.example`中的配置项

4. **自动部署**
   - Vercel会自动检测Next.js项目
   - 每次推送代码都会触发自动部署

### 手动部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

### Docker部署

```dockerfile
# Dockerfile示例
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 开发贡献

### 开发流程

1. **Fork项目** - 创建项目副本
2. **创建分支** - 针对功能创建专门分支
3. **开发功能** - 遵循代码规范进行开发
4. **测试验证** - 确保功能正常运行
5. **提交PR** - 详细描述修改内容

### 代码规范

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format

# 类型检查
npm run type-check
```

### 提交规范

使用 [Conventional Commits](https://conventionalcommits.org/) 规范:

```bash
feat: 添加新功能
fix: 修复bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建配置更新
```

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

## 🙏 致谢

- **教师指导** - 感谢课程老师的悉心指导
- **开源社区** - 感谢Next.js、React、Tailwind CSS等优秀框架
- **API服务** - 感谢WakaTime和QAnything提供的API支持
- **设计灵感** - 参考了众多优秀的作品集网站设计

## 📞 联系方式

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com
- **项目地址**: [Course Portfolio](https://github.com/yourusername/course-portfolio)
- **在线演示**: [https://course-portfolio.vercel.app](https://course-portfolio.vercel.app)

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给它一个星标！**

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>
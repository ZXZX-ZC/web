import { NextRequest, NextResponse } from 'next/server'

const QANYTHING_API_URL = process.env.QANYTHING_API_URL
const QANYTHING_API_KEY = process.env.QANYTHING_API_KEY

export async function POST(request) {
  try {
    const body = await request.json()
    const { message, conversation_id } = body

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: '请输入有效的问题' },
        { status: 400 }
      )
    }

    console.log('Received chat request:', { message: message.substring(0, 50) + '...', conversation_id })

    // 检查是否配置了真实的QAnything API
    const hasRealAPI = QANYTHING_API_URL && QANYTHING_API_KEY && 
                      QANYTHING_API_URL !== 'http://your-qanything-server.com/api'

    if (hasRealAPI) {
      console.log('Using real QAnything API')
      try {
        // 调用真实的QAnything API
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 30000)

        const response = await fetch(`${QANYTHING_API_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${QANYTHING_API_KEY}`,
          },
          body: JSON.stringify({
            query: message,
            conversation_id: conversation_id || generateConversationId(),
            history: [],
            model: 'qwen-plus',
            temperature: 0.7,
            max_tokens: 1000,
            stream: false
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`QAnything API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log('QAnything API response received')

        return NextResponse.json({
          message: data.answer || data.response || '抱歉，我暂时无法理解您的问题。',
          conversation_id: data.conversation_id || conversation_id || generateConversationId(),
          timestamp: new Date().toISOString(),
          sources: data.sources || [],
          model: data.model || 'qwen-plus',
          _isRealAPI: true
        })

      } catch (apiError) {
        console.error('Real QAnything API failed:', apiError.message)
        // API调用失败，降级到模拟回复
        const mockResponse = getMockResponse(message)
        return NextResponse.json({
          ...mockResponse,
          _fallbackReason: 'API调用失败，使用模拟回复'
        })
      }
    } else {
      console.log('Using mock QAnything API (no real API configured)')
      // 没有配置真实API，使用模拟回复
      const mockResponse = getMockResponse(message)
      return NextResponse.json({
        ...mockResponse,
        _fallbackReason: '未配置真实API，使用演示模式'
      })
    }

  } catch (error) {
    console.error('QAnything API Route Error:', error)

    // 处理请求解析错误
    if (error.message.includes('JSON')) {
      return NextResponse.json(
        { error: '请求格式错误' },
        { status: 400 }
      )
    }

    // 返回通用错误回复
    return NextResponse.json({
      message: '抱歉，服务暂时不可用。请稍后重试。',
      conversation_id: generateConversationId(),
      timestamp: new Date().toISOString(),
      sources: [],
      model: 'error-fallback',
      _isError: true,
      _fallbackReason: '服务器错误'
    })
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'QAnything API服务正常',
    version: '1.0.0',
    features: [
      '智能问答',
      '上下文理解',
      '多轮对话',
      '知识检索'
    ],
    timestamp: new Date().toISOString()
  })
}

function generateConversationId() {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// 模拟回复函数，用于演示或API不可用时
function getMockResponse(message) {
  const lowerMessage = message.toLowerCase()
  
  // 更智能的关键词匹配和回复系统
  const responses = {
    greetings: {
      keywords: ['你好', '您好', 'hello', 'hi', '嗨', '早上好', '下午好', '晚上好'],
      replies: [
        '您好！我是QAnything AI助手，很高兴为您服务。我可以回答各种问题，包括编程、学习、技术等方面。请告诉我您想了解什么？',
        '你好！欢迎使用QAnything问答系统！我会尽力为您提供准确、有用的信息。有什么我可以帮助您的吗？',
        '嗨！我是您的AI助手，可以协助您解决各种问题。无论是技术咨询、学习建议还是其他疑问，我都很乐意帮助您。'
      ]
    },
    programming: {
      keywords: ['编程', '代码', 'javascript', 'react', 'html', 'css', 'python', 'java', '前端', '后端', '开发'],
      replies: [
        '关于编程，我可以为您解答JavaScript、React、Next.js、HTML/CSS等前端技术问题，也可以讨论算法、数据结构等计算机科学基础。您具体想了解哪个方面呢？',
        '编程是一个不断学习的过程！建议您多实践，多阅读优秀的代码，并保持对新技术的好奇心。您目前在学习哪种编程语言或技术栈？',
        '在Web开发中，理解HTML、CSS、JavaScript的基础非常重要。然后学习React、Vue等框架会更容易。您目前的编程水平如何？我可以为您推荐合适的学习路径。'
      ]
    },
    learning: {
      keywords: ['学习', '如何', '怎么', '方法', '技巧', '建议', '教程'],
      replies: [
        '学习是一个持续的过程。建议您制定明确的学习目标，保持规律的学习习惯，并通过实践来巩固理论知识。您想学习哪个具体的领域呢？',
        '有效的学习方法包括：主动学习、间隔重复、费曼学习法、项目驱动学习等。关键是找到适合自己的学习方式并坚持下去。',
        '在学习新技术时，我建议您先理解基本概念，然后通过动手实践来加深理解，最后总结和分享所学内容。这样可以形成完整的学习闭环。'
      ]
    },
    technology: {
      keywords: ['技术', '框架', '开发', '工具', '趋势', '架构', '设计'],
      replies: [
        '技术发展日新月异，保持学习的热情和适应变化的能力非常重要。同时，掌握基础知识可以让您更好地理解新技术。您对哪个技术方向特别感兴趣？',
        '在选择技术栈时，建议考虑项目需求、团队技能、生态系统成熟度等因素。没有最好的技术，只有最适合的技术。',
        '前端技术栈推荐：HTML/CSS/JavaScript基础 + React/Vue框架 + 构建工具 + 状态管理 + 测试框架。您想了解哪个部分的详细信息？'
      ]
    },
    project: {
      keywords: ['项目', '作品集', 'portfolio', '展示', '简历', '求职'],
      replies: [
        '构建个人项目和作品集是展示技能的好方法！建议从小项目开始，逐步增加复杂度。每个项目都要有清晰的文档和演示。您想做什么类型的项目？',
        '一个好的作品集应该包括：技术多样性、项目完整性、代码质量、用户体验、文档完善。就像这个Course Portfolio一样，展示完整的学习历程。',
        '在展示项目时，记得突出您解决的问题、使用的技术、遇到的挑战和解决方案。雇主更关心您的问题解决能力，而不仅仅是技术使用。'
      ]
    },
    nextjs: {
      keywords: ['next.js', 'nextjs', 'next', 'ssr', '服务端渲染'],
      replies: [
        'Next.js是一个强大的React全栈框架！它提供了服务端渲染、静态站点生成、API路由、自动代码分割等功能。您想了解Next.js的哪个特性？',
        'Next.js 14的主要优势包括：App Router、服务器组件、改进的性能、更好的开发体验。它非常适合构建现代Web应用，就像这个作品集项目一样。',
        '使用Next.js开发的建议：充分利用App Router、合理使用服务器和客户端组件、优化SEO、利用内置的性能优化功能。需要具体的实现建议吗？'
      ]
    },
    ai: {
      keywords: ['ai', '人工智能', '机器学习', 'ml', 'chatgpt', 'llm', '大模型'],
      replies: [
        'AI技术正在快速发展，特别是大语言模型如GPT、Claude等。它们在代码生成、问答、文本处理等方面表现出色。您对AI的哪个应用场景感兴趣？',
        '作为AI助手，我可以帮助您理解概念、解决问题、提供建议。但重要的是培养批判性思维，验证信息的准确性。有什么具体的AI相关问题吗？',
        'AI正在改变软件开发方式，从代码生成到测试，从文档编写到问题诊断。作为开发者，学会与AI协作将是重要的技能。'
      ]
    },
    wakatime: {
      keywords: ['wakatime', '编码时长', '统计', '时间追踪'],
      replies: [
        'WakaTime是一个很棒的编码时间追踪工具！它可以自动记录您的编程活动，生成详细的统计报告，帮助您了解编程习惯和提高效率。',
        '通过WakaTime统计，您可以看到每天、每周的编码时长，使用的编程语言分布，工作在哪些项目上。这些数据对于时间管理和技能评估很有价值。',
        '就像这个作品集网站的页脚显示的WakaTime统计一样，它可以展示您的编程投入程度。这是展示学习成果的好方法！'
      ]
    },
    default: [
      '这是一个很有趣的问题。虽然我目前无法提供完全准确的答案，但我建议您可以从多个角度来思考这个问题。能告诉我更多背景信息吗？',
      '感谢您的提问。我会尽力为您提供有用的信息。如果您需要更详细的解答，建议您将问题分解成几个小问题，逐一讨论可能会更有效。',
      '这个问题很有深度。我建议您可以先查阅一些相关的资料，然后我们可以进一步讨论具体的细节。您希望从哪个方面开始了解？',
      '您提出的问题很有价值。为了给您更准确的回答，我需要了解您的具体需求和背景。能详细描述一下您遇到的情况吗？'
    ]
  }

  // 查找匹配的类别
  let matchedCategory = null
  let maxMatches = 0

  for (const [category, data] of Object.entries(responses)) {
    if (category === 'default') continue
    
    const matches = data.keywords.filter(keyword => 
      lowerMessage.includes(keyword)
    ).length

    if (matches > maxMatches) {
      maxMatches = matches
      matchedCategory = category
    }
  }

  // 生成回复
  let responseText
  if (matchedCategory && maxMatches > 0) {
    const categoryData = responses[matchedCategory]
    responseText = categoryData.replies[Math.floor(Math.random() * categoryData.replies.length)]
  } else {
    responseText = responses.default[Math.floor(Math.random() * responses.default.length)]
  }

  return {
    message: responseText,
    conversation_id: generateConversationId(),
    timestamp: new Date().toISOString(),
    sources: [],
    model: 'mock-qanything-v2',
    _isMockData: true
  }
}
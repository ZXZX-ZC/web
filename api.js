import { API_CONFIG, ERROR_MESSAGES } from './constants'

/**
 * HTTP客户端类
 */
class ApiClient {
  constructor(baseURL = '', timeout = 10000) {
    this.baseURL = baseURL
    this.timeout = timeout
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * 设置默认头部
   * @param {Object} headers - 头部对象
   */
  setDefaultHeaders(headers) {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers }
  }

  /**
   * 处理响应
   * @param {Response} response - fetch响应对象
   * @returns {Promise} 处理后的响应
   */
  async handleResponse(response) {
    const contentType = response.headers.get('content-type')
    
    if (!response.ok) {
      let errorMessage = ERROR_MESSAGES.unknown
      
      switch (response.status) {
        case 400:
          errorMessage = '请求参数错误'
          break
        case 401:
          errorMessage = ERROR_MESSAGES.unauthorized
          break
        case 403:
          errorMessage = ERROR_MESSAGES.forbidden
          break
        case 404:
          errorMessage = ERROR_MESSAGES.notFound
          break
        case 408:
          errorMessage = ERROR_MESSAGES.timeout
          break
        case 500:
          errorMessage = ERROR_MESSAGES.serverError
          break
        default:
          errorMessage = `HTTP ${response.status}: ${response.statusText}`
      }
      
      throw new Error(errorMessage)
    }

    if (contentType && contentType.includes('application/json')) {
      return await response.json()
    } else {
      return await response.text()
    }
  }

  /**
   * 发送HTTP请求
   * @param {string} url - 请求URL
   * @param {Object} options - 请求选项
   * @returns {Promise} 请求结果
   */
  async request(url, options = {}) {
    const fullUrl = url.startsWith('http') ? url : `${this.baseURL}${url}`
    
    const config = {
      method: 'GET',
      headers: { ...this.defaultHeaders },
      ...options,
    }

    // 合并headers
    if (options.headers) {
      config.headers = { ...config.headers, ...options.headers }
    }

    // 处理请求体
    if (config.body && typeof config.body === 'object' && config.headers['Content-Type'] === 'application/json') {
      config.body = JSON.stringify(config.body)
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)
      
      config.signal = controller.signal

      const response = await fetch(fullUrl, config)
      clearTimeout(timeoutId)
      
      return await this.handleResponse(response)
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error(ERROR_MESSAGES.timeout)
      }
      
      if (!navigator.onLine) {
        throw new Error(ERROR_MESSAGES.network)
      }
      
      throw error
    }
  }

  /**
   * GET请求
   * @param {string} url - 请求URL
   * @param {Object} options - 请求选项
   * @returns {Promise} 请求结果
   */
  get(url, options = {}) {
    return this.request(url, { ...options, method: 'GET' })
  }

  /**
   * POST请求
   * @param {string} url - 请求URL
   * @param {any} data - 请求数据
   * @param {Object} options - 请求选项
   * @returns {Promise} 请求结果
   */
  post(url, data = null, options = {}) {
    return this.request(url, {
      ...options,
      method: 'POST',
      body: data,
    })
  }

  /**
   * PUT请求
   * @param {string} url - 请求URL
   * @param {any} data - 请求数据
   * @param {Object} options - 请求选项
   * @returns {Promise} 请求结果
   */
  put(url, data = null, options = {}) {
    return this.request(url, {
      ...options,
      method: 'PUT',
      body: data,
    })
  }

  /**
   * DELETE请求
   * @param {string} url - 请求URL
   * @param {Object} options - 请求选项
   * @returns {Promise} 请求结果
   */
  delete(url, options = {}) {
    return this.request(url, { ...options, method: 'DELETE' })
  }
}

// 创建默认的API客户端实例
export const apiClient = new ApiClient()

/**
 * WakaTime API客户端
 */
export class WakaTimeAPI {
  constructor(apiKey) {
    this.client = new ApiClient(API_CONFIG.wakatime.baseUrl, API_CONFIG.wakatime.timeout)
    if (apiKey) {
      this.client.setDefaultHeaders({
        'Authorization': `Bearer ${apiKey}`
      })
    }
  }

  /**
   * 获取用户信息
   * @returns {Promise} 用户信息
   */
  async getUser() {
    return await this.client.get('/users/current')
  }

  /**
   * 获取统计信息
   * @param {string} range - 时间范围 (last_7_days, last_30_days, last_6_months, last_year)
   * @returns {Promise} 统计信息
   */
  async getStats(range = 'last_7_days') {
    return await this.client.get(`/users/current/stats/${range}`)
  }

  /**
   * 获取总计时间
   * @returns {Promise} 总计时间
   */
  async getAllTimeSinceToday() {
    return await this.client.get('/users/current/all_time_since_today')
  }

  /**
   * 获取摘要信息
   * @param {string} start - 开始日期 (YYYY-MM-DD)
   * @param {string} end - 结束日期 (YYYY-MM-DD)
   * @returns {Promise} 摘要信息
   */
  async getSummaries(start, end) {
    return await this.client.get(`/users/current/summaries?start=${start}&end=${end}`)
  }

  /**
   * 获取今日摘要
   * @returns {Promise} 今日摘要
   */
  async getTodaySummary() {
    const today = new Date().toISOString().split('T')[0]
    return await this.getSummaries(today, today)
  }

  /**
   * 获取本周摘要
   * @returns {Promise} 本周摘要
   */
  async getWeekSummary() {
    const today = new Date()
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const startDate = weekAgo.toISOString().split('T')[0]
    const endDate = today.toISOString().split('T')[0]
    return await this.getSummaries(startDate, endDate)
  }
}

/**
 * QAnything API客户端
 */
export class QAnythingAPI {
  constructor(apiUrl, apiKey) {
    this.client = new ApiClient(apiUrl, API_CONFIG.qanything.timeout)
    if (apiKey) {
      this.client.setDefaultHeaders({
        'Authorization': `Bearer ${apiKey}`
      })
    }
  }

  /**
   * 发送聊天消息
   * @param {string} message - 消息内容
   * @param {string} conversationId - 对话ID
   * @param {Object} options - 额外选项
   * @returns {Promise} 聊天回复
   */
  async chat(message, conversationId = null, options = {}) {
    const payload = {
      query: message,
      conversation_id: conversationId,
      history: [],
      model: 'qwen-plus',
      temperature: API_CONFIG.qanything.temperature,
      max_tokens: API_CONFIG.qanything.maxTokens,
      stream: false,
      ...options
    }

    return await this.client.post('/chat', payload)
  }

  /**
   * 获取对话历史
   * @param {string} conversationId - 对话ID
   * @returns {Promise} 对话历史
   */
  async getHistory(conversationId) {
    return await this.client.get(`/conversations/${conversationId}/history`)
  }

  /**
   * 删除对话
   * @param {string} conversationId - 对话ID
   * @returns {Promise} 删除结果
   */
  async deleteConversation(conversationId) {
    return await this.client.delete(`/conversations/${conversationId}`)
  }
}

/**
 * 本地API调用函数
 */

/**
 * 获取WakaTime统计信息
 * @returns {Promise} WakaTime统计信息
 */
export async function getWakaTimeStats() {
  return await apiClient.get('/api/wakatime')
}

/**
 * 发送QAnything聊天消息
 * @param {string} message - 消息内容
 * @param {string} conversationId - 对话ID
 * @returns {Promise} 聊天回复
 */
export async function sendChatMessage(message, conversationId = null) {
  return await apiClient.post('/api/qanything', {
    message,
    conversation_id: conversationId
  })
}

/**
 * 重试机制装饰器
 * @param {Function} fn - 要重试的函数
 * @param {number} retries - 重试次数
 * @param {number} delay - 重试延迟（毫秒）
 * @returns {Function} 包装后的函数
 */
export function withRetry(fn, retries = 3, delay = 1000) {
  return async function(...args) {
    for (let i = 0; i <= retries; i++) {
      try {
        return await fn(...args)
      } catch (error) {
        if (i === retries) {
          throw error
        }
        
        // 指数退避
        const backoffDelay = delay * Math.pow(2, i)
        await new Promise(resolve => setTimeout(resolve, backoffDelay))
      }
    }
  }
}

/**
 * 缓存装饰器
 * @param {Function} fn - 要缓存的函数
 * @param {number} ttl - 缓存时间（毫秒）
 * @returns {Function} 包装后的函数
 */
export function withCache(fn, ttl = 5 * 60 * 1000) {
  const cache = new Map()
  
  return async function(...args) {
    const key = JSON.stringify(args)
    const cached = cache.get(key)
    
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.data
    }
    
    const data = await fn(...args)
    cache.set(key, { data, timestamp: Date.now() })
    
    // 清理过期缓存
    setTimeout(() => {
      cache.delete(key)
    }, ttl)
    
    return data
  }
}

/**
 * 并行请求处理
 * @param {Array} requests - 请求数组
 * @param {number} concurrency - 并发数
 * @returns {Promise} 请求结果数组
 */
export async function parallelRequests(requests, concurrency = 3) {
  const results = []
  const executing = []
  
  for (const request of requests) {
    const promise = Promise.resolve(request()).then(result => {
      executing.splice(executing.indexOf(promise), 1)
      return result
    })
    
    results.push(promise)
    
    if (results.length >= concurrency) {
      executing.push(promise)
    }
    
    if (executing.length >= concurrency) {
      await Promise.race(executing)
    }
  }
  
  return Promise.all(results)
}

/**
 * 请求去重
 * @param {Function} fn - 请求函数
 * @returns {Function} 去重后的函数
 */
export function dedupeRequests(fn) {
  const pendingRequests = new Map()
  
  return async function(...args) {
    const key = JSON.stringify(args)
    
    if (pendingRequests.has(key)) {
      return pendingRequests.get(key)
    }
    
    const promise = fn(...args).finally(() => {
      pendingRequests.delete(key)
    })
    
    pendingRequests.set(key, promise)
    return promise
  }
}
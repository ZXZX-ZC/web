import { Clock, Code, TrendingUp, Calendar } from 'lucide-react'

export default function StatsDisplay({ stats, loading = false, error = null }) {
  const formatTime = (seconds) => {
    if (!seconds) return '0 hrs 0 mins'
    
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    
    if (hours === 0) {
      return `${minutes} mins`
    } else if (minutes === 0) {
      return `${hours} hrs`
    } else {
      return `${hours} hrs ${minutes} mins`
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-20 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-4">
        <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">统计数据暂时无法加载</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="text-center text-gray-500 py-4">
        <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">暂无统计数据</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Today */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-4 h-4 text-blue-600 mr-1" />
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {formatTime(stats.today)}
          </div>
          <div className="text-xs text-gray-600">今日编码</div>
        </div>

        {/* Week */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="w-4 h-4 text-green-600 mr-1" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-1">
            {formatTime(stats.week)}
          </div>
          <div className="text-xs text-gray-600">本周编码</div>
        </div>

        {/* Total */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600 mr-1" />
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {formatTime(stats.total)}
          </div>
          <div className="text-xs text-gray-600">总计编码</div>
        </div>

        {/* Top Language */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Code className="w-4 h-4 text-orange-600 mr-1" />
          </div>
          <div className="text-lg font-bold text-orange-600 mb-1">
            {stats.topLanguage || 'JavaScript'}
          </div>
          <div className="text-xs text-gray-600">主要语言</div>
        </div>
      </div>

      {/* Language Distribution */}
      {stats.languages && stats.languages.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">编程语言分布</h4>
          <div className="space-y-2">
            {stats.languages.slice(0, 5).map((lang, index) => (
              <div key={lang.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color || '#6B7280' }}
                  ></div>
                  <span className="text-sm text-gray-700">{lang.name}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {lang.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Update Info */}
      <div className="text-center pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          数据来源: WakaTime API | 最后更新: {new Date().toLocaleString('zh-CN')}
        </p>
        {stats._isMockData && (
          <p className="text-xs text-yellow-600 mt-1">
            * 当前显示为演示数据
          </p>
        )}
      </div>
    </div>
  )
}
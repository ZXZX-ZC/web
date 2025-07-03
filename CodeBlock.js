'use client'

import { useState } from 'react'
import { Copy, Check, Code } from 'lucide-react'

export default function CodeBlock({ 
  code, 
  language = 'javascript', 
  title = '',
  showLineNumbers = true,
  className = '' 
}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const lines = code.split('\n')

  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            {title || language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
        >
          {copied ? (
            <Check className="w-3 h-3 text-green-400" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
          {copied ? '已复制' : '复制'}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm">
          <code className="text-gray-100 font-mono">
            {showLineNumbers ? (
              <div className="table w-full">
                {lines.map((line, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell text-gray-500 select-none w-8 pr-4 text-right">
                      {index + 1}
                    </div>
                    <div className="table-cell">
                      {line || '\u00A0'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
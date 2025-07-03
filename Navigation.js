'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, MessageSquare, User } from 'lucide-react'

const navigation = [
  { name: '首页', href: '/', icon: Home },
  { name: '课程练习', href: '/exercises', icon: BookOpen },
  { name: 'AI问答', href: '/qanything', icon: MessageSquare },
  { name: '关于', href: '/about', icon: User },
]

export default function Navigation({ className = '', mobile = false }) {
  const pathname = usePathname()

  const linkClass = mobile 
    ? "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
    : "nav-link flex items-center gap-2"

  return (
    <nav className={className}>
      {navigation.map((item) => {
        const isActive = pathname === item.href || 
          (item.href !== '/' && pathname.startsWith(item.href))
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`${linkClass} ${isActive ? 'nav-link-active' : ''}`}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
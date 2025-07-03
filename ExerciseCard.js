import Link from 'next/link'
import { Play, Github, Star, Clock } from 'lucide-react'

export default function ExerciseCard({ exercise }) {
  const { 
    id, 
    title, 
    description, 
    difficulty, 
    duration, 
    skills = [], 
    demoUrl,
    githubUrl,
    category 
  } = exercise

  const getDifficultyColor = (level) => {
    switch (level) {
      case '初级':
        return 'bg-green-100 text-green-700'
      case '中级':
        return 'bg-yellow-100 text-yellow-700'
      case '高级':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'html-css':
        return 'from-orange-500 to-red-500'
      case 'javascript':
        return 'from-yellow-500 to-orange-500'
      case 'react':
        return 'from-blue-500 to-purple-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header with gradient */}
      <div className={`h-3 bg-gradient-to-r ${getCategoryColor(category)}`}></div>
      
      <div className="p-6">
        {/* Title and badges */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-3">
            {title}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 3).map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{skills.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {demoUrl && (
            <Link
              href={demoUrl}
              className="btn-primary flex items-center gap-2 text-sm flex-1 justify-center"
            >
              <Play className="w-4 h-4" />
              演示
            </Link>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-sm px-4"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
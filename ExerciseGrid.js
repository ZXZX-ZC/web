import ExerciseCard from './ExerciseCard'

export default function ExerciseGrid({ 
  exercises = [], 
  className = "",
  emptyMessage = "暂无练习项目" 
}) {
  if (exercises.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gray-400 text-lg mb-2">
          📝
        </div>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {exercises.map((exercise, index) => (
        <ExerciseCard 
          key={exercise.id || index} 
          exercise={exercise}
        />
      ))}
    </div>
  )
}
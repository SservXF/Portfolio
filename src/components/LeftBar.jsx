import React from 'react'
import { GITHUB_ICON_PATH, LINKEDIN_ICON_PATH } from '../constants/socialIcons'

function LeftBar() {
  return (
    <div className="flex justify-center items-center gap-4 p-4 md:fixed md:h-screen md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-16 md:flex-col md:bg-gray-900">
      <a
        href="https://github.com/SservXF"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d={GITHUB_ICON_PATH}/>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/servan-yazici"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600 transition-colors"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d={LINKEDIN_ICON_PATH}/>
        </svg>
      </a>
    </div>
  )
}

export default LeftBar
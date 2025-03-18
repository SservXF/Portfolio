import React from 'react'
import { GITHUB_ICON_PATH, LINKEDIN_ICON_PATH } from '../constants/socialIcons'

function LeftBar() {
  return (
    <div className="fixed md:left-0 md:top-1/2 md:-translate-y-1/2 bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 flex md:flex-col gap-4 md:justify-center md:items-center md:w-16 p-2">
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
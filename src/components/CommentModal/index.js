import React from 'react'
import styles from './comment.module.css'

const CommentModal = () => {
  return (

    <div id="drawer-bottom-example" className={`overflow-y-auto fixed z-40 p-4 w-full bg-white dark:bg-gray-800 right-0 bottom-0 ${styles.commentShadow}`}>
      <h5 id="drawer-bottom-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Bottom drawer</h5>
      <p className="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
      <a href="#" className="py-2 px-4 mr-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
      <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access</a>
    </div>

  )
}

export default CommentModal
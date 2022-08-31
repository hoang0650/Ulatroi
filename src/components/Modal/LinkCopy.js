import React, { useState, memo, useImperativeHandle } from 'react'


const LinkCopy = (props) => {
  const {link} = props;

  const onCopyText = (e) => {
    e.preventDefault();
    var textField = document.createElement('textarea');
    textField.innerText = link;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <div>
      <div className="flex">
        <input type="text" readOnly className="outline-none rounded-none rounded-l-lg bg-gray-50 borde focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark: text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={link} />
        <button className="cursor-pointer inline-flex items-center px-3 text-sm text-gray-900  rounded-r-md border border-gray-300 " onClick={onCopyText}>
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default memo(LinkCopy);
import React, {Fragment, useRef} from 'react'
import { Dialog, Transition, } from '@headlessui/react'
import styles from './ModalBottom.module.css'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline'

const ModalBottom = (props) => {
  const {show, setShow, title} = props
  const cancelButtonRef = useRef(null);
  return (


<Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={` fixed z-40 w-full bg-white dark:bg-gray-800 right-0 bottom-0 ${styles.commentShadow} max-h-[60%]`}>
                {/* <div className={`overflow-y-auto fixed z-40 p-4 w-full bg-white dark:bg-gray-800 right-0 bottom-0 ${styles.commentShadow}`}> */}
                  <div className={`grid grid-cols-12 place-items-center fixed w-full items-center py-2 bg-white ${styles.bgShadow}`}>
                    <div className=' col-span-2 flex'>
                      <h5 className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
                        <XIcon onClick={() => setShow(false)} className='w-5 h-5' ref={cancelButtonRef}/>
                      </h5>
                    </div>
                    <div className='col-span-8 text-center'>
                      <div className='text-gray-500'>{title}</div>
                    </div>
                    <div className='col-span-2'></div>
                  </div>
                  <div className='mt-10 max-h-[400px] overflow-y-auto'>
                    {props.children}
                  </div>
                  
                {/* </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalBottom
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'

const Modal = ({ title, open, setOpen, children }) => {
  const cancelButtonRef = useRef()

  function closeModal() {
    setOpen(false)
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-50 p-4 overflow-y-auto bg-red-100 bg-opacity-95"
        initialFocus={cancelButtonRef}
        static
        open={open}
        onClose={closeModal}
      >
        <div className="min-h-screen flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {title && (
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium mb-4 leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
              )}

              <div>{children}</div>

              <div className="mt-4">
                <button type="button" className="btn" onClick={closeModal}>
                  Got it, thanks!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal

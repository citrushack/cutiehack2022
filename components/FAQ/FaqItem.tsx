import { MdExpandMore } from 'react-icons/md'
import { useState } from 'react'
import styles from './faq.module.css'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div
      className={`mb-4 ${styles['faq-wrapper']} w-full border border-solid rounded-md`}
      onClick={() => setOpen(!isOpen)}
    >
      <div className="flex items-center px-5 py-1.5">
        <MdExpandMore
          size={'30'}
          className={
            'mr-3 transform-gpu transition-transform duration-200 ' +
            `${isOpen ? 'scale-y-neg1' : ''}`
          }
        />
        <h1 className="font-bold my-2.5">{question}</h1>
      </div>
      <div
        className={
          'transition-size overflow-hidden duration-500 h-full' +
          ` ${isOpen ? 'max-h-96' : 'max-h-0'}`
        }
      >
        <div className="p-5">
          <p className="text-left">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqItem

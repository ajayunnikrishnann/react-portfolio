import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-4xl'>Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{ opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 1}}
                className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-teal-500'>{experience.year}</p>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration: 1}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold text-cyan-200'>
                        {experience.role}-{" "}
                        <span className='text-sm text-cyan-400'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        {experience.technologies.map((tech,index)=>(
                            <span key={index} className='inline-block mr-2 mb-1 mt-1  rounded bg-neutral-600 px-1 py-1 text-sm 
                            font-medium text-cyan-400'>{tech}</span>
                        ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

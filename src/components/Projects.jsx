import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 0.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{ opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1}}
            className='w-full lg:w-1/4'>
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title} 
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 1}}
            className='w-full max-w-xl lg:w-3/4'> 
              <h6 className='mb-2 font-semibold'>
                {project.title}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='ml-7 text-blue-500 hover:underline'
                  >
                    Live Link
                  </a>
                )}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='ml-7 text-cyan-400 hover:underline'
                >
                  GitHub
                </a>
              </h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className='inline-block mr-2 mb-1 mt-1 rounded bg-neutral-600 px-1 py-1 text-sm 
                             font-medium text-cyan-400'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

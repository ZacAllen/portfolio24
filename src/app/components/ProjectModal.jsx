'use client'
import React, { useState, useEffect, useContext } from 'react'
import { motion, useAnimate } from 'motion/react'
import { Modal, Typography, Button, styled, CircularProgress, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { projects } from '@/utils/helpers/projectsConfig'
import { DarkModeContext } from '@/utils/helpers/DarkModeContext'

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledContainer = styled('div')(({ theme, bgColor }) => ({
  background: `${bgColor}`,
}))

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 0,
  right: 0,
})

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.mainFont,
  fontSize: '3rem',
  color: 'white',
}))

const ProjectModal = ({ open, setOpen, projectName }) => {
  const [scope, animate] = useAnimate()
  const [project, setProject] = useState({})
  const { background } = useContext(DarkModeContext)
  console.log('*** BFG', background)

  useEffect(() => {
    setProject(projects.find((proj) => proj.name === projectName))
  }, [projectName])

  console.log('*** Project', project, projectName)

  useEffect(() => {
    // animate(scope.current, { translateY: "100vh" }, { ease: "linear", duration: 0.2 });
  }, [open])

  const closeModal = () => {
    // animate(scope.current, { translateY: "0vh" }, { ease: "linear", duration: 0.2 }).then(() => {
    setOpen(false)
    // });
  }

  return (
    <>
      <StyledModal open={open} onClose={() => closeModal()}>
        <motion.div ref={scope}>
          <StyledContainer
            className="flex justify-center items-center relative rounded-xl p-4 lg:w-[60rem] md:w-[40rem] sm:w-[20rem] w-[16rem]"
            // bgColor={background}
            bgColor={project?.backgroundColor}
          >
            <div className="w-full text-left">
              <Title>{project?.name}</Title>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
            </div>
            <CloseButton onClick={() => closeModal()}>
              <CloseIcon sx={{ color: 'gray' }} />
            </CloseButton>
          </StyledContainer>
        </motion.div>
      </StyledModal>
    </>
  )
}

export default ProjectModal

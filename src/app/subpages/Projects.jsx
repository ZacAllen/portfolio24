'use client'
import React, { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import { useTheme, Grid, styled, Typography, useMediaQuery, Box, Divider, keyframes } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import dreamy from '@/app/assets/img/dreamybot.png'
import { motion } from 'motion/react'
import { Navigation, EffectCards, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import MCard from '../components/MCard'
import { DarkModeContext } from '@/utils/helpers/DarkModeContext'
import { useMobile } from '@/utils/helpers/MobileContext'
import { useInView } from 'react-intersection-observer'
import ProjectModal from '../components/ProjectModal'
import { projects } from '@/utils/helpers/projectsConfig'

import linkedin from '../../../public/assets/img/linkedin.webp'
import github from '../../../public/assets/img/github.png'

const ProjectsContainer = styled('div')(({ theme }) => ({
  height: '48rem',
  display: 'flex',
  maxWidth: '100vw',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    alignItems: 'baseline',
  },
  '& .swiper-3d .swiper-slide-shadow': {
    background: 'none !important',
  },
  '& .swiper-pagination': {
    bottom: '-10% !important',
  },
  '& .swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
  },
}))

const Title = styled(Typography, { shouldForwardProp: (prop) => prop !== 'darkMode' })(({ theme, darkMode }) => ({
  color: darkMode?.textColor,
  fontFamily: theme.typography.mainFont,
  fontSize: '4rem',
  lineHeight: '0.75',
  [theme.breakpoints.down('sm')]: {
    padding: 0,
    fontSize: '4rem',
  },
}))

const CurrentProjectTitle = styled(Typography, { shouldForwardProp: (prop) => prop !== 'darkMode' })(
  ({ theme, darkMode }) => ({
    color: darkMode?.textColor,
    WebkitTextStroke: '1px navy',
    fontFamily: theme.typography.mainFont,
    position: 'absolute',
    top: '22rem',
    fontSize: '2.5rem',
  }),
)

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  maxWidth: '380px',
  overflow: 'visible',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10%',
  },
}))

/**
 *
 * @param { string } rC Rotate degree coords
 * @param { number } tX Translate X (px)
 * @param { number } tY Translate Y (px)
 * @param { number } pW Window width
 * @param { number } pH Window height
 * @returns
 */
const fan = (rC, tX, tY, pW, pH, triggerAnim) => {
  const xValue = (tX / pW) * 100
  const yValue = (tY / pH) * 100

  if (triggerAnim) {
    return keyframes`
  0% {
    transform: rotate(0deg) translate(-50%, 0%);
    opacity: 0;
  }
  100% {
    transform: rotate(${rC}) translateX(${xValue}vw) translateY(${yValue}vh);
    opacity: 1;
  }  
`
  }
}

const animTime = `0.5s`

const CardContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'pageWidth' && prop !== 'pageHeight' && prop !== 'triggerAnim',
})(({ theme, pageWidth, pageHeight, triggerAnim }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  position: 'relative',
  marginBottom: '12rem',
  '& .mCard': {
    opacity: '0',
    maxWidth: 'calc(22% - 20px)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    '&:hover': {
      zIndex: '99 !important',
    },
  },
  '& .mCard:nth-child(1)': {
    zIndex: 5,
    animation: `${fan('30deg', 200, -260, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  '& .mCard:nth-child(2)': {
    zIndex: 4,
    animation: `${fan('15deg', 30, -250, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  '& .mCard:nth-child(3)': {
    zIndex: 3,
    animation: `${fan(null, 0, -150, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  '& .mCard:nth-child(4)': {
    zIndex: 2,
    animation: `${fan('-15deg', -315, -340, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
  '& .mCard:nth-child(5)': {
    zIndex: 1,
    animation: `${fan('-30deg', -460, -440, pageWidth, pageHeight, triggerAnim)} ${animTime} forwards 0.3s`,
  },
}))

const Projects = () => {
  const isMobile = useMobile()
  const darkMode = useContext(DarkModeContext)

  const myCardBg = `linear-gradient(to bottom, #485A9A, #3A4634);`
  const footerIcons = [github]
  const [triggerAnim, setTriggerAnim] = useState(false)
  const [currentCard, setCurrentCard] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const { ref, inView } = useInView({})
  const isTablet = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    // ** Just do initial animation on scroll-in for now
    if (inView === true) setTriggerAnim(true)
  }, [inView])

  const handleProjectModalOpen = (open) => {
    console.log('*** ', open)
    setModalOpen(open)
  }

  const pageWidth = 1920
  const pageHeight = 1080
  const projectCards = projects.map((proj) => {
    return (
      <div className={!isMobile && 'mCard'} key={proj.name}>
        <motion.div whileHover={{ scale: !isMobile && 1.1 }}>
          <div onClick={() => handleProjectModalOpen(true)}>
            <MCard
              setCurrentCard={setCurrentCard}
              isGroup
              title={proj.name}
              image={proj.image}
              type={proj.typeline}
              background={proj.backgroundColor}
              description={proj.shortDesc}
              // flavorText={flavorText}
              footerIcons={footerIcons}
              footerText={proj.footerText}
            />
          </div>
        </motion.div>
      </div>
    )
  })

  return (
    <>
      <ProjectModal open={modalOpen} setOpen={setModalOpen} projectName={currentCard} />
      <Title id="projects" darkMode={darkMode}>
        Projects
      </Title>
      <ProjectsContainer>
        {isMobile ? (
          <div className="w-full mt-8">
            <StyledSwiper
              effect={'cards'}
              pagination={true}
              grabCursor={true}
              modules={[EffectCards, Navigation, Pagination, A11y]}
            >
              {projectCards.map((card) => (
                <SwiperSlide>{card}</SwiperSlide>
              ))}
            </StyledSwiper>
          </div>
        ) : (
          <CardContainer pageHeight={pageHeight} pageWidth={pageWidth} triggerAnim={triggerAnim} ref={ref}>
            {projectCards.map((card) => card)}
            <CurrentProjectTitle darkMode={darkMode}>{currentCard}</CurrentProjectTitle>
          </CardContainer>
        )}
      </ProjectsContainer>
    </>
  )
}

export default Projects

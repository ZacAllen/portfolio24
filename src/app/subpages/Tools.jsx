'use client'
import { useTheme, styled, Typography } from '@mui/material'
import { DarkModeContext } from '@/utils/helpers/DarkModeContext'
import { useContext, useState } from 'react'
import { AnimatePresence, motion, useAnimate } from 'motion/react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  JavaScript,
  Java,
  Jira,
  Mui,
  Node,
  p5js,
  Processing,
  ReactImg,
  NextJS,
  Tailwind,
  TypeScript,
  Bootstrap,
  CSS3,
  Gatsby,
  Git,
  Growthbook,
  HTML5,
} from '../../utils/helpers/skillsConfig'
import { Autoplay, EffectFade } from 'swiper/modules'

const imgArray = {
  languages: [
    { name: 'JavaScript', url: JavaScript },
    { name: 'TypeScript', url: TypeScript },
    { name: 'HTML5', url: HTML5 },
    { name: 'CSS3', url: CSS3 },
    { name: 'Java', url: Java },
    { name: 'Processing', url: Processing },
    { name: 'p5js', url: p5js },
  ],
  tools: [
    { name: 'git', url: Git },
    { name: 'React', url: ReactImg },
    { name: 'NextJS', url: NextJS },
    { name: 'Node', url: Node },
    { name: 'TailwindCSS', url: Tailwind },
    { name: 'Bootstrap', url: Bootstrap },
    { name: 'Gatsby', url: Gatsby },
    { name: 'Material UI', url: Mui },
    { name: 'Jira', url: Jira },
    { name: 'Growthbook', url: Growthbook },
  ],
}

const Tools = ({ isMobile }) => {
  const { isDarkMode, textColor, lighttext, darktext } = useContext(DarkModeContext)

  const SliderImage = styled(Image)({})

  const SlideText = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.textFont,
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: textColor,
  }))

  const createSlides = (key) => {
    return imgArray?.[key].map((img) => (
      <SwiperSlide className="!flex flex-col justify-center items-center">
        <SliderImage
          src={img.url}
          height={0}
          width={0}
          alt=""
          style={{
            maxWidth: '80%',
            maxHeight: '75px',
            width: 'auto',
          }}
        ></SliderImage>
        <SlideText>{img.name}</SlideText>
      </SwiperSlide>
    ))
  }

  const createList = (key) => {
    return (
      <div className="yo">
        {imgArray?.[key].map((img) => (
          <div className="flex items-center flex-row">
            <div>
              <Image width={50} src={img?.url} />
            </div>
            <SlideText>{img?.name}</SlideText>
          </div>
        ))}
      </div>
    )
  }

  const ToolsTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    fontSize: '4rem',
    color: textColor,
  }))
  const Tooltip = styled('p')(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      margin: 0,
    },
    margin: '0 0 0 2rem',
  }))
  const Languages = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.mainFont,
    color: textColor,
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    cursor: 'pointer',
  }))

  const StyledSwiper = styled(Swiper)(({ theme }) => ({
    maskImage: `linear-gradient(90deg, transparent 1%, black 5%, black 95%, transparent 99%)`,
  }))

  const [languagesScope, langaugesAnim] = useAnimate()
  const [toolsScope, toolsAnim] = useAnimate()
  const [showSliderL, setShowSliderL] = useState(true)
  const [showSliderA, setShowSliderA] = useState(true)

  const handleToolsList = (e) => {
    if (e.target.id === 'lang') {
      langaugesAnim(languagesScope.current, {}, { duration: 0.5 })
      setShowSliderL(false) //!add timer before setting state
    } else if (e.target.id === 'tool') {
      toolsAnim(toolsScope.current, {}, { duration: 0.5 })
      setShowSliderA(false)
    }
  }

  return (
    <div className="my-32">
      <div className="mb-16">
        <ToolsTitle>My Tools</ToolsTitle>
        <Tooltip className="">* Click for list view</Tooltip>
      </div>
      <div className="mb-2">
        <Languages id="lang" onClick={(e) => handleToolsList(e)}>
          Programming Languages *
        </Languages>
      </div>
      <div className="relative mb-16">
        <AnimatePresence>
          {showSliderL ? (
            <motion.div ref={languagesScope} exit={{ opacity: 0 }}>
              <StyledSwiper
                className="swiper-transition"
                freeMode={true}
                slidesPerView={isMobile ? 3 : 6}
                direction="horizontal"
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false, //! May have to change this for accessibility
                }}
                speed={1800}
                loop={true}
              >
                {createSlides('languages')}
              </StyledSwiper>
            </motion.div>
          ) : (
            <motion.div>
              <div>{createList('languages')}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mb-2">
        <Languages id="tool" onClick={(e) => handleToolsList(e)}>
          Tools & Frameworks *
        </Languages>
      </div>
      <div className="relative mb-16">
        <AnimatePresence>
          {showSliderA ? (
            <motion.div ref={toolsScope}>
              <StyledSwiper
                className="swiper-transition"
                freeMode={true}
                slidesPerView={isMobile ? 3 : 7}
                direction="horizontal"
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  reverseDirection: true,
                  disableOnInteraction: false, //! May have to change this for accessibility
                }}
                speed={1800}
                loop={true}
              >
                {createSlides('tools')}
              </StyledSwiper>
            </motion.div>
          ) : (
            <motion.div>
              <div>{createList('tools')}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tools

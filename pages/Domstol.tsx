import React from 'react'
import ConvictedPercent from '../components/slides/domstol/ConvictedPercent'
import Introduction from '../components/slides/domstol/Introduction'
import AboutUs from '../components/slides/domstol/AboutUs'
import HairyGoals from '../components/slides/domstol/HairyGoals'
import ImportantCompetency from '../components/slides/domstol/ImportantCompetency'
import NumberSlide from '../components/slides/domstol/NumberSlide'
import VideoSlideDA from '../components/slides/domstol/VideoSlideDA'
import VideoSlideTech from '../components/slides/domstol/VideoSlideTech'
import VideoSlideWebstep from '../components/slides/domstol/VideoSlideWebstep'

const Domstol = () => {
    return (
        <>
            <Introduction />
            <ImportantCompetency/>
            <ConvictedPercent />
            <HairyGoals />
            <AboutUs />
            <NumberSlide/>
            <VideoSlideDA />
            <VideoSlideWebstep />
            <VideoSlideTech />
        </>
    )
}

export default Domstol

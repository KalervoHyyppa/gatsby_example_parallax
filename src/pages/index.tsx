import React, { useRef } from "react"
import type { HeadFC } from "gatsby"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import Page1 from "../components/page_1"
import Page2 from "../components/page_2"



const IndexPage = () => {
    const parallax = useRef<IParallax>(null!)

    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} ref={parallax}>
            <Page1 />
            <Page2 />
        </Parallax>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

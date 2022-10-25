import { ParallaxLayer } from "@react-spring/parallax"
import * as React from "react"


const Page1 = () => {
    return (

        <ParallaxLayer
            offset={0}
            speed={1}
        >
            <p>Test 1</p>
        </ParallaxLayer>
    )
}

export default Page1
import { ParallaxLayer } from "@react-spring/parallax"
import * as React from "react"


const Page2 = () => {
    return (

        <ParallaxLayer
            offset={1}
            speed={1}
        >
            <p>Test 2</p>
        </ParallaxLayer>
    )
}

export default Page2
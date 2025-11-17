import React from "react"
import { Adsense } from "../../theme"

export interface ADsProps {
    adsense?: Adsense
}

export default function ADs({ adsense }: ADsProps) {
    if (!adsense ||
        !adsense.enable) {
        return null
    }

    return (
        // <ins className="adsbygoogle"
        //     style={{display: "block", textAlign: "center"}}
        //     data-ad-layout="in-article"
        //     data-ad-format="fluid"
        //     data-ad-client={adsense.client}
        //     data-ad-slot={adsense.slot} />
        <ins className="adsbygoogle"
            style={{display: "block", textAlign: "center"}}
            {...(adsense.meta || {})}
            data-ad-client={adsense.client}
            data-ad-slot={adsense.slot} />
    )
}
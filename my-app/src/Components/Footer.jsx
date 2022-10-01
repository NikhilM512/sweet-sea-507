// import { Box } from "@chakra-ui/react"
import styles from "./Footer.module.css"

export const Footer=()=>{
    return (
        <>
           <div id={styles.upperBox}>
                <div>
                    <img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" alt="GoogleWidGrowProgram"/>
                </div>
                <div>
                    <p>Privacy & Terms</p>
                    <select name="United Kingdom" id={styles.countries}>
                        <option value="">United Kingdom</option>
                        <option value="">India</option>
                        <option value="">Asia</option>
                        <option value="">Africa</option>
                        <option value="">Australia</option>
                        <option value="">America</option>
                        <option value="">Brazil</option>
                    </select>
                </div>
            </div>
            <hr/>
            <div id={styles.bottomBox}>
                <div id={styles.LogoBox}>
                    <div><p>Share</p></div>
                    <div><img src="https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw" alt="FaceBook"/></div>
                    <div><img src="https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw" alt="twitter"/></div>
                    <div><img src="https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw" alt="LinkdIn"/></div>                    
                </div>
            </div>
        </>
    )
}
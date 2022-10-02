import { Box } from "@chakra-ui/react"
import React from "react"
import { CartContext } from "../Contexts/CartContext/CartContextProvider"
import styles from "./MyLearningPlan.module.css"


export const MyLearningPlan=()=>{

    const {state:cartData} =React.useContext(CartContext)
    console.log(cartData)

    return (
        <Box>
            <div id={styles.navbar}></div>
            <div id={styles.header}>
            <h1>My Learning Plan</h1>
            <p>Keep track of all the courses you've added. Let's get started!</p>
            </div>
            <hr />
            <div id={styles.topbar} >
            <p style={{marginBottom:"7px"}}>In Progress({cartData.length})</p>
            {/* <p>Completed(0)</p> */}
            <hr/> 
            </div>
            <hr id={styles.short} />
            <div id={styles.Emptybox}>
                {cartData.map((e)=>(
            <div >
                <img src={e.img}></img>
                <h4>{e.title}</h4>
                <p>{e.did}</p>
                <div>
                    <p>Module : {e.module}</p>
                    <p>Hours : {e.hours}</p>
                </div>
                <p>Level : {e.level}</p>
            </div>
             ))}
            </div>
            
            <div id={styles.popular_courses}>
            <div>
                <h1>Popular courses</h1>
                <p>Learn new skills with our most popular courses</p>
            </div>
            <div>
                <div id={styles.boxA}>
                <img
                    src="https://lh3.googleusercontent.com/jHVvz5HCnhayZkkNznzBmvG1Q1NOIduJe3FK9_TigCL8tQkCn6r1MMiBYVNqSJVIJhaoOSK8vRsdBjQeX9AE1Nfm6cnS8QQclvTR=s344"
                    alt="Course-1(Image)"
                />
                <hr />
                <h2>Make sure customers find you online</h2>
                <p>Created by Google</p>
                <div>
                    <div>
                    <div>
                        <img
                        src="https://cloud.bartonandgray.com/library/ux/hamburger.svg"
                        alt="Modules"
                        />
                        <p>Modules: 4</p>
                    </div>
                    <div>
                        <img
                        src="https://lh3.googleusercontent.com/xKgPheeFtf2_6f36YmZtZdGD6WaO_PUf88qJwo_jfFvFsK3LW6VypQlJ7oxdP3fR0HcQpbl7diXEGqcB5jP6TWu19NwvgvUKjgVaQA=w1296-v1-e30"
                        alt="HoursLogo"
                        />
                        <p>Hours: 3</p>
                    </div>
                    </div>
                    <div>
                    <img
                        src="https://www.datatang.ai/datatang-ai/static/image/home/right.svg"
                        alt="Arrow"
                    />
                    </div>
                </div>
                </div>
                <div id={styles.boxB}>
                <img
                    src="https://lh3.googleusercontent.com/DbIXNJ6ggUxjEMDBpkVR-TcxiY5I-7thbaXUzz4ye9Vo_tupqFHriwhBjynAW2ZrnoZvC7VWNK7pxzsXbZHP2mMgOd2gMev5tSVytA=s344"
                    alt="Course-2(Image)"
                />
                <hr />
                <h2>How to enhance and protect your online campaign</h2>
                <p>Created by Google</p>
                <div>
                    <div>
                    <div>
                        <img
                        src="https://cloud.bartonandgray.com/library/ux/hamburger.svg"
                        alt="Modules"
                        />
                        <p>Modules: 12</p>
                    </div>
                    <div>
                        <img
                        src="https://lh3.googleusercontent.com/xKgPheeFtf2_6f36YmZtZdGD6WaO_PUf88qJwo_jfFvFsK3LW6VypQlJ7oxdP3fR0HcQpbl7diXEGqcB5jP6TWu19NwvgvUKjgVaQA=w1296-v1-e30"
                        alt="HoursLogo"
                        />
                        <p>Hours: 7</p>
                    </div>
                    </div>
                    <div>
                    <img
                        src="https://www.datatang.ai/datatang-ai/static/image/home/right.svg"
                        alt="Arrow"
                    />
                    </div>
                </div>
                </div>
                <div id={styles.boxC}>
                <img
                    src="https://lh3.googleusercontent.com/s40RhwlQAFPM_y7ODSiA5VH6Lhjrltnh-tz295OydaXWGxU8ujKtEEAuM7qsJkrMThodotQEjqCRPJpr724puF4OXkb4vNOysdWW6w=s344"
                    alt="Course-3(Image)"
                />
                <hr />
                <h2>Get a business online</h2>
                <p>Created by Google</p>
                <div>
                    <div>
                    <div>
                        <img
                        src="https://cloud.bartonandgray.com/library/ux/hamburger.svg"
                        alt="Modules"
                        />
                        <p>Modules: 7</p>
                    </div>
                    <div>
                        <img
                        src="https://lh3.googleusercontent.com/xKgPheeFtf2_6f36YmZtZdGD6WaO_PUf88qJwo_jfFvFsK3LW6VypQlJ7oxdP3fR0HcQpbl7diXEGqcB5jP6TWu19NwvgvUKjgVaQA=w1296-v1-e30"
                        alt="HoursLogo"
                        />
                        <p>Hours: 3</p>
                    </div>
                    </div>
                    <div>
                    <img
                        src="https://www.datatang.ai/datatang-ai/static/image/home/right.svg"
                        alt="Arrow"
                    />
                    </div>
                </div>
                </div>
            </div>
            <p>Browse all our online courses</p>
            </div>

            <div id={styles.footer}>
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
            </div>
        </Box>
    )
}
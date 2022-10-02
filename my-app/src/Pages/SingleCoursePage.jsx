import { Box } from "@chakra-ui/react"
import React from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext/CartContextProvider"
import { CourseContext } from "../Contexts/CourseContext/CourseContextProvider"
import styles from "./SingleCoursePage.module.css"

export const SingleCourse=()=>{

const {state:courseDetails} =React.useContext(CourseContext)
const {state:cartData,dispatch} =React.useContext(CartContext)
console.log(courseDetails)
const [click,setClick] =React.useState(false)

    const gotoCart=()=>{
        // console.log(e);
        dispatch({"type":"Click","payload":courseDetails})
        setClick(true)
    }

    console.log(cartData)
    if(click){
        return <Navigate to="/in_progess"></Navigate>
    }

    return(
        <Box>
            <div id={styles.navbar}></div>
            <div id={styles.page}>
                <div id={styles.header}>
                    <div id={styles.desc} style={{textAlign:"start"}}>
                    <img
                        src="https://www.compuingles.com.mx/web/image/1505/certifGoogle.png"
                        alt="main"
                    />
                    <h1>{courseDetails.title}</h1>
                    <p>{courseDetails.did}
                        {/* Learn the fundamentals of digital marketing to help your business or
                        career. */}
                    </p>
                    <div id={styles.partners}>
                        <img
                        src="https://lh3.googleusercontent.com/AOdoe_LSe2wBSRwQDyWtxaDNd_CSePZYf4-3_DnxkiTIJhYe9h6tCX6NTWUAVZ7Hhs7WtaGEAyQgarf2y6A0Z6IkA2MGGDd6HfdylMU"
                        alt="a"
                        />
                        <img
                        src="https://lh3.googleusercontent.com/6XAPotSz8eU23ifrhBBs2UCl48VhAs_8VkU1y6dfcj_geDq4JTsNxhE28rdKyMLbje8K2kcY3wN2uIloix6KEfMnNcMV9oW24HU_Cw"
                        alt="s"
                        />
                        <img
                        src="https://lh3.googleusercontent.com/CZXtwALfzAOA9JuGXXCYPxAVNxOre0VCg8JXZUXbiakHXB7dazKiCmM1l7SVIbMcl0N1AuJKiuzzB0jtVLDjq18Iy9NP4DiX-UUyC7I"
                        alt="f"
                        />
                    </div>
                    <Link to="/in_progess"><a><button id={styles.startCourse} onClick={gotoCart}>Start course</button></a></Link>
                    </div>
                    <div style={{marginLeft:"25px",borderRadius:"33px"}}>
                    <img
                    style={{marginLeft:"25px",borderRadius:"33px"}}
                        id={styles.course_img}
                        src={courseDetails.img}
                        alt="courseImage"
                    />
                    </div>
                </div>
                <hr />
                <div style={{backgroundColor: "#e1e1e1"}} id={styles.content}>
                    <div>
                    <h3 style={{color: "#5f6368", fontSize: "12px", fontWeight: 550}}>
                        COURSE DETAILS
                    </h3>
                    <div id={styles.course_details}>
                        {/* <!-- <h4 id="mod"> Module 26</h4>
                        <h4 id="hrs"> Hours 40</h4>
                        <h4 id="level"> hskfdghsfd</h4>
                        <h4 id="fees"> Free</h4> --> */}
                        <div>
                        <img
                            style={{marginLeft: "15px"}}
                            src="https://cloud.bartonandgray.com/library/ux/hamburger.svg"
                            alt="module"
                        />
                        <p id={styles.mod}>Modules:- {courseDetails.module}</p>
                        </div>
                        <div>
                        <img
                            style={{
                            marginLeft: "15px",
                            marginTop: "5px",
                            width: "13%",
                            height:" 5%",
                            }}
                            src="https://agrifresh.ca/wp-content/uploads/2018/02/icon-on-time-300x277.png"
                            alt="hrs"
                        />
                        <p style={{marginTop: "5px", marginLeft: "15px"}} id={styles.hrs}>
                           Hours:- {courseDetails.hours} hrs
                        </p>
                        </div>
                        <div>
                        <img
                            style={{marginLeft: "15px"}}
                            src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/level-beginner.svg"
                            alt="begginer"
                        />
                        <p id={styles.level}>Level:- {courseDetails.level}</p>
                        </div>
                        <div>
                        <img
                            style={{marginLeft: "15px"}}
                            src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/free-course.svg"
                            alt="free"
                        />
                        <p id={styles.fees}>Price:- {courseDetails.price}</p>
                        </div>
                        {/* <!-- <p>Module:26</p>
                        <p>Module:26</p>
                        <p>Module:26</p>
                        <p>Module:26</p> --> */}
                    </div>
                    </div>
                    <div id={styles.features}>
                    <h4
                        style={{
                        color: "#5f6368",
                        fontSize: "12px",
                        fontWeight: 550,
                        fontWeight: 550,
                        }}
                    >
                        COURSE FEATURES
                    </h4>
                    <span>
                        <div>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="d"
                        />
                        <h4>Self Placed learning</h4>
                        </div>
                        <div>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="d"
                        />
                        <h4>Video tutorials</h4>
                        </div>
                        <div>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="o"
                        />
                        <h4>Unlimited access</h4>
                        </div>
                        <div>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="b"
                        />
                        <h4>Recognised certificate</h4>
                        </div>
                    </span>
                    </div>
                    <div id={styles.about}>
                    <h1
                        style={{
                        color: "#424242",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "lighter",
                        }}
                    >
                        About this course
                    </h1>
                    <p style={{lineHeight: "33px",fontSize: "17px", marginTop: "25px"}}>
                        Master the basics of digital marketing with our free course
                        accredited by Interactive Advertising Bureau Europe and The Open
                        University. There are 26 modules to explore, all created by google
                        trainers, packed full of practicle exercises and real-world examples
                        to help you turn knowledge into action
                    </p>
                    </div>
                </div>
                <hr />
                <h1
                    style={{
                    textAlign: "center",
                    fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial,sans-serif",
                    color: "#5f6368",
                    marginTop:" 33px",
                    fontWeight: "lighter",
                    }}
                >
                    Why get Certificate
                </h1>
                <div id={styles.certificate}>
                    <div id={styles.cert}>
                    <img
                        src="https://lh3.googleusercontent.com/REeaiWLcRwALbGrxPRgHgZey_feHsjPUYHlmTdMqZgAVSnnvza_sJkyTm861GoUnRI16lXueSCQTToGLur-_jvaZVMka4wSoRMs2eA"
                        alt="Certificate"
                    />
                    </div>
                    <div id={styles.questions}>
                    <div>
                        <h1>
                        Improve Your CV</h1>
                        {/* <button type="button" className={styles.stylescollapsible}>⌄</button> */}
                        <h1>
                        <div className={styles.content}>
                                <p>Getting a certificate shows employers that you have a clear understanding of the core concepts of digital marketing. You can also add the qualification to your CV, and easily upload it to your LinkedIn profile.</p>
                            </div>
                            </h1>
                    </div>
                    <hr />
                    <div>
                        <h1>
                        Find A Job 
                        {/* <button type="button" className={styles.stylescollapsible} >⌄</button> */}
                        </h1>
                    </div>
                    <hr />
                    <div>
                        <h1>
                        Develop Your Career
                        {/* <button
                            type="button"
                            className={styles.stylescollapsible}
                        ></button> */}
                        </h1>
                    </div>
                    </div>
                </div>
                <hr />
                <h1 id={styles.how} style={{marginBottom: "20px"}}>How it works</h1>
                <div style={{backgroundColor: "#e1e1e1"}} className={styles.how_it_works}>
                    <div>
                    <img
                        className={styles.steps}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/768px-Eo_circle_blue_number-1.svg.png"
                        alt="q"
                    />
                    <p style={{fontSize: "17px", marginTop: "22px", color: "#424242"}}>
                        Learn new skills with our bite-sized video tutorials, <br />
                        then test your knowledge with a quick quiz.
                    </p>
                    </div>
                    <div>
                    <img
                        className={styles.steps}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/768px-Eo_circle_blue_number-2.svg.png"
                        alt="b"
                    />
                    <p style={{fontSize: "17px", marginTop: "22px", color: "#424242"}}>
                        Pass the final 40-question exam and get certified.
                    </p>
                    </div>
                    <div>
                    <img
                        className={styles.steps}
                        style={{height: "80px", width: "80px"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Eo_circle_blue_number-3.svg/768px-Eo_circle_blue_number-3.svg.png"
                        alt="d"
                    />
                    <p
                        style={{fontSize: "17px", marginTop: "22px", color: "#424242",marginLeft: "25px"}}
                    >
                        Download and showcase your new qualification on LinkedIn and your
                        CV.
                    </p>
                    </div>
                </div>
                <div id={styles.last}>
                    <h1 id={styles.modu}>Modules</h1>
                    <div className={styles.modules}>
                    <div>
                        <img
                        id={styles.nmod_img}
                        src="https://lh3.googleusercontent.com/7nId5qqZMpCWyJRM7Ug8wiVAOaWOPlkIjnzHXHOdwZG2DA7jQ9ze8Mv4PnPiOCWYiZnKS6qwGffTR0gJuZlZb6_39ZExnkz7AAZfmL8"
                        alt="h"
                        />
                        <h5 style={{fontSize: "16px",color: "#424242"}}>
                        The online opportunity
                        </h5>
                        <p style={{fontSize: "12px", color: "gray", marginBottom: "-66px"}}>
                        2 Lessons/15Minuts
                        </p>
                        <hr />
                        <p style={{color: "#1a73e8"}}>Intro to the digital garage</p>
                        <p style={{color: "#1a73e8"}}>Your digital librerary</p>
                    </div>
                    <div>
                        <img
                        id={styles.mod_img}
                        src="https://lh3.googleusercontent.com/8Wmxu9zJjs9gB-vvs9APmySY3l3kT_Be_dUn2NCpRYR8IeoSNADyes7--T_dWW_Lq9uudKZKwDhPQSVA8lLNjlvnx4Z3UDLcRac-Znw"
                        alt="s"
                        />
                        <h5 style={{fontSize: "16px",color: "#424242"}}>
                        Your first step in online success
                        </h5>
                        <p style={{fontSize: "12px", color: "gray", marginBottom: "-66px"}}>
                        4 Lessons/30 Minuts
                        </p>
                        <hr />
                        <p style={{color: "#1a73e8"}}>Your Online Goals</p>
                        <p style={{color: "#1a73e8"}}>Building your online presence</p>
                        <p style={{color: "#1a73e8"}}>Marketing your online presence</p>
                        <p style={{color: "#1a73e8"}}>Analys and adopt</p>
                    </div>
                    <div>
                        <img
                        id={styles.mod_img}
                        src="https://lh3.googleusercontent.com/BO5E8aQODXSUk8cvfSRBTv0p4KdjSIh525VZF-_7PwkwU_bY_0Fo1wOcH3F1wvHMCNd-E3u3Z83v2czcCHeVm5uFMQvRohn19z0N-w"
                        alt="d"
                        />
                        <h5 style={{fontSize: "16px", color: "#424242"}}>
                        Build your web presence
                        </h5>
                        <p style={{fontSize:" 12px", color: "gray", marginBottom: "-66px"}}>
                        6 Lessons/40 Minuts
                        </p>
                        <hr />
                        <p style={{color: "#1a73e8"}}>Choosing your online presence</p>
                        <p style={{color: "#1a73e8"}}>How website works</p>
                        <p style={{color: "#1a73e8"}}>Key website ingredients</p>
                        <p style={{color: "#1a73e8"}}>Website and your business goals</p>
                        <p style={{color: "#1a73e8"}}>Make your wesite easy to use</p>
                    </div>
                    <div>
                        <img
                        id={styles.mod_img}
                        src="https://lh3.googleusercontent.com/YmO_ZKke1ByfC4M_5fkGzwzZWSM4X7Ds6FLLVzEtthQsAjTg4owXENTM1s-qoBqJfEc9hzMNn8hflsnI7j3F0e-6oyPj5TrqJ3EPhw"
                        alt="a"
                        />
                        <h5 style={{fontSize: "16px", color: "#424242"}}>
                        Plan your online business strategy
                        </h5>
                        <p style={{fontSize: "12px", color: "gray", marginBottom: "-66px"}}>
                        5 Lessons/ 30 Minuts
                        </p>
                        <hr />
                        <p style={{color: "#1a73e8"}}>The benifits of an online strategy</p>
                        <p style={{color: "#1a73e8"}}>Taking the business online</p>
                        <p style={{color: "#1a73e8"}}>Understanding customer behaviour</p>
                        <p style={{color: "#1a73e8"}}>How to stand out from the competition</p>
                    </div>
                    </div>
                </div>
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
import { Box } from "@chakra-ui/react"
// import { Footer } from "../Components/Footer"
import styles from "./Home.module.css"
   

export const Home=()=>{
    return (
        <Box>
          
            <div id={styles.navbar}></div>

            <div id={styles.homepage}>
            <div id={styles.Topbox}>
                <div>
                <h1>Learn the skills of <br />the future</h1>
                <p>
                    Accelerate your career or business with an online <br />digital
                    skills course in everything from marketing to <br />coding and
                    beyond.
                </p>
                <button id={styles.start}>Find your course</button>
                </div>
                <div>
                <img 
                    src="https://learndigital.withgoogle.com/static/digital-workshop/assets/imgs/homepage/img_digital-workshop_hero_xs.webp"
                    alt="HomePageImage"
                />
                </div>
            </div>
            <div id={styles.box2}>
                <p>We provide courses along with leading institutions and companies</p>
                <div>
                <img
                    src="https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160"
                    alt="GoogleLogo"
                />
                <img
                    src="https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160"
                    alt="TheOpenUniversityLogo"
                />
                <img
                    src="https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160"
                    alt="iabLogo"
                />
                <img
                    src="https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160"
                    alt="FutureLearnLogo"
                />
                <img
                    src="https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160"
                    alt="couseraLogo"
                />
                </div>
            </div>
            <div id={styles.box3}>
                <div>
                <div>
                    <img
                    src="https://cdn.livewebinar.com/site/img/marketing/features/audio_video/camera.png"
                    alt="ZoomLogo"
                    />
                </div>
                <div>
                    <h1>Did you know we also have webinars?</h1>
                    <p>
                    Online sessions designed to help you develop skills in less than
                    an hour. You can watch <br />webinars live or register to take
                    part in what is coming up.
                    </p>
                </div>
                </div>
                <div>
                <h3>Explore our webinars</h3>
                </div>
            </div>
            <div id={styles.box4}>
                <h1>Do things you never thought possible</h1>
                <p>
                Discover courses in topics designed to help expand your career,
                business and horizons and <br />to upgrade your skills for a new
                digital world.
                </p>
                <div id={styles.coursesBox}>
                <div>
                    <div>
                    <img
                        src="https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64"
                        alt="DiditalMarketingLogo"
                    />
                    <h2>Digital Marketing</h2>
                    <p>
                        Get Certified free of charge in our 'Fundamentals of digital
                        marketing' courses,or expore other content to help get your
                        business online
                    </p>
                    </div>
                    <div>
                    <img
                        className={styles.Arrow}
                        src="https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969917-3-right_78909.png"
                        alt="ArrowImage"
                    />
                    </div>
                </div>
                <div>
                    <div>
                    <img
                        src="https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64"
                        alt="CareerDevlopmentlogo"
                    />
                    <h2>Career Development</h2>
                    <p>
                        Gain the skills you need to enhance your career or gain a new
                        job.
                    </p>
                    </div>
                    <div>
                    <img
                        className={styles.Arrow}
                        src="https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969917-3-right_78909.png"
                        alt="ArrowImage"
                    />
                    </div>
                </div>
                <div>
                    <div>
                    <img
                        src="https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64"
                        alt="DataLogo"
                    />
                    <h2>Data</h2>
                    <p>
                        Demand for workers with specialist data skills has more than
                        tripled over the last five years
                    </p>
                    </div>
                    <div>
                    <img
                        className={styles.Arrow}
                        src="https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969917-3-right_78909.png"
                        alt="ArrowImage"
                    />
                    </div>
                </div>
                </div>
            </div>
            <div id={styles.box5}>
                <div>
                <img
                    src="https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw"
                    alt="GettingBritainGrowingLogo"
                />
                </div>
                <div>
                <p>
                    Since 2015, we've trained over 700,000 people, to help them find a
                    job, grow their career or<br />
                    business. Across Britain, local businesses, communities and people
                    are using Google tools and <br />training to thrive. Discover how
                    Google is helping the UK economy to grow.
                </p>
                <button>Explore now</button>
                </div>
            </div>
            <div id={styles.FAQsec}>
                <h1>FAQ's</h1>

                <div>
                <hr />
                <p>Who is Google Digital Garage for?</p>
                <hr />
                {/* <!-- <select>
                            <option value="Q1">Who is Google Digital Garage for?</option>
                            <option value="ans1">Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!</option>
                        </select> --> */}
                </div>
                <div>
                <hr />
                <p>Who provides the courses?</p>
                <hr />
                </div>
                <button style={{marginTop:"7px"}}>See All FAQs</button>
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
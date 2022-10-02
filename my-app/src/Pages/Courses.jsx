import { Box } from "@chakra-ui/react"
import { CourseContext } from "../Contexts/CourseContext/CourseContextProvider";
import styles from "./Courses.module.css"
import React from "react";
import { Link, Navigate } from "react-router-dom";

export const Courses=()=>{

    const data=[
        {
            img:"https://lh3.googleusercontent.com/21Mlc_bfmIP34V4MgJMtr1S9sGbxNGVdj7ncT_jmiQNAhvqJNYwWhnOdKuY2h57SpOuaOk_aF5dAnrz0w4tbDLVy0wxZHJCUQC3y=s299",
            title:"Fundamental of digital marketing",
            did:"Created by Google",
            module:26,
            hours:40,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/s40RhwlQAFPM_y7ODSiA5VH6Lhjrltnh-tz295OydaXWGxU8ujKtEEAuM7qsJkrMThodotQEjqCRPJpr724puF4OXkb4vNOysdWW6w=s299",
            title:"Get a Bussiness Online",
            did:"Created by Google",
            module:7,
            hours:7,
            level:"Intermediate",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/jHVvz5HCnhayZkkNznzBmvG1Q1NOIduJe3FK9_TigCL8tQkCn6r1MMiBYVNqSJVIJhaoOSK8vRsdBjQeX9AE1Nfm6cnS8QQclvTR=s299",
            title:"Make sure customers find you online",
            did:"Created by Google",
            module:4,
            hours:3,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/MivLrLy4ftKvhLd50wEBg97R5cTOJwlNsNR3EY9Ufpsb4HsNJhjUHc7aNFk-TUP-fFgFoC7cOVbs_XJownovu_OjaXO5qBgu_cEzcv8=s299",
            title:"Promote a business with online advertising",
            did:"Created by Google",
            module:5,
            hours:3,
            level:"Advance",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/osGU8wu8smh2rRagLrMz00riN7bjEpeNPiyw_hGes-gikvJE1EidiLpGQApVEoon3acem0B6LmGEthGQQO3GDePl9-NkneVPdgMy4w=s299",
            title:"Expand the business to other coutries",
            did:"Created by Google",
            module:1,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/06tZ0JGBZsO-xYxBv2y2ulUUU152bko2dg_XGtH3d3nbB8h8e6LU8mXTDIiTtoIrNu-ATC19XXkO5bIfhoRY6QSTQIqGTk4ohFlY=s299",
            title:"Connect with customers over mobile",
            did:"Created by Google",
            module:2,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/Avj9o_7nTbPvK_uOc1Zt0KYjv15q2SGnbJnduJCHyeiQI45VqgB9zXxTlLqbaaPymPF97YoARvzlw5hFBXSmSK_I8YpsrfORQgze=s299",
            title:"Promote a business with content",
            did:"Created by Google",
            module:2,
            hours:1,
            level:"Advance",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/uspfwxuHCreMyY3SW9Y_Am3T-aQR3V1GeEIlLrju1N143hY2K3FR8bIQlAd89jhg60La69MdKoz3E0C5SLy2BJ2sHfqXo0e31TJ-=s299",
            title:"Understand customers needs and online behaviours",
            did:"Created by Google",
            module:3,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/XM54A2-qBEHBLacN-Bv-eZ41ODgKSMN0Gv0TKqBNxtYaRTWTOY37kFcgbT9IWoillafYrjA-6f3LkFmpmfcgstZ7TygLTHI6Oa0_cg=s344",
            title:"Build confidence with self-promotion",
            did:"Created by Google",
            module:1,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/DbIXNJ6ggUxjEMDBpkVR-TcxiY5I-7thbaXUzz4ye9Vo_tupqFHriwhBjynAW2ZrnoZvC7VWNK7pxzsXbZHP2mMgOd2gMev5tSVytA=s344",
            title:"How to enhance and protect your online campaign",
            did:"Created by Google",
            module:12,
            hours:7,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/IMDe00mcvV_HcBe2tKJfWQUgBzezXEuJe7eoNEO4y9fapGSYJFsH5PY2T5nBD5vgukT6pTeomd35omcGbeluWtT5Jet31E6WZgratg=s344",
            title:"Land your next job",
            did:"Created by Google",
            module:1,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
        {
            img:"https://lh3.googleusercontent.com/xSKdJKOORHnSWWLioNuqEWWosEh9BIF3WoiCXCe-VH9q06EgrkJdAtMC3CB7Ok0vK1XK5Yy1sQAz4gkI5HZcAGQSEKW89m1k8cG4=s344",
            title:"Understand the bssics of code",
            did:"Created by Google",
            module:1,
            hours:1,
            level:"Beginner",
            price:"Free",
        },
    ];

    const {dispatch,state} =React.useContext(CourseContext)
    const [click,setClick] =React.useState(false)

    const handleCourse=(e)=>{
        // console.log(e);
        dispatch({"type":"Clicked","payload":e})
        setClick(true)
    }

    console.log(state)
    if(click){
        return <Navigate to='/single_course'/>
    }

    return(
        <Box>
            <div id={styles.header}>
            <h1>Online Courses</h1>
            <p>
                Discover a range of free learning content designed to help your businees
                or in your career. <br/>You can learn by individual modules, or dive
                right in and take an entire courses end-to-end.
            </p>
            </div>

            <div id={styles.header2}>
            {/* <!-- <div>
                    <h3 id="res">Results: 161 Courses</h3>
                </div> --> */}
            <div id={styles.categories}>
                <div id={styles.first_check}>
                <h5>CATEGORIES</h5>
                <div>
                    <input type="checkbox" />
                    <p>Digital Marketing</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Career devlopment</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Data</p>
                </div>
                </div>
                <div id={styles.first_check}>
                <h5>COURSE DIFFICULTY</h5>
                <div>
                    <input type="checkbox" id={styles.beginner} />
                    <p>Beginner</p>
                </div>
                <div>
                    <input type="checkbox" id={styles.intermediate} />
                    <p>Intermediate</p>
                </div>
                <div>
                    <input type="checkbox" id={styles.advance} />
                    <p>Advance</p>
                </div>
                </div>
                <div id={styles.first_check}>
                <h5>COURSE PROVIDER</h5>
                <div>
                    <input type="checkbox" />
                    <p>Google</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Applied Digital Skills</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Coursera</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Darden School of Business, University of Virginia</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>FutureLearn</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Goodwill Community Foundation</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Google Cloud</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Grasshopper</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Great Learning</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Monash University</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>National Chiao Tung University</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>OpenClassroom</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Simplilearn</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Skillshop</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>The Open University</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Udacity</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>University of Auckland</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>University of Groningen</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>University of Helsinki</p>
                </div>
                </div>
            </div>

            <div id={styles.results}>
                {data.map((e)=>(
                    // <Link to={`/courses/${e.title}`} key={Math.random()}>
                    <div key={Math.random()} onClick={()=>handleCourse(e)}>
                        <img src={e.img}></img>
                        <h4>{e.title}</h4>
                        <p>{e.did}</p>
                        <div>
                            <p>Module : {e.module}</p>
                            <p>Hours : {e.hours}</p>
                        </div>
                        <p>Level : {e.level}</p>
                    </div>
                    // </Link>
                ))}
            </div>
            </div>

            <div id={styles.footer}>
            <div id={styles.upperBox}>
                <div>
                    <img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" alt="GoogleWidGrowProgram"/>
                </div>
                <div>
                    <p>Privacy & Terms</p>
                    <select name="countries" id={styles.countries}>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="India">India</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Australia">Australia</option>
                        <option value="America">America</option>
                        <option value="Brazil">Brazil</option>
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
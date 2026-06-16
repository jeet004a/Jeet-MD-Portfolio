'use client'
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './page.module.css';
// import Shery from 'sheryjs';
import * as THREE from 'three'
import Link from 'next/link';

// export const metadata = {
//     title: "Magic - Jeet Wasti",
// };


function Magic() {
    useEffect(() => {
        let retries = 0;

        const initShery = () => {
            try {
                window.THREE = THREE
                window.gsap = gsap
                if (!window.Shery || !window.THREE) {
                    if (retries < 50) { // Poll for up to 5 seconds (50 * 100ms)
                        retries++;
                        setTimeout(initShery, 100);
                    } else {
                        console.warn("Shery or THREE failed to load after 5 seconds. Skipping imageEffect.");
                    }
                    return;
                }
                window.Shery.imageEffect("#back", {
                    style: 5,
                    // debug: true,
                    config: {
                        "a": {
                            "value": 2,
                            "range": [
                                0,
                                30
                            ]
                        },
                        "b": {
                            "value": -0.89,
                            "range": [
                                -1,
                                1
                            ]
                        },
                        "zindex": {
                            "value": 1,//-9996999,
                            "range": [
                                -9999999,
                                9999999
                            ]
                        },
                        "aspect": {
                            "value": 1.9041980624327233
                        },
                        "ignoreShapeAspect": {
                            "value": true
                        },
                        "shapePosition": {
                            "value": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        "shapeScale": {
                            "value": {
                                "x": 0.5,
                                "y": 0.5
                            }
                        },
                        "shapeEdgeSoftness": {
                            "value": 0,
                            "range": [
                                0,
                                0.5
                            ]
                        },
                        "shapeRadius": {
                            "value": 0,
                            "range": [
                                0,
                                2
                            ]
                        },
                        "currentScroll": {
                            "value": 0
                        },
                        "scrollLerp": {
                            "value": 0.07
                        },
                        "gooey": {
                            "value": true
                        },
                        "infiniteGooey": {
                            "value": true
                        },
                        "growSize": {
                            "value": 4,
                            "range": [
                                1,
                                15
                            ]
                        },
                        "durationOut": {
                            "value": 1,
                            "range": [
                                0.1,
                                5
                            ]
                        },
                        "durationIn": {
                            "value": 1,
                            "range": [
                                0.1,
                                5
                            ]
                        },
                        "displaceAmount": {
                            "value": 0.5
                        },
                        "masker": {
                            "value": false
                        },
                        "maskVal": {
                            "value": 1,
                            "range": [
                                1,
                                5
                            ]
                        },
                        "scrollType": {
                            "value": 0
                        },
                        "geoVertex": {
                            "range": [
                                1,
                                64
                            ],
                            "value": 1
                        },
                        "noEffectGooey": {
                            "value": false
                        },
                        "onMouse": {
                            "value": 1
                        },
                        "noise_speed": {
                            "value": 0.2,
                            "range": [
                                0,
                                10
                            ]
                        },
                        "metaball": {
                            "value": 0.2,
                            "range": [
                                0,
                                2
                            ],
                            "_gsap": {
                                "id": 3
                            }
                        },
                        "discard_threshold": {
                            "value": 0.5,
                            "range": [
                                0,
                                1
                            ]
                        },
                        "antialias_threshold": {
                            "value": 0,
                            "range": [
                                0,
                                0.1
                            ]
                        },
                        "noise_height": {
                            "value": 0.5,
                            "range": [
                                0,
                                2
                            ]
                        },
                        "noise_scale": {
                            "value": 10,
                            "range": [
                                0,
                                100
                            ]
                        }
                    },
                    gooey: true
                });
            } catch (err) {
                console.error("SheryJS Error:", err);
            }
        };
        initShery();

        // Safe GSAP Text Animation
        const elems = document.querySelectorAll(".elem");
        let index = 0;
        let animating = false;

        elems.forEach((ele) => {
            const h1s = ele.querySelectorAll("h1");
            h1s.forEach((h1, i) => {
                gsap.set(h1, { top: i === 0 ? "0%" : "100%" });
            });
        });

        const mainEl = document.querySelector("#main");
        console.log('abc', mainEl)
        if (!mainEl) return;

        const handleClick = () => {
            if (animating) return;
            animating = true;

            elems.forEach((ele, idx) => {
                const h1s = ele.querySelectorAll("h1");
                const outElem = h1s[index];
                const nextIndex = index === h1s.length - 1 ? 0 : index + 1;
                const inElem = h1s[nextIndex];

                // Explicit string assignments prevent GSAP from miscalculating -= percentage operators
                gsap.to(outElem, {
                    top: "-100%",
                    ease: "expo.inOut",
                    duration: 1,
                    onComplete: () => {
                        gsap.set(outElem, { top: "100%" });
                        if (idx === elems.length - 1) {
                            animating = false;
                        }
                    },
                });
                gsap.to(inElem, {
                    top: "0%",
                    ease: "expo.inOut",
                    duration: 1,
                });
            });
            index = index === elems[0].querySelectorAll("h1").length - 1 ? 0 : index + 1;
        };

        mainEl.addEventListener("click", handleClick);

        return () => {
            mainEl.removeEventListener("click", handleClick);
        };
    }, []);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsSmallScreen(window.innerWidth < 1670);
        };

        checkScreen(); // run on load

        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    if (isSmallScreen) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Screen Not Supported</h1>
                    <p className={styles.text}>
                        This experience is designed for larger screens.
                    </p>
                    <p className={styles.subText}>
                        Please use a desktop or expand your window.
                    </p>
                </div>
            </div>
        );
    }

    return (

        <div id="main" className={styles.main}>
            <div id="back" className={styles.back}>
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
                <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
                <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img4" />
                <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" alt="img3" />
                <img src="https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img5" />
            </div>

            <div id="top" className={styles.top}>
                <div id="workinngarea" className={styles.workingarea}>
                    <div id="nav" className={styles.nav}>
                        <div id="nleft" className={styles.nleft}>
                            <Link href="/">
                                <img src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22500%22%20height%3D%22160%22%20viewBox%3D%220%200%20500%20160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ctext%20x%3D%2240%22%20y%3D%22110%22%20fill%3D%22white%22%20font-size%3D%2280%22%20font-family%3D%22Pacifico%2C%20Brush%20Script%20MT%2C%20cursive%22%20font-weight%3D%22600%22%20letter-spacing%3D%222%22%20transform%3D%22rotate(-12%20250%2080)%22%3E%0A%20%20%20%20Jeet%20Wasti%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E" alt="" />
                            </Link>
                            <a href="/about">about</a>
                            <a href="/hire">hire</a>
                            <a href="/uses">Uses</a>
                        </div>
                        <div id="nright" className={styles.nright}></div>
                    </div>

                    <div id="hero" className={styles.hero}>
                        <div id="heroleft" className={styles.heroleft}>
                            <div className="elem">
                                <h1>Jeet Wasti</h1>
                                <h1>Jeet Wasti</h1>
                                <h1>Jeet Wasti</h1>
                            </div>
                            <div className="elem">
                                <h1>Software</h1>
                                <h1>Digital Artist</h1>
                                <h1>Future Sculptor</h1>
                            </div>
                            <div className="elem">
                                <h1>Developer.</h1>
                                <h1>Vision.</h1>
                                <h1>Build.</h1>
                            </div>
                            <Link href="https://drive.google.com/file/d/1lTPcqM_DV18KyjfvvqM5YTdOF3HMfQvV/view" target='_blank'>
                                <button className={styles.button}>Download Resume</button>
                            </Link>
                        </div>

                        <div id="heroright" className={styles.heroright}>
                            {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                            <p>Experimental Visual Playground</p>
                            <div id="imagediv" className={styles.imagediv}></div>

                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> */}
                            <p>
                                This page is a creative experiment built to explore the capabilities of Shery.js. It demonstrates smooth animations, dynamic transitions, and visually engaging interactions.
                            </p>
                            <p>
                                Rather than focusing on content, the purpose here is to push the boundaries of frontend design and create immersive user experiences using modern animation techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Magic;
'use client'
import React, { useEffect, useState } from 'react'
import styles from './hero.module.css'
import Spotlight from '../Spotlight/Spotlight'
import Image from 'next/image'
import ImageBox from '../ImageBoxes/ImageBox'

import HomeLayout from '../Home Body/Home Layout/HomeLayout'
const Hero = () => {
    return (
        <div>

            {/* <div className=' mx-auto max-w-[1100px] px-4 py-20'> */}
            <div className='grid grid-cols-1 gap-6 sm:gap-10 min-[901px]:grid-cols-[1fr_380px] px-4 sm:px-6 min-[901px]:px-0'>
                <section className={`${styles.wrapper} flex flex-col items-center min-[901px]:items-start text-center min-[901px]:text-left`}>
                    <Image
                        // src="https://media.licdn.com/dms/image/v2/D5603AQEJ9NB-w1YmXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730827543441?e=1776297600&v=beta&t=KTXY73_gRe772kCR1yX6tgR0hS-ehKq6S-FQc3NPeBg"
                        src="https://avatars.githubusercontent.com/u/60826412?v=4&size=64"
                        alt="Jeet Wasti profile photo"
                        width={64}
                        height={64}
                        priority
                        className={styles.avatar}
                    // style={{ transform: `scale(${scale})` }}
                    />
                    <div className='hidden md:block'>
                        <Spotlight></Spotlight>
                    </div>
                    <div className={styles.container}>
                        <h1 className={styles.title}>
                            Software engineer, entrepreneur and musician.
                        </h1>

                        <p className={styles.subtitle}>
                            I’m Jeet Wasti, a software engineer based in Kolkata, India 📍. I love
                            to build products that are beautiful, intuitive and delightful to use.
                        </p>

                        <div className={styles.socials}>
                            <a
                                aria-label="Follow on Twitter"
                                target="_blank"
                                href="https://x.com/Jeet63503660025"
                            >
                                {/* X icon */}
                                <svg viewBox="0 0 50 50">
                                    <path d="M 5.92 6 L 20.58 27.37 L 6.23 44 L 9.41 44 L 21.99 29.42 L 31.99 44 L 44 44 L 28.68 21.67 L 42.2 6 L 39.03 6 L 27.28 19.62 L 17.93 6 Z" />
                                </svg>
                            </a>

                            <a
                                aria-label="Follow on Github"
                                target="_blank"
                                href="https://github.com/jeet004a"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486A10.039 10.039 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                                    />
                                </svg>
                            </a>

                            <a
                                aria-label="Follow on LinkedIn"
                                target="_blank"
                                href="https://www.linkedin.com/in/jeet-wasti-537838158/"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                                </svg>
                            </a>


                            <a
                                aria-label="Follow on Stack Overflow"
                                target="_blank"
                                href="https://stackoverflow.com/users/17837395/clinkratcheat"
                            >
                                <svg viewBox="0 0 64 64" aria-hidden="true">
                                    <path d="M38.949 6.992l-3.219 2.397 11.977 16.104 3.221-2.395-11.979-16.106zM31.563 13.402l-2.568 3.084 15.423 12.844 2.569-3.084-15.424-12.844zM25.654 21.773l-1.694 3.639 18.192 8.472 1.695-3.638-18.193-8.473zM22.188 30.889l-.826 3.927 19.64 4.127.825-3.926-19.639-4.128zM13.004 36.006V52h35.99V36.006h-4v12H17.004v-12h-4zM21.002 40.004v4h19.994v-4H21.002z" />
                                </svg>
                            </a>


                        </div>
                    </div>




                </section>
            </div>

            {/* </div> */}
            <div>
                <ImageBox></ImageBox>
            </div>
            {/* Below component is already created */}
            <div>
                <HomeLayout></HomeLayout>
            </div>
        </div>
    )
}

export default Hero
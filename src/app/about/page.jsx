'use client'

import Navbar from '@/components/navbar/Navbar'
import Spotlight from '@/components/Spotlight/Spotlight'
import Spotlight2 from '@/components/AboutSpotlight/Spotlight2'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

const About = () => {
  return (
    <main className={styles.main}>

      <Navbar />
      <div className={styles.spotlightWrapper}>
        <Spotlight2 />
      </div>

      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>

          <h1 className={styles.heading}>About me</h1>

          <div className={styles.text}>

            <p>
              Hey there <span className={styles.wave}>👋🏻</span> I’m Jeet Wasti, a 26-year-old who is passionate about crafting delightful experiences online.
            </p>

            <p>
              I work with the FullStack ecosystem, and I'm a big advocate of TypeScript.
            </p>

            <p>
              I wrote my first line of code at age 17 in C++, but it would be a few years before I would realize that I wanted to be a <em>software engineer</em> 🏗️.
            </p>

            <p>
              I was hooked on the idea that I could use my skills to build something that could improve the lives of millions of people around the world.
            </p>

            <p>
              Apart from this, I'm always enhancing my <em>core skill</em>.
            </p>

            <p>
              You would always find me tinkering with new technologies.
            </p>

            <p>
              Currently I am teaching myself Three.js and SVG micro-animations using framer-motion.
            </p>

            {/* <p>
              I also like to mentor newbies 👨🏻‍💻 in my free time.
            </p> */}

            <p>
              So, you’ve stumbled upon my site and thought, “I want to work with this person!” Well, I am flattered! If you’re looking for a software engineer who can code cool programs and apps, you’re in luck.
            </p>

            <p>
              Check out my{" "}
              <Link href="/hire" className={styles.link}>
                hire me
              </Link>{" "}
              page.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>

          {/* Image Card */}
          <div className={styles.imageCard}>
            <Image
              // src="https://media.licdn.com/dms/image/v2/D5603AQEJ9NB-w1YmXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730827543441?e=1776297600&v=beta&t=KTXY73_gRe772kCR1yX6tgR0hS-ehKq6S-FQc3NPeBg"
              src="/Jeet_2026.jpeg"
              alt="Jeet Profile Image"
              width={400}
              height={500}
              priority
              className={styles.profileImage}
            />
          </div>

          {/* Social Section */}
          <div className={styles.social}>
            <ul>

              {/* Twitter */}
              <li className={styles.socialItem}>
                <a href="https://twitter.com" target="_blank" className={styles.socialLink}>
                  <svg viewBox="0 0 50 50" className={styles.icon}>
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                  </svg>
                  <span>Follow on Twitter</span>
                </a>
              </li>

              {/* GitHub */}
              <li className={styles.socialItem}>
                <a href="https://github.com" target="_blank" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486A10.039 10.039 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z" />
                  </svg>
                  <span>Follow on GitHub</span>
                </a>
              </li>

              {/* LinkedIn */}
              <li className={styles.socialItem}>
                <a href="https://linkedin.com" target="_blank" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                  </svg>
                  <span>Follow on LinkedIn</span>
                </a>
              </li>

            </ul>

            <div className={styles.divider}></div>

            <a href="mailto:wastijeet110@gmail.com" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                  fillRule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                />
              </svg>
              <span>wastijeet110@gmail.com</span>
            </a>
          </div>

        </div>


        {/* <Footer></Footer> */}
      </div>
      <Footer></Footer>
    </main>
  )
}

export default About

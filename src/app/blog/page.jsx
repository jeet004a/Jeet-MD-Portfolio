import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
    title: "Blog - Jeet Wasti",
};


function Blog() {
    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.comingSoonWrapper}>
                <div className={styles.glowOrb} />
                <div className={styles.glowOrb2} />

                <div className={styles.content}>
                    <div className={styles.badge}>Coming Soon</div>
                    <h1 className={styles.title}>
                        Blog is under
                        <br />
                        <span className={styles.highlight}>construction</span>
                    </h1>
                    <p className={styles.description}>
                        I&apos;m working on something great. Articles about web development,
                        design patterns, and creative coding will be published here soon.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>📝</div>
                            <span>Technical Articles</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>💡</div>
                            <span>Dev Insights</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>🎨</div>
                            <span>Creative Coding</span>
                        </div>
                    </div>

                    <a href="/" className={styles.backLink}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Blog
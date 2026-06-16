// 'use client'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './page.module.css'
import { points, preferences, companies } from '../../constants/index'
import {
    MonitorSmartphone,
    Server,
    Database,
    Workflow,
    ArrowDown
} from 'lucide-react';

import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    // SiAmazon, This is depricated
    SiDocker,
    SiGit
} from 'react-icons/si'
import { BiLogoAmazon } from "react-icons/bi"
import Footer from '@/components/footer/Footer';


export const metadata = {
    title: "Hire - Jeet Wasti",
};



function TechCard({ title, Icon, items }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.heading}>
                <Icon size={20} />
                <span>{title}</span>
            </h3>

            <ul className={styles.list}>
                {items.map(({ name, icon: TechIcon }) => (
                    <li key={name} className={styles.listItem}>
                        <TechIcon size={16} className={styles.techIcon} />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function page() {
    const resumeUrl = "https://vikrantbhat.com/resume.pdf"
    const mailLink = `mailto:wastijeet110@gmail.com?subject=I want to hire you!&body=Hi Jeet, I'm reaching out to you because I want to hire you. I'm looking for someone who can help me with ...`

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(resumeUrl)
            alert("Resume link copied!")
        } catch (err) {
            console.error("Copy failed", err)
        }
    }
    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <div className={styles.container}>
                <div>
                    {/* <p className={styles.heading}>Hire Me</p> */}
                    <h1 className={styles.heading2}>Hire Me</h1>
                    <div className={styles.orText}>
                        <p>If you are a recruiter or someone working at a company who has an opportunity for me that I cannot say no to! Then this page is for you.</p>

                    </div>
                    <div className={styles.wrapper}>

                        <a
                            // href={resumeUrl}
                            href='https://drive.google.com/file/d/1lTPcqM_DV18KyjfvvqM5YTdOF3HMfQvV/view?usp=sharing'
                            target="_blank"
                            download
                            className={styles.downloadBtn}
                        >
                            Download Resume
                            <ArrowDown size={8} className={styles.icon} />
                        </a>
                        <p className={styles.orText}>or copy resume link</p>

                        {/* <div className={styles.orSection}>
                            <button onClick={handleCopy} className={styles.copyBtn} />
                            <p className={styles.orText}>or copy resume link</p>
                        </div> */}

                    </div>
                </div>

                <div className={styles.techContainer}>
                    <div className={styles.techWrapper}>
                        <div className={styles.techWrapper_1}>
                            <h3>My Tech Stack</h3>
                            <p className={styles.orText}>Technologies that I use to get the job done.</p>
                        </div>
                        <div className={styles.techWrapper_2}>
                            <a
                                href={mailLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.hireBtn}
                            >
                                <svg
                                    viewBox="0 0 64 64"
                                    width="32"
                                    height="32"
                                    className={styles.icon}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M32 6
       C22 6 16 14 16 24
       V40
       C16 48 22 58 32 58
       C42 58 48 48 48 40
       V24
       C48 14 42 6 32 6Z"
                                        fill="currentColor"
                                    />

                                    <rect
                                        x="10"
                                        y="24"
                                        width="8"
                                        height="18"
                                        rx="4"
                                        fill="currentColor"
                                    />

                                    <ellipse
                                        cx="36"
                                        cy="26"
                                        rx="9"
                                        ry="6"
                                        fill="#AEE6FF"
                                    />
                                    <ellipse
                                        cx="38"
                                        cy="24"
                                        rx="3"
                                        ry="2"
                                        fill="white"
                                        opacity="0.8"
                                    />
                                </svg>

                                <span className={styles.now}>now!</span>
                                <span className={styles.play}>Hire me</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* All techstack list */}
                <div className={styles.techWrapperContainer}>
                    <div className={styles.box_wrapper}>

                        <TechCard
                            title="Frontend"
                            Icon={MonitorSmartphone}
                            items={[
                                { name: "React", icon: SiReact },
                                { name: "Next.js", icon: SiNextdotjs },
                                { name: "TailwindCSS", icon: SiTailwindcss },
                                { name: "Framer Motion", icon: SiFramer },
                                { name: "TypeScript", icon: SiTypescript },
                            ]}
                        />

                        <TechCard
                            title="Backend"
                            Icon={Server}
                            items={[
                                { name: "Node.js", icon: SiNodedotjs },
                                { name: "Express.js", icon: SiExpress },
                            ]}
                        />

                        <TechCard
                            title="Databases"
                            Icon={Database}
                            items={[
                                { name: "MySQL", icon: SiMysql },
                                { name: "PostgreSQL", icon: SiPostgresql },
                                { name: "MongoDB", icon: SiMongodb },
                                { name: "Redis", icon: SiRedis },
                            ]}
                        />

                        <TechCard
                            title="DevOps"
                            Icon={Workflow}
                            items={[
                                { name: "AWS", icon: BiLogoAmazon },
                                { name: "Docker", icon: SiDocker },
                                { name: "Git", icon: SiGit },
                            ]}
                        />


                    </div>
                </div>
                <div>
                    <section className={styles.hiremeSection}>
                        <h3>Why must you hire me?</h3>
                        {points.map((text, index) => (
                            <div key={index} className={styles.hiremeItem}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.hiremeIcon}
                                >
                                    <polyline points="15 10 20 15 15 20" />
                                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                </svg>

                                <p className={styles.hiremeText}>{text}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <div>
                    <section className={styles.preferenceSection}>

                        <h2 className={styles.heading}>
                            My preferences
                        </h2>


                        <div className={styles.grid}>
                            {preferences.map((item, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.titleRow}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={styles.icon}
                                        >
                                            <polyline points="15 10 20 15 15 20" />
                                            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                        </svg>

                                        <p className={styles.title}>{item.title}</p>
                                    </div>

                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div>
                    <section className={styles.radderCardSection}>
                        <h2

                            className={styles.radderCardHeading}
                        >
                            Companies on my radar
                        </h2>

                        <p className={styles.radderCardSubtext}>
                            I've interviewed at some, I've worked at a couple.
                        </p>

                        <div className={styles.radderCardGrid}>
                            {companies.map((company, index) => (

                                <div key={index} className={styles.radderCardItem}>
                                    <div className={styles.radderCardLogo}>
                                        {/* {company.name} */}
                                        <company.logo size={20} />
                                    </div>

                                    <div className={styles.radderCardOverlay}>
                                        {company.type === "hire" ? (
                                            <a
                                                href={`mailto:wastijeet110@email.com?subject=I want to hire you for ${company.name}!`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {company.action}
                                            </a>
                                        ) : (
                                            <>
                                                <p>{company.subtitle}</p>
                                                <p>{company.duration}</p>
                                            </>
                                        )}
                                    </div>

                                    <div className={styles.radderCardCompanyName}>
                                        {company.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div>
                    <div className={styles.radderCardCtaWrapper}>
                        <p
                            className={styles.radderCardCtaText}
                            aria-disabled="true"
                        >
                            So are you ready to make me an offer that I cannot refuse?
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
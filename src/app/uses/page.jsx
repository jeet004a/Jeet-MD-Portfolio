import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './page.module.css'
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "Uses - Jeet Wasti",
};


const Uses = () => {
  const items = [
    {
      title: "15” MacBook Air, M4, 16GB RAM (2026)",
      tag: "Personal",
      description: `Upgraded from my trusty MSI Laptop and oh boy, what a glow-up! 
This M4 beast is like going from a bicycle to a rocket ship 🚀. Though I occasionally make it break a sweat with my tab-hoarding tendencies (what's one more ChatGPT tab, right?).

Still blows my mind how Apple managed to pack a supercomputer into something thinner than most books.

This machine is a beast. I use this for all the heavy lifting I need to do for all my personal and professional pursuits.`,
    },
    {
      title: "BenQ PD3225U Pro-design Monitor",
      tag: "Personal",
      description: `This 32" 4K almost bezel-less monitor was a rare find.
The fact that it also acts as a hub and charges all my devices is super convenient.

Also the color accuracy is amazing. It has served me very well for my development and gaming needs.
It also supports daisy chaining, so I can very easily connect another BenQ monitor in the future if needed.`,
    },
    {
      title: "Logitech MX Master 3 Mouse",
      tag: "Personal",
      description: `This one has been a super-productive mouse for me, battery life is amazing, lasts me for months on a single charge. I love the fact that I can switch between my MacBooks with just a press of a button.`,
    },
    {
      title: "iPhone 13 Pro 256GB",
      tag: "Personal",
      description: `A man needs a man's phone, and this is mine.
Camera is great, battery life is great, and the display is great.
iPhones have served me very well every since I switched from Android in 2018.`,
    },
  ]

  const developmentTools = [
    {
      title: "Google Chrome",
      tag: "Browser",
      description: `My primary browser for development and daily use. I rely heavily on Chrome DevTools for debugging layouts, inspecting network requests, analyzing performance, and testing responsive designs. I also use multiple profiles and extensions to keep my development workflow organized.`,
    },
    {
      title: "Google AntiGravity",
      tag: "IDE",
      description: `A fun hidden Google Easter egg that flips the entire page into an anti-gravity physics playground. While not a development tool, it's a nostalgic little trick I sometimes show friends or colleagues for fun when talking about quirky internet discoveries.`,
    },
    {
      title: "Postman",
      tag: "API Testing",
      description: `One of my most frequently used tools when working with APIs. I use Postman to test REST endpoints, manage authentication tokens, inspect request and response payloads, and organize API collections for different projects.`,
    },
    {
      title: "VS Code",
      tag: "Code Editor",
      description: `My primary development environment. I use VS Code with several extensions for JavaScript, React, Node.js, formatting, linting, Git integration, and debugging. Its lightweight performance and powerful extensions make it perfect for modern web development.`,
    },
    {
      title: "Git & GitHub",
      tag: "Version Control",
      description: `I use Git daily for version control and GitHub for hosting repositories, collaboration, and managing project workflows. Pull requests, branches, and commit history help keep projects organized and maintainable.`,
    },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            Software and gadgets I use to get the job done.
          </h1>

          <p className={styles.headerDescription}>
            I'm a techie at heart and love to try out new software and gadgets to
            optimize my life for the things I enjoy doing. Here's a list of my
            current favorites. I'll try to keep this list updated as I change
            things up. If you have any questions about any of these, feel free to
            reach out on Twitter. I'm always happy to chat about this stuff 😬.
          </p>
        </header>
      </div>
      {/* Below section is workstation */}
      <div className={styles.sectionsWrapper}>
        <section className={styles.workstationSection}>
          <div className={styles.workstationGrid}>
            <h2 className={styles.workstationTitle}>Workstation</h2>

            <div className={styles.workstationContent}>
              <ul className={styles.workstationList}>
                {items.map((item, index) => (
                  <li key={index} className={styles.workstationItem}>
                    <div className={styles.itemHeader}>
                      <h3>{item.title}</h3>
                      <span className={styles.dot}>•</span>
                      <span className={styles.tag}>{item.tag}</span>
                    </div>

                    <p className={styles.itemDescription}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.developmentToolsSection}>
          <div className={styles.developmentToolsGrid}>
            <h2 className={styles.developmentToolsTitle}>Development tools</h2>

            <div className={styles.developmentToolsContent}>
              <ul className={styles.developmentToolsList}>
                {developmentTools.map((item, index) => (
                  <li key={index} className={styles.developmentToolsItem}>
                    <div className={styles.itemHeader}>
                      <h3>{item.title}</h3>
                      <span className={styles.dot}>•</span>
                      <span className={styles.tag}>{item.tag}</span>
                    </div>

                    <p className={styles.itemDescription}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>


      <Footer></Footer>
    </div>
  )
}

export default Uses
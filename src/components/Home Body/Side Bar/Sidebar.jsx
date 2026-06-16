'use client';

import Image from 'next/image';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Newsletter */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.icon}>✉️</span>
          <h3>Stay up to date</h3>
        </div>

        <p className={styles.description}>
          Get notified when I publish something new. No spam, unsubscribe anytime.
        </p>

        <div className={styles.subscribe}>
          <input type="email" placeholder="Email address" />
          <button>Join</button>
        </div>
      </div>

      {/* Work */}
      <div className={styles.card}>
        <div className={styles.cardHeaderRow}>
          <div className={styles.cardHeader}>
            <span className={styles.icon}>💼</span>
            <h3>Work</h3>
          </div>
          <a href="/hire" className={styles.hireLink}>
            hire me
          </a>
        </div>

        <ul className={styles.workList}>
          <li className={styles.workItem}>
            <div className={styles.logo}>
              <Image
                src="https://www.arcgis.com/sharing/rest/content/items/53a2ede278f54c38be7b29b044b3aa57/info/thumbnail/thumbnail1737074618886.png?w=800"
                alt="SCE"
                width={28}
                height={28}
              />
            </div>

            <div className={styles.workInfo}>
              <strong>Southern California Edison</strong>
              <span>Software Development Engineer</span>
            </div>

            <time>2026 — Present</time>
          </li>
          <li className={styles.workItem}>
            <div className={styles.logo}>
              <Image
                // src="https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5576584.png"
                src="/Emerson.jpg"
                alt="Emerson"
                width={28}
                height={28}
              />
            </div>

            <div className={styles.workInfo}>
              <strong>Emerson</strong>
              <span>Software Engineer</span>
            </div>

            <time>2023 — 2025</time>
          </li>

          <li className={styles.workItem}>
            <div className={styles.logo}>
              <Image
                src="https://www.emiconglobal.com/uploads/logo.png"
                alt="Emicon"
                width={28}
                height={28}
              />
            </div>

            <div className={styles.workInfo}>
              <strong>Emicon</strong>
              <span>Software Engineer</span>
            </div>

            <time>2021 — 2023</time>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1lTPcqM_DV18KyjfvvqM5YTdOF3HMfQvV/view?usp=sharing"
          target="_blank"
          className={styles.resumeBtn}
        >
          Download Resume
          <span>↓</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

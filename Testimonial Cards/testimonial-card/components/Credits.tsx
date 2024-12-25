import styles from '@/styles/TestimonialCard.module.css';

export default function Credits() {
  return (
    <div className={styles.credits}>
      A challenge by
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        rel="noopener noreferrer"
      >
        GreatFrontEnd Projects
      </a>
      . Built by
      <a
        href="https://www.greatfrontend.com/projects/u/username"
        target="_blank"
        rel="noopener noreferrer"
      >
        evadantir
      </a>
      .
    </div>
  );
} 
export default function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <span>© 2026 爪爪泡泡 Pet Spa · 宠物洗护体验店</span>
        <span>用心把每一次洗护，做成毛孩子愿意再来的事。</span>
      </div>
    </footer>
  );
}

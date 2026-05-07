export default function Header({ styles }) {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a className={styles.brand} href="#top" aria-label="爪爪泡泡首页">
          <span className={styles.brandMark}>🐾</span>
          <span>爪爪泡泡 Pet Spa</span>
        </a>
        <nav className={styles.nav} aria-label="主导航">
          <a href="#services">服务项目</a>
          <a href="#pricing">洗护套餐</a>
          <a href="#process">洗护流程</a>
          <a href="#contact">到店预约</a>
        </nav>
      </div>
    </header>
  );
}

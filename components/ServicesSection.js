import Reveal from "./Reveal";

const services = [
  {
    icon: "🛁",
    title: "基础洗护",
    description: "洗澡、吹毛、梳理、耳部清洁、指甲修整，适合日常保持整洁和毛发状态。"
  },
  {
    icon: "✂️",
    title: "造型修剪",
    description: "根据体型和毛量定制修剪风格，保留可爱感，也兼顾季节与居家打理便利性。"
  },
  {
    icon: "🌿",
    title: "皮肤护理",
    description: "针对皮屑、油脂旺盛、轻度敏感等状态，安排舒缓型护理和基础养护建议。"
  },
  {
    icon: "🐈",
    title: "猫咪专区",
    description: "采用更安静的操作节奏与独立安排，尽量减少刺激，给怕生猫咪更多缓冲空间。"
  }
];

export default function ServicesSection({ styles }) {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <Reveal className={`${styles.sectionHeading} ${styles.reveal}`}>
          <div>
            <span className={styles.eyebrow}>门店服务</span>
            <h2>不只是洗澡，更是舒舒服服地被照顾</h2>
          </div>
          <p>我们把流程拆得更细，让宠物能在更安稳的节奏里完成清洁、护理和修饰。</p>
        </Reveal>

        <div className={styles.services}>
          {services.map((service) => (
            <Reveal key={service.title} as="article" className={`${styles.card} ${styles.reveal}`}>
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

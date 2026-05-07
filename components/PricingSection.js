import Reveal from "./Reveal";

const pricingPlans = [
  {
    tag: "轻盈洗护",
    title: "小型宠专属",
    price: "¥98",
    description: "适合博美、比熊、英短等体型较小或日常维护频率较高的宠物。",
    features: ["温和清洁洗浴", "吹毛梳顺和耳部护理", "指甲与脚底毛修整"]
  },
  {
    tag: "门店推荐",
    title: "精致香香套餐",
    price: "¥168",
    description: "在基础洗护之外加入局部修剪和毛发养护，适合想要整体状态更精致的宝贝。",
    features: ["基础洗护全流程", "毛发柔顺护理", "脸部和臀腿区域精修"],
    featured: true
  },
  {
    tag: "敏感肌护理",
    title: "舒缓养护套餐",
    price: "¥238",
    description: "适合换季脆弱、轻微皮屑或皮肤状态起伏的宠物，护理过程更细致。",
    features: ["低刺激配方清洁", "舒缓型护理泡沫", "门店护理建议反馈"]
  }
];

export default function PricingSection({ styles }) {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <Reveal className={`${styles.sectionHeading} ${styles.reveal}`}>
          <div>
            <span className={styles.eyebrow}>热门套餐</span>
            <h2>透明价格，按体型和需求灵活选择</h2>
          </div>
          <p>以下为展示型套餐内容，实际门店可根据品种、毛量和特殊护理需求调整。</p>
        </Reveal>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <Reveal
              key={plan.title}
              as="article"
              className={`${styles.priceCard} ${plan.featured ? styles.featured : ""} ${styles.reveal}`}
            >
              <span className={styles.tag}>{plan.tag}</span>
              <h3>{plan.title}</h3>
              <div className={styles.price}>
                <strong>{plan.price}</strong>
                <span>/ 次起</span>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

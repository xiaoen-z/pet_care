import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "到店评估",
    description: "确认体型、毛量、皮肤状态与性格偏好，提前说明注意事项和预计时长。"
  },
  {
    number: "02",
    title: "温和洗护",
    description: "按照毛发类型选择产品，控制水温和力度，尽量减少拉扯与过度刺激。"
  },
  {
    number: "03",
    title: "吹整修饰",
    description: "分区吹干、梳顺毛流，处理脚底毛、眼周和耳部，让整体更干净利落。"
  },
  {
    number: "04",
    title: "离店反馈",
    description: "向主人同步本次护理状态，如果发现皮肤或打结问题，也会给出护理建议。"
  }
];

export default function ProcessSection({ styles }) {
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <Reveal className={`${styles.sectionHeading} ${styles.reveal}`}>
          <div>
            <span className={styles.eyebrow}>服务流程</span>
            <h2>每一步都有交代，主人更放心</h2>
          </div>
          <p>我们尽量让沟通前置，把护理细节说清楚，也给宠物留出适应环境和情绪稳定的时间。</p>
        </Reveal>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <Reveal key={step.number} as="article" className={`${styles.step} ${styles.reveal}`}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

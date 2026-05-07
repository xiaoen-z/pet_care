import Reveal from "./Reveal";

export default function HeroSection({ styles }) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <Reveal className={`${styles.heroCopy} ${styles.reveal}`}>
          <span className={styles.eyebrow}>温柔洗护 · 精致修剪 · 放心寄养咨询</span>
          <h1 className={styles.heroTitle}>让每一只毛孩子 都香香软软地回家</h1>
          <p className={styles.heroDescription}>
            爪爪泡泡是一家专注宠物洗护体验的精品门店。我们重视皮肤护理、情绪安抚和服务细节，
            从洗澡到吹毛再到修剪，每一步都尽量轻柔、干净、有耐心。
          </p>
          <div className={styles.heroActions}>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="#contact">
              立即预约
            </a>
            <a className={`${styles.button} ${styles.buttonSecondary}`} href="#pricing">
              查看价格
            </a>
          </div>
          <div className={styles.heroPoints}>
            <div className={styles.heroPoint}>
              <strong>3000+</strong>
              <span>累计服务宠物，熟悉猫咪与小型犬护理节奏</span>
            </div>
            <div className={styles.heroPoint}>
              <strong>0 刺激</strong>
              <span>甄选温和配方，按毛发与皮肤状态匹配产品</span>
            </div>
            <div className={styles.heroPoint}>
              <strong>90 min</strong>
              <span>常规洗护平均用时，留足耐心不赶工</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={`${styles.heroVisual} ${styles.reveal}`}>
          <div className={styles.heroIllustration}>
            <div className={`${styles.bubble} ${styles.bubbleOne}`}></div>
            <div className={`${styles.bubble} ${styles.bubbleTwo}`}></div>
            <div className={`${styles.bubble} ${styles.bubbleThree}`}></div>
            <div className={styles.petScene}>
              <div className={styles.dog}>
                <div className={`${styles.dogEar} ${styles.dogEarLeft}`}></div>
                <div className={`${styles.dogEar} ${styles.dogEarRight}`}></div>
                <div className={styles.dogHead}></div>
                <div className={styles.dogNose}></div>
                <div className={styles.dogMouth}></div>
                <div className={styles.dogBody}></div>
                <div className={`${styles.dogLeg} ${styles.dogLegOne}`}></div>
                <div className={`${styles.dogLeg} ${styles.dogLegTwo}`}></div>
                <div className={`${styles.dogLeg} ${styles.dogLegThree}`}></div>
                <div className={`${styles.dogLeg} ${styles.dogLegFour}`}></div>
                <div className={styles.tail}></div>
                <div className={`${styles.foam} ${styles.foamHead}`}></div>
                <div className={`${styles.foam} ${styles.foamBody}`}></div>
              </div>
              <div className={styles.tub}>
                <div className={styles.pawPrint}>
                  <span></span>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.highlightNote}>
            <div className={styles.note}>
              <strong>一宠一消毒</strong>
              <span>美容台、浴池、梳具分步骤清洁，门店环境每日巡检。</span>
            </div>
            <div className={styles.note}>
              <strong>高敏护理可选</strong>
              <span>针对掉毛、皮屑、敏感肌等情况提供更细致的护理建议。</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

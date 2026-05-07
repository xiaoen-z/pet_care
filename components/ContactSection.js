import Reveal from "./Reveal";

export default function ContactSection({ styles }) {
  return (
    <section className={styles.section} id="contact">
      <div className={`${styles.container} ${styles.contactGrid}`}>
        <Reveal className={`${styles.contactCard} ${styles.contactCardLarge} ${styles.reveal}`}>
          <span className={styles.eyebrow}>预约到店</span>
          <h2 className={styles.contactIntroTitle}>今天就给毛孩子安排一次舒服的洗护吧</h2>
          <p className={styles.contactIntroText}>
            支持电话、微信和到店咨询。首次到店建议提前预约，我们会根据宠物体型和项目预留更合适的服务时间。
          </p>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={`${styles.iconWrap} ${styles.contactIcon}`}>📍</div>
              <div>
                <strong>门店地址</strong>
                <span>
                  上海市静安区汪星街 88 号 1 层
                  <br />
                  地铁步行 5 分钟，门口可短暂停车
                </span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={`${styles.iconWrap} ${styles.contactIcon}`}>📞</div>
              <div>
                <strong>预约电话</strong>
                <span>
                  400-888-2026
                  <br />
                  也可添加微信：PAWPAO-SPA
                </span>
              </div>
            </div>
          </div>
          <div className={styles.hours}>
            <strong>营业时间</strong>
            <br />
            周一至周日 10:00 - 20:00
            <br />
            节假日正常营业，晚间时段建议提前预约。
          </div>
        </Reveal>

        <Reveal className={`${styles.contactCard} ${styles.reveal}`}>
          <h3>为什么很多主人会回头</h3>
          <p>
            因为洗护之后不只是看起来更干净，还会明显感觉到宠物更放松、更好摸，也更愿意配合下一次护理。
          </p>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={`${styles.iconWrap} ${styles.contactIconSmall}`}>💬</div>
              <div>
                <strong>服务沟通细</strong>
                <span>项目前先沟通，结束后反馈，不让主人对过程一头雾水。</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={`${styles.iconWrap} ${styles.contactIconSmall}`}>🧴</div>
              <div>
                <strong>用品更讲究</strong>
                <span>按毛发与肤况分类选择清洁和护理用品，避免“一套洗全店”。</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={`${styles.iconWrap} ${styles.contactIconSmall}`}>🤍</div>
              <div>
                <strong>节奏更温柔</strong>
                <span>特别是猫咪和胆小犬，我们会尽量慢一点、轻一点、安稳一点。</span>
              </div>
            </div>
          </div>
          <div className={styles.contactList}>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="tel:4008882026">
              一键电话预约
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

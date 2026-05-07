"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "林小姐",
    pet: "比熊 Lucky",
    badge: "首次到店",
    rating: "5.0",
    quote:
      "Lucky 以前洗澡很容易紧张，这次店员会先让它熟悉环境，再慢慢开始，出来以后整只狗都香香软软的，耳朵和脚底也处理得很干净。"
  },
  {
    name: "周先生",
    pet: "英短 七七",
    badge: "猫咪护理",
    rating: "5.0",
    quote:
      "最满意的是节奏很稳，不会一上来就硬抱着做项目。七七平时特别怕吹风，这次明显没那么抗拒，回家之后状态也很放松。"
  },
  {
    name: "何女士",
    pet: "泰迪 奶糕",
    badge: "回头客",
    rating: "4.9",
    quote:
      "造型修得很自然，不是那种千篇一律的圆头，脸部线条和腿部比例都照顾到了，而且会根据毛量给建议，特别省心。"
  },
  {
    name: "陈先生",
    pet: "柯基 豆包",
    badge: "掉毛改善",
    rating: "5.0",
    quote:
      "换季掉毛真的有被缓解到，店里会提醒哪些地方容易打结、哪些护理适合我们家这种双层毛，沟通很细，不会乱推项目。"
  },
  {
    name: "杨女士",
    pet: "博美 七喜",
    badge: "敏感肌",
    rating: "4.9",
    quote:
      "我们家狗狗皮肤比较娇气，以前洗完常常发红，这边会先看皮肤状态再选产品。做完以后毛发很顺，皮肤也没有不舒服。"
  },
  {
    name: "吴先生",
    pet: "金渐层 元宝",
    badge: "安抚细致",
    rating: "5.0",
    quote:
      "能感觉到他们是真的懂猫。不是一味求快，而是会把情绪放在前面考虑。元宝这种怕生的性格，能安稳做完整套护理已经很难得。"
  }
];

const metrics = [
  { value: "96%", label: "客户表示宠物到家后更放松" },
  { value: "4.9/5", label: "近阶段服务满意度评价" },
  { value: "72h", label: "护理建议与状态跟进窗口" }
];

export default function TestimonialsSection({ styles }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <Reveal className={`${styles.sectionHeading} ${styles.reveal}`}>
          <div>
            <span className={styles.eyebrow}>客户评价</span>
            <h2>不是只把毛洗干净，而是让主人成为安心的回头客</h2>
          </div>
          <p>
            我们把真实反馈放在这里。每一条评价都围绕同一件事: 宠物有没有被温柔对待，主人有没有感受到被认真服务。
          </p>
        </Reveal>

        <div className={styles.testimonialShell}>
          <Reveal className={`${styles.testimonialFeature} ${styles.reveal}`}>
            <div className={styles.testimonialGlow} />
            <div className={styles.testimonialTopline}>
              <span className={styles.testimonialBadge}>{active.badge}</span>
              <span className={styles.testimonialRating}>★ {active.rating}</span>
            </div>

            <article key={`${active.name}-${active.pet}`} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>“{active.quote}”</p>
              <div className={styles.testimonialAuthor}>
                <strong>{active.name}</strong>
                <span>{active.pet}</span>
              </div>
            </article>

            <div className={styles.testimonialControls} aria-label="客户评价轮播切换">
              {testimonials.map((item, index) => (
                <button
                  key={`${item.name}-${item.pet}`}
                  type="button"
                  className={`${styles.testimonialDot} ${index === activeIndex ? styles.testimonialDotActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`查看${item.name}的评价`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </Reveal>

          <div className={styles.testimonialRail}>
            <Reveal className={`${styles.testimonialPreviewGroup} ${styles.reveal}`}>
              {testimonials.map((item, index) => (
                <button
                  key={`${item.name}-${item.pet}-preview`}
                  type="button"
                  className={`${styles.testimonialPreview} ${index === activeIndex ? styles.testimonialPreviewActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.testimonialPreviewHead}>
                    <strong>{item.name}</strong>
                    <span>{item.pet}</span>
                  </div>
                  <p>{item.quote}</p>
                </button>
              ))}
            </Reveal>

            <Reveal className={`${styles.testimonialMetrics} ${styles.reveal}`}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.testimonialMetric}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export const fadeUp = (delay=0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .2 },
    transition: { duration: .6, ease: (t: number) => t * t * (3 - 2 * t), delay }
  });
  
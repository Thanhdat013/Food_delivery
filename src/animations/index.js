export const buttonClick = {
  whileTap: { scale: 0.9 },
}
export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
export const staggerFadeInOut = (i) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 1, delay: i * 0.15 },
    key: { i },
  }
}

export const fadeInOutDelay = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
}

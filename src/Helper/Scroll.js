export const handleScroll = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};

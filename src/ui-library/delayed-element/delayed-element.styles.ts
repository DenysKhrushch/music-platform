export const setDelay = (show: boolean, animation: boolean) => ({
  display: "flex",
  opacity: show ? 1 : 0,
  transition: animation ? "opacity 1s ease" : "none",
});

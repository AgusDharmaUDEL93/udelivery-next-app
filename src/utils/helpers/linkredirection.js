export const linkRedirection = (url) => {
  if (typeof window !== "undefined") {
    window.open(url);
  }
};

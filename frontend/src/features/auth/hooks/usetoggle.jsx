export const useToggle = (settoggle) => {
  let toggleFn = () => {
    settoggle((prev) => !prev);
  };
  return { toggleFn };
};

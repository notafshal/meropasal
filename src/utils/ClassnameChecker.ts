const ClassnameChecker = (...classes: any) => {
  return classes.filter(Boolean).join("");
};
export default ClassnameChecker;

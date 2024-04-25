export const getLayoutProps = (pathname: string) => {
  switch (true) {
    case pathname.includes("about"):
      return {
        backgroundClass: "before:bg-train",
      };
    case pathname.includes("contact"):
      return {
        backgroundClass: "before:bg-beach",
      };
    case pathname.includes("destination"):
      return {
        backgroundClass: "before:bg-castle",
      };
    case pathname.includes("experience"):
      return {
        backgroundClass: "before:bg-sunset",
      };
    default:
      return {
        backgroundClass:"before:bg-viewpoint",
        isHome: true,
      };
  }
};
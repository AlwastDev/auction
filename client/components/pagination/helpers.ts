export const getPagesArray = (currentPage: number, lastPage: number): number[] => {
  if (lastPage < 3) {
    return [1, 2].filter((page) => page <= lastPage);
  }

  switch (currentPage) {
    case 1:
      return [currentPage, currentPage + 1, currentPage + 2];
    case lastPage:
      return [currentPage - 2, currentPage - 1, currentPage];
    default:
      return [currentPage - 1, currentPage, currentPage + 1];
  }
};

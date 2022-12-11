export const sortList = (list: any[], key: string, order: string) => {
  const newList = [...list];
  return newList.sort((a, b) => {
    if (a[key] < b[key]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};

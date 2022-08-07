// 가격
export const AddCommas = (num: any) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

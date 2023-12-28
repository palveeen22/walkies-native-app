export const dateFormat = (date) => {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(d);
  let da = new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}`;
};

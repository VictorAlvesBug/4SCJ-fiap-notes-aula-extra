const options: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
  timeStyle: "short"
};

export const formatDate = (date: Date) =>
  Intl.DateTimeFormat("pt-br", options).format(date);

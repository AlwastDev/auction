export function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

export function formatDate(date: Date) {
  const dateArray = date.toString().split('T');

  return `${dateArray[0]} ${dateArray[1].slice(0, 5)}`;
}

export const replaceUrl = (query: unknown, route?: string) => {
  return `${document.location.origin}${route ? route : ''}?${JSON.stringify(query)
    .replace(/[,]/g, '&')
    .replace(/[{}"']/g, '')
    .replace(/[:]/g, '=')}`;
};

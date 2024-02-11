import { AuctionStatus } from '@/lib/models';

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

export function dateToString(date: Date) {
  const newDate = new Date(date);

  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();

  return `${day}.${month}.${year}`;
}

export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}

export function enumToArrayValues(enumerable: object) {
  return Object.values(enumerable).filter((key) => !isNaN(Number(AuctionStatus[key as number])));
}

'use server';

import { cookies } from 'next/headers';

export async function setCookie(name: string, value: string, options: { expires: number }) {
  const expires = new Date();
  expires.setTime(expires.getTime() + options.expires * 60 * 60 * 1000);
  cookies().set({
    name: name,
    value: value,
    expires: expires,
    httpOnly: true,
  });
}

export async function getCookie(name: string) {
  const cookieStore = cookies();
  return cookieStore.getAll().find((cookie) => cookie.name === name)?.value;
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}

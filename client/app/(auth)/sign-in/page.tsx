'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Input } from '@/components/input/input';
import { onLogin } from '@/lib/services/auth-service';
import { Wrapper } from '../_components/wrapper/wrapper';
import { validateEmail } from '@/lib/utils';

export default function SignInPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error('Email or password is empty');
    }

    if (!validateEmail(email)) {
      return toast.error('Email is not valid');
    }

    startTransition(() => {
      onLogin(email, password)
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          toast.error(error);
        });
    });
  };

  return (
    <Wrapper disabled={isPending} handleSubmit={handleSubmit}>
      <Input
        type="email"
        label="E-mail"
        placeholder="test@gmail.com"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        label="Password"
        placeholder="**************"
        onChange={(event) => setPassword(event.target.value)}
      />
    </Wrapper>
  );
}

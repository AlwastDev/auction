'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Input } from '@/components/input/input';
import { onRegister } from '@/lib/services/auth-service';
import { Wrapper } from '../_components/wrapper/wrapper';
import { validateEmail } from '@/lib/utils';

export default function SignUpPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      return toast.error('Email or password is empty');
    }

    if (!validateEmail(email)) {
      return toast.error('Email is not valid');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords must be the same');
    }

    startTransition(() => {
      onRegister(email, password, confirmPassword).then(() => {
        router.push('/');
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
      <Input
        type="password"
        label="Confirm password"
        placeholder="**************"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
    </Wrapper>
  );
}

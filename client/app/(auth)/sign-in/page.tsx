// import * as styled from './sign-in.styled';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

export default function Page() {
  return (
    <div>
      <Input type="text" placeholder="test@gmail.com" />
      <Input type="password" placeholder="************" />
      <Button>Войти</Button>
    </div>
  );
}

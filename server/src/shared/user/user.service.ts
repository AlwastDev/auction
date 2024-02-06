import { Injectable } from '@nestjs/common';

import type { User } from './user.interface';

@Injectable()
export class UserService {
  public async fetch(username: string): Promise<User & { password: string }> {
    return Promise.resolve({
      id: 'test',
      password: 'crypto',
      name: username,
      login: `${username}@test.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

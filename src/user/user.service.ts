import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: User[] = [];

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findByRole(role: string): Promise<User[]> {
        return this.users.filter((user)=> user.role === role);
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}

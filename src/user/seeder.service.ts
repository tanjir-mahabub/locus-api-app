import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Injectable()
export class SeederService  {
    constructor(private readonly userService: UserService) {}

    async seedUsers() {
        const admin = new User();
        admin.username = 'admin';
        admin.password = 'admin123';
        admin.role = 'Admin';

        const normal = new User();
        normal.username = 'normal';
        normal.password = 'normal123';
        normal.role = 'Normal';

        const limited = new User();
        limited.username = 'limited';
        limited.password = 'limited123';
        limited.role = 'Limited';

        await this.userService.create(admin);
        await this.userService.create(normal);
        await this.userService.create(limited);
    }
}
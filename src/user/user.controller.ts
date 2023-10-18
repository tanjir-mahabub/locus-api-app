import { UserService } from 'src/user/user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':role')
    getUserByRole(@Param('role') role: string) {
        return this.userService.findByRole(role);
    }
}

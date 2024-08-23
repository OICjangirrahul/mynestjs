import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
    /**
     * AuthService連携
     */
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService) {}

    /**
     * ユーザー一覧表示
     */
    findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth)
        return [
            {
                "firstName": "Jonh",
                "lastName": "Doe",
            },
            {
                "firstName": "rahul",
                "lastName": "jangir",
            }
        ]
    }


    /**
     * ユーザー表示
     */

    findOneById(id: string) {
        return [
            {
                "id": 1,
                "firstName": "Jonh",
                "lastName": "Doe",
            },
        ]
    }
}

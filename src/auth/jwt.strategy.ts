import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { jwtConstants } from './jwt.constants';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secret: jwtConstants.secret
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
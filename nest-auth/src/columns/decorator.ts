import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Colum = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        if (data) {
            return request.column?.[data];
        }

        return request.column;
    }
)

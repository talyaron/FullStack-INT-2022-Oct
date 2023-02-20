import { Observable } from 'rxjs';
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
export declare class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown>;
    private serializeObject;
}

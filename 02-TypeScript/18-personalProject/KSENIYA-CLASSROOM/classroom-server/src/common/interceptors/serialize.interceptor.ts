// Utils
import { serializeSequelize } from '../utils';

// External libraries
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((value) => {
        return !value
          ? {}
          : Array.isArray(value)
          ? value.map((item) => this.serializeObject(item))
          : this.serializeObject(value);
      }),
    );
  }

  private serializeObject(value) {
    return { ...serializeSequelize(value) };
  }
}

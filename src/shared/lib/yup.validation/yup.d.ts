import { Maybe, AnyObject, Flags, Schema } from 'yup';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext = AnyObject,
    TDefault = undefined,
    TFlags extends Flags = '',
  > extends Schema<TType, TContext, TDefault, TFlags> {
    phone(message?: string): StringSchema<TType, TContext>;
  }
}

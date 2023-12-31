import { addMethod, string } from 'yup';

export function extendYup() {
  addMethod(string, 'phone', function phone(message: string) {
    return this.matches(
      new RegExp(
        '^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$',
      ),
      message,
    );
  });
}

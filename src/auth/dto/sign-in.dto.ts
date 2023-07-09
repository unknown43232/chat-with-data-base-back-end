export class SignInDto {
  readonly provider: 'google' | 'github';
  readonly providerId: string;
}

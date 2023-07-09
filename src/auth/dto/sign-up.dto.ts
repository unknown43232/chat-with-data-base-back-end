export class SignUpDto {
  readonly provider: 'google' | 'github';
  readonly providerId: string;
}

import { EmailType } from '@/Enums/EmailType';

export type CheckEmailTokenRequest = {
   code: string;
   emailType: EmailType;
};

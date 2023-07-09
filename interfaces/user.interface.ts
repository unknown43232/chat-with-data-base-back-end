import { SubscriptionLevel } from '../enums/subscription-level.enum';

export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionLevel: SubscriptionLevel;
  databases: string[]; // array of database IDs
  createdAt: Date;
}

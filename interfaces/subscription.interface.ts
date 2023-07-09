import { SubscriptionLevel } from '../enums/subscription-level.enum';

export interface Subscription {
  id: string;
  userId: string;
  level: SubscriptionLevel;
  startDate: Date;
  endDate: Date;
}

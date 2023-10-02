export interface TodoElement {
  id: string;
  homeId: string | null;
  name: string;
  description: string;
  createdOn: string;
  createdBy: string;
  deadLine: string | null;
  completedOn: string;
  completedBy: string | null;
}

export interface User {
  id: string;
  screenName: string;
  email: string;
}

export interface IText {
  style?: any;
  children: any;
}

export interface IAddress {
  streetName: string;
  postalCode: string;
  province: string;
  country: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  loggedIn: boolean;
  userType: "client" | "admin" | "agent" | "";
  parentId: string;
  address?: IAddress;
}

export interface IDebtCategory {
  name: string;
  isEditable: boolean;
  id: number;
}

export interface ITotalDebt {
  startingAmount: number;
  amountRemaining: number;
}

export interface IDebt {
  id: string;
  name: string;
  startingAmount: number;
  amountRemaining: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDebts {
  userId: string;
  totalDebt: ITotalDebt;
  debts: IDebt[];
}

export interface IWizardObj {
  id: number;
  name: string;
  amount: string;
}

export interface IExpenseI {}

export interface IIcons {
  iconType:
    | "logo"
    | "paperclip"
    | "close"
    | "close"
    | "eye"
    | "eye-off"
    | "account-circle"
    | "key"
    | "left-chevron"
    | "calendar-blank"
    | "card"
    | "plus-circle-outline"
    | "chevron-up"
    | "chevron-down"
    | "video-call"
    | "search"
    | "channel"
    | "dollar-sign"
    | "settings"
    | "question-mark"
    | "logout"
    | "add-photo";
}

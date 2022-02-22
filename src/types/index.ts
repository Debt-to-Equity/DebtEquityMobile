export interface IText {
  style?: any;
  children: any;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICombined {
  name: string;
  number: number;
  categoryId: number;
  color: string;
  extraData: IActual[]
}

export interface IPlanned {
  name: string;
  isEditable: boolean;
  id: number;
  color: string;
  number: number;
}

export interface IActual {
  name: string;
  id: number;
  number: number;
  categoryId: number;
}

export interface IDebtCategory {
  name: string;
  isEditable: boolean;
  id: number;
}

export interface IDebt {
  _id: string;
  userId: string;
  amount: number;
  name: string;
}

export interface IWizardObj {
  id: number;
  name: string;
  amount: string;
}

export interface IExpenseI {

}

export interface IIcons {
  iconType:
  | 'logo'
  | 'paperclip'
  | 'close'
  | 'close'
  | 'eye'
  | 'eye-off'
  | 'account-circle'
  | 'key'
  | 'left-chevron'
  | 'calendar-blank'
  | 'card'
  | 'plus-circle-outline'
  | 'chevron-up'
  | 'chevron-down'
  | 'video-call'
  | 'search'
  | 'channel'
  | 'dollar-sign'
  | 'settings'
  | 'question-mark'
  | 'logout'
  | 'add-photo';
}

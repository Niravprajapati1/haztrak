/**
 * The stored information on the current haztrak user
 */
export interface UserState {
  user?: string;
  token?: string;
  loading?: boolean;
  error?: string;
}

/**
 * Encompasses all global notifications
 */
export interface NotificationState {
  alert: Array<Alert>;
}

/**
 * Alert describes the payload used to interact with the Redux store 'notification' slice.
 */
export interface Alert {
  uniqueId: number;
  createdDate: string;
  read: boolean;
  message: string;
  alertType: 'Warning' | 'Error' | 'Info' | String;
  timeout: number;
}

/**
 * The stored information on the current haztrak user
 */
export interface RcraProfileState {
  user: string | undefined;
  rcraAPIID?: string;
  rcraAPIKey?: string;
  rcraUsername?: string;
  epaSites?: string[];
  phoneNumber?: string;
  loading?: boolean;
  error?: string;
}

export const selectedUser = state => state.auth;
export const selectedIsLoadingUser = state => state.auth.isLoadingUser;
export const selectedIsRefreshUser = state => state.auth.isRefreshingUser;
export const selectedToken = state => state.auth.token;
export const selectedOrdersHistory = state => state.auth.user.ordersHistory
export const selectedisAuthForm = state => state.auth.isLoadingForm;
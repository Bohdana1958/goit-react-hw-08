export const selectFilter = state => state.filter.name;

export const selectItems = state => state.contact.items;

export const selectIsLoading = state => state.contact.loading;

export const selectIsError = state => state.contact.error;

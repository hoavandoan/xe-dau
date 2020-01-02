export const userInitialState = {
    user: {}
};

export const userActions = {
    login: (state,payload) => {
        return {
            user: payload.user,
        };
    },

    logout: state => {
        return {user: state};
    },
};

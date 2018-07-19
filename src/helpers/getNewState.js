export default {
    commentary: {
        create: (prevState, commentary) => {
            return {
                data: {
                    ...prevState.data,
                    commentaries: [commentary, ...prevState.data.commentaries]
                }
            };
        }
    }
};

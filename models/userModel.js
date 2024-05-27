module.exports = {
  createUser: (body) => {
    try {
      const user = body;
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

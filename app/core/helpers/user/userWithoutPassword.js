module.exports = (userObj) => {
    return {
        id: userObj.id,
        email: userObj.email,
        age: userObj.age,
        name: userObj.name,
        surname: userObj.surname,
        user_status: userObj.user_status
    };
};

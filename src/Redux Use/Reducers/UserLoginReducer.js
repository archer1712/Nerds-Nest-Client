const initialUser = {
  isLogged: false,
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  userId: "",
  isUserAdmin: false
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "Login":
      return {
        isLogged: true,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        address: action.payload.address,
        phone: action.payload.phone,
        userId: action.payload.userID,
        isUserAdmin: action.payload.isUserAdmin
      };
    case "Logout":
      return {
        isLogged: false,
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      };
    default:
      return initialUser;
  }
};

export default userReducer;

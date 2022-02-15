const initialUser = {
  isLogged: false,
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
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

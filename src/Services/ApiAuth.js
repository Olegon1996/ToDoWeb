import { auth, database } from "../firebase";
import store from "../redux/store";
import Axios from "axios";

const LogInFunc = async (email, password) => {
  const Auth = await auth.signInWithEmailAndPassword(email, password);
  const CurrentUser = await Axios.get(
    "https://todolist-5f89f.firebaseio.com/.json"
  );
  let objectOfUsers = await CurrentUser.data;
  for (let user in objectOfUsers) {
    if (user === Auth.user.uid) {
      return { Auth: Auth, name: objectOfUsers[user].name };
    }
  }
};

const LogUpFunc = async (email, password, name) => {
  const CreateUser = await auth.createUserWithEmailAndPassword(email, password);
  await database
    .ref()
    .child(CreateUser.user.uid)
    .set({
      name: name,
      password: password,
      email: email,
      id: CreateUser.user.uid
    });
  return CreateUser;
};

const LogOut = async () => {
  const user = await auth.signOut();
  console.log("User Log Out");
  return user;
};

const Vereficte = async () => {
  return auth.onAuthStateChanged( user => user);
};

export { LogInFunc, LogUpFunc, Vereficte, LogOut };

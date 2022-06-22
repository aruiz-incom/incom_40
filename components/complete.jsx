import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Complete = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const addNewUser = () => {
    dispatch(addUser("Ruiz"));
  };
  return (
    <section className="max-w-full w-full h-screen py-14">Completado</section>
  );
};

export default Complete;

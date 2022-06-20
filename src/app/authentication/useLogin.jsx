import { useContext } from "react";
import { AuthContext } from ".";

export const useLogin = () => useContext(AuthContext);
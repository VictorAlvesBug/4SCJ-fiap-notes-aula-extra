import { apiAuth } from "../apiAuth";
import { AuthPayload } from "./types";

export const AuthService = {
  register: (authPayload: AuthPayload) => apiAuth.post('/register', authPayload),
  login: (authPayload: AuthPayload) => apiAuth.post('/login', authPayload),
}
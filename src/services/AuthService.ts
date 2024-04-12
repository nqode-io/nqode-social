import axios from 'axios';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/models/AuthenticationResponse';

export const login = async (
  credentials: AuthenticationRequest
): Promise<AuthenticationResponse> => {
  return await axios.post(`${import.meta.env.BACKEND_BASE_URL}/auth/login`, credentials);
};

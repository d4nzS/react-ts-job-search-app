import localSave from '../utils/local-save';

const AUTH_OBJ = {
  login: 'sergei.stralenia@gmail.com',
  password: 'paralect123',
  client_id: '2356',
  client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr: '0'
};

const ACCESS_TOKEN_KEY = 'access-token';
const EXPIRES_IN_KEY = 'expires-in';

export const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0';

export const API_PARAMS = {
  app_key: AUTH_OBJ.client_secret
};

export const X_SECRET_KEY = 'x-secret-key';

export const API_HEADERS = {
  [X_SECRET_KEY]: 'GEU4nvd3rej*jeh.eqp'
};

export const getAccessToken = async (): Promise<string> => {
  const accessTokenFromLocalStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
  const expiresIn = Number(localStorage.getItem(EXPIRES_IN_KEY));

  if (accessTokenFromLocalStorage && expiresIn > Date.now()) {
    return accessTokenFromLocalStorage;
  }

  const url = new URL(`${BASE_URL}/oauth2/password`);

  Object.entries(AUTH_OBJ).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const res = await fetch(url, {
    headers: API_HEADERS
  });

  const data = await res.json() as { access_token: string, expires_in: string };

  localSave(ACCESS_TOKEN_KEY, data.access_token);
  localSave(EXPIRES_IN_KEY, +data.expires_in + Date.now());

  return data.access_token;
};
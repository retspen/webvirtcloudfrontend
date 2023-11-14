import request from '@/shared/api/request';
import { API_BASE_DOMAIN } from '@/shared/constants';

import { AuthPayload } from '../types';

export function login(payload: AuthPayload): Promise<{ token: string }> {
  return request
    .post('account/login', { json: payload, prefixUrl: API_BASE_DOMAIN })
    .json();
}

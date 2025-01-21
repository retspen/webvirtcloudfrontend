import request from '@/shared/api/request';
import { API_DOMAIN } from '@/shared/constants';

export function resetPassword(payload: { password: string }): Promise<unknown> {
  return request
    .post('account/reset_passwod', {
      json: payload,
      prefixUrl: API_DOMAIN,
    })
    .json();
}

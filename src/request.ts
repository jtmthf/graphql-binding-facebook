// @ts-ignore somehow can't find querystring
import { stringify } from 'querystring';

import { ApiRequest } from './types';

export async function request(apiRquest: ApiRequest) {
  let query: object = { access_token: apiRquest.accessToken };
  if (apiRquest.fields) {
    query = {
      ...query,
      fields: apiRquest.fields.map(({ name }) => name).join(','),
    };
  }
  if (apiRquest.metadata) {
    query = { ...query, metadata: 1 };
  }

  const result = await fetch(
    new Request(`https://graph.facebook.com/v2.11/me?${stringify(query)}`),
  );
  return result.json();
}

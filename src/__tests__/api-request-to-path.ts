import * as nock from 'nock';

import { request } from '../request';
import { ApiRequest } from '../types';

describe('api-request-to-http-request', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('me', async () => {
    const apiRequest: ApiRequest = {
      id: 'me',
      accessToken: 'access',
    };

    const scope = nock('https://graph.facebook.com')
      .persist()
      .get('/v2.11/me')
      .query({ access_token: 'access' })
      .reply(200, {});

    await request(apiRequest);
  });

  it('me with id', async () => {
    const apiRequest: ApiRequest = {
      id: 'me',
      accessToken: 'access',
      fields: [
        {
          name: 'id',
        },
      ],
    };

    const scope = nock('https://graph.facebook.com')
      .persist()
      .get('/v2.11/me')
      .query({ access_token: 'access', fields: 'id' })
      .reply(200, {});

    await request(apiRequest);
  });

  it('me with id and name', async () => {
    const apiRequest: ApiRequest = {
      id: 'me',
      accessToken: 'access',
      fields: [{ name: 'id' }, { name: 'name' }],
    };

    const scope = nock('https://graph.facebook.com')
      .persist()
      .get('/v2.11/me')
      .query({ access_token: 'access', fields: 'id,name' })
      .reply(200, {});

    await request(apiRequest);
  });

  it('me with metadata', async () => {
    const apiRequest: ApiRequest = {
      id: 'me',
      accessToken: 'access',
      metadata: true,
    };

    const scope = nock('https://graph.facebook.com')
      .persist()
      .get('/v2.11/me')
      .query({ access_token: 'access', metadata: 1 })
      .reply(200, {});

    await request(apiRequest);
  });
});

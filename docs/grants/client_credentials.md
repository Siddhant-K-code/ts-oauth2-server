# Client Credentials Grant

When applications request an access token to access their own resources, not on behalf of a user.

::: tip
The client_credentials grant should only be used by clients that can hold a secret. No Browser or Native Mobile Apps should be using this grant.
:::

### Flow

The client sends a **POST** to the `/token` endpoint with the following body:

- **grant_type** must be set to `client_credentials`
- **client_id** is the client identifier you received when you first created the application
- **client_secret** is the client secret
- **scope** is a string with a space delimited list of requested scopes. The requested scopes must be valid for the client.

::: details View sample client_credentials request

_Did you know?_ You can authenticate by passing the `client_id` and `client_secret` as a query string, or through basic auth.

<code-group>
<code-block title="Query String" active>
```http request
POST /token HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
&scope="contacts.read contacts.write"
```
</code-block>

<code-block title="Basic Auth">
```http request
POST /token HTTP/1.1
Host: example.com
Authorization: Basic MTpzdXBlci1zZWNyZXQtc2VjcmV0

grant_type=client_credentials
&scope="contacts.read contacts.write"
```
</code-block>
</code-group>
:::

The authorization server will respond with the following response.

- **token_type** will always be `Bearer`
- **expires_in** is the time the token will live in seconds
- **access_token** is a JWT signed token and can be used to authenticate into the resource server
- **scope** is a space delimited list of scopes the token has access to

::: details View sample client_credentials response
```http request
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-store
Pragma: no-cache
 
{
  token_type: 'Bearer',
  expires_in: 3600,
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDE3MDY0NjYsIm5iZiI6MTYwMTcwMjg2NiwiaWF0IjoxNjAxNzAyODY2LCJqdGkiOiJuZXcgdG9rZW4iLCJjaWQiOiJ0ZXN0IGNsaWVudCIsInNjb3BlIjoiIn0.KcXoCP6u9uhvtOoistLBskESA0tyT2I1SDe5Yn9iM4I',
  scope: 'contacts.create contacts.read'
}
```
:::

(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{284:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"repository-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repository-interfaces"}},[t._v("#")]),t._v(" Repository Interfaces")]),t._v(" "),s("h2",{attrs:{id:"auth-code-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auth-code-repository"}},[t._v("#")]),t._v(" Auth Code Repository")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OAuthAuthCodeRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch auth code entity from storage by code")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authCodeCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthAuthCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An async call that should return an OAuthAuthCode that has not been ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// persisted to storage yet.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("issueAuthCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthUser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    scopes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthAuthCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthAuthCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An async call that should persist an OAuthAuthCode into your storage.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthAuthCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This async method is called when an auth code is validated by the ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// authorization server. Return `true` if the auth code has been ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manually revoked. If the code is still valid return `false`")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRevoked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authCodeCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authCodeCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"client-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-repository"}},[t._v("#")]),t._v(" Client Repository")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OAuthClientRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch client entity from storage by client_id")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthClient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check the grant type and secret against the client")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClientValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    grantType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GrantIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    clientSecret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"scope-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope-repository"}},[t._v("#")]),t._v(" Scope Repository")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OAuthScopeRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Find all scopes by scope names")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllByIdentifiers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scopeNames"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scopes have already been validated against the client, if you arent ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doing anything fancy with scopes, you can just `return scopes`,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Otherwise, now is your chance to add or remove any final scopes ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after they have already been validated against the client scopes")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    scopes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GrantIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"token-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-repository"}},[t._v("#")]),t._v(" Token Repository")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OAuthTokenRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An async call that should return an OAuthToken that has not been ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// persisted to storage yet.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("issueToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scopes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthScope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthUser\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An async call that should persist an OAuthToken into your storage.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accessToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An async call that enhances an already-persisted OAuthToken with")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// refresh token fields.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("issueRefreshToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    accessToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This async method is called when a refresh token is used to reissue ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// an access token. The original access token is revoked, and a new")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// access token is issued.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accessToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This async method, if implemented, will be called by the authorization")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code grant if the original authorization code is reused.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2 for why.")]),t._v("\n  revokeDescendantsOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authCodeId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This async method is called when an access token is validated by the ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// authorization server. Return `true` if the access token has been ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manually revoked. If the token is still valid return `false`")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isRefreshTokenRevoked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refreshToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch refresh token entity from storage by refresh token")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByRefreshToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refreshTokenToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"user-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-repository"}},[t._v("#")]),t._v(" User Repository")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OAuthUserRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch user entity from storage by identifier. A provided password may ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be used to validate the users credentials. Grant type and client are provided")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for additional checks if desired")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserByCredentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    identifier"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    grantType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GrantIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OAuthUser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optionally you can add extra claims to access token")]),t._v("\n  extraAccessTokenFields"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OAuthUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ExtraAccessTokenFields "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
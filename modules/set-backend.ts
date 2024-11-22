import {ZuploContext, ZuploRequest} from "@zuplo/runtime";

const routing = {
  "sales" : "https://echo.zuplo.io",
  "ecommerce": "https://jsonplaceholder.typicode.com/users"
}


export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {

  const org = request.user.data.organization;

  context.custom.organization = routing[org];

  return request;
}

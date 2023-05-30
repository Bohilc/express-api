require("dotenv").config();
const rExp : RegExp = /[A-C]/g;
/**
 * Request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
type Route = {
  method:
    | "get"
    | "post"
    | "put"
    | "delete"
    | "patch"
    | "head"
    | "connect"
    | "options"
    | "trace";
  route: Object;
  controller: any;
  action: String;
};

function sprintf(str: string, ...arg: any) {
  const string = String(str)
  const regex = /:\w+/gi
  return string.match(regex) || []
}

function makeRoute(name: String): Object {
  return {
    url: `${process.env.API_VERSION}${name}`,
    params: sprintf(`${process.env.API_VERSION}${name}`)
  }
}

export { Route, makeRoute };

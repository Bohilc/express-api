import { UserController } from "@/controller/UserController";
import { Route, makeRoute } from "@/route/Route";

const UserRoutes: Route[] = [
  {
    method: "get",
    route: makeRoute("/users"),
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: makeRoute("/users/:id"),
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: makeRoute("/users"),
    controller: UserController,
    action: "create",
  },
  {
    method: "put",
    route: makeRoute("/users/:id"),
    controller: UserController,
    action: "updateOrCreate",
  },
  {
    method: "delete",
    route: makeRoute("/users/:id"),
    controller: UserController,
    action: "remove",
  },
];

export default UserRoutes;

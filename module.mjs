// @ts-check
import { module } from "@prisma/composer";
import projetonextNextService from "./service.mjs";

export default module("projetonext-next", ({ provision }) => {
  provision(projetonextNextService, { id: "projetonextnext" });
});

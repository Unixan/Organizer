import create from "./http-service";

export const getUser = create("/User/getUser");

export const createUser = create("/User/createUser");

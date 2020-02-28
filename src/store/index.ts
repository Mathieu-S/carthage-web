import Vue from "vue";
import Vuex from "vuex";
import { User } from "@/libs/models/User";
import { UserService } from "@/libs/services/UserService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: Array<User>()
  },
  mutations: {
    setUsers(state, n: User[]): void {
      state.users = n;
    }
  },
  actions: {
    registerUsers(context, payload: User[]): void {
      context.commit("setUsers", payload);
    },
    deleteUser(context, id: number): void {
      const users = UserService.removeUserById(context.state.users, id);
      context.commit("setUsers", users);
    }
  },
  modules: {}
});

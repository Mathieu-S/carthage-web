import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { User } from "@/libs/models/User";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let state: any;
  let actions: any;
  let store: any;

  beforeEach(() => {
    state = {
      users: Array<User>()
    };
    actions = {
      registerUsers: jest.fn()
    };
    store = new Vuex.Store({
      state,
      actions
    });
  });

  it("is vue instance", () => {
    const wrapper = shallowMount(Home, { store, localVue });

    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("load users from store when loaded", () => {
    const wrapper = shallowMount(Home, { store, localVue });

    expect(state.users.length).toBe(0);
    expect(actions.registerUsers).toHaveBeenCalled();
  });
});

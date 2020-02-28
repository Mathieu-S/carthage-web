import { mount } from "@vue/test-utils";
import TabUser from "@/components/TabUser.vue";

describe("TabUser.vue", () => {
  const wrapper = mount(TabUser);
  console.log(wrapper.vm.$data.users);
  it("is vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

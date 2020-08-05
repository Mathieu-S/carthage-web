import { mount } from "@vue/test-utils";
import TabUser from "@/components/TabUser.vue";

describe("TabUser.vue", () => {
  const wrapper = mount(TabUser);

  it("is vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

import { mount } from "@vue/test-utils";
import Notifier from "@/components/Notifier.vue";

describe("Notifier.vue", () => {
  const msg = "new message";
  const wrapper = mount(Notifier, {
    propsData: { msg }
  });

  it("is vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    expect(wrapper.text()).toMatch(msg);
  });
});

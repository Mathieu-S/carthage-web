<template>
  <section class="home">
    <Notifier :msg="welcomeMessage" />
    <TabUser
      v-show="!hasNoUsers"
      :users="users"
      @delete-user="removeUserById"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { Inject } from "@vue-ioc/core";
import Notifier from "@/components/Notifier.vue";
import TabUser from "@/components/TabUser.vue";
import { StateResponse, ActionEmitter } from "@/libs/helpers/StateTypeHelper";
import { UserRepository } from "@/libs/repositories/UserRepository";
import { User } from "@/libs/models/User";

@Component({
  components: {
    Notifier,
    TabUser
  }
})
export default class Home extends Vue {
  @State("users") readonly users!: StateResponse<User[]>;
  @Action("registerUsers") readonly registerUsers!: ActionEmitter;
  @Action("deleteUser") readonly deleteUser!: ActionEmitter;
  @Inject() readonly userRepository!: UserRepository;

  async mounted(): Promise<void> {
    if (this.users.length === 0) {
      this.registerUsers(await this.userRepository.getAll());
    }
  }

  get welcomeMessage(): string {
    return this.users.length !== 0
      ? "Welcome to Sandbox"
      : "Sandbox is Enpty !";
  }

  get hasNoUsers(): boolean {
    return this.users.length === 0 ? true : false;
  }

  removeUserById(id: number): void {
    this.deleteUser(id);
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notifier {
    margin-bottom: 30px;
  }
}
</style>

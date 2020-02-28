<template>
  <table class="tab-user">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="deleteUser(user.id)">Delete user</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { User } from "@/libs/models/User";

@Component
export default class TabUser extends Vue {
  @Prop() users!: User[];

  @Emit()
  deleteUser(idUser: number): number {
    return idUser;
  }
}
</script>

<style scoped lang="scss">
.tab-user {
  border: black solid 3px;

  thead {
    background-color: darkseagreen;

    th {
      border: black solid 1px;
    }
  }

  tbody {
    td {
      padding: 5px;
      border: black solid 1px;
    }
  }
}
</style>

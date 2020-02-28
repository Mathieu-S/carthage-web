<template>
  <div class="notifier">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notifier extends Vue {
  @Prop() msg!: string;
}
</script>

<style scoped lang="scss">
.notifier {
  border: solid black 3px;
  padding: 10px;
}
</style>

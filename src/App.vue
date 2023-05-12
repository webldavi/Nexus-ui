<script setup lang="ts">
import { ref } from "vue";

const myItems = ref([
  { title: "Item 1", text: "This is the text for item 1", isOpen: false },
  { title: "Item 2", text: "This is the text for item 2", isOpen: false },
  { title: "Item 3", text: "This is the text for item 3", isOpen: false },
]);

function test(){
  console.log("Click")
}

</script>

<template>
  <div class="w-full h-full flex flex-row flex-wrap p-8 gap-4" ref="test">
    <N-Button size="26" bg="#ff0000" @button-click="test">adawddw</N-Button>
    <N-Alert variant="warn">awdawd</N-Alert>
    <N-Accordion :items="myItems" bgText="#444"> </N-Accordion>
    <N-Progress width="100%" percentage="50"/>
    <N-Notify variant="success" isOpen="">TESTE</N-Notify>
  </div>
</template>

<style scoped></style>

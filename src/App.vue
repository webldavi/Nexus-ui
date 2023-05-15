<script setup lang="ts">
import { ref } from "vue";

const myItems = ref([
    { title: "Item 1", text: "This is the text for item 1", isOpen: false },
    { title: "Item 2", text: "This is the text for item 2", isOpen: false },
    { title: "Item 3", text: "This is the text for item 3", isOpen: false },
]);

const modalIsOpen = ref(false);
function test() {
    modalIsOpen.value = true;
}
</script>

<template>
    <div class="w-full min-h-screen flex flex-row flex-wrap gap-4">
        <N-Nav class="bg-gray-400 h-16">awd</N-Nav>
        <div class="w-full h-max flex flex-row flex-wrap gap-12">
            <N-Modal
                size="full"
                v-if="modalIsOpen"
                @close-modal="modalIsOpen = false"
            >
                <template #title> TITULO DO MODAL </template>
                <template #body> BODY DO MODAL </template>
            </N-Modal>
            <N-Button size="26" bg="gray" @button-click="test"
                >Abrir modal</N-Button
            >
            <N-Input />
            <N-Alert variant="warn">awdawd</N-Alert>
            <N-Accordion :items="myItems" bgText="#444"> </N-Accordion>
            <N-Progress width="100%" percentage="50" />
            <N-Notify variant="success" isOpen="">TESTE</N-Notify>
            <N-404>Página não encontrada</N-404>
            <N-Badge bg="#444">awdawdawdawdwad</N-Badge>
            <N-Loading size="100px" />
            <N-Flex
                direction="row"
                gap="2px"
                justify="center"
                align="center"
                width="100%"
                height="100%"
                wrap="wrap"
            >
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
                <span class="w-max">AAAA</span>
            </N-Flex>
            <N-Checkbox color="#34eb4c" unClickColor="black" />
            <N-Switch />
            <N-Box>awdawd</N-Box>
            <N-Code lang="js" theme="github-dark" editor width="500px" height="500px">const teste = dwdwdw</N-Code>
        </div>
    </div>
</template>

<style scoped></style>

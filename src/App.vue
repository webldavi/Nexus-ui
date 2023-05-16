<script setup lang="ts">
import { ref } from "vue";

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

            <N-Accordion height="46rem">
                <N-Accordion-item>
                    <template #title> ITEM 1 </template>
                    <template #body>
                        AWDAWDAWDWawdawd awd awd adaw da wd
                        awdwadadawdawdawdawdwad awdaw
                        dawdawdawdawdawdawdadawdawdaw dawdawd
                    </template>
                </N-Accordion-item>
                <N-Accordion-item>
                    <template #title> ITEM 1 </template>
                    <template #body>
                        AWDAWDAWDWawdawd awd awd adaw da wd
                        awdwadadawdawdawdawdwad awdaw
                        dawdawdawdawdawdawdadawdawdaw dawdawd
                    </template>
                </N-Accordion-item>
            </N-Accordion>

            <N-Progress width="100%" percentage="50" />
            <N-Notify variant="success" isOpen="false">TESTE</N-Notify>
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
            <N-Code lang="js" theme="dracula" :editor="false"
                >const teste = 'teste'</N-Code
            >
        </div>
    </div>
</template>

<style scoped></style>

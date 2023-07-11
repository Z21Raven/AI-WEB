<script setup>
import { ref, computed } from "vue";
import TextSummary from "./components/TextSummary.vue";
import AnswerQuestions from "./components/AnswerQuestions.vue";

const paragraph = ref("");

const charactersCount = computed(() => {
  return paragraph.value.length;
});
</script>
<template>
  <div id="App-div" class="flex justify-center mb-8">
    <div class="sm:w-[480px] lg:w-[1024px] p-2 justify-start">
      <label for="my-text" class="p-2 font-bold">
        Enter your paragraph here</label
      >
      <textarea
        v-model.trim="paragraph"
        name=""
        id="my-text"
        rows="10"
        class="p-1 w-full shadow-lg shadow-slate-500/50 border-slate-200 border-2 focus:border-slate-600 focus:outline-none rounded mt-1"
      ></textarea>
      <span class="px-1 text-slate-500">characters: {{ charactersCount }}</span>
    </div>
  </div>
  <div id="two-components" class="flex flex-row gap-2">
    <TextSummary :paragraph="paragraph" />
    <AnswerQuestions :paragraph="paragraph" />
  </div>
  <div id="additional-components" class="flex flex-col"></div>
</template>

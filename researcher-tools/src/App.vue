<script setup>
import { ref, computed } from "vue";
import TextSummary from "./components/TextSummary.vue";
import AnswerQuestions from "./components/AnswerQuestions.vue";

// paragraph constant, which is the variable that will handle article or any text want to summarize or ask a question about it
const paragraph = ref("");

//to disply the characters below the text area of summarized text or article text. and compare between them
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
      <!-- bind this text area with paragraph -->
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
    <!-- insert the components here -->
    <TextSummary :paragraph="paragraph" />
    <AnswerQuestions :paragraph="paragraph" />
  </div>
  <div id="additional-components" class="flex flex-col"></div>
</template>

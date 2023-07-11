<script setup>
import { ref, computed } from "vue";
import { inference } from "./summaryModel.js";

const summarizedText = ref("");
const props = defineProps({
  paragraph: String,
});

const paragraphSummary = async () => {
  if (props.paragraph == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "There is no text to Summarize",
    });
    console.log("there is no paragraph");
    return;
  }
  let result = await inference.summarization({
    // models: facebook/bart-large-cnn,sshleifer/distilbart-cnn-12-6
    model: "facebook/bart-large-cnn",
    inputs: props.paragraph,
  });

  try {
    summarizedText.value = result.summary_text;
  } catch (e) {
    console.log(e);
  }
};

const answerCount = computed(() => {
  return summarizedText.value.length;
});
</script>

<template>
  <div class="flex flex-col justify-center items-center w-1/2">
    <button
      class="bg-green-300 hover:bg-green-400 animate-bounce mt-6 w-3/4 rounded-xl h-10 font-bold text-lg"
      @click="paragraphSummary"
    >
      Summarize the paragraph
    </button>
    <div class="w-3/4 justify-start flex flex-col">
      <textarea
        id="summary-text"
        rows="5"
        v-model.trim="summarizedText"
        class="w-full p-1 m-1 shadow-lg shadow-slate-500/50 border-slate-200 border-2 focus:border-slate-600 focus:outline-none rounded mt-1"
      ></textarea>
      <span class="px-2 text-slate-500">characters: {{ answerCount }}</span>
    </div>
  </div>
</template>

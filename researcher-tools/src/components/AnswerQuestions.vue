<script setup>
import { ref, computed } from "vue";
import { modelQuery } from "./myQnaModel.js";

const myQuestion = ref("");
const modelAnswer = ref("");
const props = defineProps({
  paragraph: String,
});

// this is the format of data that a 'modelQuery' function want as an argument.
const modelInputs = computed(() => {
  return {
    inputs: {
      question: myQuestion.value,
      context: props.paragraph,
    },
  };
});

const answerQ = async () => {
  const { paragraph } = props;
  if (paragraph == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "There is no context",
    });
  }
  if (myQuestion.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "There is no question to Answer",
    });
  } else {
    // the argument is the computed property which is consist of question and context as inputs.
    modelQuery(modelInputs.value).then((response) => {
      try {
        modelAnswer.value = response.answer;
      } catch (e) {
        console.log(e);
      }
    });
  }
};
</script>

<template>
  <div class="w-1/2 flex flex-col items-center">
    <label for="question" class="text-sm p-1"> What is your question?</label>
    <div class="flex justify-center w-full">
      <input
        id="question"
        v-model.trim="myQuestion"
        type="text"
        class="rounded-lg w-3/4 bg-green-300 p-1 focus:outline-none focus:border-lime-900 border-2 text"
        @keyup.enter="answerQ"
      />
    </div>
    <textarea
      id="summary-text"
      rows="5"
      v-model="modelAnswer"
      class="w-3/4 p-1 m-1 shadow-lg shadow-slate-500/50 border-slate-200 border-2 focus:border-slate-600 focus:outline-none rounded mt-1"
    >
    </textarea>
  </div>
</template>

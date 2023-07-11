import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.5.2/+esm';
import { createRepo, commit, deleteRepo, listFiles } from "https://cdn.jsdelivr.net/npm/@huggingface/hub@0.8.3/+esm";


const HF_ACCESS_TOKEN = "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";

const inference = new HfInference(HF_ACCESS_TOKEN);

export { inference }
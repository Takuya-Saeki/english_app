import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = {
    input_url: "",
    text_japanese: "",
    text_english: "",
    word_list: []
  };
  let input_url = "";
  let text_japanese = "";
  let audioSrc = "";
  return `${$$result.head += `<!-- HEAD_svelte-1bvvn5d_START -->${$$result.title = `<title>英訳</title>`, ""}<!-- HEAD_svelte-1bvvn5d_END -->`, ""} <head data-svelte-h="svelte-1olfqp6"><title>英語の長文教材を作ろう</title></head> <body><input type="text" placeholder="英訳したいページのURLを入れてね" class="serch-text"${add_attribute("value", input_url, 0)}> <input type="text" placeholder="英訳したい日本語を入れてね" class="serch-text"${add_attribute("value", text_japanese, 0)}> <button data-svelte-h="svelte-10315tw">URLの記事を英訳</button> <div><p>${escape(input_url)}</p> <p>${escape(text_japanese)}</p></div>      <div><p>${escape(data.input_url)}</p> <audio${add_attribute("src", audioSrc, 0)} controls>Your browser does not support the audio element.</audio> <p>${escape(data.text_english)}</p> <p>${escape(data.text_japanese)}</p> <p>${escape(data.word_list)}</p></div></body>`;
});
export {
  Page as default
};

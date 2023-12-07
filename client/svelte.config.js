import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter({
          pages: '../server/static',  // 出力ディレクトリ。必要に応じて変更してください。
          assets: '../server/static', // 同上
          fallback: null,
          precompress: true,
          strict: false  // strictモードを無効にしてみてください。
        }),
    },  
};

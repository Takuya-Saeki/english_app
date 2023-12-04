<script>
  let input_url = "";
  let input_text = "";
  let result = "";
  const apiUrl = import.meta.env.VITE_API_URL;

  const ans = (async () => {
    const res = await fetch(`/api`);
    return await res.json();
  })();

  async function requestURL() {
    const param = {
      input_url: input_url,
    };
    // pythonでreturnしているオブジェクトの名前を使わないといけない
    const url = `/demo_english_text`;
    // const url = `/api/sample`;
    // const url = `/api`;
    // 例外処理
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      const data = await response.json();
      // json形式にmessagekがkeyとして含まれることを期待する
      result = data.message;
    } catch (error) {
      console.log("faild to request", error);
    }
    return result;
  }
</script>

<svelte:head>
  <title>サンプル：大文字に変換</title>
</svelte:head>

<input
  type="text"
  bind:value={input_url}
  placeholder="英訳したいページのURLを入れてね"
  class="serch-text"
/>
<button on:click={requestURL}>URLを英訳</button>

<div>
  <p>{result}</p>
</div>

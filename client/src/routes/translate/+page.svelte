<script>
  let data = {
    input_url: "",
    text_japanese: "",
    text_english: "",
    word_list: [],
  };
  let input_url = "";
  let text_japanese = "";
  let audioSrc = "";

  async function requestURL() {
    const url = `/api/create_textbook`;
    // input_urlを data.input_urlに入れることで、validationしやすそう
    // 現状の値をdataに反映
    data.input_url = input_url;
    data.text_japanese = text_japanese;

    try {
      // 正常時の処理
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }

      data = await response.json();

      // postでパスを送信するように変更する
      audioSrc = "http://127.0.0.1:8000/api/audio";
      // 例外処理
    } catch (error) {
      console.log("faild to request", error);
    }
  }
</script>

<svelte:head>
  <title>英訳</title>
</svelte:head>

<head>
  <title>英語の長文教材を作ろう</title>
</head>

<body>
  <input
    type="text"
    bind:value={input_url}
    placeholder="英訳したいページのURLを入れてね"
    class="serch-text"
  />
  <input
    type="text"
    bind:value={text_japanese}
    placeholder="英訳したい日本語を入れてね"
    class="serch-text"
  />
  <button on:click={requestURL}>URLの記事を英訳</button>
  <div>
    <p>{input_url}</p>
    <p>{text_japanese}</p>
  </div>
  <!-- 一文ずつ改行して表示したい -->
  <!-- タブ遷移したら、表示が消える -->
  <!-- 音声ファイルの再生 -->
  <!-- 単語をクリックしたら、単語帳に追加される -->
  <!-- リロードしても、ページが表示されるようにしたい -->
  <div>
    <p>{data.input_url}</p>
    <audio src={audioSrc} controls>
      Your browser does not support the audio element.
    </audio>
    <p>{data.text_english}</p>
    <p>{data.text_japanese}</p>
    <p>{data.word_list}</p>
  </div>
</body>

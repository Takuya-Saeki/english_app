<script lang="ts">
  let words: string[] = ["apple", "banana", "orange", "grape", "melon"];
  let selectedWords: string[] = [];

  function selectWord(word: string): void {
    if (!selectedWords.includes(word)) {
      selectedWords = [...selectedWords, word];
    }
  }
</script>

<div>
  <h2>Available Words:</h2>
  {#each words as word}
    <span class="word" on:click={() => selectWord(word)}>{word}</span>
  {/each}
</div>

<div>
  <h2>Selected Words:</h2>
  {#each selectedWords as word}
    <span class="word selected">{word}</span>
  {/each}
</div>

<style>
  .word {
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    display: inline-block;
  }
  .selected {
    background-color: lightblue;
  }
</style>

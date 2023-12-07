<!-- <script lang="ts">
  import Item from "../../components/Item.svelte";

  let selectedItem: string = "";

  function handleClick(name: string): void {
    selectedItem = name;
    console.log("選択されたアイテム:", selectedItem);
  }

  let wordbook: string[] = []; // 単語帳の型を明示
</script>

<svelte:head>
  <title>英訳</title>
</svelte:head>
<Item name="Apple" on:click={() => handleClick("Apple")} />
<Item name="Banana" on:click={() => handleClick("Banana")} />
<Item name="Cherry" on:click={() => handleClick("Cherry")} />

<h2>選択されたアイテム: {selectedItem}</h2>
<h2>単語帳</h2>
<ul>
  {#each wordbook as word}
    <li>{word}</li>
  {/each}
</ul> -->


<script>
  import Item from "../../components/Item.svelte";

  let selectedItem = "";

  function handleClick(name) {
    selectedItem = name;
    console.log("選択されたアイテム:", selectedItem);
  }
</script>

<svelte:head>
  <title>英訳</title>
</svelte:head>
<Item name="Apple" on:click={() => handleClick("Apple")} />
<Item name="Banana" on:click={() => handleClick("Banana")} />
<Item name="Cherry" on:click={() => handleClick("Cherry")} />

<h2>選択されたアイテム: {selectedItem}</h2>
<h2>単語帳</h2>
<ul>
  {#each wordbook as word}
    <li>{word}</li>
  {/each}
</ul>
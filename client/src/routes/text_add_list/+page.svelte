<script lang="ts">
  let showAddButton = false;

  function handleMouseEnter() {
    showAddButton = true;
  }

  function handleMouseLeave() {
    showAddButton = false;
  }

  function handleAddClick() {
    // ここに追加するアクションを実装します。
    console.log("'This' was added!");
  }
</script>

<div>
  <span
    class="highlight"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    This
  </span>
  is a pen
  {#if showAddButton}
    <button class="add-button" on:click={handleAddClick}>Add</button>
  {/if}
</div>

<style>
  .highlight {
    cursor: pointer;
    background-color: lightyellow;
  }

  .add-button {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 5px;
    background-color: #ddd;
    border: none;
    cursor: pointer;
  }
</style>

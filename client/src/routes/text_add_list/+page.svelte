<script lang="ts">
  let showAddButton = false;
  let showModal = false;

  function handleMouseEnter() {
    showAddButton = true;
  }

  function handleMouseLeave() {
    showAddButton = false;
  }

  function handleAddClick() {
    // 追加ボタンのクリックイベント
    showModal = true;
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter") {
      handleAddClick();
    }
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div>
  <span
    class="highlight"
    role="button"
    tabindex="0"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:keyup={handleKeyUp}
    on:click={handleAddClick}
  >
    This
  </span>
  is a pen
</div>

{#if showModal}
  <div class="modal">
    <div class="modal-content">
      <p>単語を追加しますか？</p>
      <button on:click={closeModal}>Close</button>
    </div>
  </div>
{/if}

<style>
  /* ホバー状態のスタイル */
  .highlight:hover {
    transform: translateY(-5px); /* 少し上に動かす */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* やや大きめの影を追加 */
  }
</style>

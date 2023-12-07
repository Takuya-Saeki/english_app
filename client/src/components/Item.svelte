<script lang="ts">
    export let name = '';
  
    function handleAction() {
      console.log(name);
    }
  
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        handleAction();
      }
    }
  </script>
  
  <div on:click={handleAction} on:keydown={handleKeydown} tabindex="0" role="button">
    {name}
  </div>
  
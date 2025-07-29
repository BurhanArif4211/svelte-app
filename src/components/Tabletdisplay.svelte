<!-- TabletDisplay.svelte -->
<script lang="ts">
  export let items = []; // Array of { text: string, icon?: string }
  export let DisplayTextOnly = false
</script>

<div class="tablets-container">
{#if DisplayTextOnly}
{#each items as item }
    <div class="tablet">
        <span>{item}</span>
    </div>
  {/each}
{:else}
  {#each items as item (item.text)}
    <div class="tablet">
      {#if item.icon}
        <img src={item.icon} alt="" class="icon" />
      {/if}
      <a href="{item.link}">
        <span>{item.text}</span>
      </a>
    </div>
  {/each}
{/if}
</div>

<style>
  .tablets-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 8px;
  }

  .tablet {
    display: inline-flex;
    align-items: center;
    background-color: #bc1fff6b;
    border-radius: 16px;
    padding: 6px 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .tablet:hover {
    background-color: #d0d0d0;
    color: black;
    transform: translateY(-1px);
  }

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    object-fit: contain;
  }
</style>

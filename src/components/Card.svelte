<script lang="ts">
  export let size: 'hero' | 'lg' | 'md' | 'sm' = 'md';
  export let type: 'trans' | 'purple' | 'black' | 'custom' = 'trans';
  export let customBg = '#fff'
  const sizeClasses: Record<string, string> = {
    hero: 'p-8 max-w-4xl w-full rounded-2xl',
    lg:   'p-6 max-w-lg w-full rounded-xl',
    md:   'p-4 max-w-md w-full rounded-lg',
    sm:   'p-3 max-w-sm w-full rounded-md'
  };
  
  const typeClasses: Record<string, string> = {
    trans: 'bg-white/10 backdrop-blur-md',
    purple: 'bg-purple-700/90',
    black: 'bg-black/90',
    custom: `${customBg}`
  };
  
  $: classes = `${sizeClasses[size] || sizeClasses.md} ${typeClasses[type] || typeClasses.trans}`;
</script>

<div class={`shadow-lg ${classes}`}>
  <slot />
</div>

<style>
  div {
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.08);
  }
</style>
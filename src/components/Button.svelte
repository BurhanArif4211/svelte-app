<script lang="ts">
  /**
   * Button component with size and variant support.
   * 
   * Props:
   * - variant: 'primary' | 'secondary' | 'destructive' | 'transparent-blurred' | 'custom'
   * - size: 'sm' | 'md' | 'lg'
   * - customColor: string (CSS color or Tailwind class) for 'custom' variant
   * - disabled: boolean
   */
  export let variant: 'primary' | 'secondary' | 'destructive' | 'trablur' | 'custom' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let customColor: string = '';
  export let disabled: boolean = false;
  export let onclick;
  // Size classes
  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Variant classes
  const variantClasses: Record<string, string> = {
    primary: 'bg-purple-600 hover:bg-purple-700',
    secondary: 'bg-gray-200 hover:bg-gray-300',
    destructive: 'bg-red-600 hover:bg-red-700',
    trablur: 'bg-[#B201FFF0]/30 backdrop-blur-sm hover:bg-[#B201FF]/50',
  };

  $: baseClasses = 'transition-all inline-flex items-center justify-center font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  $: sizeClass = sizeClasses[size] ?? sizeClasses.md;
  $: variantClass =
    variant === 'custom'
      ? customColor
      : variantClasses[variant] ?? variantClasses.primary;
  $: disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  $: classes = [baseClasses, sizeClass, variantClass, disabledClass].join(' ');
</script>

<button onclick={onclick} class={classes} {disabled}>
  <slot />
</button>

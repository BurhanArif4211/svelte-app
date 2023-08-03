<script>
  import { onMount } from 'svelte';

  export let text = '';
  let isVisible = false;
  /**
   * @param {HTMLElement} element
   */
  // Function to check if the element is in the viewport

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  // Function to handle the scroll event
  function handleScroll() {
    const element = document.getElementById('scroll-animate');
    if (element) {
      isVisible = isInViewport(element);
    }
  }

  onMount(() => {
    handleScroll(); // Initial check in case the element is already visible on mount
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove the scroll event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<style>
  .scroll-animate {
    opacity: 0;
    transform: translateY(300px) rotateZ(-50deg);
    transition: opacity 1s, transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .scroll-animate.visible {
    opacity: 1;
    transform: translateY(0) rotateZ(0deg);
  }
</style>

<div class="scroll-animate" id="scroll-animate" class:visible={isVisible}>
  <p>{text}</p>
</div>

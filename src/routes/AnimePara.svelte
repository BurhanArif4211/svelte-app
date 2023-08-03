<script>
    import { onMount } from 'svelte';
    export let text = '';
  
    /**
   * @type {any[]}
   */
  let lines = [];

  
  /**
   * @param {{ getBoundingClientRect: () => any; }} element
   */
 // Function to check if the element is in the viewport
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  // Function to handle the scroll event
  function handleScroll() {
    lines.forEach((line) => {
      line.isVisible = isInViewport(line.element);
    });
  }

  /**
   * @param {string} str
   */
  function splitStringByNewLine(str) {
  return str.split('|')
}
  onMount(() => {
    lines=splitStringByNewLine(text)
    lines = lines.map((line) => ({ text: line, isVisible: false }));
    console.log(lines)
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
    p.endless-animation {
      display: inline-block;
      animation: shake 3s infinite cubic-bezier(0.84, 0, 0.11, 0.98);
    }
  
    @keyframes shake {
      0%, 100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(50px);
      }
    }
  </style>
  {#each lines as line (line.text)}
  {#if index !== 0}
  <br>
{/if}
  <p class="endless-animation" animate:visible={line.isVisible}>{line.text} </p>
  {/each}
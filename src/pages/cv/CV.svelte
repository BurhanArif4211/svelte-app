<script>
    import { router } from "../../router/router";
    import Button from "./../../components/Button.svelte"

</script>
<div class="flex h-screen flex-col items-center justify-center">
    <Button Class="mt-4" Aria-Label="check out burhan arif's Security-focused resume" variant='trablur'>
    <a href="/pdf/burhanArif_CV_Security_1.pdf" target="_blank">
        Security-Focused CV
    </a>
    </Button>
    <Button Class="mt-4" Aria-Label="check out burhan arif's Web development resume" variant='trablur'>
    <a href="/pdf/BurhanArif_WebDev_CV_1.pdf" target="_blank">
        Web Developer CV
    </a>
    </Button>
    <Button Class="mt-4" Aria-Label="check out burhan arif's General resume" variant='trablur'>
    <a href="/pdf/burhanArif_CV_1.pdf" target="_blank">
        General CV
    </a>
    </Button>
    <!-- <p class="inline text-gray-700">TODO: add more different Categorical CVs</p> -->
</div>
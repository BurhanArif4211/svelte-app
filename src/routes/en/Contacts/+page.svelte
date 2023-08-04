<script>
  import ContactForm from "./ContactForm.svelte";

</script>
<h1 class="header">Contacts</h1>
<ContactForm/>
<style>
    *{
        font-family: Helvetica, sans-serif;
        color: #ccc;
    }
    .header{
        padding: 5rem;
        font-size: clamp(1rem, 8vw, 3rem);
        
    }
</style>
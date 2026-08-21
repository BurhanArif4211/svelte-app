<!-- src/components/CertificationCard.svelte -->
<script>
  export let cert;
</script>

<div class="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-2xl p-5 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center">
  <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500/50 mb-4 flex-shrink-0">
    <img src={cert.image} alt={cert.name} class="w-full h-full object-cover" />
  </div>
  <h3 class="text-xl font-bold text-white mb-1">{cert.name}</h3>
  <p class="text-purple-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
  <p class="text-gray-300 text-sm">{cert.description}</p>
</div>

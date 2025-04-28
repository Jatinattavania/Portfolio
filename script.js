
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  <script>
  document.getElementById("scrollTopIcon").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  });
</script>
});

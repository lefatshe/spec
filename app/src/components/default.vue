<template>
  <div id="app">
    <Navbar/>
    <div class="application-main">
      <main>
        Done
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/nav';
  import Footer from '@/components/footer'
  import Feature from '@/components/feature'
  import Resume from '@/components/resume'

  export default {
    name: 'DefaultPage',
    components: {
      Navbar,
      Footer,
      Feature,
      Resume
    }
  }
</script>

<style>

</style>

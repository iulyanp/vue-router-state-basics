<template>
  <div class="contact">
    <h1>Contact</h1>
    <contact-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>

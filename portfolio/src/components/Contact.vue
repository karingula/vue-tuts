<template>
  <div id="container">
    <div id="contact-title">
      <span>Don't be a Stranger</span>
      <br>
      <span class="greetings">Say Hello!</span>
    </div>
    <div class="wrapper">
      <div class="col-l" style="margin-bottom: 60px;">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div class="contact-label">
          <span class="notes" style="margin-top: 60px;">Need help?</span><br>
          <a href="mailto:vingula01@gmail.com">vingula01@gmail.com</a>
        </div>
      </div>
      <div class="col-r" style="margin-bottom: 60px;">
        <b-form-group>
          <b-form-input placeholder=" Name" /> <br>
          <b-form-input
            id="input-email"
            v-model="form.email.value"
            v-validate="'required|email'"
            name="email"
            placeholder=" E-mail"
            type="text"
            :state="validateState('email')"
          /> <br>
          <span>{{ veeErrors.first('email') }}</span>
          <b-form-textarea placeholder="What are you writing about?" rows="7" />
          <div v-if="!veeErrors.any()" class="valid-btn">
            <b-button class="btn" type="submit" variant="light">
              Send Over
            </b-button>
          </div>
          <div v-if="veeErrors.any()" class="invalid-btn">
            <b-button class="btn" type="submit" variant="light" :disabled="veeErrors.any()">
              Send Over
            </b-button>
          </div>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: {
          value: ""
        },
        message: ""
      }
    };
  },
  methods: {
    validateState(ref) {
        if (
          this.veeFields[ref] &&
          (this.veeFields[ref].dirty || this.veeFields[ref].validated)
        ) {
          return !this.veeErrors.has(ref)
        }
        return null
      },
  }
};
</script>

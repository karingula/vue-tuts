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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam.
                </p>
                <div class="contact-label">
                    <span class = "notes" style="margin-top: 60px;">Need help?</span><br/>
                    <a href="mailto:vingula01@gmail.com">vingula01@gmail.com</a>
                </div>
            </div>
            <div class="col-r" style="margin-bottom: 60px;">
                <b-form-group>
                    <b-form-input placeholder=" Name">
                    </b-form-input> <br>
                    <b-form-input placeholder=" E-mail">
                    </b-form-input> <br>
                    <b-form-textarea
                    placeholder="What are you writing about?"
                    rows="7">
                    </b-form-textarea>
                    <div class="flex">
                        <b-button class="btn" type="submit" variant="light">Send Over</b-button>
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
                name: '',
                email: '',
                message: ''
            }
        }
    }
}
</script>



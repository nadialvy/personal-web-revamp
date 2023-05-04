<template>
  <div class="py-4 px-8 lg:px-20 lg:py-8 xl:px-32 xl:py-10 2xl:px-[410px] 2xl:py-12">
    <p class="text-3xl text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Let's Work Together</p>
    <div class="lg:flex lg:gap-x-6">
      <div class="lg:w-1/2">
        <p class="text-xl text-purple-500 mt-4 font-semibold">Contact Information</p>
        <p class="text-black mt-2">Get in touch with me via the contact information below if you're interested in connecting, collaborating, or discussing potential opportunities:</p>
        <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
          <img src="/contactUs/email.png" alt="Email" class="w-7">
          <p class="font-semibold text-purple-500 hover:text-pink-700 hover:cursor-pointer">nadialovely1803@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/nadia-lovely/" target="_blank" rel="noopener noreferrer">
          <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
            <img src="/contactUs/linkedin.png" alt="Linkedin" class="w-7">
            <p class="font-semibold text-purple-500 hover:text-pink-700">Nadia Lovely</p>
          </div>
        </a>
        <a href="https://github.com/nadialvy" target="_blank" rel="noopener noreferrer">
          <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
            <img src="/contactUs/github-sign.png" alt="Github" class="w-7">
            <p class="font-semibold text-purple-500 hover:text-pink-700">nadialvy</p>
          </div>
        </a>
        <div class="divider lg:hidden"></div>
      </div>
      
      <div class="lg:w-1/2">
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" v-model="from_name" name="name" class="input input-bordered w-full mb-2" />
        </div>
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="ex: hello@gmail.com" v-model="from_email" name="email" class="input input-bordered w-full mb-2" />
        </div>
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input type="text" v-model="subject" name="subject" class="input input-bordered w-full mb-2" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea v-model="message" name="message" class="textarea textarea-bordered h-24" ></textarea>
        </div>
        <button class="btn btn-primary mt-4 rounded-none w-full mb-2" @click="sendEmail">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
export default{
  data(){
    return{
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail(){
      try {
        if(this.from_name === '' || this.from_email === '' || this.subject === '' || this.message === '') {
          this.createAlert("All fields are required", "danger", 2000);
          return;
        }

        emailjs.send("service_lw4b1fl","template_oxledye",{
          from_email: this.from_email,
          subject: this.subject,
          message: this.message,
          from_name: this.from_name,
        }, "i-9G_V0XgTCU1VyOA");

        this.createAlert("Email sent successfully", "success", 2000);

      } catch(error) {
        this.createAlert(`Something went wrong ${error}`, "danger", 5000);
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    createAlert(message, type, timeout) {
      createToast(message, {
        position: "bottom-center",
        hideProgressBar: true,
        type: type,
        timeout: timeout,
        dismissible: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        closeOnClick: true,
        closeButton: true,
        icon: true,
        rtl: false,
      });
    },
  }

}
</script>
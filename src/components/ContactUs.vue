<template>
  <div class="py-4 px-8 lg:px-20 lg:py-8 xl:px-32 xl:py-10 2xl:px-[410px] 2xl:py-12">
    <p class="text-3xl text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Let's Work Together</p>
    <p class="text-xl text-purple-500 mt-4 font-semibold">Contact Information</p>
    <p class="text-black mt-2">Get in touch with me via the contact information below if you're interested in connecting, collaborating, or discussing potential opportunities:</p>
    <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
      <img src="/contactUs/email.png" alt="Email" class="w-7">
      <p class="font-semibold text-purple-500">nadialovely1803@gmail.com</p>
    </div>
    <a href="https://www.linkedin.com/in/nadia-lovely/" target="_blank" rel="noopener noreferrer">
      <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
        <img src="/contactUs/linkedin.png" alt="Linkedin" class="w-7">
        <p class="font-semibold text-purple-500">Nadia Lovely</p>
      </div>
    </a>
    <a href="https://github.com/nadialvy" target="_blank" rel="noopener noreferrer">
      <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
        <img src="/contactUs/github-sign.png" alt="Github" class="w-7">
        <p class="font-semibold text-purple-500">nadialvy</p>
      </div>
    </a>
    <div class="divider"></div>
    <div class="form-control w-full mb-2">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="text" placeholder="ex: hello@gmail.com" class="input input-bordered w-full mb-2" />
    </div>
    <div class="form-control w-full mb-2">
      <label class="label">
        <span class="label-text">Subject</span>
      </label>
      <input type="text" placeholder="" class="input input-bordered w-full mb-2" />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea class="textarea textarea-bordered h-24" placeholder=""></textarea>
    </div>
    <button class="btn btn-primary mt-4 rounded-none w-full mb-2">Send</button>
  </div>
</template>
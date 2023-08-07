<script>
  import AnimeHeading from "../../AnimeXHeading.svelte";

</script>
<section class="contact">
  
  <div class="container">
    <p class="text-contact"><AnimeHeading text="Response: ~1 day" xdirection="100" /></p>
    <form>
      <div class="left wow animate__backInLeft" data-wow-duration="1.3s" data-wow-offset="70">
        <input type="text" placeholder="Enter Your Name" name="name">
        <input type="email" placeholder="Enter Your Email" name="email">
        <input type="phone" placeholder="Enter Your Phone" name="phone">
      </div>
      <div class="right wow animate__backInRight" data-wow-duration="1.3s" data-wow-offset="70">
        <textarea placeholder="Enter Your Message" name="message"></textarea>
        <input type="submit" value="Send">
      </div>
    </form>
  </div>
</section>
<style>
    *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary:#1e083b;
  }
  .contact {
  background-color: transparent;
  background-size: cover;
  position: relative;
  padding: 2rem;
  background-attachment: fixed;
  z-index: 0;
}

.contact .container {
  position: relative;
  z-index: 2;
}

.contact .container .text-contact {
  width: 600px;
  text-align: center;
  color: #ccc;
  margin-bottom: 1rem;
  font-size: clamp(0.8rem, 1vw, 3rem);
 
}
@media (max-width: 775px) {
  .contact .container .text-contact {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
}
@media (max-width: 375px) {
  .contact .container .text-contact {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
}
.contact .container form {
  display: flex;
  margin: auto;
  max-width: 800px;
}
@media (max-width: 767px) {
  .contact .container form {
    display: block;
  }
}
@media (min-width: 1200px) {
  .contact .container form {
    max-width: 880px;
  }
}
.contact .container form .left {
  flex: 1;
  margin-right: 10px;
}
.contact .container form .left input {
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px #ccc;
  border-radius: 0.7vh;
  height: 45px;
  background-color: var(--primary);
  font-size: 15px;
  color: #ccc;
}
.contact .container form .left input:focus {
  background-color: #ccc;
  color:var(--primary)
}
.contact .container form .left input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
@media (max-width: 767px) {
  .contact .container form .left {
    width: 100%;
  }
}
.contact .container form .right {
  flex: 1;
  margin-left: 10px;
}
.contact .container form .right textarea {
  display: block;
 
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px #ccc;
  height: 150px;
  background-color: var(--primary);
  border-radius: 10px;
  outline: none;
  color: #ccc;
  font-size: 15px;
}
.contact .container form .right textarea:focus {
  background-color: #fff;
  color: var(--primary);
}
.contact .container form .right textarea:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.contact .container form .right input {
  width: 90%;
  height: 45px;
  border: solid white 1px;
  padding: 10px;
  background-color: var(--main-color);
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  opacity: 0.8;
  transition: 0.5s ease-in-out;

}
.contact .container form .right input:hover {
  opacity: 1;
}
@media (max-width: 775px) {
  .contact .container form .right {
    margin-left: 0;
  }
}

</style>
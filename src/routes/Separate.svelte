<div class="or-spacer">
    <div class="mask"></div>

  </div>
<style>
    .or-spacer {
  margin: auto;
  width: clamp(100px,40vw,500px);
  position: relative;
  transition: all 1s ease-in-out;
  animation: stretch 2s infinite;
}
.or-spacer .mask {
  overflow: hidden;
  height: 20px;
}
.or-spacer .mask:after {
  content: '';
  display: block;
  margin: -25px auto 0;
  width: 100%;
  height: 25px;
  border-radius: 125px / 12px;
  box-shadow: 0 0 10px #ccc;
}
@keyframes stretch{
  0% , 100%{
width: 40%;
  }
  50%{
width: 50%;
  }
}

</style>
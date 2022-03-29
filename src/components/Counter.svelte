<script>
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div class="counter">
    <div class="row justify-content-center align-items-center">
        <div class="col-auto">
            <button on:click={subtract}>-</button>
        </div>
        <div class="col-auto">
            <pre>{ count }</pre>
        </div>
        <div class="col-auto">
            <button on:click={add}>+</button>
        </div>
    </div>
</div>
<div class="message text-center">
  <slot />
</div>

<style lang="scss">
    @import "../styles/components/counter";
    //this builds ok, but is stripped when running dev :shrug:
    .counter{
        background: #333;
    }
</style>

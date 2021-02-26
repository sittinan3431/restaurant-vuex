<template>
  <div id="app">
    <header
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm"
    >
      <p class="h3 my-0 me-md-auto fw-normal">OLE Restaurant</p>
      <a class="btn btn-outline-primary"
        >รายการอาหาร
        {{
          $store.state.sum +
            $store.state.product1.amount +
            $store.state.product2.amount +
            $store.state.product3.amount +
            $store.state.product4.amount +
            $store.state.product5.amount +
            $store.state.product6.amount +
            $store.state.product7.amount +
            $store.state.product8.amount +
            $store.state.product9.amount
        }}
        จาน
      </a>
    </header>
    <main class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product1.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="http://www.freakwhey.com/post_files/webboard/IMG1352897513.jpg"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  10 บาท
                </ul>
                <div id="example-1">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product1.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product1.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product1.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product2.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="data:image/jpeg;base64,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"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  10 บาท
                </ul>
                <div id="example-2">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product2.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product2.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product2.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product3.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="https://www.scholarship.in.th/wp-content/uploads/2015/06/32.jpg"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  50 บาท
                </ul>
                <div id="example-3">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product3.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product3.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product3.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product4.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="http://i2.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e71.jpg?resize=660%2C339"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  45 บาท
                </ul>
                <div id="example-4">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product4.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product4.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product4.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product5.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="http://i2.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e81.jpg?resize=660%2C455"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  80 บาท
                </ul>
                <div id="example-5">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product5.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product5.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product5.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product6.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="http://i0.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e101.jpg?resize=660%2C441"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  55 บาท
                </ul>
                <div id="example-6">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product6.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product6.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product6.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product7.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="https://i.ytimg.com/vi/K1cSTWFE-TY/maxresdefault.jpg"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  40 บาท
                </ul>
                <div id="example-6">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product7.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product7.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product7.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product8.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="https://magazine.foodpanda.co.th/wp-content/uploads/sites/14/2019/11/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%88%E0%B8%B7%E0%B8%94.jpg"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  40 บาท
                </ul>
                <div id="example-6">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product8.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product8.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product8.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product9.name }}</h4>
              </div>
              <div class="card-body">
                <img
                  src="http://i0.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e121.jpg?resize=660%2C399"
                  img
                  height="150"
                />
                <ul class="list-unstyled text-small">
                  45 บาท
                </ul>
                <div id="example-6">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-success"
                    v-on:click="$store.state.product9.amount += 1"
                  >
                    เพิ่มรายการ
                  </button>
                  <br /><br />
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn btn-outline-danger"
                    v-on:click="$store.state.product9.amount -= 1"
                  >
                    ลดรายการ
                  </button>
                  <p>จำนวน {{ $store.state.product9.amount }} รายการ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="h4 my-0 me-md-auto fw-normal">รายการอาหารที่เลือก</p>
        <header
          class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm"
        >
          <div v-if="$store.state.product1.amount >= 1">
            ข้าวสวย
            <img
              src="http://www.freakwhey.com/post_files/webboard/IMG1352897513.jpg"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product1.amount }} </p1>
          </div>
          <div v-if="$store.state.product2.amount >= 1">
            ข้าวเหนียว
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1ayVfT9BhnxkhI402HXCGQTRzhwjs0LsZgusqp=CAU"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product2.amount }}</p1>
          </div>
          <div v-if="$store.state.product3.amount >= 1">
            ต้มยำกุ้ง
            <img
              src="https://www.scholarship.in.th/wp-content/uploads/2015/06/32.jpg"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product3.amount }}</p1>
          </div>
          <div v-if="$store.state.product4.amount >= 1">
            ผัดผักรวมมมิตร
            <img
              src="http://i2.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e71.jpg?resize=660%2C339"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product4.amount }}</p1>
          </div>
          <div v-if="$store.state.product5.amount >= 1">
            กุ้งผัดพริกเผา
            <img
              src="http://i2.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e81.jpg?resize=660%2C455"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product5.amount }}</p1>
          </div>
          <div v-if="$store.state.product6.amount >= 1">
            ผัดคะน้าปลาเค็ม
            <img
              src="http://i0.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e101.jpg?resize=660%2C441"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product6.amount }}</p1>
          </div>
          <div v-if="$store.state.product7.amount >= 1">
            หมูผัดพริกหยวก
            <img
              src="https://i.ytimg.com/vi/K1cSTWFE-TY/maxresdefault.jpg"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product7.amount }}</p1>
          </div>
          <div v-if="$store.state.product8.amount >= 1">
            ต้มจืดเต้าหู้หมูสับ
            <img
              src="https://magazine.foodpanda.co.th/wp-content/uploads/sites/14/2019/11/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%88%E0%B8%B7%E0%B8%94.jpg"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product8.amount }}</p1>
          </div>
          <div v-if="$store.state.product9.amount >= 1">
            ผัดผักบุ้ง
            <img
              src="http://i0.wp.com/www.thaismescenter.com/wp-content/uploads/2018/10/e121.jpg?resize=660%2C399"
              width="60"
              height="“60”"
            />
            <p1> x{{ $store.state.product9.amount }}</p1>
          </div>
        </header>
        <h4>
          ราคารวม
          {{
            $store.state.sum +
              $store.state.product1.amount * $store.state.product1.price +
              $store.state.product2.amount * $store.state.product2.price +
              $store.state.product3.amount * $store.state.product3.price +
              $store.state.product4.amount * $store.state.product4.price +
              $store.state.product5.amount * $store.state.product5.price +
              $store.state.product6.amount * $store.state.product6.price +
              $store.state.product7.amount * $store.state.product7.price +
              $store.state.product8.amount * $store.state.product8.price +
              $store.state.product9.amount * $store.state.product9.price
          }}
          บาท
        </h4>
        <button
          type="button"
          class="w-50 btn btn-lg btn-outline-primary"
          v-on:click="$store.state.say('รับรายการอาหารสำเร็จ')"
        >
          สั่งอาหาร
        </button>
        <br />
        <br />
        <input
          class="btn btn-dark"
          type="button"
          value="Reset"
          onClick="javascript:location.reload();"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

const goods_container = document.querySelector('.goods-container')

for (let i = 0; i < 15; i++) {
	const s = `<div class="col">
	<div class="card">
	  <i class="iconfont icon-add"></i>
	  <img
		src="https://assets-global.website-files.com/5f0e5890acb33b3dec2342e8/626604b4b7815e82d92e12cd_Yellow-Clay-Isometric-Apple-Devices%20ts.jpg"
		class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title name text-center">小米电视4A 32英寸</h5>
		<p class="card-text description text-center">64位四核处理器/1GB+4GB大内存</p>
		<p class="price text-center">1199元</p>
	  </div>
	</div>
  </div>`

	goods_container.innerHTML += s
}


const cart = document.querySelector('.cart')

window.addEventListener('scroll', () => {
	if (cart.classList.contains('hide')) return

	cart.classList.add('hide')
})

cart.addEventListener('click', () => {
	cart.classList.remove('hide')
})
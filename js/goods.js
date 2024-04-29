const goods_container = document.querySelector('.goods-container')

for (let i = 0; i < 15; i++) {
	const s = `<div class="col">
	<div class="card">
	<i class="iconfont icon-add addBtn"></i>
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

cart.addEventListener('mouseover', () => {
	cart.classList.remove('hide')
})


const cartCount = document.querySelector('#cartCount')
const addBtn = document.querySelectorAll('.addBtn')
let clickTime = 0

addBtn.forEach(btn => btn.addEventListener('click', () => {
	// e.stopPropagation() // 阻止事件冒泡，防止触发window的scroll事件
	clickTime++
	cartCount.innerText = clickTime
	cartCount.style.display = 'block'
}))


// 下单后清空购物车数量和弹窗显示
const modalCloseBtn = document.querySelector('#modal-closeBtn')

modalCloseBtn.addEventListener('click', () => {
	clickTime = 0 // 重置点击次数，以关闭购物车弹窗
	cartCount.style.display = 'none' // 隐藏购物车数量
})
// 给"+"按钮添加监听事件
let clickTime = 0
function addEL_addBtn() {
	// 购物车小红点数量
	const cartCount = document.querySelector('#cartCount')
	const addBtn = document.querySelectorAll('.addBtn')

	addBtn.forEach(btn => btn.addEventListener('click', () => {
		console.log('click')
		// e.stopPropagation() // 阻止事件冒泡，防止触发window的scroll事件
		clickTime++
		cartCount.innerText = clickTime
		cartCount.style.display = 'block'
	}))
}


// 下单后清空购物车数量和弹窗显示
const modalCloseBtn = document.querySelector('#modal-closeBtn')

modalCloseBtn.addEventListener('click', () => {
	clickTime = 0 // 重置点击次数，以关闭购物车弹窗
	cartCount.style.display = 'none' // 隐藏购物车数量
})


// 购物车动效处理
const cart = document.querySelector('.cart')

window.addEventListener('scroll', () => {
	if (cart.classList.contains('hide')) return

	cart.classList.add('hide')
})

cart.addEventListener('mouseover', () => {
	cart.classList.remove('hide')
})




// 商品侧边栏
const sidebar = document.querySelector('.sideBar .list-group')

const herb_info = [
	[
		{ name: '黄芪炖鸡', description: '64位四核处理器', price: '1199元' },
		{ name: '参枣汤', description: '64位四核处理器', price: '1199元' },
		{ name: '参杞羊肉汤', description: '64位四核处理器', price: '1199元' },
		{ name: '鳝鱼补气汤', description: '64位四核处理器', price: '1199元' },
		{ name: '西洋参养生汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '当归生姜羊肉汤', description: '64位四核处理器', price: '1199元' },
		{ name: '核桃人参汤', description: '64位四核处理器', price: '1199元' },
		{ name: '虫草炖鸡', description: '64位四核处理器', price: '1199元' },
		{ name: '苁蓉羊肾汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '黄精炖肉', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '银耳鸡蛋汤', description: '64位四核处理器', price: '1199元' },
		{ name: '沙参麦冬瘦肉汤', description: '64位四核处理器', price: '1199元' },
		{ name: '雪羹汤', description: '64位四核处理器', price: '1199元' },
		{ name: '甲鱼枸杞汤', description: '64位四核处理器', price: '1199元' },
		{ name: '石斛麦冬汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '茯苓', description: '64位四核处理器', price: '1199元' },
		{ name: '薏苡仁', description: '64位四核处理器', price: '1199元' },
		{ name: '丝瓜', description: '64位四核处理器', price: '1199元' },
		{ name: '冬瓜皮', description: '64位四核处理器', price: '1199元' },
		{ name: '五指毛桃', description: '64位四核处理器', price: '1199元' },
		{ name: '陈皮', description: '64位四核处理器', price: '1199元' },
		{ name: '山药冬瓜汤', description: '64位四核处理器', price: '1199元' },
		{ name: '赤豆鲤鱼汤', description: '64位四核处理器', price: '1199元' },
		{ name: '五指毛桃土茯苓煲龙骨', description: '64位四核处理器', price: '1199元' },
		{ name: '薏米冬瓜骨头汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '赤小豆薏苡仁', description: '64位四核处理器', price: '1199元' },
		{ name: '车前草赤小豆煲猪小肚', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '黑豆红花汤', description: '64位四核处理器', price: '1199元' },
		{ name: '山楂汤', description: '64位四核处理器', price: '1199元' },
		{ name: '红花乌鸡汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '玫瑰花鸡蛋汤', description: '64位四核处理器', price: '1199元' },
		{ name: '佛手甲鱼汤', description: '64位四核处理器', price: '1199元' },
		{ name: '菊花鸡肝汤', description: '64位四核处理器', price: '1199元' },
		{ name: '合欢花猪肝汤', description: '64位四核处理器', price: '1199元' },
		{ name: '玫瑰解郁汤', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '黄芪', description: '64位四核处理器', price: '1199元' },
		{ name: '当归', description: '64位四核处理器', price: '1199元' },
		{ name: '防风', description: '64位四核处理器', price: '1199元' },
		{ name: '荆芥', description: '64位四核处理器', price: '1199元' },
		{ name: '红花', description: '64位四核处理器', price: '1199元' },
	],
	[
		{ name: '龙眼肉', description: '64位四核处理器', price: '1199元' },
		{ name: '阿胶', description: '64位四核处理器', price: '1199元' },
		{ name: '枸杞', description: '64位四核处理器', price: '1199元' },
	]
]

function update_herb_info(herb_idx) {
	const herbs = herb_info[herb_idx] // 获取对应功效的药膳

	let herbsHtml = '' // 用于存储药膳的HTML代码片段的变量

	for (const herb of herbs) {
		const s = `<div class="col">
			<div class="card">
			<i class="iconfont icon-add addBtn"></i>
			<img
				src="https://assets-global.website-files.com/5f0e5890acb33b3dec2342e8/626604b4b7815e82d92e12cd_Yellow-Clay-Isometric-Apple-Devices%20ts.jpg"
				class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title name text-center">${herb.name}</h5>
				<p class="card-text description text-center">${herb.description}</p>
				<p class="price text-center">${herb.price}</p>
			</div>
			</div>
		</div>`

		herbsHtml += s
	}

	document.querySelector('.goods-container').innerHTML = herbsHtml
}

// 页面初始化时默认显示第一个功效的药膳
update_herb_info(0)
// 给"+"按钮添加监听事件
addEL_addBtn()

sidebar.addEventListener('click', (e) => {
	document.querySelector(".list-group-item.active").classList.remove("active")

	e.target.classList.add("active") // 添加active类名，以改变侧边栏选中状态

	update_herb_info(parseInt(e.target.dataset.i))
	addEL_addBtn()
})



// 手机端: 导航栏展开时, 侧边栏隐藏
const navbarToggler = document.querySelector('.navbar-toggler') // 导航栏展开按钮

navbarToggler.addEventListener('click', () => {
	const sidebar = document.querySelector('.sideBar') // 侧边栏
	sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none' // 切换显示状态
})
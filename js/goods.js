// 给"+"按钮添加监听事件
let clickTime = 0
function addEL_addBtn() {
	// 购物车小红点数量
	const cartCount = document.querySelector('#cartCount')
	const addBtn = document.querySelectorAll('.addBtn')

	addBtn.forEach(btn => btn.addEventListener('click', () => {
		// e.stopPropagation() // 阻止事件冒泡，防止触发window的scroll事件
		clickTime++
		cartCount.innerText = clickTime
		cartCount.style.display = 'block'

		cart.classList.remove('hide')
	}))
}


// 下单后清空购物车数量和弹窗显示
const modalCloseBtn = document.querySelector('#modal-closeBtn')

modalCloseBtn.addEventListener('click', () => {
	clickTime = 0 // 重置点击次数，以关闭购物车弹窗
	cartCount.style.display = 'none' // 隐藏购物车数量

	cart.classList.add('hide')
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
		{
			name: '茯苓',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '薏苡仁',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.838a8b60bd7c9d91182a77a188553a72?rik=d1m8dCrxLnG5LQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190617%2fe57e02640f9a486ea4a904775d5c635c.jpeg&ehk=6xDm95VFF%2bDklNYvy2i%2bZpRdRDcVuVWbANc8TMp1Wxo%3d&risl=&pid=ImgRaw&r=0'
		},
		{
			name: '丝瓜',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.ad46389e1f8ceec451dbf92f248ff085?rik=E1Crx6OM41IYaQ&riu=http%3a%2f%2f18318285.s61i.faiusr.com%2f2%2fAD0IzYfeCBACGAAg-Nzi4AUoyoHajgQw7gU47gU!500x500.jpg&ehk=%2fFAdnKz6jF4u9PMffBBCBxn8Vo%2bnttUXJt789XmCLB0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
		},
		{
			name: '冬瓜皮',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://file.fh21static.com/fhfile1/M00/6D/8F/ooYBAGN0qcOAfpHXAAK7MJvdBWI861.jpg'
		},
		{
			name: '五指毛桃',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.alicdn.com/i3/4264843461/O1CN01SWf7j41bRBSampRqp_!!4264843461.jpg'
		},
		{
			name: '陈皮',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/0136355f50dfe311013e3187a78d79.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100'
		},
		{
			name: '山药冬瓜汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FJe_2ZUv6tOp0G3-Pw_1PwHaJ4?rs=1&pid=ImgDetMain'
		},
		{
			name: '赤豆鲤鱼汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://n.sinaimg.cn/sinacn20111/120/w1440h1080/20200113/ac7f-imztzhn3248929.jpg'
		},
		{
			name: '五指毛桃土茯苓煲龙骨',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.173ba95a65c1819e08af0276903c22a2?rik=V1fFqWKCH0aC0Q&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210225ac%2f224%2fw640h384%2f20210225%2f1c07-kkmphpt2451909.jpg&ehk=zC6rBhZFD0qwzQCx%2f%2fAYvIPmJoqQS2yAhTvXhKDCPbc%3d&risl=&pid=ImgRaw&r=0'
		},
		{
			name: '薏米冬瓜骨头汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://www.jucanw.com/UploadFiles/2013-08/mengli/2013082216074963138.jpg'
		},
	],
	[
		{
			name: '黄芪',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '当归',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '防风',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '荆芥',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '红花',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '龙眼肉',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '阿胶',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '枸杞',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '黄精炖肉',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '银耳鸡蛋汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '沙参麦冬瘦肉汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '雪羹汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '甲鱼枸杞汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '石斛麦冬汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '黄芪炖鸡',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '参枣汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '参杞羊肉汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '鳝鱼补气汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '西洋参养生汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '赤小豆薏苡仁',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '车前草赤小豆煲猪小肚',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '黑豆红花汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '山楂汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '红花乌鸡汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '玫瑰花鸡蛋汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '佛手甲鱼汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '菊花鸡肝汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '合欢花猪肝汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '玫瑰解郁汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	],
	[
		{
			name: '当归生姜羊肉汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '核桃人参汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '虫草炖鸡',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '苁蓉羊肾汤',
			description: '64位四核处理器',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
	]
]

function update_herb_info(herb_idx) {
	const herbs = herb_info[herb_idx] // 获取对应功效的药膳

	let herbsHtml = '' // 用于存储药膳的HTML代码片段的变量

	for (const herb of herbs) {
		const s = `<div class="col">
			<div class="card">
			<i class="iconfont icon-add addBtn"></i>
			<div class="imgBox">
				<img src=${herb.imgUrl} class="card-img-top" alt="网络不好...">
			</div>
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



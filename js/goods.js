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
			description: '利水渗湿，健脾，宁心',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f8885c55aa00a801213f26d50e8b.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '薏苡仁',
			description: '利水渗湿，健脾止泻',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.838a8b60bd7c9d91182a77a188553a72?rik=d1m8dCrxLnG5LQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190617%2fe57e02640f9a486ea4a904775d5c635c.jpeg&ehk=6xDm95VFF%2bDklNYvy2i%2bZpRdRDcVuVWbANc8TMp1Wxo%3d&risl=&pid=ImgRaw&r=0'
		},
		{
			name: '丝瓜',
			description: '清暑凉血、解毒通便',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.ad46389e1f8ceec451dbf92f248ff085?rik=E1Crx6OM41IYaQ&riu=http%3a%2f%2f18318285.s61i.faiusr.com%2f2%2fAD0IzYfeCBACGAAg-Nzi4AUoyoHajgQw7gU47gU!500x500.jpg&ehk=%2fFAdnKz6jF4u9PMffBBCBxn8Vo%2bnttUXJt789XmCLB0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
		},
		{
			name: '冬瓜皮',
			description: '利尿消肿',
			price: '1199元',
			imgUrl: 'https://file.fh21static.com/fhfile1/M00/6D/8F/ooYBAGN0qcOAfpHXAAK7MJvdBWI861.jpg'
		},
		{
			name: '五指毛桃',
			description: '健脾补肺，行气利湿',
			price: '1199元',
			imgUrl: 'https://img.alicdn.com/i3/4264843461/O1CN01SWf7j41bRBSampRqp_!!4264843461.jpg'
		},
		{
			name: '陈皮',
			description: '理气健脾，燥湿化痰',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/0136355f50dfe311013e3187a78d79.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100'
		},
		{
			name: '山药冬瓜汤',
			description: '除痰冷泥湿',
			price: '1199元',
			imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FJe_2ZUv6tOp0G3-Pw_1PwHaJ4?rs=1&pid=ImgDetMain'
		},
		{
			name: '赤豆鲤鱼汤',
			description: '健脾益肾，利尿消肿',
			price: '1199元',
			imgUrl: 'https://n.sinaimg.cn/sinacn20111/120/w1440h1080/20200113/ac7f-imztzhn3248929.jpg'
		},
		{
			name: '五指毛桃土茯苓煲龙骨',
			description: '清热驱湿、清肝润肺',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.173ba95a65c1819e08af0276903c22a2?rik=V1fFqWKCH0aC0Q&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210225ac%2f224%2fw640h384%2f20210225%2f1c07-kkmphpt2451909.jpg&ehk=zC6rBhZFD0qwzQCx%2f%2fAYvIPmJoqQS2yAhTvXhKDCPbc%3d&risl=&pid=ImgRaw&r=0'
		},
		{
			name: '薏米冬瓜骨头汤',
			description: '清热解毒，利湿化滞',
			price: '1199元',
			imgUrl: 'https://www.jucanw.com/UploadFiles/2013-08/mengli/2013082216074963138.jpg'
		},
	],
	[
		{
			name: '黄芪',
			description: '气虚乏力，食少便溏',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01d15c5d0743f8a801213ec258d8e7.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '当归',
			description: '补血活血、调经止痛',
			price: '1199元',
			imgUrl: 'https://img95.699pic.com/photo/50133/1777.jpg_wh300.jpg'
		},
		{
			name: '防风',
			description: '祛风湿而止痛',
			price: '1199元',
			imgUrl: 'https://img.ixintu.com/download/jpg/202001/11ff244c74cdc3b80de9bce6ac836a18.jpg!con'
		},
		{
			name: '荆芥',
			description: '解表散风，透疹，消疮',
			price: '1199元',
			imgUrl: 'https://i.zyccst.com/upload/upay/825043/2/E88D86E88AA5332E6A7067.jpg'
		},
		{
			name: '红花',
			description: '活血通经、散瘀止痛',
			price: '1199元',
			imgUrl: 'https://cdn.fanhonghua.net/1810/1539771039721054.jpg'
		},
	],
	[
		{
			name: '龙眼肉',
			description: '益心脾，补气血，安神',
			price: '1199元',
			imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.fn7xFENAlXn6iYuAmo0cpwAAAA?rs=1&pid=ImgDetMain'
		},
		{
			name: '阿胶',
			description: '补血滋阴、润燥止血',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01f71b5ca81012a801208f8b746c06.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '枸杞',
			description: '解热止咳',
			price: '1199元',
			imgUrl: 'https://img.huabaike.com/tukuimgs/663/20200923133706_203540.jpg'
		},
	],
	[
		{
			name: '黄精炖肉',
			description: '滋阴补血，补中气',
			price: '1199元',
			imgUrl: 'https://p1.ssl.qhimg.com/t01941af620568d57b3.jpg'
		},
	],
	[
		{
			name: '银耳鸡蛋汤',
			description: '滋阴润肺，生津养胃',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/0179b55bc865bba8012099c8dd8c24.jpg@2o.jpg'
		},
		{
			name: '沙参麦冬瘦肉汤',
			description: '滋养肺阴，润肺止咳',
			price: '1199元',
			imgUrl: '/img/herb/ssmdsrt.png'
		},
		{
			name: '雪羹汤',
			description: '清热生津、消食化痰',
			price: '1199元',
			imgUrl: 'https://so1.360tres.com/t01600172bb624065a7.png'
		},
		{
			name: '甲鱼枸杞汤',
			description: '暖肝、滋阴补肾',
			price: '1199元',
			imgUrl: '/img/herb/jygqt.png'
		},
		{
			name: '石斛麦冬汤',
			description: '养阴清热，养胃生津',
			price: '1199元',
			imgUrl: 'https://cdn.fanhonghua.net/uploads/2017/01/cf3.jpg'
		},
	],
	[
		{
			name: '黄芪炖鸡',
			description: '补气，温中',
			price: '1199元',
			imgUrl: 'https://pic.pingguolv.com/uploads/allimg/180530/148-1P530194152.jpg'
		},
		{
			name: '参枣汤',
			description: '健脾胃、补气血',
			price: '1199元',
			imgUrl: 'https://media.hsrb.com.cn/image/2022/01/13/5145627733795192403.jpg'
		},
		{
			name: '参杞羊肉汤',
			description: '益气温阳补血',
			price: '1199元',
			imgUrl: 'https://p1.ssl.qhimg.com/t01ee6d1d622f4903fc.jpg'
		},
		{
			name: '鳝鱼补气汤',
			description: '补气养血、健脾和胃',
			price: '1199元',
			imgUrl: 'https://cdn.fanhonghua.net/uploads/2016/11/sy3.jpg'
		},
		{
			name: '西洋参养生汤',
			description: '补气，益肺阴',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/031a6qtqqgcvtzcg8pexlsv3937.png'
		},
	],
	[
		{
			name: '赤小豆薏苡仁',
			description: '利水渗湿、健脾补虚',
			price: '1199元',
			imgUrl: 'https://img.alicdn.com/i4/2200608599252/O1CN01JQmOtY2IDSzUiAoOd_!!2200608599252.jpg'
		},
		{
			name: '车前草赤小豆煲猪小肚',
			description: '清热利尿止泻',
			price: '1199元',
			imgUrl: 'https://life.sun0769.com/shb/202305/W020230521285801824987.png'
		},
	],
	[
		{
			name: '黑豆红花汤',
			description: '活血，利水，祛风，解毒',
			price: '1199元',
			imgUrl: 'https://file.youlai.cn/cnkfile1/M00/19/F0/ooYBAFo6Qq2ATWU2AAFT7O4gNdo49.jpeg'
		},
		{
			name: '山楂汤',
			description: '活血消肿，缓肝止痛',
			price: '1199元',
			imgUrl: 'https://www1.pcbaby.com.cn/baike/recipe/pic/20160313spk1/27811.jpg'
		},
		{
			name: '红花乌鸡汤',
			description: '滋阴、补肾、美容',
			price: '1199元',
			imgUrl: 'https://bpic.588ku.com/back_origin_min_pic/19/10/22/862115ecc625ae1e0e3ca239e5bba3b6.jpg!/fw/750/quality/99/unsharp/true/compress/true'
		},
	],
	[
		{
			name: '玫瑰花鸡蛋汤',
			description: '主治黄褐斑肝气郁结型',
			price: '1199元',
			imgUrl: 'https://gd-hbimg.huaban.com/901efb5f122b1541f22218ffdca7398be7d75e4c3786b-hbeoHL_fw658'
		},
		{
			name: '佛手甲鱼汤',
			description: '滋阴壮阳、软坚散结、化瘀',
			price: '1199元',
			imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.41d240444090f740fe2bb0bf4aa2d3fb?rik=%2bmyYvBNMfKW8rw&riu=http%3a%2f%2fwww.meishijr.com%2fupload%2f20131023%2f13825357709936.jpg&ehk=%2fFQ1yH9rO%2fPhv1wiCSWtMkvaY7zsmEyphUCQk21vnPQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
		},
		{
			name: '菊花鸡肝汤',
			description: '散风清热、清肝明目',
			price: '1199元',
			imgUrl: 'https://p1.ssl.qhimg.com/dr/220__/t01cf1f52ca1e835f3f.jpg'
		},
		{
			name: '合欢花猪肝汤',
			description: '舒肝理气，解郁安神',
			price: '1199元',
			imgUrl: 'https://img.pconline.com.cn/images/upload/upc/tx/kidsphotolib_bbs/1707/12/c1/52539989_1499842581563.jpg'
		},
		{
			name: '玫瑰解郁汤',
			description: '理气开郁，降逆化痰',
			price: '1199元',
			imgUrl: 'https://gd-hbimg.huaban.com/08642dc0617473f90c0ba11907af0ddef84f5cd41c1f6-0ffqNO_fw658'
		},
	],
	[
		{
			name: '当归生姜羊肉汤',
			description: '温中补血、祛寒止痛',
			price: '1199元',
			imgUrl: 'https://www.shantou.gov.cn/stswsj/img/0/215/215530/1997295.jpg'
		},
		{
			name: '核桃人参汤',
			description: '补气温肾安神',
			price: '1199元',
			imgUrl: 'https://img.zcool.cn/community/01a6955d6b6bc3a80120526d4e6cfd.jpg@1280w_1l_2o_100sh.jpg'
		},
		{
			name: '虫草炖鸡',
			description: '补肾壮阳、益气补血',
			price: '1199元',
			imgUrl: 'https://pic.ecook.cn/web/262828093.jpg!wd780'
		},
		{
			name: '苁蓉羊肾汤',
			description: '补肾益精',
			price: '1199元',
			imgUrl: 'https://img95.699pic.com/photo/50250/6921.jpg_wh300.jpg'
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



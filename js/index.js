function toggleNavBar() {
	// 获取屏幕宽度
	var screenWidth = window.innerWidth || document.documentElement.clientWidth

	// 设置阈值来判断移动设备与桌面设备的界限，这里假设小于等于 768px 为移动设备
	var threshold = 768

	// 如果屏幕宽度小于等于阈值，跳转至移动端网站
	if (screenWidth >= threshold) {
		// 监听滚动事件
		const navbar = document.querySelector('.navbar') // 获取导航栏元素

		window.addEventListener('scroll', function () {
			// 获取当前页面已经滚动的垂直距离
			var scrollDistance = window.scrollY
			console.log(scrollDistance)

			// 判断是否已经滚动了100vh的距离
			if (scrollDistance >= window.innerHeight) {
				console.log('用户已经滚动了100vh的距离')
				navbar.classList.add('hide')
			} else {
				navbar.classList.remove('hide')
			}
		})
	}
}

// toggleNavBar()

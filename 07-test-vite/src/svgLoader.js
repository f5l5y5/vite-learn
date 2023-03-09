
import svgIcon from './assets/svgs/alipay.svg?url'

import svgRaw from './assets/svgs/alipay.svg?raw'
console.log('打印***svgIcon======>',svgIcon)
console.log('打印***svgRaw======>',svgRaw)

document.body.innerHTML = svgRaw

const el = document.getElementsByTagName('svg')[0]

el.onmouseenter = function () {
	this.style.fill = 'red'
}

// 第一种方式
// import svgIcon from './assets/svgs/alipay.svg'


// console.log('打印***svgIcon======>',svgIcon)

// const img = document.createElement('img')

// img.src = svgIcon

// document.body.appendChild(img)

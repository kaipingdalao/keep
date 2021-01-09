
/**
 * 两个滚动条同步
 * @param firstEl element
 * @param secondEl element
 **/
export default (firstEl, secondEl) => {
    let firstElchange = true
    let secondElchange = true
    firstEl.onscroll = () => {
        if (firstElchange) {
            secondEl.scrollTop = firstEl.scrollTop / (firstEl.scrollHeight - firstEl.clientHeight) * (secondEl.scrollHeight - secondEl.clientHeight)
            secondElchange = false
        } else {
            firstElchange = true
        }
    }
    secondEl.onscroll = () => {
        if (secondElchange) {
            firstEl.scrollTop = secondEl.scrollTop / (secondEl.scrollHeight - secondEl.clientHeight) * (firstEl.scrollHeight - firstEl.clientHeight)
            firstElchange = false
        } else {
            secondElchange = true
        }
    }
}
/**
 * https://blog.csdn.net/super___boy/article/details/104361369
 *
 * 使用两个变量firstchange和secondchange分别表示允许第一个元素滚动和允许第二个元素滚动；
 *
 * 当第一个元素首先触发滚动时，设置secondchange为false；
 *
 * 第二个元素触发时，根据secondchange，不对元素进行滚动，然后将设置secondchange设置回true，完成一次同步滚动。
 *
 * 第二个元素首先触发滚动时类似。
 **/

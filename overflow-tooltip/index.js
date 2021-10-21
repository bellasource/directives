let tip = null;
const offset = 10;
const show = (el, binding, vnode) => {
  el.onmouseenter = function (e) {
    if (el.scrollWidth <= el.offsetWidth) return;
    tip = document.getElementById("overflow-tooltip");
    if (!tip) {
      tip = document.createElement("div");
      tip.id = "overflow-tooltip";
    }
    tip.innerText = binding.value;
    tip.style.top = e.clientY + offset + "px";
    tip.style.left = e.clientX + offset + "px";
    tip.style.display = "inline";
    document.body.appendChild(tip);
  };
  el.onmouseleave = (e) => {
    hide();
  };
};
const hide = () => {
  tip && (tip.style.display = "none");
};
export default {
  beforeMount(el, binding, vnode) {
    show(el, binding, vnode);
  },
  beforeUpdate() {}, // 新增
  updated(el, binding, vnode) {
    show(el, binding, vnode);
  },
  unmounted() {
    hide();
  },
};
/* 
使用：
1. 定义提示框样式
```css
#overflow-tooltip {
  position: fixed;
  padding: 10px;
  background-color: #303133;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  z-index: 9999;
  max-width: 600px;
  white-space: normal;
  word-break: break-word;
}
```
2.使用
```html
<div v-overflow-tooltip="desc">
  {{ desc }}
</div>
```
*/

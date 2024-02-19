样式我都想用 flex 一手撸

flex布局 全称flexible-box (弹性盒子布局)，对于实现有一定规律的行排布及列排布非常方便

基本概念：flex布局包含容器(container)和子项(item)，根据子项在容器中的排布方向，定义主轴，与主轴竖直方向的轴叫交叉轴

如图所示：

        |—————————————————————————————————————————————————-|
        |                                                  |
        |           flex container                         |          ————> 主轴
        |                                                  |
        |    |——————————————|        |——————————————|      |          | 交叉轴
        |    |  flex item   |        |   flex item  |      |          ↓ 
        |    |——————————————|        |——————————————|      |          
        |                                                  |
        |__________________________________________________|

这里记录flex布局的常用方法：

使用时，在容器的css属性中指定： display: flex ，(行内元素使用：display: inline-flex)

容器的属性：

- `flex-direction:  row | row-reverse | column | column-reverse;`

  主轴方向:  
    row（默认值）：主轴为水平方向，起点在左端。  
    row-reverse：主轴为水平方向，起点在右端。  
    column：主轴为垂直方向，起点在上沿。  
    column-reverse：主轴为垂直方向，起点在下沿。  
- `flex-wrap: nowrap | wrap | wrap-reverse;`  
  换行方式:  
    nowrap（默认）：不换行。  
    wrap：换行，第一行在上方。  
    wrap-reverse：换行，第一行在下方。  
- `flex-flow: <flex-direction> || <flex-wrap>; `  
  主轴方向和换行方式的简写

- `justify-content: flex-start | flex-end | center | space-between | space-around;`  
  主轴上的对齐方式：  
    flex-start（默认值）：左对齐  
    flex-end：右对齐  
    center： 居中  
    space-between：两端对齐，子项之间的间隔都相等。  
    space-around：每个子项两侧的间隔相等。  
- `align-items: flex-start | flex-end | center | baseline | stretch`  
  子项在交叉轴上的对齐方式：  
    flex-start：交叉轴的起点对齐。  
    flex-end：交叉轴的终点对齐。  
    center：交叉轴的中点对齐。  
    baseline: 子项的第一行文字的基线对齐。  
    stretch（默认值）：如果子项未设置高度或设为auto，将占满整个容器的高度。
- `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`  
  多条主轴时它们在交叉轴方向的对齐方式：  
    flex-start：与交叉轴的起点对齐。  
    flex-end：与交叉轴的终点对齐。  
    center：与交叉轴的中点对齐。  
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。  
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。  
    stretch（默认值）：轴线占满整个交叉轴。 

子项的属性：

- `order: <integer>`  
  子项的排列顺序：参数是一个整数，越小越靠前，默认为0  
- `flex-grow: <number>`  
  所有子项对主轴长度的分配方式（空间富余多分配）：0不放大，1平均分配，2比1多分配一倍，以此类推  
- `flex-shrink: <number>`  
  所有子项对主轴长度的分配方式（空间不足要缩小）：0不缩小，1平均分配  
- `flex-basis: <length> | auto;`  
  在分配多余空间之前，子项占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即子项的本来大小。  
- `flex`  
  是`flex-grow`,`flex-shrink`和`flex-basis`的简写，默认值为 0 1 auto，后两个属性可选

- `align-self: auto | flex-start | flex-end | center | baseline | stretch;`  
  允许单个子项有与其他子项不一样的对齐方式。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

[参考资料：阮一峰 Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  
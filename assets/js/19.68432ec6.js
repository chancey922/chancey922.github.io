(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{514:function(t,s,a){"use strict";a.r(s);var i=a(55),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"机器学习中的张量-标量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器学习中的张量-标量"}},[t._v("#")]),t._v(" 机器学习中的张量，标量")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/tensors_everywhere.jpeg",alt:"tensors_everywhere"}})]),t._v(" "),a("h2",{attrs:{id:"张量的相关概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#张量的相关概念"}},[t._v("#")]),t._v(" 张量的相关概念")]),t._v(" "),a("h3",{attrs:{id:"标量-scalar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标量-scalar"}},[t._v("#")]),t._v(" 标量 ("),a("code",[t._v("Scalar")]),t._v(")")]),t._v(" "),a("p",[t._v("标量其实就是一个独立存在的数，比如在线性代数中一个实数 5 就可以被看作一个标量，所以标量的运算相对简单，与我们平常做的数字算术运算类似。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210527102121745.png",alt:"image-20210527102121745"}})]),t._v(" "),a("h3",{attrs:{id:"向量-vector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向量-vector"}},[t._v("#")]),t._v(" 向量 ("),a("code",[t._v("Vector")]),t._v(")")]),t._v(" "),a("p",[t._v("向量指一列按顺序排列的元素，我们通常习惯用括号将这一列元素括起来，其中的每个元素都由一个索引值来唯一地确定其在向量中的位置。")]),t._v(" "),a("p",[t._v("假设这个向量中的第 1 个元素是 x1 , 它的索引值就是 1，第 2 个元素是 x2 , 它的索引值就是 2，以此类推。如下所示就是一个由三个元素组成的向量，这个向量的索引值从 1 到 3 分别对应了从 x1 到 x3 的这三个元素:")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("1.0")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("2.7")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("3.4")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[1.0,2.7,3.4]\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("1.0")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("2.7")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("3.4")]),a("span",{staticClass:"mclose"},[t._v("]")])])])])])]),t._v(" "),a("h3",{attrs:{id:"矩阵-matrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矩阵-matrix"}},[t._v("#")]),t._v(" 矩阵 ("),a("code",[t._v("Matrix")]),t._v(")")]),t._v(" "),a("p",[t._v("矩阵就是一个二维数组结构，我们会用括号将其中的全部元素括起来。向量的索引值是一维的，而矩阵的索引值是二维的，所以在确定矩阵中每个元素的位置时需要两个数字。")]),t._v(" "),a("p",[t._v("举例来，假设在一个矩阵的左上角存在一个元素 x11 ,那么确定这个元素的索引值就是由两个 1 构成的二维索引值，即“11”, 这个二维索引值代表矩阵中第1行和第1列交汇处的数字，所以前面的一个数字 1 可以被定义为当前矩阵的行号，后面的一个数字 1 可以被定义为当前矩阵的列号。如下就是一个三行三列的矩阵:")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("[")]),a("mtable",{attrs:{rowspacing:"0.1600em",columnalign:"center center center",columnspacing:"1em"}},[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("1.0")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("2.7")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("3.4")])],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("5.0")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("0.2")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("4.6")])],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("4.3")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("8.5")])],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mn",[t._v("0.2")])],1)],1)],1)],1),a("mo",{attrs:{fence:"true"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\begin{bmatrix}\n 1.0 &2.7  &3.4 \\\\\n  5.0& 0.2 & 4.6\\\\\n  4.3& 8.5 &0.2\n\\end{bmatrix}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"3.60004em","vertical-align":"-1.55002em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.05002em"}},[a("span",{staticStyle:{top:"-2.2500000000000004em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎣")])])]),a("span",{staticStyle:{top:"-3.3970000000000002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticStyle:{height:"0.016em",width:"0.667em"}},[a("svg",{staticStyle:{width:"0.667em"},attrs:{width:"0.667em",height:"0.016em",viewBox:"0 0 667 16",preserveAspectRatio:"xMinYMin"}},[a("path",{attrs:{d:"M319 0 H403 V16 H319z M319 0 H403 V16 H319z"}})])])]),a("span",{staticStyle:{top:"-4.05002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎡")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.55002em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-c"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[a("span",{staticStyle:{top:"-4.21em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("1.0")])])]),a("span",{staticStyle:{top:"-3.0099999999999993em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("5.0")])])]),a("span",{staticStyle:{top:"-1.8099999999999994em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("4.3")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5500000000000007em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"col-align-c"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[a("span",{staticStyle:{top:"-4.21em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2.7")])])]),a("span",{staticStyle:{top:"-3.0099999999999993em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0.2")])])]),a("span",{staticStyle:{top:"-1.8099999999999994em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("8.5")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5500000000000007em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"col-align-c"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[a("span",{staticStyle:{top:"-4.21em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("3.4")])])]),a("span",{staticStyle:{top:"-3.0099999999999993em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("4.6")])])]),a("span",{staticStyle:{top:"-1.8099999999999994em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0.2")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.5500000000000007em"}},[a("span")])])])])])]),a("span",{staticClass:"mclose"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.05002em"}},[a("span",{staticStyle:{top:"-2.2500000000000004em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎦")])])]),a("span",{staticStyle:{top:"-3.3970000000000002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticStyle:{height:"0.016em",width:"0.667em"}},[a("svg",{staticStyle:{width:"0.667em"},attrs:{width:"0.667em",height:"0.016em",viewBox:"0 0 667 16",preserveAspectRatio:"xMinYMin"}},[a("path",{attrs:{d:"M263 0 H347 V16 H263z M263 0 H347 V16 H263z"}})])])]),a("span",{staticStyle:{top:"-4.05002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.1550000000000002em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎤")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.55002em"}},[a("span")])])])])])])])])])])]),t._v(" "),a("h3",{attrs:{id:"张量-tensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#张量-tensor"}},[t._v("#")]),t._v(" 张量 ("),a("code",[t._v("Tensor")]),t._v(")")]),t._v(" "),a("p",[t._v("若数组的维度超过了二维，我们就可以用张量来表示，所以我们可以将张量理解为高维数组。同理，张量的索引值用两个维度的数字来表示已经不够了，其中的元素的索引值会随着张量维度的改变而改变。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/principal-component-analysis-for-tensor-analysis-and-eeg-classification-7-638.jpg",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("In mathematics, a "),a("strong",[t._v("tensor")]),t._v(" is an algebraic object that describes a (multilinear) relationship between sets of algebraic objects related to a vector space.")])]),t._v(" "),a("p",[t._v("在数学中，张量** 是一个代数对象，描述与向量空间有关的代数对象集之间的（多线性）关系。")])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210527103406671.png",alt:"image-20210527103406671"}}),t._v(" "),a("p",[t._v("机器学习 (深度学习) 中用到的数据，包括结构性数据 (数据表) 和非结构性数据 (序列、图片、视屏) 都是张量，总结如下：")]),t._v(" "),a("ul",[a("li",[t._v("**数据表-**2D 形状 = (样本数，特征数)")]),t._v(" "),a("li",[t._v("**序列类-**3D 形状 = (样本数，步长，特征数)")]),t._v(" "),a("li",[t._v("**图像类-**4D 形状 = (样本数，宽，高，通道数)")]),t._v(" "),a("li",[t._v("**视屏类-**5D 形状 = (样本数，帧数，宽，高，通道数)")])]),t._v(" "),a("p",[t._v("机器学习，尤其深度学习，需要大量的数据，因此样本数肯定占一个维度，惯例我们把它称为维度 1。这样机器学习要处理的张量至少从 2 维开始。")]),t._v(" "),a("h2",{attrs:{id:"张量和其他量的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#张量和其他量的关系"}},[t._v("#")]),t._v(" 张量和其他量的关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/20200330210705162.png",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[t._v("标量，向量，矩阵等都是张量。其中标量是0维张量，向量是1维张量，矩阵是2维张量。我们通常见到的灰度图像是2维张量，彩色图像是3维张量。由若干三维张量可以构成4维张量，若干4维张量可以构成5维张量，以此类推。如图片所示")]),t._v(" "),a("p",[t._v("来源：https://blog.csdn.net/sinat_35907936/article/details/105027155")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/tensor-naming.png",alt:"img"}})]),t._v(" "),a("p",[t._v("另一个卡通形象")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210531183353009.png",alt:"image-20210531183353009"}})]),t._v(" "),a("h2",{attrs:{id:"张量的具体应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#张量的具体应用"}},[t._v("#")]),t._v(" 张量的具体应用")]),t._v(" "),a("h3",{attrs:{id:"_2阶张量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2阶张量"}},[t._v("#")]),t._v(" 2阶张量")]),t._v(" "),a("p",[t._v("2 维张量就是矩阵，也叫数据表，一般用 csv 存储。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0cxME1mU2FKV2NOQUxXTk8yQ0JKeUZqR1pFQWJJcVYxMGxkdGZMWkl6SkRVY1p4MUYwN2JIVldkamlhVXhsdVRRSlNDanY1OHRuMFhnLzY0MD93eF9mbXQ9cG5n",alt:"img"}})]),t._v(" "),a("p",[t._v("这套房屋 21,000 个数据包括其价格 (y)，平方英尺，卧室数，楼层，日期，翻新年份等等 21 栏。该数据形状为 (21000, 21)。传统机器学习的线性回归可以来预测房价。")]),t._v(" "),a("p",[t._v("2 维张量的数据表示图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VydzZHWGljYkZpYWM5Q3dvRjNNazlkeUlpYldaeG9DZ2FmMXVvVkN2bGhRaWFtTGFjVFpzRmZkRjBBQS82NDA_d3hfZm10PXBuZw",alt:"img"}})]),t._v(" "),a("p",[t._v("人的精算数据集，我们在其中考虑每个人的年龄，邮政编码和收入。每个人都可以表征为3个值的向量，因此，可以将一个100,000个人的整个数据集存储在形状为（100000，3）的2D张量中。")]),t._v(" "),a("h3",{attrs:{id:"_3阶张量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3阶张量"}},[t._v("#")]),t._v(" 3阶张量")]),t._v(" "),a("p",[a("strong",[t._v("3D 序列数据")])]),t._v(" "),a("p",[t._v("推特 (twitter) 的每条推文 (tweet) 规定只能发 "),a("code",[t._v("280")]),t._v(" 个字符。在编码推文时，将 "),a("code",[t._v("280")]),t._v(" 个字符的序列用独热编码 (one-hot encoding) 到包含 "),a("code",[t._v("128")]),t._v("个字符的 ASCII 表，如下所示。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyNDJKaWNGeERodDEzbXYzWUVsanNWd3g0aWJ3emdQODNYUmZwNlRlRWhzc2ljYzJuVGUwTndUVG13LzY0MD93eF9mbXQ9cG5n",alt:"img"}}),t._v(" "),a("p",[t._v('这样，每条推文都可以编码为 2 阶张量形状 (280, 128)，比如一条 tweet 是 "'),a("strong",[t._v("I love python 😃")]),t._v('"，这句话映射到 ASCII 表变成：')]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyMmtoa0dsTGZCZkRpYXd2VlBtdk5FeXdQRUQ1clJpYzlpYzhVWUpDc0hEMTV0WW9TSzZkRHV6dFZRLzY0MD93eF9mbXQ9cG5n",alt:"img"}}),t._v(" "),a("p",[t._v("如果收集到 1 百万条推文，那么整个数据集的形状为 (1000000, 280, 128)。")]),t._v(" "),a("p",[t._v("3 维张量的数据表示图如下：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyUEE2UmxKbUtsQXRseXBSVVpXMTJQaWNDTzJmQjhsTGJFRjUyWFRnajdJbjlJVGpyM2NxbUFDQS82NDA_d3hfZm10PXBuZw",alt:"img"}}),t._v(" "),a("h4",{attrs:{id:"时间序列或序列数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间序列或序列数据"}},[t._v("#")]),t._v(" 时间序列或序列数据")]),t._v(" "),a("p",[t._v("每当数据中的时间（或序列顺序的概念）重要时，将其存储在带有明确时间轴的3D张量中是有意义的。")]),t._v(" "),a("ul",[a("li",[t._v("（样本，时间步长，特征数）")])]),t._v(" "),a("p",[t._v("**示例：**股票价格数据集。每分钟，我们存储库存的当前价格，过去一分钟的最高价格以及过去一分钟的最低价格。因此，每分钟被编码为3D向量，一整天的交易被编码为形状为（390，3）的2D张量（一个交易日有390分钟），并且可以存储250天的数据形状为（250,390,3）的3D张量。在这里，每个样本将是一天的数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210527131517750.png",alt:"image-20210527131517750"}})]),t._v(" "),a("h3",{attrs:{id:"_4阶张量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4阶张量"}},[t._v("#")]),t._v(" 4阶张量")]),t._v(" "),a("p",[a("strong",[t._v("4D 图像数据")])]),t._v(" "),a("p",[t._v("图像通常具有 3 个维度："),a("strong",[t._v("宽度")]),t._v("，"),a("strong",[t._v("高度")]),t._v("和颜色通道。")]),t._v(" "),a("p",[t._v("虽然黑白图像 (如 MNIST 数字) 只有一个颜色通道，按照惯例，我们还是把它当成 4 维，即颜色通道只有一维。")]),t._v(" "),a("ul",[a("li",[t._v("一组黑白照片可存成形状为 (样本数，宽，高，1) 的 4 维张量")]),t._v(" "),a("li",[t._v("一组彩色照片可存成形状为 (样本数，宽，高，3) 的 4 维张量")])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyTWtJQWNSN0c4WGM0YTRpYUxwVHZNZkVYYnJhSGRZN3R1d2FiVXZyZm5jbnF5QUdlZGNibHV1QS82NDA_d3hfZm10PXBuZw",alt:"img"}}),t._v(" "),a("p",[t._v("通常 0 代表黑色，255 代表白色。")]),t._v(" "),a("p",[t._v("4 维张量的数据表示图如下：")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyMTJUUHpDV3JmOFJsVU9PYVFuUENDSmgzWmRpYm1Rd2VvczI5UHdxQVp5TWVLbGpreGRUcmtIQS82NDA_d3hfZm10PXBuZw",alt:"img"}}),t._v(" "),a("p",[t._v("因此，可以将一批256×256大小的128个灰度图像存储在一个形状为（128，256，256，1）的张量中。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("RGB图像：")]),t._v("（128，256，256，3）")]),t._v(" "),a("li",[a("strong",[t._v("灰度图像：")]),t._v("（128，256，256，1）")])]),t._v(" "),a("h3",{attrs:{id:"_5阶张量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5阶张量"}},[t._v("#")]),t._v(" 5阶张量")]),t._v(" "),a("p",[a("strong",[t._v("5D 视屏数据")])]),t._v(" "),a("p",[t._v("视频可以被分解成一幅幅帧 (frame)。")]),t._v(" "),a("ul",[a("li",[t._v("每幅帧就是彩色图像，可以存储在形状是 (宽度，高度，通道) 的 3D 张量中")]),t._v(" "),a("li",[t._v("视屏 (一个序列的帧) 可以存储在形状是 (帧数，宽度，高度，通道) 的 4D 张量中")]),t._v(" "),a("li",[t._v("一批不同的视频可以存储在形状是 (样本数，帧数，宽度，高度，通道) [(batch, time, height, width, depth)]的 5D 张量中")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210527131528446.png",alt:"image-20210527131528446"}})]),t._v(" "),a("p",[t._v("下面一个 9:42 秒的 1280 x 720 油管视屏 (哈登三分绝杀勇士)，被分解成 40 个样本数据，每个样本包括 240 帧。这样的视频剪辑将存储在形状为 (40, 240, 1280, 720, 3) 的张量中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VyUmNoZ2liMmpGb29xb3dkUGg0Rzhxc1BVMkIyb0NVTE1mR2Q5UzllOXpCenVrRERhRzVVT2ZDQS82NDA_d3hfZm10PXBuZw",alt:"img"}})]),t._v(" "),a("p",[t._v("5 维张量的数据表示图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9lNGt4TmljRFZjQ0c2N29sSU83Tkg0TGliaEplS0lLR1VydWljbGJjcWliYlh6MjFWOU11dU45NklDQ2d1OGZQYkQ1NU9xRE5UUU9FSmljRlZOM0FpY2liakh0NncvNjQwP3d4X2ZtdD1wbmc",alt:"img"}})]),t._v(" "),a("p",[t._v("每个帧都是彩色图像。因为每个帧都可以存储在3D张量中（高度，宽度，color_depth），所以一系列帧可以存储在4D张量中（帧，高度，宽度，color_depth），因此可以将一批不同的视频存储在形状（样本，帧，高度，宽度，color_depth）的5D张量。")]),t._v(" "),a("h2",{attrs:{id:"版本记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本记录"}},[t._v("#")]),t._v(" 版本记录")]),t._v(" "),a("ul",[a("li",[t._v("2021/5/27 写了初稿，记录三个量的概念，记录了张量和图片的转化\n"),a("ul",[a("li",[t._v("待完成\n"),a("ul",[a("li",[t._v("生物信息学中的张量 A survey of some tensor analysis techniques for biological systems https://link.springer.com/article/10.1007/s40484-019-0186-5")]),t._v(" "),a("li",[t._v("张量操作")])])])])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("动手学机器学习V2：https://course.d2l.ai/zh-v2/#%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E5%9F%BA%E7%A1%80")]),t._v(" "),a("p",[t._v("知乎问题：什么是张量 (tensor)？：https://www.zhihu.com/question/20695804")]),t._v(" "),a("p",[t._v("知乎-基础篇3：张量的基本概念与表示法：https://zhuanlan.zhihu.com/p/136836158【张量的数理表示】")]),t._v(" "),a("p",[t._v("TensorFlow：张量简介 https://www.tensorflow.org/guide/tensor?hl=zh-cn")]),t._v(" "),a("p",[t._v("CSDN：如何理解深度学习中的tensor（涉及numpy的二维，三维以及四维数据的理解）https://blog.csdn.net/holmes_MX/article/details/82813865?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control 【"),a("strong",[t._v("结论：无论几维，都可以按照(Batch_size, Height, Width, Channle)来理解。")]),t._v("】")]),t._v(" "),a("p",[t._v("张量-神经网络中数据的表示 https://medium.com/mlait/tensors-representation-of-data-in-neural-networks-bbe8a711b93b 【介绍了几个例子】")]),t._v(" "),a("p",[t._v("Python小白深度学习教程：Keras 精讲(上)https://blog.csdn.net/qq_39241986/article/details/103116362【介绍了张量数据】")]),t._v(" "),a("p",[t._v("Tensorflow图像序列 https://dmolony3.github.io/Working%20with%20image%20sequences.html")]),t._v(" "),a("p",[t._v("表情包来源：https://rstudio-conf-2020.github.io/dl-keras-tf/02-hello-dl-world.html#23")]),t._v(" "),a("p",[t._v("在R中使用Keras和TensorFlow进行深度学习 https://github.com/rstudio-conf-2020/dl-keras-tf")]),t._v(" "),a("p",[t._v("【科普向/中英字幕】What's a Tensor? 张量简介https://www.bilibili.com/video/BV1Ja4y1e7bu/?spm_id_from=333.788.recommend_more_video.1")])])}),[],!1,null,null,null);s.default=e.exports}}]);
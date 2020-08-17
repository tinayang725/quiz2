// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerdiv = document.getElementById("answer");
const nextdiv = document.getElementById("nextdiv");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1.皮肤结构由外向内可分为:()。",
		correct : "ACE",
		choiceA : "A.表皮",
		choiceB : "B.有棘层",
		choiceC : "C.真皮",
		choiceD : "D.基底层",
		choiceE : "E.皮下组织",
    },{
		question : "2.美容院的毛巾和衣服消毒一般选用()两种方法。",
        correct : "BD",
        choiceA : "A.紫外线消毒",
        choiceB : "B.煮沸消毒",
        choiceC : "C.酒精消毒",
        choiceD : "D.蒸汽消毒",
		choiceE : "E.过氧化氢消毒",
    },{
		question : "3.人体细胞是由构成的。",
		correct : "BCD",
		choiceA : "A.染色质",
		choiceB : "B.细胞膜",
		choiceC : "C.细胞核",
		choiceD : "D.细胞质",
		choiceE : "E.上皮细胞",
    },{
		question : "4.细胞核包括()。",
		correct : "ABCD",
		choiceA : "A.核膜",
		choiceB : "B,核质",
		choiceC : "C.核仁",
		choiceD : "D.染色质",
		choiceE : "E.中心体",
    },{
		question : "5,细胞生长需要一定的条件,如适宜的温度,摄入充足的()等。",
		correct : "BDE",
		choiceA : "A.一氧化碳",
		choiceB : "B.水",
		choiceC : "C.二氧化碳",
		choiceD : "D.氧气",
		choiceE : "E.营养物质",
    },{
		question : "6.身体各部位的皮肤厚度不尽相同,眼睑处最薄,()处皮肤最厚。",
		correct : "BC",
		choiceA : "A.脸颊",
		choiceB : "B.足底",
		choiceC : "C.手掌",
		choiceD : "D.臀部",
		choiceE : "E.肘部",
    },{
		question : "7.表皮可分为角质层()五层。",
		correct : "ABCE",
		choiceA : "A.透明层",
		choiceB : "B.颗粒层",
		choiceC : "C.棘层",
		choiceD : "D.乳头层",
		choiceE : "E.基底层",
    },{
		question : "8.皮肤可分为()三层。",
		correct : "ABD",
		choiceA : "A.皮下组织",
		choiceB : "B.真皮层",
		choiceC : "C.基底层",
		choiceD : "D.表皮层",
		choiceE : "E.棘层",
    },{
		question : "9.皮肤含有()两种腺体。",
		correct : "AB",
		choiceA : "A.汗腺",
		choiceB : "B.皮脂腺",
		choiceC : "C.大汗腺",
		choiceD : "D.小汗腺",
		choiceE : "E.淋巴腺",
    },{
		question : "10.真皮中的纤维结缔组织有()三种。",
		correct : "ACD",
		choiceA : "A.胶原纤维",
		choiceB : "B.组织纤维",
		choiceC : "C.弹力纤维",
		choiceD : "D.网状纤维",
		choiceE : "E.合成纤维",
    },{
		question : "11.皮肤按其皮脂腺的分泌状况可分为()。",
		correct : "ACDE",
		choiceA : "A.中性皮肤",
		choiceB : "B.敏感性皮肤",
		choiceC : "C.干性皮肤",
		choiceD : "D.混合性皮肤",
		choiceE : "E.油性皮肤",
    },{
		question : "12.颜料的三原色是()。",
		correct : "ABD",
		choiceA : "A.黄",
		choiceB : "B.红",
		choiceC : "C.绿",
		choiceD : "D.监",
		choiceE : "E.紫",
    },{
		question : "13.真皮可分为上下两层()。",
		correct : "BC",
		choiceA : "A.棘层",
		choiceB : "B.乳头层",
		choiceC : "C.网状层",
		choiceD : "D.表皮",
		choiceE : "E.基底层",
    },{
		question : "14.皮肤内含有丰富的神经末梢,会产生热觉、()五种。",
		correct : "ABCE",
		choiceA : "A.触觉",
		choiceB : "B.痛觉",
		choiceC : "C.压力觉",
		choiceD : "D.感觉",
		choiceE : "E.冷觉",
    },{
		question : "15.皮肤的附属器有()。",
		correct : "ABCD",
		choiceA : "A.皮脂腺",
		choiceB : "B.爪甲",
		choiceC : "C.汗腺",
		choiceD : "D.毛发",
		choiceE : "E.角质",
    },{
		question : "16.热模能使皮肤局部血液循环加快,()分泌量增加。",
		correct : "AD",
		choiceA : "A.汗腺",
		choiceB : "B.废物",
		choiceC : "C.氧气",
		choiceD : "D.皮脂腺",
		choiceE : "E.二氧化碳",
    },{
		question : "17.美容工具使用后,应及时()。",
		correct : "AB",
		choiceA : "A.清洗",
		choiceB : "B.消毒",
		choiceC : "C.扔掉",
		choiceD : "D.放好",
		choiceE : "E.销毁",
    },{
		question : "18.角质层的厚薄对人的皮肤的()有一定影响。",
		correct : "BD",
		choiceA : "A,免疫",
		choiceB : "B.肤色",
		choiceC : "C.敏感",
		choiceD : "D.吸收能力",
		choiceE : "E.分泌",
    },{
		question : "19.冷模具收敛作用、适用于()皮肤。",
		correct : "BCD",
		choiceA : "A.中性",
		choiceB : "B.油性",
		choiceC : "C.暗疮",
		choiceD : "D.敏感",
		choiceE : "E.衰老",
    },{
		question : "20.热模具有促逃血液循环作用,适用于()皮肤。",
		correct : "ACD",
		choiceA : "A.干性",
		choiceB : "B.敏感性",
		choiceC : "C.衰老性",
		choiceD : "D.中性",
		choiceE : "E.暗疮",
    },{
		question : "21.皮脂腺的分泌功能受()的调节。",
		correct : "CB",
		choiceA : "A.雌性激素",
		choiceB : "B.肾上腺皮质激素",
		choiceC : "C.雄性激素",
		choiceD : "D.皮下脂肪",
		choiceE : "E.角质层厚薄",
    },{
		question : "22.除手则掌外,皮脂腺遍布全身,以头面部最多,其次为()。",
		correct : "BD",
		choiceA : "A.腿部",
		choiceB : "B.背部",
		choiceC : "C.肘部",
		choiceD : "D.前胸",
		choiceE : "E.臂部",
    },{
		question : "23.根据美容专业的需要划分,将用于皮肤的化妆品分为()。",
		correct : "ABCD",
		choiceA : "A.洁肤类",
		choiceB : "B.粉饰类",
		choiceC : "C.治疗类",
		choiceD : "D.护肤类",
		choiceE : "E.膏霜类",
    },{
		question : "24.由七种不同波长的色光混合而成的白光叫()。",
		correct : "BC",
		choiceA : "A.阳光",
		choiceB : "B.复色光",
		choiceC : "C.复合光",
		choiceD : "D.灯光",
		choiceE : "E.光谱",
    },{
		question : "25.在奥桑蒸汽仪的玻璃杯中,水位若高于(),或水中有杂质,容易产生喷水现象,造成烫伤。",
		correct : "AB",
		choiceA : "A.烧杯的4/5",
		choiceB : "B.红色标线",
		choiceC : "C.烧杯的1/2",
		choiceD : "D.蒸汽发生器",
		choiceE : "E.电器元件",
    },{
		question : "26.()是素描习作深入刻画的基础。",
		correct : "AD",
		choiceA : "A.轮廓",
		choiceB : "B.色彩",
		choiceC : "C.结构",
		choiceD : "D.构图",
		choiceE : "E.位置",
    },{
		question : "27.色彩具有三个基本要素即()。",
		correct : "ACD",
		choiceA : "A.色相",
		choiceB : "B.深浅度",
		choiceC : "C.纯度",
		choiceD : "D.明度",
		choiceE : "E.冷度",
    },{
		question : "28.色彩的纯度也称色彩的饱和度,它是指()。",
		correct : "AC",
		choiceA : "A.鲜艳的程度",
		choiceB : "B.浓淡的程度",
		choiceC : "C.颜色的强度",
		choiceD : "D.明暗的程度",
		choiceE : "E.冷暖程度",
    },{
		question : "29.色彩的明度是指色彩的明暗程度,也是色彩的()程度。",
		correct : "AB",
		choiceA : "A.深浅",
		choiceB : "B.浓淡",
		choiceC : "C.冷暖",
		choiceD : "D.鲜艳",
		choiceE : "E.纯度",
    },{
		question : "30.()是色与色之间的差别,也是色彩的面貌。",
		correct : "CD",
		choiceA : "A.明度",
		choiceB : "B.纯度",
		choiceC : "C.色別",
		choiceD : "D.色相",
		choiceE : "E.亮度",
    },{
		question : "31.头发是由()两部分组成的,其中发杆分为三层:表皮层、髓质层、皮质层。",
		correct : "AD",
		choiceA : "A.发杆",
		choiceB : "B.长毛",
		choiceC : "C.毳毛",
		choiceD : "D.发根",
		choiceE : "E.短毛",
    },{
		question : "32.美容工具进行消毒的方法有:()。",
		correct : "ABDE",
		choiceA : "A.新洁尔灭消毒",
		choiceB : "B.酒精消毒",
		choiceC : "C.煮沸消毒",
		choiceD : "D.紫外线消毒",
		choiceE : "E.过氧化氢消毒",
    },{
		question : "33.皮肤脱屑的方式可分为三类,即()。",
		correct : "ADE",
		choiceA : "A.物理脱屑",
		choiceB : "B.换肤脱屑",
		choiceC : "C.人工脱屑",
		choiceD : "D.化学脱屑",
		choiceE : "E.自然脱屑",
    },{
		question : "34.维生素E软膜具有抗衰老作用,适用于()皮肤。",
		correct : "AE",
		choiceA : "A.敏感性",
		choiceB : "B.色斑性",
		choiceC : "C.油性",
		choiceD : "D.暗疮性",
		choiceE : "E.衰老性",
    },{
		question : "35.面部凹凸层次主要取决于()。",
		correct : "CDE",
		choiceA : "A.脸颊长",
		choiceB : "B.脸盘大小",
		choiceC : "C.面颅骨骨骼的大小",
		choiceD : "D.皮肤脂肪的薄厚",
		choiceE : "E.面部骨骼的转折角度",
    },{
		question : "36.一般眼线的描画是()。",
		correct : "AC",
		choiceA : "A.上粗下细",
		choiceB : "B.下粗上细",
		choiceC : "C.7:3",
		choiceD : "D.3:4",
		choiceE : "E.5:5",
    },{
		question : "37.常见的脸形大体可分为七种、即椭圆形、圆形、方形()。",
		correct : "ACDE",
		choiceA : "A.菱形",
		choiceB : "B.多边形",
		choiceC : "C.倒三角形",
		choiceD : "D.长方形",
		choiceE : "E.正三角形",
    },{
		question : "38.用粉底矫正脸形时,深浅颜色的粉底应过渡()。",
		correct : "BD",
		choiceA : "A.含糊",
		choiceB : "B.自然",
		choiceC : "C.明显",
		choiceD : "D.均匀",
		choiceE : "E.分明",
    },{
		question : "39.美容师在工作时语音、音量应该要()。",
		correct : "AC",
		choiceA : "A.清晰",
		choiceB : "B.小声",
		choiceC : "C.适中",
		choiceD : "D.洪亮",
		choiceE : "E.低沉",
    },{
		question : "40.基底层是由()构成。",
		correct : "AC",
		choiceA : "A.基底细胞",
		choiceB : "B.脂肪细胞",
		choiceC : "C.黑色素细胞",
		choiceD : "D.纤维细胞",
		choiceE : "E.上皮细胞",
    },{
		question : "41.根据化妆品的生产工艺和外部形态,可将用于皮肤的化妆品分成:()粉类。",
		correct : "ABE",
		choiceA : "A.膏霜类",
		choiceB : "B.液体类",
		choiceC : "C.护肤类",
		choiceD : "D.洁肤类",
		choiceE : "E.蜜类",
    },{
		question : "42.蜜粉的作用是固定妆面,防止()。",
		correct : "ACD",
		choiceA : "A.脱妆",
		choiceB : "B.流汗",
		choiceC : "C.油光感",
		choiceD : "D.粉底外溢",
		choiceE : "E.改变肤色",
    },{
		question : "43.硬模可分为()。",
		correct : "DE",
		choiceA : "A.漂白膜",
		choiceB : "B.水分膜",
		choiceC : "C.减脂膜",
		choiceD : "D.热模",
		choiceE : "E.冷模",
    },{
		question : "44.无色彩系是指( )和深浅不同的灰色。",
		correct : "CD",
		choiceA : "A.金色",
		choiceB : "B.黄色",
		choiceC : "C.白色",
		choiceD : "D.黑色",
		choiceE : "E.粉色",
    },{
		question : "45.()的皮肤不宜做奥桑喷雾。",
		correct : "BCD",
		choiceA : "A.暗疮",
		choiceB : "B.敏感",
		choiceC : "C.色斑",
		choiceD : "D.微细血管破裂",
		choiceE : "E.油性",
    },{
		question : "46.奥桑喷雾仪是由()两部分构成。",
		correct : "CD",
		choiceA : "A.真空泵",
		choiceB : "B.电阻丝",
		choiceC : "C.蒸汽发生器",
		choiceD : "D.臭氧灯",
		choiceE : "E.红外线",
    },{
		question : "47.目前较为常用的透视灯皮肤测试仪有()。",
		correct : "AB",
		choiceA : "A.箱式测试仪",
		choiceB : "B.手提式测试仪",
		choiceC : "C.红外线测试仪",
		choiceD : "D.挂式测试仪",
		choiceE : "E.电脑测试仪",
    },{
		question : "48.皮肤测试仪主要由()构成。",
		correct : "AD",
		choiceA : "A.紫光管",
		choiceB : "B.红外线",
		choiceC : "C.凹透镜",
		choiceD : "D.放大镜",
		choiceE : "E.三棱镜",
    },{
		question : "49.手部的保养应注意要防止化学物品的损害,坚持做手部运动,应该()。",
		correct : "ABCE",
		choiceA : "A.勤洗手",
		choiceB : "B.保暧",
		choiceC : "C.防晒",
		choiceD : "D.涂甲油",
		choiceE : "E.经常修剪指甲",
    },{
		question : "50.细胞的功能包括()。",
		correct : "ABD",
		choiceA : "A.细胞的新陈代谢",
		choiceB : "B.细胞的生长",
		choiceC : "C.细胞的免疫",
		choiceD : "D.细胞的繁殖",
		choiceE : "E.细胞的杀菌",
    },{
		question : "51.美容师对所有的顾客都要()。",
		correct : "BCE",
		choiceA : "A.逆来顺受",
		choiceB : "B.友善",
		choiceC : "C.公平",
		choiceD : "D.服从",
		choiceE : "E.不厚此薄彼",
    },{
		question : "52.腮红的晕染要柔和,根据不同的脸形需要可描绘晕染成()。",
		correct : "ABC",
		choiceA : "A.新月形",
		choiceB : "B.三角形",
		choiceC : "C.橄榄形",
		choiceD : "D.圆形",
		choiceE : "E.曲线形",
    },{
		question : "53.一般情况下,倒冷模时应将()空出,不倒模。",
		correct : "ABCE",
		choiceA : "A.眉毛",
		choiceB : "B.口",
		choiceC : "C.鼻孔",
		choiceD : "D.鼻子",
		choiceE : "E.眼睛",
    },{
		question : "54.美容师做手操的目的在于训练双手的()。",
		correct : "AD",
		choiceA : "A.协调",
		choiceB : "B.美丽",
		choiceC : "C.修长",
		choiceD : "D.灵活",
		choiceE : "E.手形",
    },{
		question : "55.()皮肤脱屑时间应短。",
		correct : "BC",
		choiceA : "A.油性",
		choiceB : "B.干性",
		choiceC : "C.衰老",
		choiceD : "D.暗疮",
		choiceE : "E.混合性",
    },{
		question : "56.人工脱屑对于皮肤发炎、()皮肤等问题皮肤均不适用。",
		correct : "BCD",
		choiceA : "A.衰老",
		choiceB : "B.严重痤疮",
		choiceC : "C.特殊脉管",
		choiceD : "D.外伤",
		choiceE : "E.色斑",
    },{
		question : "57.当角质层在皮肤表面堆积过厚时,皮肤会显得(),井影响皮肤正常生理功能的发挥。",
		correct : "ACD",
		choiceA : "A.枯黄",
		choiceB : "B.光滑",
		choiceC : "C.粗糙",
		choiceD : "D.无光泽",
		choiceE : "E.白皙",
    },{
		question : "58.常用的卸妆用品有()。",
		correct : "BC",
		choiceA : "A.橄楼油",
		choiceB : "B.卸妆油",
		choiceC : "C.清洁霜",
		choiceD : "D.洗面奶",
		choiceE : "E.化妆水",
    },{
		question : "59.化妆时阴影色用于()的部位,使其得到收敛效果。",
		correct : "AB",
		choiceA : "A.过大",
		choiceB : "B.过宽",
		choiceC : "C.太小",
		choiceD : "D.太窄",
		choiceE : "B.太凹",
    },{
		question : "60.化妆时提亮色用于()的部位,使其得到拓宽放大的效果。",
		correct : "CDE",
		choiceA : "A.过大",
		choiceB : "B.过宽",
		choiceC : "C.太小",
		choiceD : "D.太窄",
		choiceE : "E.太凹",
    },{
		question : "61.常用的阴影色有()。",
		correct : "BDE",
		choiceA : "A.白色",
		choiceB : "B.褐色",
		choiceC : "C.黄色",
		choiceD : "D.棕色",
		choiceE : "E.橄榄绿",
    },{
		question : "62.常用的提亮色有()。",
		correct : "ACE",
		choiceA : "A.白色",
		choiceB : "B.褐色",
		choiceC : "C.黄色",
		choiceD : "D.棕色",
		choiceE : "E.米色",
    },{
		question : "63.修眉的方法大致分为()。",
		correct : "ACD",
		choiceA : "A.拔眉法",
		choiceB : "B.绣眉法",
		choiceC : "C.剪眉法",
		choiceD : "D.剃眉法",
		choiceE : "E.文眉法",
    },{
		question : "64.脸形指的是脸的轮廓,它分为脸的()两部分。",
		correct : "CD",
		choiceA : "A.方轮廓",
		choiceB : "B.圆轮廓",
		choiceC : "C.正面轮廓",
		choiceD : "D.侧面轮廓",
		choiceE : "E.长轮廓",
    },{
		question : "65.干性皮肤一般可分为()皮肤两种。",
		correct : "AC",
		choiceA : "A.缺水性",
		choiceB : "B.偏油性",
		choiceC : "C.缺油性",
		choiceD : "D.偏干性",
		choiceE : "E.中性",
    },{
		question : "66.混合性皮肤一般可分为()皮肤两种。",
		correct : "BD",
		choiceA : "A.缺水性",
		choiceB : "B.偏油性",
		choiceC : "C.缺油性",
		choiceD : "D.偏干性",
		choiceE : "E.中性",
    },{
		question : "67.日妆眼睛的修饰主要由()构成。",
		correct : "ABD",
		choiceA : "A.眼影",
		choiceB : "B.涂睫毛膏",
		choiceC : "C.粘假睫毛",
		choiceD : "D.眼线",
		choiceE : "E.上闪粉",
    },{
		question : "68.倒硬模前,应先用薄棉片或双层纱布将()及鬓角裸露的所有毛发挡住。",
		correct : "ACD",
		choiceA : "A.眼睛",
		choiceB : "B.鼻子",
		choiceC : "C.眉毛",
		choiceD : "D.嘴",
		choiceE : "E.耳朵",
    },{
		question : "69.脱毛方法可分为()。",
		correct : "BC",
		choiceA : "A.蜡脱毛",
		choiceB : "B.永久性脱毛",
		choiceC : "C.暂时性脱毛",
		choiceD : "D.拔毛脱毛",
		choiceE : "E.刀剃脱毛",
    },{
		question : "70.化学性脱毛剂有()。",
		correct : "ACD",
		choiceA : "A.脱毛霜",
		choiceB : "B.冻蜡脱毛",
		choiceC : "C.脱毛液",
		choiceD : "D.脱毛膏",
		choiceE : "E.热蜡脱毛",
    },{
		question : "71.蜡脱毛分为()两种。",
		correct : "AB",
		choiceA : "A.热蜡脱毛",
		choiceB : "B.冻蜡脱毛",
		choiceC : "C.化学脱毛",
		choiceD : "D.永久脱毛",
		choiceE : "E.脱毛剂脱毛",
    },{
		question : "72.指导顾客时,要给予顾客()。",
		correct : "AD",
		choiceA : "A.信心",
		choiceB : "B.事实",
		choiceC : "C.高期望",
		choiceD : "D.希望",
		choiceE : "E.护理技术",
    },{
		question : "73.做好护理前准备工作的目的是()。",
		correct : "BCD",
		choiceA : "A.心理服务",
		choiceB : "B.安全服务",
		choiceC : "C.有效服务",
		choiceD : "D.优质服务",
		choiceE : "E.功能服务",
    },{
		question : "74.皮肤护理准备工作要做到()。",
		correct : "ACDE",
		choiceA : "A.认真",
		choiceB : "B.简单",
		choiceC : "C.准确",
		choiceD : "D.到位",
		choiceE : "E.细致",
    },{
		question : "75.洁肤时清除皮肤表面的污垢、皮肤的分泌物,可保持()分泌物排出畅通,防止细菌感染。",
		correct : "BC",
		choiceA : "A.毛孔",
		choiceB : "B.汗腺",
		choiceC : "C.皮脂腺",
		choiceD : "D.淋巴腺",
		choiceE : "E.脂肪",
    },{
		question : "76.洗面纸巾在手上缠绕时要求()。",
		correct : "ACE",
		choiceA : "A.整齐",
		choiceB : "B.柔软",
		choiceC : "C.牢固",
		choiceD : "D.方正",
		choiceE : "E.迅速",
    },{
		question : "77.洗面时要求动作要()。",
		correct : "BCD",
		choiceA : "A.快速",
		choiceB : "B.熟练",
		choiceC : "C.有条理",
		choiceD : "D.步骤清楚",
		choiceE : "E.大力度",
    },{
		question : "78.按摩乳适合()皮肤。",
		correct : "DE",
		choiceA : "A.中性",
		choiceB : "B.色斑",
		choiceC : "C.干性缺油性",
		choiceD : "D.干性缺水性",
		choiceE : "E.油性皮肤",
    },{
		question : "79.汗腺可分为()两部分。",
		correct : "AB",
		choiceA : "A.大汗腺",
		choiceB : "B.小汗腺",
		choiceC : "C.毛孔",
		choiceD : "D.皮脂腺",
		choiceE : "E.淋巴腺",
    },{
		question : "80.超油性皮肤油膩,常出现()。",
		correct : "ABD",
		choiceA : "A.白头粉刺",
		choiceB : "B.痤疮",
		choiceC : "C.扁平疣",
		choiceD : "D.黑头粉刺",
		choiceE : "E.红血丝",
    },{
		question : "81.眉毛上的三个穴位为()。",
		correct : "BCD",
		choiceA : "A.迎香穴",
		choiceB : "B.丝竹空穴",
		choiceC : "C.鱼腰穴",
		choiceD : "D.攒竹穴",
		choiceE : "E.神庭穴",
    },{
		question : "82.叶绿素软膜具有清凉解毒作用,适用于()皮肤。",
		correct : "DE",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.中性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "83.当归软膜适用于()皮肤。",
		correct : "ABC",
		choiceA : "A.缺血性面色苍白",
		choiceB : "B.色斑性",
		choiceC : "C.枯黄性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "84.珍珠软膜适用于()皮肤。",
		correct : "AB",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.色斑性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "85.人参软膜具有抗衰老的作用,适于()皮肤。",
		correct : "AB",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.中性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "86.膏状面膜中的漂白面膜适于()皮肤。",
		correct : "ACE",
		choiceA : "A.色斑性",
		choiceB : "B.衰老性",
		choiceC : "C.中性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "87.膏状面膜中的调节面膜适于()皮肤。",
		correct : "AC",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "88.膏状面膜中的营养面膜适于()皮肤。",
		correct : "AB",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.中性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "89.啫喱面膜可分为()。",
		correct : "DE",
		choiceA : "A.消炎型",
		choiceB : "B.营养型",
		choiceC : "C.补水型",
		choiceD : "D.可干型",
		choiceE : "E.保湿型",
    },{
		question : "90.可干型啫喱面膜清洁效果好,适于()皮肤。",
		correct : "DE",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.中性",
		choiceD : "D.老化角质堆积较厚",
		choiceE : "E.油性",
    },{
		question : "91.果蔬面膜中的香蕉泥面膜适用于()皮肤。",
		correct : "AC",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "92.果蔬面膜中的番茄泥面膜适用于()皮肤。",
		correct : "AE",
		choiceA : "A.色斑性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "93.果蔬面膜中的柠檬汁面膜适用于()皮肤。",
		correct : "AE",
		choiceA : "A.色斑性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.暗疮",
		choiceE : "E.油性",
    },{
		question : "94.果蔬面膜中的马铃薯面膜适用于()皮肤。",
		correct : "DE",
		choiceA : "A.色斑性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.浮肿部位",
		choiceE : "E.油性",
    },{
		question : "95.果蔬面膜中的西瓜泥面膜适用于()皮肤。",
		correct : "AE",
		choiceA : "A.需要漂白",
		choiceB : "B.衰老性",
		choiceC : "C.敏感性",
		choiceD : "D.浮肿部位",
		choiceE : "E.油性",
    },{
		question : "96.涂粉底时油性皮肤选择用()。",
		correct : "AB",
		choiceA : "A.粉底液",
		choiceB : "B.粉饼",
		choiceC : "C.粉底霜",
		choiceD : "D.粉条",
		choiceE : "E.散粉",
    },{
		question : "97.粉底质感要与()协调。",
		correct : "ABD",
		choiceA : "A.皮肤性质",
		choiceB : "B.妆型特点",
		choiceC : "C.服装",
		choiceD : "D.季节",
		choiceE : "E.服饰",
    },{
		question : "98.较黑的皮肤要选用()粉底。",
		correct : "CD",
		choiceA : "A.紫色",
		choiceB : "B.绿色",
		choiceC : "C.浅咖啡色",
		choiceD : "D.深土色",
		choiceE : "E.偏红色",
    },{
		question : "99.()者先用浅色粉底涂抹一遍,再用与肤色接近的粉底涂抹一遍。",
		correct : "BE",
		choiceA : "A.皮肤白皙",
		choiceB : "B.皮肤粗糙",
		choiceC : "C.较黑皮肤",
		choiceD : "D.枯黄皮肤",
		choiceE : "E.毛孔粗大",
    },{
		question : "100.涂粉底方法中的按压法可以使粉底显得()。",
		correct : "BCE",
		choiceA : "A.厚重",
		choiceB : "B.自然",
		choiceC : "C.牢固",
		choiceD : "D.遮盖力强",
		choiceE : "E.均匀",
    },{
		question : "101.描画眉毛时由()相连组成。",
		correct : "ACE",
		choiceA : "A.眉峰",
		choiceB : "B.眉根",
		choiceC : "C.眉头",
		choiceD : "D.眉腰",
		choiceE : "E.眉梢",
    },{
		question : "102.眉梢位于()的延长线上。",
		correct : "CD",
		choiceA : "A.唇峰",
		choiceB : "B.内眼角",
		choiceC : "C.外眼角",
		choiceD : "D.鼻翼",
		choiceE : "E.唇角",
    },{
		question : "103.眉色要与()协调。",
		correct : "BCD",
		choiceA : "A.服饰",
		choiceB : "B.肤色",
		choiceC : "C.发色",
		choiceD : "D.妆型",
		choiceE : "E.服装",
    },{
		question : "104.水平晕染中可分为()两种描画晕染方法。",
		correct : "CD",
		choiceA : "A.前深后浅",
		choiceB : "B.后窄前宽",
		choiceC : "C.下深上浅",
		choiceD : "D.上深下浅",
		choiceE : "E.同样深浅",
    },{
		question : "105.画睫毛线有两种方法:()描画。",
		correct : "BC",
		choiceA : "A.睫毛膏",
		choiceB : "B.眼线笔",
		choiceC : "C.水溶性眼线粉",
		choiceD : "D.眉笔",
		choiceE : "E.跟影粉",
    },{
		question : "106.化妆时使用的唇膏色要与()协调统一。",
		correct : "ABD",
		choiceA : "A.腮红用色",
		choiceB : "B.服饰色彩",
		choiceC : "C.眉色",
		choiceD : "D.眼影用色",
		choiceE : "E.发色",
    },{
		question : "107.暖色唇膏显得活泼,适于()的人。",
		correct : "AD",
		choiceA : "A.年轻人",
		choiceB : "B.年龄略大",
		choiceC : "C.冷暖妆",
		choiceD : "D.偏暖色的妆型",
		choiceE : "E.偏冷色的妆型",
    },{
		question : "108.冷色唇显膏得比较深沉,适于()的人。",
		correct : "BE",
		choiceA : "A.年轻人",
		choiceB : "B.年龄略大",
		choiceC : "C.冷暖妆",
		choiceD : "D.偏暧色的妆型",
		choiceE : "E.偏冷色的妆型",
    },{
		question : "109.腮红的颜色应与()色相协调。",
		correct : "CD",
		choiceA : "A.发色",
		choiceB : "B.眉色",
		choiceC : "C.眼影色",
		choiceD : "D.口红",
		choiceE : "E.服饰",
    },{
		question : "110.定妆蜜粉可分为()。",
		correct : "AE",
		choiceA : "A.有色蜜粉",
		choiceB : "B.湿粉",
		choiceC : "C.眼影粉",
		choiceD : "D.修容粉",
		choiceE : "E.透明粉",
    },{
		question : "111.人体细胞是由()构成。",
		correct : "ABC",
		choiceA : "A.细胞膜",
		choiceB : "B.细胞质",
		choiceC : "C.细胞核",
		choiceD : "D.细胞质膜",
		choiceE : "E.细胞核膜",
    },{
		question : "112.用于皮肤的化妆品分()类。",
		correct : "ABCD",
		choiceA : "A.洁肤类",
		choiceB : "B.护肤类",
		choiceC : "C.治疗类",
		choiceD : "D.修饰类",
		choiceE : "E.美化类",
    },{
		question : "113.按摩乳适用于()皮肤。",
		correct : "AB",
		choiceA : "A.油性",
		choiceB : "B.缺水",
		choiceC : "C.中性",
		choiceD : "D.色斑",
		choiceE : "E.暗疮",
    },{
		question : "114.收敛性化妆水适用于()皮肤。",
		correct : "AB",
		choiceA : "A.毛孔粗大",
		choiceB : "B.油性",
		choiceC : "C.干性",
		choiceD : "D.中性",
		choiceE : "E.衰老",
    },{
		question : "115.营养化妆水适用于()皮肤。",
		correct : "AB",
		choiceA : "A.干性",
		choiceB : "B.衰老",
		choiceC : "C.中性",
		choiceD : "D.油性",
		choiceE : "E.色斑",
    },{
		question : "116.粉底包括()。",
		correct : "ABCD",
		choiceA : "A.粉底霜",
		choiceB : "B.粉条",
		choiceC : "C.粉底液",
		choiceD : "D.粉饼",
		choiceE : "E.蜜粉",
    },{
		question : "117.护肤类化妆品有()等。",
		correct : "ABCD",
		choiceA : "A.按摩膏",
		choiceB : "B.按摩乳",
		choiceC : "C.雪花膏",
		choiceD : "D.化妆水",
		choiceE : "E.祛斑膏",
    },{
		question : "118.去死皮液适用于()皮肤。",
		correct : "ABC",
		choiceA : "A.干性",
		choiceB : "B.衰老性",
		choiceC : "C.敏感",
		choiceD : "D.中性",
		choiceE : "E.油性",
    },{
		question : "119.()皮肤不宜脱屑。",
		correct : "ABCD",
		choiceA : "A.发炎",
		choiceB : "B.外伤",
		choiceC : "C.严重痤疮",
		choiceD : "D.特殊脉管状态",
		choiceE : "E.油性",
    },{
		question : "120.脱屑的间隔时间可根据()而定,不可过勤,以免损伤皮肤。",
		correct : "ABC",
		choiceA : "A.季节",
		choiceB : "B.气候",
		choiceC : "C.皮肤状态",
		choiceD : "D.产品",
		choiceE : "E.意愿",
    },{
		question : "121.营养面膜适合()皮肤。",
		correct : "AB",
		choiceA : "A.干性",
		choiceB : "B.衰老",
		choiceC : "C.混合",
		choiceD : "D.油性",
		choiceE : "E.敏感",
    },{
		question : "122.调节面膜含有敏感调节剂,适合()皮肤。",
		correct : "AC",
		choiceA : "A.敏感",
		choiceB : "B.油性",
		choiceC : "C.干性",
		choiceD : "D.衰老",
		choiceE : "E.暗疮",
    },{
		question : "123.护肤类化妆品有()等。",
		correct : "BC",
		choiceA : "A.清洁霜",
		choiceB : "B.化妆水",
		choiceC : "C.按摩膏",
		choiceD : "D.去死皮膏",
		choiceE : "E.卸妆油",
    },{
		question : "124.人体毛发可分为长毛、()三种。",
		correct : "AB",
		choiceA : "A.短毛",
		choiceB : "B.毳毛",
		choiceC : "C.睫毛",
		choiceD : "D.眉毛",
		choiceE : "E.腋毛",
    },{
		question : "125.毛发的生长分三个阶段,即生长期、()。",
		correct : "AB",
		choiceA : "A.休止期",
		choiceB : "B.脱落期",
		choiceC : "C.修复期",
		choiceD : "D.静止期",
		choiceE : "E.萌芽期",
    },{
		question : "126.皮脂呈弱酸性、有一定的()作用。",
		correct : "AB",
		choiceA : "A.抑菌",
		choiceB : "B.杀菌",
		choiceC : "C.保护",
		choiceD : "D.防晒",
		choiceE : "E.滋润",
    },{
		question : "127.皮肤附属器有皮脂腺、汗腺()。",
		correct : "AB",
		choiceA : "A.毛发",
		choiceB : "B.爪甲",
		choiceC : "C.大汗腺",
		choiceD : "D.毳毛",
		choiceE : "E.牙齿",
    },{
		question : "128.卸妆的要求与注意事项:()。",
		correct : "ABC",
		choiceA : "A.卸妆彻底",
		choiceB : "B.眼部卸妆动作轻柔",
		choiceC : "C.不要将洁肤品流入客人的眼、鼻、口中",
		choiceD : "D.如果没化很浓的妆、就不需卸妆",
		choiceE : "E.如果化很浓的妆,卸妆油可尽量放少",
    },{
		question : "129.洗面的要求是:()。",
		correct : "AD",
		choiceA : "A.洁肤品借助工具取用",
		choiceB : "B.可直接用手从容器内取用洁肤品",
		choiceC : "C.洁肤后、因洁肤品含有营养物,不需洗得太彻底",
		choiceD : "D.洗面过程以3-4分钟为宜",
		choiceE : "E.干性皮肤,可洗两次",
    },{
		question : "130.按摩的基本原则:()。",
		correct : "ACD",
		choiceA : "A.按摩走向从下向上",
		choiceB : "B.走向从外向里、由两边向中间",
		choiceC : "C.按摩方向与肌肉走向一致",
		choiceD : "D.按摩走向从里向外、从中间向两边",
		choiceE : "E.按摩走向从上向下",
    },{
		question : "131.()严禁按摩",
		correct : "ABE",
		choiceA : "A.严重过敏性皮肤",
		choiceB : "B.皮肤急性炎症、外伤、严重痤疮",
		choiceC : "C.色斑皮肤",
		choiceD : "D.衰老皮肤",
		choiceE : "E.皮肤传染病",
    },{
		question : "132.冷膜适合()皮肤。",
		correct : "ADE",
		choiceA : "A.暗疮皮肤",
		choiceB : "B.干性皮肤",
		choiceC : "C.色斑皮肤",
		choiceD : "D.敏感皮肤",
		choiceE : "E.油性皮肤",
    },{
		question : "133.叶绿素软膜适合()皮肤。",
		correct : "AD",
		choiceA : "A.油性皮肤",
		choiceB : "B.干性皮肤",
		choiceC : "C.衰老性皮肤",
		choiceD : "D.暗疮皮肤",
		choiceE : "E.中性皮肤",
    },{
		question : "134.珍珠软膜适合()皮肤。",
		correct : "BC",
		choiceA : "A.油性皮肤",
		choiceB : "B.干性皮肤",
		choiceC : "C.衰老性皮肤",
		choiceD : "D.暗疮皮肤",
		choiceE : "E.中性皮肤",
    },{
		question : "135.()严禁倒硬模。",
		correct : "ABD",
		choiceA : "A.严重过敏性皮肤",
		choiceB : "B.局部有创伤发炎等症状",
		choiceC : "C.面部长痤疮",
		choiceD : "D.严重心脏病、呼吸道感染、高血压患者",
		choiceE : "E.面部长色斑",
    },{
		question : "136.应根据()选择适当颜色的粉底。",
		correct : "AB",
		choiceA : "A.肤色",
		choiceB : "B.年龄特征",
		choiceC : "C.气候",
		choiceD : "D.季节",
		choiceE : "E.皮肤性质、毛孔状态",
    },{
		question : "137.用于化妆的色彩分为()。",
		correct : "ACE",
		choiceA : "A.阴影色",
		choiceB : "B.暖色",
		choiceC : "C.提亮色",
		choiceD : "D.冷色",
		choiceE : "E.强调色",
    },{
		question : "138.眉色要与()协调。",
		correct : "ABDE",
		choiceA : "A.发色",
		choiceB : "B.肤色",
		choiceC : "C.服装色",
		choiceD : "D.妆型",
		choiceE : "E.唇色",
    },{
		question : "139.手部护理常用穴位:()。",
		correct : "ACD",
		choiceA : "A.合谷穴",
		choiceB : "B.天枢穴",
		choiceC : "C.劳宫穴",
		choiceD : "D.阳溪穴",
		choiceE : "E.大推穴",
    },{
		question : "140.皮肤测试仪注意事项()。",
		correct : "ABE",
		choiceA : "A.测试前眼部盖上湿棉片",
		choiceB : "B.测试最长时间不超过2分钟",
		choiceC : "C.测试仪与面部间距不能近于20厘米",
		choiceD : "D.暗疮皮肤不宜使用",
		choiceE : "E.色斑皮肤不宜使用",
    },{
		question : "141.()皮肤不宜做奥桑喷雾。",
		correct : "ACE",
		choiceA : "A.色斑皮肤",
		choiceB : "B.暗疮皮肤",
		choiceC : "C.敏感皮肤",
		choiceD : "D.油性皮肤",
		choiceE : "E.特殊脉管状态皮肤",
    },{
		question : "142.色彩的三要素()。",
		correct : "ACD",
		choiceA : "A.色相",
		choiceB : "B.色调",
		choiceC : "C.明度",
		choiceD : "D.纯度",
		choiceE : "E.色料",
    },{
		question : "143.无彩色系包括()。",
		correct : "ABD",
		choiceA : "A.白色",
		choiceB : "B.黑色",
		choiceC : "C.青色",
		choiceD : "D.深浅不同的灰色",
		choiceE : "E.紫色",
    },{
		question : "144.色彩的三原色是()。",
		correct : "ACE",
		choiceA : "A.红色",
		choiceB : "B.绿色",
		choiceC : "C.黄色",
		choiceD : "D.橙色",
		choiceE : "E.蓝色",
    },{
		question : "145.色彩的第二次色是。",
		correct : "ADE",
		choiceA : "A.绿色",
		choiceB : "B.红色",
		choiceC : "C.黄色",
		choiceD : "D.橙色",
		choiceE : "E.紫色",
    },{
		question : "146.()属于提亮色。",
		correct : "ADE",
		choiceA : "A.银灰色",
		choiceB : "B.紫灰色",
		choiceC : "C.灰色",
		choiceD : "D.米色",
		choiceE : "E.象牙白",
    },{
		question : "147.红色眼影忌用于()。",
		correct : "AC",
		choiceA : "A.肿眼泡",
		choiceB : "B.单眼皮",
		choiceC : "C.眼袋下垂",
		choiceD : "D.眼部距离宽",
		choiceE : "E.日妆",
    },{
		question : "148.粉饼适合于()的修饰。",
		correct : "AC",
		choiceA : "A.油性皮肤",
		choiceB : "B.中性",
		choiceC : "C.简单生活妆",
		choiceD : "D.浓妆",
		choiceE : "E·衰老性",
    },{
		question : "149.腮红的颜色应与()相协调。",
		correct : "AD",
		choiceA : "A.口红",
		choiceB : "B.眉色",
		choiceC : "C.发色",
		choiceD : "D.眼影色",
		choiceE : "E.肤色",
    },{
		question : "150.冷色唇膏显得比较沉稳,适于()妆型。",
		correct : "AC",
		choiceA : "A.年龄略大",
		choiceB : "B.年轻人",
		choiceC : "C.偏冷色妆",
		choiceD : "D.偏暖色妆",
		choiceE : "E.日妆",
    },{
		question : "151.暖色唇膏显得活泼,适于()妆型。",
		correct : "AC",
		choiceA : "A.年轻人",
		choiceB : "B.偏冷色妆",
		choiceC : "C.偏暖色妆",
		choiceD : "D.年龄略大",
		choiceE : "E.晚妆",
    },{
		question : "152.属于粉饰类的化妆品有()。",
		correct : "ABE",
		choiceA : "A.指甲油",
		choiceB : "B.唇膏",
		choiceC : "C.润肤露",
		choiceD : "D.卸妆油",
		choiceE : "E.眼影",
    },{
		question : "153.()属于细胞的功能。",
		correct : "ABE",
		choiceA : "A.緊殖",
		choiceB : "B.生长",
		choiceC : "C.自我修护",
		choiceD : "D.吸收营养",
		choiceE : "E.新陈代谢",
    },{
		question : "154.毛发的生长分()阶段。",
		correct : "BCE",
		choiceA : "A.发育期",
		choiceB : "B.生长期",
		choiceC : "C.休止期",
		choiceD : "D.暫停期",
		choiceE : "E.脱落期",
    },{
		question : "155.()属于洁肤类。",
		correct : "ABC",
		choiceA : "A.清洁霜",
		choiceB : "B.香皂",
		choiceC : "C.去死皮液",
		choiceD : "D.按摩膏",
		choiceE : "E.按摩乳",
    },{
		question : "156.()属于护肤类。",
		correct : "DE",
		choiceA : "A.清洁霜",
		choiceB : "B.香皂",
		choiceC : "C.去死皮液",
		choiceD : "D.按摩膏",
		choiceE : "E.防晒液",
    },{
		question : "157.()属于治疗类。",
		correct : "AE",
		choiceA : "A.祛斑霜",
		choiceB : "B.防裂膏",
		choiceC : "C.防晒露",
		choiceD : "D.润肤篮",
		choiceE : "E.除臭露",
    },{
		question : "158.一般化妆品的外部形态可分为()。",
		correct : "ABCD",
		choiceA : "A.膏霜英",
		choiceB : "B.蜜类",
		choiceC : "C.粉类",
		choiceD : "D.液体类",
		choiceE : "E.气体类",
    },{
		question : "159.粉底的主要成分:()。",
		correct : "ABCD",
		choiceA : "A.油",
		choiceB : "B.粉",
		choiceC : "C.水",
		choiceD : "D.色素",
		choiceE : "E.纤维质",
    },{
		question : "160.混合性皮肤分为:()。",
		correct : "AC",
		choiceA : "A.偏干",
		choiceB : "B.缺油",
		choiceC : "C.偏油",
		choiceD : "D.缺水",
		choiceE : "E.油性",
    },{
		question : "161.按皮脂腺分泌量的不同,皮肤一般可分为()。",
		correct : "ABCD",
		choiceA : "A.中性",
		choiceB : "B.油性",
		choiceC : "C.干性",
		choiceD : "D.混合性",
		choiceE : "E.色斑",
    },{
		question : "162.面部的凹面有()。",
		correct : "CD",
		choiceA : "A.下颌",
		choiceB : "B.颧结节",
		choiceC : "C.颧弓下陷",
		choiceD : "D.人中沟",
		choiceE : "E.鼻梁",
    },{
		question : "163.眼部修饰方法程序()。",
		correct : "BDE",
		choiceA : "A.画眉毛",
		choiceB : "B.眼影",
		choiceC : "C.鼻侧影",
		choiceD : "D.眼线",
		choiceE : "E.睫毛",
    },{
		question : "164.蜜粉的作用()。",
		correct : "ACD",
		choiceA : "A.固定粉底",
		choiceB : "B.增白",
		choiceC : "C.防止妆脱落",
		choiceD : "D.减少油光感",
		choiceE : "E.遮盖性较强",
    },{
		question : "165.粉底的作用:()。",
		correct : "CD",
		choiceA : "A.定妆",
		choiceB : "B.增白",
		choiceC : "C.遮盖瑕疵",
		choiceD : "D.改善肤色",
		choiceE : "E.柔和皮肤油光感",
    },{
		question : "166.清洁皮肤的目的:()。",
		correct : "ABE",
		choiceA : "A.清除皮肤表面污垢",
		choiceB : "B.调节皮肤pH值",
		choiceC : "C.补充皮肤的营养",
		choiceD : "D.去除皱纹",
		choiceE : "E.为皮肤护理做好准备",
    },{
		question : "167.按摩的作用:()。",
		correct : "AD",
		choiceA : "A.促进血液循环",
		choiceB : "B.补充水分",
		choiceC : "C.调节皮肤pH值",
		choiceD : "D.排除废物和二氧化碳",
		choiceE : "E.粗大的毛孔得到收敛",
    },{
		question : "168.热模适合()。",
		correct : "ABE",
		choiceA : "A.中性皮肤",
		choiceB : "B.衰老性皮肤",
		choiceC : "C.敏感性皮肤",
		choiceD : "D.暗疮性皮肤",
		choiceE : "E.干性皮肤",
    },{
		question : "169.腮红的作用:()。",
		correct : "ABE",
		choiceA : "A.增加面部红润感",
		choiceB : "B.调整脸形",
		choiceC : "C.改善肤质",
		choiceD : "D.柔和皮肤油光感",
		choiceE : "E.使面色显得健康",
    },{
		question : "170.眼影晕染的两种方法:()。",
		correct : "BD",
		choiceA : "A.上深下浅",
		choiceB : "B.水平晕染",
		choiceC : "C.同色系晕染",
		choiceD : "D.立体晕染",
		choiceE : "E.相近色晕染",
    },{
		question : "171.水平晕染一般分为()。",
		correct : "AE",
		choiceA : "A.上深下浅",
		choiceB : "B.同色系晕染",
		choiceC : "C.立体晕染",
		choiceD : "D.对比色晕染",
		choiceE : "E.下深上浅",
    },{
		question : "172.眉毛的修饰一般分为两个步骤来完成,即()。",
		correct : "CE",
		choiceA : "A.拔眉",
		choiceB : "B.剃眉",
		choiceC : "C.修眉",
		choiceD : "D.剪眉",
		choiceE : "E.画眉",
    },{
		question : "173.涂粉底的方法有()。",
		correct : "ACDE",
		choiceA : "A.点",
		choiceB : "B.敷",
		choiceC : "C.拍按",
		choiceD : "D.擦抹",
		choiceE : "E.按压",
    },{
		question : "174.睫毛线是眼部化妆的重要内容,具有()的作用。",
		correct : "ADE",
		choiceA : "A.调整眼睛轮廓",
		choiceB : "B.使眼影色加强",
		choiceC : "C.改善黑眼圈",
		choiceD : "D.调整两眼间距",
		choiceE : "E.增加眼睛神采",
    },{
		question : "175.勾画的唇形要符合()。",
		correct : "AD",
		choiceA : "A.脸形",
		choiceB : "B.顾客要求",
		choiceC : "C.眼影色",
		choiceD : "D.个性特点",
		choiceE : "E.原来的唇形",
    },{
		question : "176.淡妆一般用于()。",
		correct : "BCD",
		choiceA : "A.舞台表演",
		choiceB : "B.日常生活",
		choiceC : "C.日常工作中",
		choiceD : "D.自然光",
		choiceE : "E.强烈的灯光下",
    },{
		question : "177.()属眉部的穴位。",
		correct : "ACE",
		choiceA : "A.攒竹穴",
		choiceB : "B.印堂穴",
		choiceC : "C.鱼腰穴",
		choiceD : "D.神穴",
		choiceE : "E.丝竹空穴",
    },{
		question : "178.膏状面膜包含()。",
		correct : "AC",
		choiceA : "A.漂白面膜",
		choiceB : "B.啫喱面膜",
		choiceC : "C.调节面膜",
		choiceD : "D.矿泥面膜",
		choiceE : "E.果蔬面膜",
    },{
		question : "179.果蔬面膜包括()。",
		correct : "ACD",
		choiceA : "A.柠檬汁面膜",
		choiceB : "B.草药面膜",
		choiceC : "C.香蕉泥面膜",
		choiceD : "D.番茄泥面膜",
		choiceE : "E.叶绿素面膜",
    },{
		question : "180.鼻部的修饰方法,需涂亮色的部位一般为()。",
		correct : "BD",
		choiceA : "A.鼻梁两侧",
		choiceB : "B.鼻梁上",
		choiceC : "C.鼻根外侧",
		choiceD : "D.鼻尖上",
		choiceE : "E.鼻翼两侧",
    },{
		question : "181.粉条适用于()。",
		correct : "BDE",
		choiceA : "A.淡妆",
		choiceB : "B.浓妆",
		choiceC : "C.油性皮肤",
		choiceD : "D.敏感皮肤",
		choiceE : "E.干性皮肤",
    },{
		question : "182.粉底液适用于()。",
		correct : "ACE",
		choiceA : "A.淡妆",
		choiceB : "B.浓妆",
		choiceC : "C.油性皮肤",
		choiceD : "D.冬季化妆",
		choiceE : "E.夏季化妆",
    },{
		question : "183.皮肤测试仪主要由()构成。",
		correct : "BC",
		choiceA : "A.臭氧灯",
		choiceB : "B.放大镜",
		choiceC : "C.紫光管",
		choiceD : "D.蒸汽发生器",
		choiceE : "E.电阻",
    },{
		question : "184.亮色在化妆中用于()部位。",
		correct : "BDE",
		choiceA : "A.过宽",
		choiceB : "B.太窄",
		choiceC : "C.过大",
		choiceD : "D.太低",
		choiceE : "E.太小",
    },{
		question : "185.面部最易脱妆的部位是()。",
		correct : "BDE",
		choiceA : "A.额部",
		choiceB : "B.眼晴下面",
		choiceC : "C.眼睛上面",
		choiceD : "D.鼻翼两边",
		choiceE : "E.嘴角旁边",
    },{
		question : "186.职业道德具有()等特点。",
		correct : "ABE",
		choiceA : "A.职业性",
		choiceB : "B.从属性",
		choiceC : "C.家庭性",
		choiceD : "D.社会性",
		choiceE : "E.成人性",
    },{
		question : "187.礼仪的特点:()。",
		correct : "ADE",
		choiceA : "A.统一性",
		choiceB : "B.遵守性",
		choiceC : "C.适度性",
		choiceD : "D.差异性",
		choiceE : "E.共同性",
    },{
		question : "188.美容院通过人际交往而实现满意的服务来源于()。",
		correct : "CE",
		choiceA : "A.优质服务",
		choiceB : "B.热情服务",
		choiceC : "C.功能服务",
		choiceD : "D.技术服务",
		choiceE : "E.心理服务",
    },{
		question : "189.皮肤护理中不可用奥桑喷雾的皮肤()。",
		correct : "CD",
		choiceA : "A.干性皮肤",
		choiceB : "B.中性皮肤",
		choiceC : "C.色斑皮肤",
		choiceD : "D.敏感性皮肤",
		choiceE : "E.缺水性皮肤",
    },{
		question : "190.物理性脱毛有()。",
		correct : "BD",
		choiceA : "A.脱毛膏",
		choiceB : "B.脱毛蜡",
		choiceC : "C.脱毛霜",
		choiceD : "D.眉钳拔",
		choiceE : "E.脱毛液",
    },{
		question : "191.人体的毛发的长短粗细分为()。",
		correct : "ACD",
		choiceA : "A.短毛",
		choiceB : "B.鼻毛",
		choiceC : "C.毳毛",
		choiceD : "D.长毛",
		choiceE : "E.腋毛",
    },{
		question : "192.蜜粉又称为干粉,按其性能分为()。",
		correct : "BE",
		choiceA : "A.米白色蜜粉",
		choiceB : "B.透明色蜜粉",
		choiceC : "C.肉粉色蜜粉",
		choiceD : "D.土色蜜粉",
		choiceE : "E.有色蜜粉",
    },{
		question : "193.光影错视在适用于化妆时,阴影色可使物体的形()。",
		correct : "AC",
		choiceA : "A.显小",
		choiceB : "B.显高",
		choiceC : "C.显深",
		choiceD : "D.显浅",
		choiceE : "E.显宽",
    },{
		question : "194.根据脸形分类的特征,属于标准脸形的有()。",
		correct : "DE",
		choiceA : "A.方形",
		choiceB : "B.圆形",
		choiceC : "C.倒三角形",
		choiceD : "D.鹅蛋形",
		choiceE : "E.椭圆形",
    },{
		question : "195.常用于化妆的色彩分为()。",
		correct : "BCE",
		choiceA : "A.暖色",
		choiceB : "B.阴影色",
		choiceC : "C.提亮色",
		choiceD : "D.冷色",
		choiceE : "E.强调色",
    },{
		question : "196.下列色彩中,哪些颜色是化妆常用的阴影色()。",
		correct : "CE",
		choiceA : "A.紫色",
		choiceB : "B.绿色",
		choiceC : "C.褐色",
		choiceD : "D.土色",
		choiceE : "E.蓝色",
    },{
		question : "197.面部的凸面部位有()。",
		correct : "BE",
		choiceA : "A.枕骨",
		choiceB : "B.眉骨",
		choiceC : "C.犁骨",
		choiceD : "D.蝶骨",
		choiceE : "E.颧关节",
    },{
		question : "198.化妆时具有收敛作用的粉底色彩有()。",
		correct : "BC",
		choiceA : "A.白色",
		choiceB : "B.咖啡色",
		choiceC : "C.棕色",
		choiceD : "D.绿色",
		choiceE : "E.紫色",
    },{
		question : "199.化妆时用于修饰面部窄小的粉底色有()。",
		correct : "BE",
		choiceA : "A.浅咖啡",
		choiceB : "B.白色",
		choiceC : "C.蓝色",
		choiceD : "D.黄色",
		choiceE : "E.米色",
    },{
		question : "200.化妆时毛细血管浅,发红的皮肤应用()颜色来进行修饰。",
		correct : "BD",
		choiceA : "A.浅紫包",
		choiceB : "B.浅绿色",
		choiceC : "C.浅粉色",
		choiceD : "D.浅蓝色",
		choiceE : "E.肤色",
    },{
		question : "201较黑的皮肤在选择粉底时应选用()。",
		correct : "CE",
		choiceA : "A.白色",
		choiceB : "B.肤色",
		choiceC : "C.浅咖啡色",
		choiceD : "D.绿色",
		choiceE : "E.深土色",
    },{
		question : "202.缺油干性皮肤在选用护肤品时应选用()。",
		correct : "BD",
		choiceA : "A.乳液",
		choiceB : "B.冷霜",
		choiceC : "C.雪花膏",
		choiceD : "D.润肤霜",
		choiceE : "E.收缩水",
    },{
		question : "203.缺油干性皮肤在选用护肤品时应选用()。",
		correct : "AB",
		choiceA : "A.营养型洗面奶",
		choiceB : "B.弱碱性香皂",
		choiceC : "C.清爽型洗面奶",
		choiceD : "D.洁面啫喱",
		choiceE : "E.磨砂洗面奶",
    },{
		question : "204.油性皮肤在护肤中应选用()面膜。",
		correct : "CE",
		choiceA : "A.热膜",
		choiceB : "B.珍珠面膜",
		choiceC : "C.冷膜",
		choiceD : "D.美白面膜",
		choiceE : "E.叶绿素面膜",
    },{
		question : "205.在遇水调和后凝固很快,模体温度持续渗透的面模粉有()。",
		correct : "CD",
		choiceA : "A.软膜",
		choiceB : "B.漂白面膜",
		choiceC : "C.热模",
		choiceD : "D.冷模",
		choiceE : "E.啫喱面膜",
    },{
		question : "206.职业道德培训的目标是()。",
		correct : "ABD",
		choiceA : "A.牢固树立职业理想",
		choiceB : "B.培养劳动习惯",
		choiceC : "C.干一行、爱一行、专一行",
		choiceD : "D.培养职业良心",
		choiceE : "E.培养赚钱方法",
    },{
		question : "207.礼仪的内容有()。",
		correct : "ABCD",
		choiceA : "A.礼貌",
		choiceB : "B.礼节",
		choiceC : "C.仪表",
		choiceD : "D.仪式",
		choiceE : "E.风俗",
    },{
		question : "208.礼仪的原则有()。",
		correct : "ABCD",
		choiceA : "A.尊重的原则",
		choiceB : "B.遵守的原则",
		choiceC : "C.适度的原则",
		choiceD : "D.自律的原则",
		choiceE : "E.道德的原则",
    },{
		question : "209.礼仪的特点是()。",
		correct : "ABCD",
		choiceA : "A.共同性",
		choiceB : "B.统一性",
		choiceC : "C.继承发展性",
		choiceD : "D.差异性",
		choiceE : "E.平等性",
    },{
		question : "210.影响人际关系的几种行为有()。",
		correct : "ABCD",
		choiceA : "A.自我中心意识强",
		choiceB : "B.过分自卑、缺乏自信",
		choiceC : "C.性格孤僻",
		choiceD : "D.过虑",
		choiceE : "E.爱穿奇装异服",
    },{
		question : "211.细胞质是由()组成。",
		correct : "ABC",
		choiceA : "A.包含物",
		choiceB : "B.基质",
		choiceC : "C.细胞器",
		choiceD : "D.线粒体",
		choiceE : "E.纤维素",
    },{
		question : "212.大汗腺的分泌物含有()。",
		correct : "ABC",
		choiceA : "A.蛋白质",
		choiceB : "B.脂肪",
		choiceC : "C.糖类",
		choiceD : "D.无机盐",
		choiceE : "E.水",
    },{
		question : "213.素描作画的具体步骤是:()。",
		correct : "ABE",
		choiceA : "A.设计构图,确定轮廓",
		choiceB : "B.深入刻画,塑造形象",
		choiceC : "C.涂颜画色,调整比例",
		choiceD : "D.清除杂质,突出重点",
		choiceE : "E.调整统一,完美画面",
    },{
		question : "214.按摩的要求:()。",
		correct : "ACDE",
		choiceA : "A.按摩动作熟练,准确",
		choiceB : "B.按摩时间30~40分钟",
		choiceC : "C.按摩节奏要平稳",
		choiceD : "D.点穴准确,手法正确",
		choiceE : "E.正确的按摩频率",
    },{
		question : "215.常用面膜的分类:()等。",
		correct : "ABCD",
		choiceA : "A.硬模",
		choiceB : "B.软膜",
		choiceC : "C.膏状面膜",
		choiceD : "D.啫喱面膜",
		choiceE : "E.珍珠面膜",
    },{
		question : "216.敷面膜的目的:()。",
		correct : "ABCD",
		choiceA : "A.油性皮肤脱脂",
		choiceB : "B.粗大毛孔得到收敛",
		choiceC : "C.干枯皱褶皮肤恢复光泽",
		choiceD : "D.暗疮皮肤炎症得到抑制",
		choiceE : "E.角质层越来越薄",
    },{
		question : "217.美容师的语言要求()。",
		correct : "ACD",
		choiceA : "A.言辞文雅",
		choiceB : "B.能言善辩",
		choiceC : "C.语调亲切",
		choiceD : "D.声音悦耳",
		choiceE : "E.口齿伶俐",
    },{
		question : "218.美容院常用的消毒方法有()。",
		correct : "ABCD",
		choiceA : "A.紫外线消毒",
		choiceB : "B.来苏水消毒",
		choiceC : "C.煮沸消毒",
		choiceD : "D.酒精消毒",
		choiceE : "E.阳光曝晒",
    },{
		question : "219.细胞生长的基本条件是:()。",
		correct : "ABDE",
		choiceA : "A.适宜的温度",
		choiceB : "B.充足的营养物质",
		choiceC : "C.脂肪",
		choiceD : "D.氧气",
		choiceE : "E.水",
    },{
		question : "220.皮脂腺与汗腺分泌物混合,形成乳化皮脂膜,具有()功能。",
		correct : "ABDE",
		choiceA : "A.滋润皮肤",
		choiceB : "B.防止水分蒸发",
		choiceC : "C.调节体温",
		choiceD : "D.抑菌",
		choiceE : "E.杀菌",
    },{
		question : "221.皮肤测试仪使用注意事项()。",
		correct : "ABCD",
		choiceA : "A.测试前必须用湿棉片覆盖被测者眼部",
		choiceB : "B.测试时间最长不能超过2分钟",
		choiceC : "C.测试仪与皮肤距离不能近于15cm",
		choiceD : "D.有色斑的肌肤不宜使用",
		choiceE : "E.测试时间最长不能超过3分钟",
    },{
		question : "222.()皮肤不宜使用奥桑喷雾。",
		correct : "ACE",
		choiceA : "A.色斑皮肤",
		choiceB : "B.中性皮肤",
		choiceC : "C.敏感皮肤",
		choiceD : "D.油性皮肤",
		choiceE : "E.微细血管破裂皮肤",
    },{
		question : "223.日妆的特点()。",
		correct : "AC",
		choiceA : "A.清淡典雅",
		choiceB : "B.艳丽",
		choiceC : "C.自然协调",
		choiceD : "D.浓艳",
		choiceE : "E.华贵",
    },{
		question : "224.化妆时,需掌握面部的凹凸结构,凹面包括()。",
		correct : "CD",
		choiceA : "A.眉骨",
		choiceB : "B.颧骨",
		choiceC : "C.人中沟",
		choiceD : "D.鼻染两侧",
		choiceE : "E.下颏",
    },{
		question : "225.皮肤分为三层,由外向内可分为:()。",
		correct : "ACE",
		choiceA : "A.表皮",
		choiceB : "B.有棘层",
		choiceC : "C.真皮",
		choiceD : "D.基底层",
		choiceE : "E.皮下组织",
    },{
		question : "226.皮肤的附属器主要是()。",
		correct : "CE",
		choiceA : "A.表皮突",
		choiceB : "B.毛乳头",
		choiceC : "C.毛发",
		choiceD : "D.立毛肌",
		choiceE : "E.汗腺",
    },{
		question : "227.毛发的生长期分三个阶段:()。",
		correct : "BDE",
		choiceA : "A.萌发期",
		choiceB : "B.生长期",
		choiceC : "C.发育期",
		choiceD : "D.休止期",
		choiceE : "E.脱落期",
    },{
		question : "228.中性皮肤的特征:()。",
		correct : "ABE",
		choiceA : "A.青春发育期间的少女",
		choiceB : "B.对外界刺激不敏感",
		choiceC : "C.皮肤比较干",
		choiceD : "D.皮脂分泌量少",
		choiceE : "E.皮肤红润细腻",
    },{
		question : "229.敏感性皮肤的特征。",
		correct : "ABDE",
		choiceA : "A.对外界刺激很敏感",
		choiceB : "B.皮肤较薄",
		choiceC : "C.皮肤肤色较深",
		choiceD : "D.局部红肿",
		choiceE : "E.容易生细小细纹",
    },{
		question : "230.下眼线的描画要浅淡,一般描画到从外眼角起的()。",
		correct : "AC",
		choiceA : "A.1/3部位",
		choiceB : "B.2/3部",
		choiceC : "C.1/2部",
		choiceD : "D.1/4部位",
		choiceE : "E.3/4部位",
    },{
		question : "231.化妆与素描绘画有许多相似之处,其中最主要的是利用色彩的()强调面部凹凸层次。",
		correct : "AC",
		choiceA : "A.明暗",
		choiceB : "B.色彩的颜色",
		choiceC : "C.冷暖",
		choiceD : "D.比例",
		choiceE : "E.轮廓",
    },{
		question : "232.修届的方法大致分为:()。",
		correct : "ACD",
		choiceA : "A.拔眉法",
		choiceB : "B.刮眉法",
		choiceC : "C.剃眉法",
		choiceD : "D.剪眉法",
		choiceE : "E.烧眉法",
    },{
		question : "233.眼部化妆可分为三个步骤:()。",
		correct : "ACE",
		choiceA : "A.眼影晕染",
		choiceB : "B.眼形的判断",
		choiceC : "C.画睫毛线",
		choiceD : "D.选眼影色",
		choiceE : "E.涂睫毛膏",
    },{
		question : "234.化学脱毛常用的化学脱毛剂主要有:()。",
		correct : "BCD",
		choiceA : "A.脱毛水",
		choiceB : "B.脱毛液",
		choiceC : "C.脱毛膏",
		choiceD : "D.脱毛霜",
		choiceE : "E.去毛膏",
    },{
		question : "235.素描的表现方法,归纳起来可分为()。",
		correct : "ABE",
		choiceA : "A.用线的表现方法",
		choiceB : "B.用明暗光影的表现方法",
		choiceC : "C.经营构图,确定轮廓",
		choiceD : "D.深入刻画,塑造形象",
		choiceE : "E.用线与面结合的表现方法",
    },{
		question : "236.()皮肤不可进行脱屑。",
		correct : "CE",
		choiceA : "A.干性",
		choiceB : "B.油性",
		choiceC : "C.严重暗疮",
		choiceD : "D.中性",
		choiceE : "E.严重过敏性皮肤",
    },{
		question : "237.阴影色是偏冷或含混的色彩,常用的阴影色有()。",
		correct : "BCE",
		choiceA : "A.浅蓝色",
		choiceB : "B.棕色",
		choiceC : "C.灰色",
		choiceD : "D.银灰色",
		choiceE : "E.褐色",
    },{
		question : "238.提亮色是偏暖或明度高的色彩,常用的提亮色有()。",
		correct : "ABD",
		choiceA : "A.白色",
		choiceB : "B.米色",
		choiceC : "C.蓝色",
		choiceD : "D.明黄色",
		choiceE : "E.紫灰色",
    },{
		question : "239.按摩能排除积于皮下多余水分及()。",
		correct : "ACDE",
		choiceA : "A.消除肿胀",
		choiceB : "B.消灭细菌",
		choiceC : "C.延缓皮肤衰老",
		choiceD : "D.令人精神焕发",
		choiceE : "E.促进血液循环",
    },{
		question : "240.皮肤角质细胞过厚时皮肤会显得()。",
		correct : "BCE",
		choiceA : "A.细嫩",
		choiceB : "B.粗糙",
		choiceC : "C.无光泽",
		choiceD : "D.光滑",
		choiceE : "E.发黄",
    },{
		question : "241.干性皮肤白皙、细嫩、毛孔细小不明显,容易()。",
		correct : "BC",
		choiceA : "A.长暗疮",
		choiceB : "B.过敏",
		choiceC : "C.生斑",
		choiceD : "D.开裂",
		choiceE : "E.出油",
    },{
		question : "242.职业道德具有从属性()以及成人性的特点。",
		correct : "ABCD",
		choiceA : "A.职业性",
		choiceB : "B.稳定性",
		choiceC : "C.继承性",
		choiceD : "D.适应性",
		choiceE : "E.道德性",
    },{
		question : "243.美容师的职业道德是指美容师在美容工作中所应遵循的与其职业活动相适应的()。",
		correct : "BC",
		choiceA : "A.规则",
		choiceB : "B.行为规范",
		choiceC : "C.准则",
		choiceD : "D.标准",
		choiceE : "E.方法",
    },{
		question : "244.礼仪的原则包含尊重的原则、遵守的原则()。",
		correct : "AB",
		choiceA : "A.适度的原则",
		choiceB : "B.自律的原则",
		choiceC : "C.自觉的原则",
		choiceD : "D.共同的原则",
		choiceE : "E.道德的原则",
    },{
		question : "245.真皮中的纤维结缔组织是由()组成的。",
		correct : "ABD",
		choiceA : "A.弹力纤维",
		choiceB : "B.胶原纤维",
		choiceC : "C.神经纤维",
		choiceD : "D.网状纤维",
		choiceE : "E.颗粒纤维",
    },{
		question : "246.化学性脱屑方法适合()皮肤。",
		correct : "BCD",
		choiceA : "A.油性",
		choiceB : "B.干性",
		choiceC : "C.衰老性",
		choiceD : "D.敏感性",
		choiceE : "E.混合性",
    },{
		question : "247.美容院吸引留住顾客要做好的工作:()。",
		correct : "ABC",
		choiceA : "A.店面形象",
		choiceB : "B.接待服务",
		choiceC : "C.技术水平",
		choiceD : "D.漂亮美容师",
		choiceE : "E.口才好的美容师",
    },{
		question : "248.引导顾客的基本要领是()。",
		correct : "ABD",
		choiceA : "A.清楚",
		choiceB : "B.适当",
		choiceC : "C.主动",
		choiceD : "D.让顾客感觉舒服",
		choiceE : "E.认真",
    },{
		question : "249.()是我们进行职业道德教育中的一句口号,也应成为劳动者的自觉行动。",
		correct : "ACD",
		choiceA : "A.干一行",
		choiceB : "B.言一行",
		choiceC : "C.爱一行",
		choiceD : "D.专一行",
		choiceE : "E.丢一行",
    },{
		question : "250.啫喱面膜可分为()。",
		correct : "CD",
		choiceA : "A.膏状型",
		choiceB : "B.液体型",
		choiceC : "C.可干型",
		choiceD : "D.保湿型",
		choiceE : "E.半干性",
    },{
		question : "251.()经常受摩擦,皮肤的角质层比较厚。",
		correct : "CD",
		choiceA : "A.脸部",
		choiceB : "B.肩膀",
		choiceC : "C.手掌",
		choiceD : "D.足底",
		choiceE : "E.臂部",
    },{
		question : "252.三庭是指把脸分为三个等份,即:(),各占脸长的1/3。",
		correct : "BCD",
		choiceA : "A.从前额到鼻底",
		choiceB : "B.从前额发迹线至眉骨",
		choiceC : "C.从眉骨至鼻底",
		choiceD : "D.从鼻底至下颏",
		choiceE : "E.从下颌到眼睛",
    },{
		question : "253.化妆中最主要是利用色彩的()来强调面部凹凸层次。",
		correct : "CD",
		choiceA : "A.比例",
		choiceB : "B.深浅",
		choiceC : "C.明暗",
		choiceD : "D.冷暖",
		choiceE : "E.浓淡",
    },{
		question : "254.睫毛线有调整眼睛()的作用。",
		correct : "AB",
		choiceA : "A.轮廓",
		choiceB : "B.两眼间距",
		choiceC : "C.大小",
		choiceD : "D.凹凸结构",
		choiceE : "E.高低",
    },{
		question : "255.()是强调和调整眼睛轮廓的修饰化妆品。",
		correct : "DE",
		choiceA : "A.眼部啫喱",
		choiceB : "B.眉毛",
		choiceC : "C.眼霜",
		choiceD : "D.水溶性眼线粉",
		choiceE : "E.眼线笔",
    },{
		question : "256.指甲修理的形状一般有()和尖形四种。",
		correct : "BCD",
		choiceA : "A.长方形",
		choiceB : "B.椭圆形",
		choiceC : "C.方形",
		choiceD : "D.自然形",
		choiceE : "E.正方形",
    },{
		question : "257.按摩的作用有()。",
		correct : "ABC",
		choiceA : "A.增进血液循环,补充营养",
		choiceB : "B.增加氧气的输送",
		choiceC : "C.帮助皮肤排泄",
		choiceD : "D.抑制细菌繁殖",
		choiceE : "E.消除炎症",
    },{
		question : "258.按摩的注意事项有()。",
		correct : "ACD",
		choiceA : "A.按摩过程中给予足够的按摩膏",
		choiceB : "B.按摩前先脱屑",
		choiceC : "C.在蒸喷后按摩",
		choiceD : "D.清洁后按摩",
		choiceE : "E.先导入精华素",
    },{
		question : "259.日妆的妆色要求()。",
		correct : "BC",
		choiceA : "A.艳而不俗",
		choiceB : "B.清淡典雅",
		choiceC : "C.自然协调",
		choiceD : "D.色彩单一",
		choiceE : "E.不留痕迹",
    },{
		question : "260.物理性脱毛有()。",
		correct : "BCD",
		choiceA : "A.脱毛霜",
		choiceB : "B.蜡脱毛",
		choiceC : "C.线脱毛",
		choiceD : "D.刀剃",
		choiceE : "E.脱毛液",
    },{
		question : "261.下列属于手部的穴位有()。",
		correct : "BCD",
		choiceA : "A.大椎穴",
		choiceB : "B.合谷穴",
		choiceC : "C.劳宫穴",
		choiceD : "D.中诸穴",
		choiceE : "E.定喘穴",
    },{
		question : "262.美容师的着装应遵循以下原则()。",
		correct : "BC",
		choiceA : "A.实用性",
		choiceB : "B.整体性",
		choiceC : "C.个性",
		choiceD : "D.时代性",
		choiceE : "E.随意性",
    },{
		question : "263.美容师行走时不宜():。",
		correct : "AB",
		choiceA : "A.扭动臀部",
		choiceB : "B.左右招摆",
		choiceC : "C.脚步轻盈",
		choiceD : "D.身体挺直",
		choiceE : "E.头微抬",
    },{
		question : "264.美容师与顾客交谈时,切忌谈的话题是()。",
		correct : "ABC",
		choiceA : "A.自身的私事",
		choiceB : "B.顾客的隐私",
		choiceC : "C.美容院内的收支",
		choiceD : "D.潮流时尚",
		choiceE : "E.化妆技巧",
    },{
		question : "265.影响人际关系的行为有()。",
		correct : "ABC",
		choiceA : "A.自卑",
		choiceB : "B.过虑",
		choiceC : "C.自我",
		choiceD : "D.自信",
		choiceE : "E.节制",
    },{
		question : "266.中性皮肤的特征有()。",
		correct : "ABCD",
		choiceA : "A.厚薄适中",
		choiceB : "B.对外界刺激不敏感",
		choiceC : "C.红润细腻",
		choiceD : "D.富有弹性",
		choiceE : "E.毛细血管表浅",
    },{
		question : "267.油性皮肤的特征有()。",
		correct : "ABC",
		choiceA : "A.油脂光亮",
		choiceB : "B.易生粉刺痤疮",
		choiceC : "C.对外界刺激不敏感",
		choiceD : "D.易生皱纹",
		choiceE : "E.毛细血管表浅",
    },{
		question : "268.干性皮肤的特征有()。",
		correct : "BCD",
		choiceA : "A.肤色较深",
		choiceB : "B.易长红斑",
		choiceC : "C.毛细血管较明显",
		choiceD : "D.易干燥起细小皱纹",
		choiceE : "E.红润细腻",
    },{
		question : "269.按摩的要求有()。",
		correct : "ABCD",
		choiceA : "A.按摩节奏要平稳",
		choiceB : "B.动作要连贯",
		choiceC : "C.用力要轻",
		choiceD : "D.点穴位置准确",
		choiceE : "E.不拉伤皮肤",
		
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
	if (runningQuestion<=lastQuestion) {
    let q = questions[runningQuestion];
 		answerdiv.style.display = "none";
		nextdiv.style.display = "block";
	document.getElementById("jumpto").value="";		
		choiceA.style.borderWidth = "1px";choiceA.style.borderColor = "grey";choiceA.style.backgroundColor = "white";
		choiceB.style.borderWidth = "1px";choiceB.style.borderColor = "grey";choiceB.style.backgroundColor = "white";
		choiceC.style.borderWidth = "1px";choiceC.style.borderColor = "grey";choiceC.style.backgroundColor = "white";
		choiceD.style.borderWidth = "1px";choiceD.style.borderColor = "grey";choiceD.style.backgroundColor = "white";
		choiceE.style.borderWidth = "1px";choiceE.style.borderColor = "grey";choiceE.style.backgroundColor = "white";		
		choiceA.onclick = function() {toggle("A")};
		choiceB.onclick = function() {toggle("B")};
		choiceC.onclick = function() {toggle("C")};
		choiceD.onclick = function() {toggle("D")};
		choiceE.onclick = function() {toggle("E")};
    question.innerHTML = "<p>"+ q.question +"</p>";
//    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;	
	}
	else {
        scoreRender();
			
	}	
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
   // renderProgress();
    renderCounter();
   // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
		counter.innerHTML = score+"/"+questions.length;

}

// checkAnwer

function checkAnswer(answer){
	//correctans=questions[runningQuestion].correct;
	//alert(correctans.length);
	//for(let i = 0; i <= correctans.length-1; i++){
	//alert(correctans[i]);
	//}
	myans="";
	if (choiceA.style.backgroundColor=="lime"){myans=myans+"A";}
	if (choiceB.style.backgroundColor=="lime"){myans=myans+"B";}
	if (choiceC.style.backgroundColor=="lime"){myans=myans+"C";}
	if (choiceD.style.backgroundColor=="lime"){myans=myans+"D";}
	if (choiceE.style.backgroundColor=="lime"){myans=myans+"E";}
	//alert(myans);
    if( myans == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        //answerIsCorrect();
		counter.innerHTML = score+"/"+questions.length;
		count = 0;
		choiceA.onclick = function() {return false;};
		choiceB.onclick = function() {return false;};
		choiceC.onclick = function() {return false;};
		choiceD.onclick = function() {return false;};
		choiceE.onclick = function() {return false;};
		nextdiv.style.display = "none";		
		answerdiv.style.display = "block";
		answerdiv.style.backgroundColor = "lime";
		answerdiv.style.color = "black";
		answerdiv.innerHTML="✔ 正確!<br />點擊下一題";
		
		/*
		if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
		}else{
        // end the quiz and show the score
        //clearInterval(TIMER);
        scoreRender();
		}
		*/
	}else{
        // answer is wrong
        // change progress color to red
		if (questions[runningQuestion].correct.indexOf('A') > -1 ) {choiceA.style.borderWidth = "thick";choiceA.style.borderColor = "red";}
		if (questions[runningQuestion].correct.indexOf('B') > -1 ) {choiceB.style.borderWidth = "thick";choiceB.style.borderColor = "red";}
		if (questions[runningQuestion].correct.indexOf('C') > -1 ) {choiceC.style.borderWidth = "thick";choiceC.style.borderColor = "red";}
		if (questions[runningQuestion].correct.indexOf('D') > -1 ) {choiceD.style.borderWidth = "thick";choiceD.style.borderColor = "red";}
		if (questions[runningQuestion].correct.indexOf('E') > -1 ) {choiceE.style.borderWidth = "thick";choiceE.style.borderColor = "red";}
			
		choiceA.onclick = function() {return false;};
		choiceB.onclick = function() {return false;};
		choiceC.onclick = function() {return false;};
		choiceD.onclick = function() {return false;};
		choiceE.onclick = function() {return false;};
		nextdiv.style.display = "none";		
		answerdiv.style.display = "block";
		answerdiv.style.backgroundColor = "white";
		answerdiv.style.color = "red";		
		answerdiv.style.borderColor = "red";
		answerdiv.innerHTML="X 錯誤, 答案: "+questions[runningQuestion].correct+"<br />點擊下一題";


        //answerIsWrong();
    }

}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    //document.getElementById(runningQuestion).style.backgroundColor = "#f00";

	answer.innerHTML="答案:"+questions[runningQuestion].correct;
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

function jumptoq() {
	//alert(document.getElementById("jumpto").value);
	orunningQuestion=runningQuestion;
	runningQuestion = document.getElementById("jumpto").value -1;
	//alert(runningQuestion);
	if ( (isNaN(runningQuestion)) || (orunningQuestion>=runningQuestion) || (runningQuestion>= questions.length)) {document.getElementById("jumpto").value="";return false;}
	document.getElementById("jumpto").value="";
	renderQuestion();
	
}	
function toggle(c) {
	//alert(c);
	chosen=document.getElementById(c);
	chosencolor=chosen.style.backgroundColor;
	if (chosencolor=="white") {chosen.style.backgroundColor="lime";}
	else {chosen.style.backgroundColor="white";}
	
}	





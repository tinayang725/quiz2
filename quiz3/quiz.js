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
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1.美容师工作时的坐姿是上体保持站立时的姿态。",
        correct : "Y",

    },{
		question : "2.严肃认真对待工作就是美容师的职业道德。",
        correct : "N",
	},{
		question : "3.美容师的专业形象是漂亮有风度。",
		correct : "N",
    },{
		question : "4.美容师对所有的顾客都要有友善、礼貌、热情。",
		correct : "Y",
    },{
		question : "5.留长发的美容师发丝宣自然飘逸,江作时能显出特有的气质。",
		correct : "N",
    },{
		question : "6.美容师上岗时,妆要化得浓艳些,这样具有影响力和说服力。",
		correct : "N",
    },{
		question : "7.当阳光增强时,皮肤中的黑色素细胞增多,皮肤颜色加深。",
		correct : "N",
    },{
		question : "8.皮肤呈弱酸性时,有一定抑菌、杀菌的作用。",
		correct : "Y",
    },{
		question : "9.皮脂腺分泌功能主要受雄性激素和肾上腺皮质激素的调节。",
		correct : "Y",
    },{
		question : "10.卸妆时,化妆水可以作为洁肤水直接用手涂抹于面部,便可将面部皮肤清洁干净。",
		correct : "N",
    },{
		question : "11.化妆水可以补充皮肤的水分,而且可以调整皮肤表面的pH值。",
		correct : "Y",
    },{
		question : "12.清洁霜是以矿物油为主体的清洁用品,适用于干性皮肤。",
		correct : "N",
    },{
		question : "13.按摩乳含水量较多,适用于油性皮肤和缺水性皮肤。",
		correct : "Y",
    },{
		question : "14.使用粉类化妆品,可以使皮肤显得细腻、滋润。",
		correct : "N",
    },{
		question : "15.雪花膏含水量较高,约占膏体的70%。",
		correct : "Y",
    },{
		question : "16.倒热模有助于敏感皮肤的调理。",
		correct : "N",
    },{
		question : "17.软膜的质地细软,对皮肤没有压迫感。",
		correct : "Y",
    },{
		question : "18.在软膜粉中加入叶绿素成分,具有清凉解毒作用,适用于油性、粉刺、暗疮皮肤。",
		correct : "Y",
    },{
		question : "19.选择化妆品首先应了解化妆品的价格。",
		correct : "N",
    },{
		question : "20.化妆时,在皮肤上涂抹比自己肤色白或嫩粉色泽的粉底色,最能表现东方女性柔美的皮肤质感。",
		correct : "N",
    },{
		question : "21.粉扑蘸取蜜粉后,应先相对揉搓后,再扑粉到脸上,这样才能使蜜粉扑得均匀。",
		correct : "Y",
    },{
		question : "22.用睫毛夹夹卷睫毛时,应在睫毛根部固定的时间长一些,才能使其产生自然上翘的美感。",
		correct : "N",
    },{
		question : "23.当面形过于庞大时应选择深颜色的粉底化妆,使脸形明显显小。",
		correct : "N",
    },{
		question : "24.涂敷粉底的化妆海绵,在使用时要保持清洁干燥。",
		correct : "N",
    },{
		question : "25.肤色偏红可用紫色修颜液掩饰,肤色偏黄用绿色修颜液掩饰。",
		correct : "N",
    },{
		question : "26.工作时为了充分利用时间丰富自己的知识面,在没有顾客的情况下,可以看杂志、书报。",
		correct : "N",
    },{
		question : "27.美容师上岗时着装要讲究名牌、高档,这样才显得有风度。",
		correct : "N",
    },{
		question : "28.蒸汽消毒是美容用品最好的消毒方法。",
		correct : "N",
    },{
		question : "29.美发室和美容室同在一室,可以节约使用面积,有利于增加企业效益。",
		correct : "N",
    },{
		question : "30.煮沸消毒法是消毒毛巾的最佳方法。",
		correct : "Y",
    },{
		question : "31.暗疮发炎的皮肤不宜在炎症部位进行磨砂脱屑。",
		correct : "Y",
    },{
		question : "32.暗疮发炎的皮肤用磨砂膏脱屑时动作要轻。",
		correct : "N",
    },{
		question : "33.洁肤用品应借助工具取放,不可直接用手从容器中抹取高。",
		correct : "Y",
    },{
		question : "34.奥桑蒸汽会使严重敏感皮肤产生过敏现象。",
		correct : "Y",
    },{
		question : "35.表皮内有丰富的神经末梢。",
		correct : "Y",
    },{
		question : "36.色彩的三原色是红、黄、蓝。",
		correct : "Y",
    },{
		question : "37.按摩的方向与皱纹垂直。",
		correct : "Y",
    },{
		question : "38.头发干燥是由皮脂腺分泌油脂多决定的。",
		correct : "Y",
    },{
		question : "39.美容透视灯(活特氏灯)观察油性皮肤,呈现橙黄色荧光。",
		correct : "N",
    },{
		question : "40.标准的唇峰应在嘴唇中央至嘴角的1/3处转折。",
		correct : "Y",
    },{
		question : "41美容师工作前后要用95%浓度的酒精棉球消毒双手。",
		correct : "N",
    },{
		question : "42.干性皮肤使用奥桑喷雾的时间可长一些。",
		correct : "N",
    },{
		question : "43.“自然真实”的化妆原则只适用于日妆,不适用于晚妆。",
		correct : "N",
    },{
		question : "44.色带光谱上的红、橙、黄、青、蓝、紫、白等均属于有色彩系。",
		correct : "N",
    },{
		question : "45.按摩方向与肌肉走向一致。",
		correct : "Y",
    },{
		question : "46.唇膏色与眼影色、腮红色及服饰色彩要协调统一。",
		correct : "Y",
    },{
		question : "47.涂脱毛药时,逆着毛发生长的方向,薄而均匀地涂抹。",
		correct : "N",
    },{
		question : "48.为了避免口腔异味,美容师工作时最好嚼口香糖。",
		correct : "N",
    },{
		question : "49.当在工作中,顾客对员工有不轨行为时,应立即报警。",
		correct : "N",
    },{
		question : "50.为了补充皮肤水分,蒸脸时间越长越好。",
		correct : "N",
    },{
		question : "51.当皮肤有红血丝过敏时,最好做按摩调节一下。",
		correct : "N",
    },{
		question : "52.表皮内有丰富的神经末梢,它可以帮助我们感知外界的事物。",
		correct : "Y",
    },{
		question : "53.头发的生长分三个阶段:生长期、休止期和脱落期。",
		correct : "Y",
    },{
		question : "54.奥桑喷雾仪的玻璃杯中倒入的必须是蒸馏水。水位不能高于玻璃杯的红色标线。",
		correct : "Y",
    },{
		question : "55.当代审美观点认为女子的脸形以椭圆形为标准脸形。",
		correct : "Y",
    },{
		question : "56.较黑的皮肤应选择浅色粉底,使皮肤变白。",
		correct : "N",
    },{
		question : "57.面部的凹凸层次主要取决于面颅骨骨骼的大小和皮肤脂肪层的厚薄。",
		correct : "Y",
    },{
		question : "58.用睫毛膏刷下睫毛时,睫毛刷应从睫毛梢部刷向睫毛根部。",
		correct : "N",
    },{
		question : "59.清洁霜的主要成分是矿物油。",
		correct : "N",
    },{
		question : "60.色彩的三个基本要素是色相、明度和纯度。",
		correct : "Y",
    },{
		question : "61.涂敷粉底的化妆海绵,在使用时要保持清洁干燥。",
		correct : "N",
    },{
		question : "62.过氧化氢消毒是消毒毛巾的最佳方法。",
		correct : "N",
    },{
		question : "63.干性皮肤对外界刺激一般都不敏感。",
		correct : "N",
    },{
		question : "64.色相也称色别,是色与色之间的差别。",
		correct : "Y",
    },{
		question : "65.除唇红及指甲等处,小汗腺广泛分布于全身。",
		correct : "Y",
    },{
		question : "66.角质层的厚薄对皮肤的吸收能力有一定影响。",
		correct : "Y",
    },{
		question : "67,皮肤测试仪主要由紫光管和放大镜构成。",
		correct : "Y",
    },{
		question : "68.操作皮肤测试仪时面部与测试仪间隔20~35cm。",
		correct : "N",
    },{
		question : "69.操作皮肤测试仪的时间最长不能超过5分钟。",
		correct : "N",
    },{
		question : "70.在皮肤测试仪紫光管照射下,皮肤呈青白色是健康的中性皮肤。",
		correct : "Y",
    },{
		question : "71.蒸汽发生器由玻璃烧杯和电器元件组成,其原理与电水壶相似。",
		correct : "Y",
    },{
		question : "72.中性皮肤在使用奥桑喷雾仪时喷口与面部距离为15~25cm。",
		correct : "N",
    },{
		question : "73.干性皮肤在使用奥桑喷雾仪时喷口与面部距离为30~35cm。",
		correct : "Y",
    },{
		question : "74.油性皮肤在使用奥桑喷雾仪时喷口与面部距离为25~30cm。",
		correct : "N",
    },{
		question : "75.中性皮肤在使用奥桑喷雾仪时,所应用时间为8-10分钟。",
		correct : "N",
    },{
		question : "76.油性皮肤在使用奥桑喷雾仪时,所应用时间为5~8分钟。",
		correct : "Y",
    },{
		question : "77.干性皮肤在使用奥桑喷雾仪时,所应用时间为3分钟。",
		correct : "Y",
    },{
		question : "78.奥桑喷雾仪要使用自来水。",
		correct : "N",
    },{
		question : "79.奥桑喷雾仪每周要清洗四次玻璃烧杯。",
		correct : "N",
    },{
		question : "80.顾客只要看美容院位置是否方便,即可选择作为自己固定的美容院场所。",
		correct : "N",
    },{
		question : "81.美容院的接待柜台是顾客进店后接受服务的第一场所。",
		correct : "Y",
    },{
		question : "82.在迎送服务中,当顾客离店时要注意观察顾客的神情,了解顾客的满意程度。",
		correct : "Y",
    },{
		question : "83手势在人际交往中能起到很重要的作用。",
		correct : "N",
    },{
		question : "84.目光被称之为最有表现力的“体态语言”。",
		correct : "Y",
    },{
		question : "85.笑容是美容师面部表情的核心。",
		correct : "Y",
    },{
		question : "86.引导的基本要领即清楚、适当、让顾客感觉舒服。",
		correct : "Y",
    },{
		question : "87.美容师引导顾客过程中,引导的手势及动作是体现美容师修养的一个环节。",
		correct : "Y",
    },{
		question : "88.美容师引导的语言与迎送的语言要求不一样,但内容相同。",
		correct : "N",
    },{
		question : "89.电话形象是可以塑造的。",
		correct : "Y",
    },{
		question : "90.接听电话时,铃声响四声才应当拿起,这是一种礼貌。",
		correct : "N",
    },{
		question : "91.接听电话时,拿起电话斯筒应先说“找谁”再报清美容院名称。",
		correct : "N",
    },{
		question : "92.顾客进美容院后,美容师的询问是美容师与顾客沟通的极好机会。",
		correct : "Y",
    },{
		question : "93.美容师询问顾客时,碰到与顾客意见不一致时,应直说“你不懂“或“你不知道“。",
		correct : "N",
    },{
		question : "94.色彩的三要素是色相、冷暖和明度图。",
		correct : "N",
    },{
		question : "95.倒硬模时,为防止模粉入眼睛及口中,必须用棉片将两处盖住。",
		correct : "Y",
    },{
		question : "96.红脸膛的皮肤宜选用淡绿色粉底修饰。",
		correct : "Y",
    },{
		question : "97.油性皮肤对外界刺激较敏感。",
		correct : "N",
    },{
		question : "98.干性缺油皮肤的特点是干燥不润泽,皱纹明显、皮肤松弛缺乏弹性。",
		correct : "N",
    },{
		question : "99.表皮内有丰富的神经末梢,它可以帮助我们感知外界的事物。",
		correct : "Y",
    },{
		question : "100.化妆时,较黑的皮肤应选择浅色粉底,使皮肤变白。",
		correct : "N",
    },{
		question : "101.标准的唇峰应在嘴唇中央至嘴角的2/3处转折。",
		correct : "N",
    },{
		question : "102.美容师在站立工作时,应尽量以脚跟承受体重。",
		correct : "N",
    },{
		question : "103.油性皮肤可选用柠檬洗面奶清洁皮肤。",
		correct : "Y",
    },{
		question : "104.润肤霜pH值一般在 4 ~ 6.5 之间。",
		correct : "Y",
    },{
		question : "105.油性皮肤对外界刺激不敏感。",
		correct : "Y",
    },{
		question : "106.干性缺水皮肤的特点是干燥不润泽、皱纹明显,皮肤松弛缺乏弹性。",
		correct : "Y",
    },{
		question : "107.冷模刺激小,主要适用于敏感性皮肤。",
		correct : "N",
    },{
		question : "108.选择化妆品时应先了解化妆品的保存期限。",
		correct : "N",
    },{
		question : "109.洗面奶可以使皮肤滋润,清除表皮坏死的角质层细胞。",
		correct : "N",
    },{
		question : "110.对于色斑皮肤进行奥桑喷雾,时间可略长。",
		correct : "N",
    },{
		question : "111.化淡妆时,偏黑的皮肤宜选用浅色粉底。",
		correct : "N",
    },{
		question : "112.人体全身皮肤的厚度是一样的。",
		correct : "N",
    },{
		question : "113.用于皮肤的常用治疗类化妆品有祛斑霜、粉刺露、防哂霜、抑汗霜等。",
		correct : "N",
    },{
		question : "114.各种颜色在不同的光源下会产生不同的效果。",
		correct : "Y",
    },{
		question : "115.亚洲人的眉峰最佳转折点在眼睛平视时黑眼球后方。",
		correct : "Y",
    },{
		question : "116.做面部按摩的方向应与肌肉走向一致。",
		correct : "Y",
    },{
		question : "117.倒热膜有助于色斑皮肤的调理。",
		correct : "Y",
    },{
		question : "118.消毒柜消毒是消毒毛巾的最佳方法。",
		correct : "N",
    },{
		question : "119.严重敏感的皮肤,用磨砂膏进行脱屑时动作要轻。",
		correct : "N",
    },{
		question : "120.皮肤发黄者在化妆时应先用绿色修颜液修饰,再用和肤色接近的粉底色打底。",
		correct : "N",
    },{
		question : "121.中性皮肤对外界刺激不敏感。",
		correct : "Y",
    },{
		question : "122.人体除唇红及指甲等处,大汗腺分布全身。",
		correct : "N",
    },{
		question : "123.角质层的厚薄对皮肤的肤色有一定的影响。",
		correct : "Y",
    },{
		question : "124.冷模有助于敏感皮肤的调理。",
		correct : "Y",
    },{
		question : "125.色彩的三间色是橙、绿、紫。",
		correct : "Y",
    },{
		question : "126.奥桑喷雾仪使用时加水应尽量多加些,最低水位不能低于红色标线。",
		correct : "N",
    },{
		question : "127.防晒霜的主要成分是矿物油。",
		correct : "N",
    },{
		question : "128.由于角质层堆积过厚会使皮肤缺乏光泽,所以应每周做一次皮肤脱屑。",
		correct : "N",
    },{
		question : "129.干性皮肤应选择收敛性化妆水,可以舒展细碎皱纹,使皮肤绷紧。",
		correct : "N",
    },{
		question : "130.使用皮肤测试仪,眼晴可以不盖棉片,但是皮肤必须清洁。",
		correct : "N",
    },{
		question : "131.测试仪与被测试者面部距离不能近于15cm。",
		correct : "Y",
    },{
		question : "132.色斑皮肤、敏感皮肤、微细血管破裂的皮肤不宜做奥桑喷雾。",
		correct : "Y",
    },{
		question : "133.干性皮肤,蒸汽时喷口与面部距离为30-35cm, 奥桑喷雾应用时间为3分钟。",
		correct : "Y",
    },{
		question : "134.暗疮皮肤,蒸汽时喷口与面部距离为20-25cm, 奥桑喷雾应用时间为8~10分钟。",
		correct : "Y",
    },{
		question : "135.奥桑喷雾仪由蒸汽发生器和奥氧灯构成。",
		correct : "Y",
    },{
		question : "136.使用奥桑喷雾仪时,先开普通蒸汽开关,当普通蒸汽喷驾产生后,再按下绿色离子开关,使其产生奥桑蒸汽。",
		correct : "Y",
    },{
		question : "137.微细血管破裂的皮肤,喷雾时喷口与面部距离为25-30cm, 普通蒸汽时间为 5~8 分钟。",
		correct : "N",
    },{
		question : "138.中性皮肤,喷雾时喷口与面部距离为25-30cm, 奥桑应用时间为3~5分钟。",
		correct : "Y",
    },{
		question : "139.用皮肤测试仪测试,在放大镜下显示橙黄色为粉刺皮脂部位。",
		correct : "Y",
    },{
		question : "140.用皮肤测试仪测试,在放大镜下显示淡黄色为油性皮肤。",
		correct : "N",
    },{
		question : "141.用皮肤测试仪测试,在放大镜下显示青黄色为干性皮肤。",
		correct : "N",
    },{
		question : "142.蜜粉的作用:固定粉底和定妆,减少皮肤油光感,使妆面不易脱妆。",
		correct : "Y",
    },{
		question : "143.眼影的作用:可加强睫毛的浓密度,强调眼部的轮廓,修饰眼形。",
		correct : "N",
    },{
		question : "144.圆形脸面部肌肉饱满,两个额角与两个下颌角比较宽,呈等宽状态。",
		correct : "N",
    },{
		question : "145.面部的凸面包括: 额、眉骨、鼻梁、颧骨、颧结节、下颚、额结节、下额骨等。",
		correct : "Y",
    },{
		question : "146.阴影色与亮色可界线明显,凹凸感不明显,过渡要自然。",
		correct : "N",
    },{
		question : "147.腮红的晕染要显得中心色调深,而周围越来越浅与肤色自然衔接。",
		correct : "Y",
    },{
		question : "148.日妆也称为淡妆,用于一般人的日常生活和工作。",
		correct : "Y",
    },{
		question : "149.化妆时,下眼线的描画要浅淡,一般描画到从外眼角起的1/3部位或1/2部位。",
		correct : "Y",
    },{
		question : "150.日妆的腮红宜浅淡,如果肤色健康自然,可以不涂。",
		correct : "Y",
    },{
		question : "151.涂抹粉底前化妆海绵可以不用沾湿,也能将粉底涂抹均匀。",
		correct : "N",
    },{
		question : "152.为了使粉底涂抹均匀,力度可以适当重些。",
		correct : "N",
    },{
		question : "153.美容院想要吸引、留住顾客要做好三个方面的工作:(1)店面形象;(2)接待服务;(3)技术水平。",
		correct : "Y",
    },{
		question : "154.美容师要保证自己形象,工作时可以披发。",
		correct : "N",
    },{
		question : "155.美容师工作时间可留长指甲并可涂有色指甲油。",
		correct : "N",
    },{
		question : "156.美容师在工作时穿厚高跟鞋才能展示女性的优美。",
		correct : "N",
    },{
		question : "157.做皮肤护理时,按摩膏在按摩过程中起润滑作用。",
		correct : "Y",
    },{
		question : "158.卸妆时眼部皮肤较敏感可省略。",
		correct : "N",
    },{
		question : "159.脱屑不可过勤,每月可做1-2次。",
		correct : "Y",
    },{
		question : "160.中性皮肤是健康理想的皮肤,多见于35岁左右的女性。",
		correct : "N",
    },{
		question : "161.为了让顾客感觉好,按摩时间越长越好。",
		correct : "N",
    },{
		question : "162.按摩方向与肌肉方向一致,与皮肤皱纹方向垂直。",
		correct : "Y",
    },{
		question : "163.坚持做手部运动可保持手的灵活性和协调性。",
		correct : "Y",
    },{
		question : "164.按摩时尽量减少肌肤的位移。",
		correct : "Y",
    },{
		question : "165.骨节肿胀、腺肿胀者不能按摩。",
		correct : "Y",
    },{
		question : "166.皮肤测试是皮肤诊断的基础。",
		correct : "Y",
    },{
		question : "167.借助人工的方法,帮助堆积在皮肤表层的死細胞挪去就是脱屑。",
		correct : "Y",
    },{
		question : "168.物理性脱屑仅适用于干性、衰老性皮肤。",
		correct : "N",
    },{
		question : "169.冷膜能改善皮肤的血液循环,使皮脂腺、汗腺的分泌功能增加,促进皮肤对营养物质的吸收。",
		correct : "N",
    },{
		question : "170.皮肤是人体面积最大的器官。",
		correct : "Y",
    },{
		question : "171.成年人的全身皮肤面积为15~20平方米。",
		correct : "N",
    },{
		question : "172.皮肤由内向外可分为三层:表皮、真皮、皮下组织。",
		correct : "N",
    },{
		question : "173.真皮内没有血管,划破真皮后不会出血。",
		correct : "N",
    },{
		question : "174.透明层有折射光线作用,可以减少紫外线射入人体内。",
		correct : "N",
    },{
		question : "175.棘层是皮肤中最厚的一层。",
		correct : "N",
    },{
		question : "176.黑色素细胞呈树枝状稀疏散布在基底细胞中间。",
		correct : "Y",
    },{
		question : "177.人的肤色的深浅是由皮肤中含黑色素细胞的多少决定。",
		correct : "N",
    },{
		question : "178.真皮的厚度约为表皮的5倍。",
		correct : "N",
    },{
		question : "179.真皮含水量占人体组织的60%。",
		correct : "N",
    },{
		question : "180.皮下脂肪的厚薄对人的体形有很大影响。",
		correct : "Y",
    },{
		question : "181.除手脚掌外,汗腺遍布全身,以头面部为最多,其次为前胸、后背、腿。",
		correct : "N",
    },{
		question : "182.皮脂呈弱酸性,有一定的抑菌、杀菌作用。",
		correct : "Y",
    },{
		question : "183.人体毛发主要成分是角蛋白。",
		correct : "Y",
    },{
		question : "184.人体毛发的生长期为2-6个月。",
		correct : "N",
    },{
		question : "185.皮肤细胞有分裂繁殖、新陈代谢的能力。",
		correct : "Y",
    },{
		question : "186.中性皮肤多见于青春发育期的少女。",
		correct : "N",
    },{
		question : "187.干性缺油皮肤多见于35岁以上及老年人。",
		correct : "N",
    },{
		question : "188.干性缺水皮肤多见于35岁以上及老年人。",
		correct : "Y",
    },{
		question : "189.按摩走向从上向下,从里向外,从两边向中间。",
		correct : "N",
    },{
		question : "190.硬模分为冷模和软膜。",
		correct : "N",
    },{
		question : "191.叶绿素软膜适于油性皮肤和暗疮皮肤。",
		correct : "Y",
    },{
		question : "192.倒硬模时局部有创伤、烫伤、发炎感染等皮肤症状者禁用。",
		correct : "Y",
    },{
		question : "193.为了补充皮肤的水分,奥桑蒸汽的时间越长越好。",
		correct : "N",
    },{
		question : "194.蒸面时应依皮肤性质掌握好喷雾时间,但最长不能超过15分钟。",
		correct : "Y",
    },{
		question : "195.做热毛巾敷面时,毛巾的温度应越热越好,否则起不到热数的作用。",
		correct : "N",
    },{
		question : "196.皮肤清洁刷可以清除皮肤污垢,因此各类皮肤护肤中不能缺少这道程序。",
		correct : "N",
    },{
		question : "197.美容院室内的温度约为25摄氏度左右,湿度约在55%至65%之间。",
		correct : "Y",
    },{
		question : "198.过氧化氢可用于剪刀、暗疮针的消毒。",
		correct : "N",
    },{
		question : "199.细胞膜内的废物可以通过细胞核排出体外。",
		correct : "N",
    },{
		question : "200.细胞质的细胞器里的高尔基体主要功能是分泌。",
		correct : "Y",
    },{
		question : "201.自我价值实现的需要是最基础的需要,是人的生命本能所决定的。",
		correct : "N",
    },{
		question : "202.对于色斑皮肤进行奥桑喷雾,时间可以略长。",
		correct : "N",
    },{
		question : "203.洗面奶是清洁皮肤的最佳清洁剂。",
		correct : "N",
    },{
		question : "204.按摩乳含水分较大,适用于油性皮肤和缺水性皮肤。",
		correct : "Y",
    },{
		question : "205.洗面奶性质温和,但清洁效果仍然良好。",
		correct : "Y",
    },{
		question : "206.基底层内含基底细胞和黑色素细胞,所以是表皮中最厚的一层。",
		correct : "N",
    },{
		question : "207.表皮棘细胞的营养主要靠血液供给。",
		correct : "N",
    },{
		question : "208.皮肤中含水量最多的是皮下组织。",
		correct : "N",
    },{
		question : "209.人体的前胸与后背部皮脂腺分布最多。",
		correct : "N",
    },{
		question : "210.中性皮肤常见于中年人。",
		correct : "N",
    },{
		question : "211.为增加东方人眼部立体感、在眉骨上可以运用的眼影色为阴影色。",
		correct : "N",
    },{
		question : "212.为帮助乳液易被皮肤吸收,在使用乳液之前需使用敷面剂。",
		correct : "N",
    },{
		question : "213.化妆中,使用毛刷刷扫时,应用毛刷的刷腹着面。",
		correct : "Y",
    },{
		question : "214.化妆中,形的勾画主要是用描绘、晕染的方法,对五官轮廓进行加工。",
		correct : "Y",
    },{
		question : "215.毛发可调节体温。",
		correct : "N",
    },{
		question : "216.按摩可以使皮肤组织密实而富有弹性。",
		correct : "Y",
    },{
		question : "217.粉扑用于面部时用擦的方法。",
		correct : "N",
    },{
		question : "218.微笑服务是我们为客人提供的一种功能服务。",
		correct : "N",
    },{
		question : "219.美容师工作时,一般不宜化妆。",
		correct : "N",
    },{
		question : "220.脱屑的方法与用品应根据顾客的要求而定。",
		correct : "N",
    },{
		question : "221.正确的坐姿是:坐下时,身体的重量完全由臀部承受。",
		correct : "N",
    },{
		question : "222.日妆不适合用深褐色涂在东方女性的眼部。",
		correct : "Y",
    },{
		question : "223.素描是一切造型的基础,是绘画造型的基本功。",
		correct : "Y",
    },{
		question : "224.构图和轮廓是素描习作深入刻画的基础。",
		correct : "Y",
    },{
		question : "225.布局定位关系着画面的美感,也体现着作画动态。",
		correct : "N",
    },{
		question : "226.色彩的本体是光。",
		correct : "Y",
    },{
		question : "227.光是一种物质,是电磁波的一种。",
		correct : "Y",
    },{
		question : "228.三间色也称第一次色。",
		correct : "N",
    },{
		question : "229.红色与蓝色混合成绿色。",
		correct : "N",
    },{
		question : "230.色彩具有三个基本要素,即: 色调、明度、纯度。",
		correct : "N",
    },{
		question : "231.色调也称色别、是色与色之间的差别,也是色彩的面貌。",
		correct : "N",
    },{
		question : "232.纯度也叫饱和度,是指颜色的强度、鲜艳的程度。",
		correct : "Y",
    },{
		question : "233.在化妆色彩使用上,过多地掺入白色,会造成明度不足,缺乏力量。",
		correct : "N",
    },{
		question : "234.使用清洁霜时,因性质较温和,可直接做洗面奶使用。",
		correct : "N",
    },{
		question : "235.卸妆油的主要成分是矿物油、蜂蜡。",
		correct : "Y",
    },{
		question : "236.磨砂膏对皮肤角化细胞有剥蚀作用,涂敷于皮肤上,可将角质细胞溶解,达到净化皮肤的作用。",
		correct : "N",
    },{
		question : "237.按摩膏较适合油性皮肤和缺水性皮肤。",
		correct : "N",
    },{
		question : "238.按摩乳含有丰富的油分,使用后要将皮肤清洗干净,保证皮肤的吸收功能。",
		correct : "N",
    },{
		question : "239.涂粉底可运用点、拍、按、压、擦、抹等手法来完成。",
		correct : "Y",
    },{
		question : "240.涂粉底时点拍的方法一般在粉底过厚、颜色过重需要减薄、减轻时运用。",
		correct : "N",
    },{
		question : "241.对敏感皮肤涂粉底时,可使用指腹涂抹粉底,避免海绵对皮肤的刺激。",
		correct : "Y",
    },{
		question : "242.枯黄的皮肤应用绿色或蓝色粉底涂敷,抑制脸的黄气,然后再用粉底涂抹,使皮肤显得白里透红。",
		correct : "N",
    },{
		question : "243.化妆时应选择比皮肤白而嫩粉色泽的粉底,在面部作全面均匀的遮盖,是表现东方女性柔美肤质的最好方法。",
		correct : "N",
    },{
		question : "244.粉底质感应与皮肤性质、季节、妆型特点协调。",
		correct : "Y",
    },{
		question : "245.化妆最后一项程序是定妆,应选择白而粉色的粉饼进行定妆。",
		correct : "N",
    },{
		question : "246.面形偏小的女性,在化妆时应将五官描绘得清秀亮丽。",
		correct : "Y",
    },{
		question : "247.两个额角比较窄,两个颌角比较宽,呈上窄下宽状态是倒三角脸形。",
		correct : "N",
    },{
		question : "248.两个额角与两个颌角比较宽,呈等宽状态是菱形脸形。",
		correct : "N",
    },{
		question : "249.当骨骼小、转折角度大、脂肪层厚时,凹凸结构就不明显,层次也不分明。",
		correct : "Y",
    },{
		question : "250.凹凸结构不明显时,则显得棱角分明,缺乏女性的柔和感。",
		correct : "N",
    },{
		question : "251.常用的阴影色有:棕色、灰色、紫灰色、浅蓝色、银灰色等。",
		correct : "N",
    },{
		question : "252.眉峰位于眉毛的1/3部位。",
		correct : "N",
    },{
		question : "253.眉毛的修饰方法一般分为两个步骤来完成,即修眉和画眉。",
		correct : "Y",
    },{
		question : "254.晕染眼影有两种方法,一种是立体晕染,一种是水平晕染。",
		correct : "Y",
    },{
		question : "255.下深上浅眼影晕染,是将眉骨下方涂亮色,向下晕染,亮度由强变弱,渐渐与影色打衔接。",
		correct : "Y",
    },{
		question : "256.上眼睑的睫毛用睫毛刷从根部向睫毛梢纵向涂染,边涂边转睫毛刷。",
		correct : "Y",
    },{
		question : "257.在粘假睫毛时,在根部涂上睫毛胶水,为避免脱落,应将胶水涂多些。",
		correct : "N",
    },{
		question : "258.涂染睫毛膏后要保持睫毛呈一根根的自然状态,不能将其粘在一起。",
		correct : "Y",
    },{
		question : "259.睫毛线的粗细、色调深浅与妆型要协调。",
		correct : "Y",
    },{
		question : "260.眉毛与眼睛之间的宽度为一只眼睛平视时宽度。",
		correct : "Y",
    },{
		question : "261.眼球位于眼部中央,是整个脸部最凸起的部位。",
		correct : "N",
    },{
		question : "262.暖色唇膏显得活泼,适于年龄偏大和偏暖色妆型。",
		correct : "N",
    },{
		question : "263.一般腮红应涂在颧骨旁,一笑就抬起的肌肉部位。",
		correct : "N",
    },{
		question : "264.化日妆涂染睫毛时,如睫毛稀疏,可选择浓密的假睫毛贴上。",
		correct : "N",
    },{
		question : "265.粉底霜适用于干性皮肤、中性皮肤、衰老性皮肤和春、夏、秋季化妆。",
		correct : "N",
    },{
		question : "266.粉底液适用于淡妆、夏季化妆和油性皮肤使用。",
		correct : "Y",
    },{
		question : "267.米色的粉底可使皮肤显得自然洁白细腻,适用于较健康红润的皮肤使用。",
		correct : "N",
    },{
		question : "268.眉笔色可根据年龄、肤色和妆型选择使用,年龄较大的人宜用棕色,淡妆及肤色白的人用黑色,浓妆选择灰黑色。",
		correct : "N",
    },{
		question : "269.健康的皮肤在化妆2小时后,妆色最美。",
		correct : "N",
    },{
		question : "270.睫毛膏的使用方法是:从睫毛梢向根部转刷。",
		correct : "N",
    },{
		question : "271.职业道德是从事职业的人所应遵循的、与其职业紧密联系的道德原则和规范的总和。",
		correct : "N",
    },{
		question : "272.道德可分为家庭道德、社会道德、职业道德。",
		correct : "Y",
    },{
		question : "273.职业道德是一般道德和阶级道德在职业生活中的具体体现。",
		correct : "Y",
    },{
		question : "274.礼仪的特点包括:共同性、继承发展性、统一性、差异性。",
		correct : "Y",
    },{
		question : "275.礼仪的原则包括:尊重的原则、遵守的原则、自律的原则、适度的原则。",
		correct : "Y",
    },{
		question : "276.礼仪是体现一定道德观念和风俗习惯,表达人们礼节动作、容貌举止的行为准则。",
		correct : "Y",
    },{
		question : "277.皮肤由外向内可分三层:皮下组织、真皮、表皮。",
		correct : "N",
    },{
		question : "278.眼睑部角质层很薄,不能做人工脱屑,以免损伤皮肤。",
		correct : "Y",
    },{
		question : "279.皮肤有一定的吸收能力,角质层越厚,皮肤吸收能力越好。",
		correct : "N",
    },{
		question : "280.基底层的基底细胞是表皮细胞的生化之源。",
		correct : "Y",
    },{
		question : "281.细胞内含有细小的颗粒状物,有反射光线作用,可以减少紫外线射入体内。",
		correct : "N",
    },{
		question : "282.真皮层的含水量占全部皮肤组织的60%,若低于6%时,皮肤会呈现干燥、起皱纹等缺水状态。",
		correct : "Y",
    },{
		question : "283.真皮可分为上下两层:上层为网状层,下层为乳头层。",
		correct : "N",
    },{
		question : "284.人的皮肤按其生理状况可分为四种类型。",
		correct : "N",
    },{
		question : "285.根据用途化妆品可分为清洁类、护肤类、修饰类、治疗类、护发类、固发类、美发类等。",
		correct : "Y",
    },{
		question : "286.热模有助于敏感皮肤的调理。",
		correct : "N",
    },{
		question : "287.物理性脱屑对皮肤的刺激性较小。",
		correct : "N",
    },{
		question : "288.一般情况下,油性皮肤对外界刺激不敏感。",
		correct : "Y",
    },{
		question : "289.进行面部按摩时最长时间不能超过300分钟,以10~25分钟为宣。",
		correct : "Y",
    },{
		question : "290.美容师工作时需化妆,妆面宜清淡。",
		correct : "Y",
    },{
		question : "291.透明层可防止体内、体外的水、电解质透过,起到防晒作用。",
		correct : "N",
    },{
		question : "292.每次护肤时,都做一下去死皮可有助于营养的吸收。",
		correct : "N",
    },{
		question : "293.香皂去污力强,泡浓丰富,适用于水溶性污垢较多的皮肤。",
		correct : "Y",
    },{
		question : "294.卸妆油的主要成分是白油及蜂蜡。",
		correct : "N",
    },{
		question : "295.清洁效果与水的应用有直接关系。",
		correct : "Y",
    },{
		question : "296.卸妆油是淡妆的最好的清洁剂。",
		correct : "N",
    },{
		question : "297.按摩膏在按摩过程中起滋润作用。",
		correct : "N",
    },{
		question : "298.卸妆是皮肤保养的第一步。",
		correct : "Y",
    },{
		question : "299.洗面的顺序一般是由下巴到前额。",
		correct : "N",
    },{
		question : "300.干性皮肤可使用磨砂膏轻微脱屑。",
		correct : "N",
    },{
		question : "301.维生素E软膜适用于衰老性皮肤和敏感皮肤。",
		correct : "Y",
    },{
		question : "302.当归软膜适用于油性皮肤。",
		correct : "N",
    },{
		question : "303.眉色要与肤色、发色协调。",
		correct : "Y",
    },{
		question : "304.一般眼线的描画是下粗上细,上长下短,上下眼线比例为3:7。",
		correct : "N",
    },{
		question : "305.眼部的化妆可分为四个步骤。",
		correct : "N",
    },{
		question : "306.用透明的蜜粉固定粉底,可减少粉底在皮肤上的油光感,并防止脱妆。",
		correct : "Y",
    },{
		question : "307.用测试仪测试皮肤,最长时间不能超过2分钟。",
		correct : "Y",
    },{
		question : "308.掌握好测试仪与被测者面部距离不能近于15cm。",
		correct : "N",
    },{
		question : "309.有色斑的皮肤在进行皮肤测试仪测试时时间可短些。",
		correct : "N",
    },{
		question : "310.清洁皮肤的目的之一是调节皮肤的酸碱度,恢复正常的pH值,保护皮肤。",
		correct : "Y",
    },{
		question : "311.为每一位客人进行皮肤护理前,必须认真洗手,严格消毒。",
		correct : "Y",
    },{
		question : "312.皮肤护理所用的用品、用具每次使用时均应经过清洁、消毒。",
		correct : "Y",
    },{
		question : "313.在进行眼部卸妆时因眼部皮肤较敏感,卸妆动作要轻柔。",
		correct : "Y",
    },{
		question : "314.当面形过于庞大时可选择比肤色较深的粉底化妆,可让脸形明显显小。",
		correct : "Y",
    },{
		question : "315.顾客到美容院做美容需要优质的服务,主要指的是功能服务+心理服务。",
		correct : "Y",
    },{
		question : "316.皮肤中最厚的一层是皮下组织。",
		correct : "Y",
    },{
		question : "317.皮肤的缺水状态反应在真皮层。",
		correct : "Y",
    },{
		question : "318.粉底色与肤色要协调,要避免粉底色与皮肤色的明显差异。",
		correct : "Y",
    },{
		question : "319.修饰脸形时可运用深浅不同的粉底形成的界限来达到。",
		correct : "N",
    },{
		question : "320.当骨骼小、转折角度大、脂肪层厚时,凹凸结构就明显。",
		correct : "N",
    },{
		question : "321.进行按摩时,按摩的时间越长效果越好。",
		correct : "N",
    },{
		question : "322.按摩过程中,要给予足够的按摩膏(油)。",
		correct : "Y",
    },{
		question : "323.调整肤色时深浅粉底的搭配运用要恰当,深浅过渡要柔和,要避免深色与浅色之间的界限过于明显。",
		correct : "Y",
    },{
		question : "324.在生活化妆中多选用棕色系列。",
		correct : "Y",
    },{
		question : "325.在化日妆时化妆色彩与色彩之间对比要强,用色要丰富。",
		correct : "N",
    },{
		question : "326.在化日妆时描化的线条要实要清晰。",
		correct : "N",
    },{
		question : "327.在化日妆时化妆的底色要薄,要强调肤色的自然光泽。",
		correct : "Y",
    },{
		question : "328.勾画唇形时唇形要符合年龄与个性特点。",
		correct : "N",
    },{
		question : "329.在进行唇形修饰时,唇的轮廓要清晰,避免模糊不清。",
		correct : "Y",
    },{
		question : "330.美容师的语言应具备言辞文雅,语调亲切,声音悦耳的职业特点。",
		correct : "Y",
    },{
		question : "331.美容师的职业要求,必须具有良好的人际关系。",
		correct : "Y",
    },{
		question : "332.直接接触到客人的围巾、毛巾,要一客一用。",
		correct : "Y",
    },{
		question : "333.细胞膜具有选择性的渗透作用,只有营养物质才可以通过。",
		correct : "N",
    },{
		question : "334.细胞的生命活动所需能量是由中心体提供的。",
		correct : "N",
    },{
		question : "335.高尔基体的主要功能是繁殖。",
		correct : "N",
    },{
		question : "336.染色质是核内嗜酸性的小颗粒,与遗传有关。",
		correct : "N",
    },{
		question : "337.皮肤由外向内可分三层。表皮划伤后会出血,但不留疤痕。",
		correct : "N",
    },{
		question : "338.只有皮下组织内含有丰富的血管、神经和淋巴管。",
		correct : "N",
    },{
		question : "339.角质层过厚,会影响皮肤的吸收能力,所以每天应用磨砂洗面奶洗面。",
		correct : "N",
    },{
		question : "340.可以减少紫外线射人体内的是颗粒层细胞内的小颗粒状物。",
		correct : "Y",
    },{
		question : "341.干性皮肤使用奥桑喷雾的时间应短些。",
		correct : "Y",
    },{
		question : "342.红与黄相混合成紫色,黄与蓝相混合成橙色,红与蓝相混合成绿色。",
		correct : "N",
    },{
		question : "343.使用化妆品应借助工具取放,不可直接用手抹取。",
		correct : "Y",
    },{
		question : "344.倒硬模时应用纸巾包住发际边缘,可防止膜粉粘连毛发。",
		correct : "Y",
    },{
		question : "345.素描的表现方法有4种。",
		correct : "N",
    },{
		question : "346.画素描的铅笔可分为H型、B型、HB型几种。",
		correct : "N",
    },{
		question : "347.蜜粉的主要作用是固定粉底和定妆。",
		correct : "Y",
    },{
		question : "348.真皮伸入表皮中的部分称真皮乳头。",
		correct : "Y",
    },{
		question : "349.从一个基底细胞产生,到最后变成皮屑脱落大约需要20天。",
		correct : "N",
    },{
		question : "350.皮肤是美容的基础,而脸部的保养在美容中占有极重要的位置,面部清洁是皮肤保养的第一步。",
		correct : "Y",
    },{
		question : "351.皮肤脱屑的方式可分为三类,即:自然性脱屑、物理性脱屑和化学性脱屑。",
		correct : "Y",
    },{
		question : "352.香皂性质温和,可直接擦在面部皮肤上。",
		correct : "N",
    },{
		question : "353.化妆水可以补充皮肤的水分,而且可以调整皮肤的pH值。",
		correct : "Y",
    },{
		question : "354.敏感性皮肤不能脱屑。",
		correct : "N",
    },{
		question : "355.物理性脱屑对皮肤刺激性较大。",
		correct : "Y",
    },{
		question : "356.珍珠软膜适于干性、衰老的皮肤。",
		correct : "Y",
    },{
		question : "357.肿眼泡或眼袋下垂者,眼影色忌用深紫色。",
		correct : "N",
    },{
		question : "358.采用脱毛蜡脱毛时,揭纸时要顺毛发生长方向。",
		correct : "N",
    },{
		question : "359.睫毛膏可分为水溶性、防水性、加长型。",
		correct : "Y",
    },{
		question : "360.化妆的底色越厚,越显得肤色有光泽。",
		correct : "N",
    },{
		question : "361.化日妆时,为了能矫正鼻形,修饰鼻侧影,可更多地使用较深的阴影色。",
		correct : "N",
    },{
		question : "362.面颊的修饰主要表现在鼻影的晕染上。",
		correct : "N",
    },{
		question : "363.画睫毛线有两种方法:一种是眼线笔描画,另一种是水溶性眼线粉描画。",
		correct : "Y",
    },{
		question : "364.细胞膜具有提供细胞成长、繁殖以及自我修补所需的营养的作用。",
		correct : "N",
    },{
		question : "365.越白的皮肤是越健康的皮肤。",
		correct : "N",
    },{
		question : "366.治疗类化妆品含有某种药物成分,主要用于问题皮肤。",
		correct : "Y",
    },{
		question : "367.抑汗化妆品的主要作用是杀菌消炎。",
		correct : "N",
    },{
		question : "368.粉扑用于面部时应用力擦抹均匀。",
		correct : "N",
    },{
		question : "369.祛斑霜是在润肤霜或乳剂产品中添加维生素或中药成分的制品。",
		correct : "Y",
    },{
		question : "370.人的生长是以细胞的生长为基础的。",
		correct : "Y",
    },{
		question : "371.表皮伸入真皮中的部分称为真皮乳头。",
		correct : "N",
    },{
		question : "372.皮脂腺、汗孔、毛囊、爪甲为皮肤附属器。",
		correct : "N",
    },{
		question : "373.棘层为表皮的最下层。",
		correct : "N",
    },{
		question : "374.角质层为表皮中最厚的一层。",
		correct : "N",
    },{
		question : "375.人的肤色的深浅与皮肤中含黑色素颗粒 没直接关系,而与遗传直接相关。",
		correct : "N",
    },{
		question : "376.真皮可分为上下两层:上层为网状层,下层为乳头层。",
		correct : "N",
    },{
		question : "377.皮脂腺主要分布在手脚掌。",
		correct : "N",
    },{
		question : "378.日妆也称淡妆。",
		correct : "Y",
    },{
		question : "379.化妆水不能天天用。",
		correct : "N",
    },{
		question : "380.干性皮肤、中性皮肤,衰老性皮肤和色斑皮肤应用冷膜。",
		correct : "N",
    },{
		question : "381.叶绿素软膜适用于干性和衰老性皮肤。",
		correct : "N",
    },{
		question : "382.按摩方向与肌肉走向相反,与皮肤皱纹方向平行。",
		correct : "N",
    },{
		question : "383.在测试仪紫光管照射下显青黄色为干性皮肤。",
		correct : "N",
    },{
		question : "384.在画唇形时,上唇角略长于下唇角,上唇略厚于下唇。",
		correct : "N",
    },{
		question : "385.皮肤中含水量最多的是皮下组织。",
		correct : "N",
    },{
		question : "386.采用物理方法脱屑时,一般情况应先做脱屑,再使用奧桑蒸汽护理。",
		correct : "N",
    },{
		question : "387.电话响两声就应当拿起。",
		correct : "Y",
    },{
		question : "388.肤用品可直接用手从容器中取用。",
		correct : "N",
    },{
		question : "389.洁肤完成时,皮肤上的洁肤用品应彻底清洗干净,以免残留在面部伤害皮肤。",
		correct : "Y",
    },{
		question : "390.干性、衰老皮肤脱屑时间短,油性皮肤脱屑时间稍长。",
		correct : "Y",
    },{
		question : "391.面部按摩可以促进血液循环。",
		correct : "Y",
    },{
		question : "392.按摩时间的 10~15 分钟为宜。",
		correct : "Y",
    },{
		question : "393.面部护理时在按摩前一定要做面部清洁。",
		correct : "Y",
    },{
		question : "394.硬模的主要成分是医用石膏粉。",
		correct : "Y",
    },{
		question : "395.冷膜具有增白和减少色斑的效果。",
		correct : "N",
    },{
		question : "396.维生素E软膜具有抗衰老作用。",
		correct : "Y",
    },{
		question : "397.啫喱面膜分为可干型和保湿面膜。",
		correct : "Y",
    },{
		question : "398.枯黄的皮肤应用浅紫色的粉底抑制脸的黄气。",
		correct : "Y",
    },{
		question : "399.长形脸是当代女子标准脸形。",
		correct : "N",
    },{
		question : "400.晕染眼影的方法有立体晕染和水平晕染两种。",
		correct : "Y",
    },{
		question : "401.描画眼线时,一般上下眼线的比例是3:7。",
		correct : "N",
    },{
		question : "402.美容师的甲型不可太尖。",
		correct : "Y",
    },{
		question : "403.卸妆油的主要成分只有蜂蜡。",
		correct : "N",
    },{
		question : "404.全部化妆程序结束之后,最后一项程序是定妆,应选择白而粉色的粉饼全面定妆。",
		correct : "N",
    },{
		question : "405.我们常用的化妆工具包括眼影、粉底霜、胭脂、唇膏等。",
		correct : "N",
    },{
		question : "406.人体的毛发可以分为软毛和硬毛两大类。",
		correct : "N",
    },{
		question : "407.暗疮皮肤不一定都是油性皮肤。",
		correct : "Y",
    },{
		question : "408.鼻子太大的人,化妆时要注意鼻梁上的阴影尽可能地画细些。",
		correct : "N",
    },{
		question : "409.在为顾客做美容时,如遇自己有事,应马上换人接替。",
		correct : "N",
    },{
		question : "410.在为顾客做美容时,如遇自己有事,应马上换人接替。",
		correct : "N",
    },{
		question : "411.洁肤类化妆品包括洗面奶、乳液、香皂、卸妆油等。",
		correct : "N",
    },{
		question : "412.洗面奶能清洁表面,软化角质层,除去角质层的死细胞。",
		correct : "N",
    },{
		question : "413.皮肤是身体的最大器官。",
		correct : "Y",
    },{
		question : "414.冷模可用于暗疮皮肤、干性皮肤,敏感皮肤。",
		correct : "N",
    },{
		question : "415.标准眉峰是在眉梢到眉头距离二分之一处。",
		correct : "N",
    },{
		question : "416.一般人的脸形分为圆形、方形、心形、甲字形、椭圆形和三角形。",
		correct : "N",
    },{
		question : "417.从前额发际线开始至下颌底部的距离为三庭。",
		correct : "N",
    },{
		question : "418.美容师要善于和顾客交谈,可以谈集体,可以谈他人,总之可以无话不说。",
		correct : "N",
    },{
		question : "419.美容师要注意个人仪表,工作时不梳披肩发,淡妆上岗。",
		correct : "Y",
    },{
		question : "420.洗面奶可以使皮肤滋润,清除表皮坏死的角质层细胞。",
		correct : "N",
    },{
		question : "421.涂粉底时一般借助干燥粉底海绵涂抹,由上向下、由中间向外涂。",
		correct : "N",
    },{
		question : "422.毛孔粗大,皮肤粗糙者先用浅色粉底涂抹一遍,再用接近肤色粉底涂抹一遍。",
		correct : "Y",
    },{
		question : "423.皮肤发红者选择紫色粉底涂敷红的部位。",
		correct : "N",
    },{
		question : "424.粉底的质感应与皮肤性质、妆型特点协调,与季节无关。",
		correct : "N",
    },{
		question : "425.面部较窄小或局部窄小修饰方法是用浅色粉底涂敷于整个面部窄小局部,用亮色拓宽,并适当加些粉红色,使其显得宽大饱满。",
		correct : "Y",
    },{
		question : "426.美学家对人的五官分布比例进行分析得出的结果是:以三庭五眼为标准。",
		correct : "Y",
    },{
		question : "427.面部的凹凸层次主要取决于面颅骨的大小、转折角度和皮肤脂肪层的薄厚。",
		correct : "Y",
    },{
		question : "428.标准眉形眉头的起点在鼻翼内侧向上方的延长线上,始于与内眼角相垂直的部位。",
		correct : "Y",
    },{
		question : "429.标准眉形眉峰位于当眼睛平视时黑眼球的外侧。",
		correct : "Y",
    },{
		question : "430.标准眉形的眉梢位于从唇峰、鼻翼至外眼角的延长线上。",
		correct : "Y",
    },{
		question : "431.偏暖色或明度高的色彩,使物体的形显宽、显浅、显高,有扩张迫近感。",
		correct : "Y",
    },{
		question : "432.偏冷或含混的色彩,可使物体形显小、显深,有后退凹陷或缩小的感觉。",
		correct : "Y",
    },{
		question : "433.眉毛的描画要虚实相映,左右对称,眉头色调要重。",
		correct : "N",
    },{
		question : "434.当顾客进入美容院时,美容师要面向顾客、微笑相迎、轻轻点头行礼、亲切问候。",
		correct : "Y",
    },{
		question : "435.微笑服务就是心里不笑、面上笑着对顾客服务。",
		correct : "N",
    },{
		question : "436.美容师在接听电话时要以礼貌、热情诚恳的语言,塑造热情大方的电话形象。",
		correct : "Y",
    },{
		question : "437.有顾客咨询美容时,美容师不要让对方有说话的余地,应尽快向顾客推销美容院的产品和服务项目。",
		correct : "N",
    },{
		question : "438.与顾客交谈时不可以指手画脚、大惊小怪或喋喋不体、没完没了。",
		correct : "Y",
    },{
		question : "439.美容师工作时要化浓妆、带手饰,才能体现高贵大方。",
		correct : "N",
    },{
		question : "440.每次清洁过皮肤后都必须进行脱屑。",
		correct : "N",
    },{
		question : "441.干性和暗疮性皮肤都可以使用磨砂膏清洁面部。",
		correct : "N",
    },{
		question : "442.任何皮肤都可以使用奥桑蒸汽仪。",
		correct : "N",
    },{
		question : "443.混合性皮肤多见于青春发育前的少女。",
		correct : "N",
    },{
		question : "444.面部按摩能帮助皮肤排泄废物和二氧化碳,减少油脂积累。",
		correct : "Y",
    },{
		question : "445.颊车穴在额骨下方凹陷处。",
		correct : "N",
    },{
		question : "446.按摩前一定要做面部清洁、蒸汽和吸啜。",
		correct : "N",
    },{
		question : "447.皮肤偏黑、长色斑及雀斑、敏感性皮肤不宜做面部按摩。",
		correct : "N",
    },{
		question : "448.矿泥面膜是一种含矿物质黏土,特点是纯天然性。",
		correct : "Y",
    },{
		question : "449.不同类型的皮肤,使用化妆品时要有针对地进行选择。",
		correct : "Y",
    },{
		question : "450.表皮含有丰富的血管、神经和淋巴管。",
		correct : "N",
    },{
		question : "451.纯度也叫饱和度,是指颜色的强度、鲜艳的程度。",
		correct : "Y",
    },{
		question : "452.三间色是指能调配出其他一切色彩的基本色。",
		correct : "N",
    },{
		question : "453.由七种不同波长的色光混合而成的白光叫复色光。",
		correct : "Y",
    },{
		question : "454.色相是光与光之间的差别,也是色彩的面貌。",
		correct : "N",
    },{
		question : "455.敏感性皮肤是兼有油性和干性皮肤的特征。",
		correct : "N",
    },{
		question : "456.皮肤的附属器有皮脂腺、毛发、爪甲三种。",
		correct : "N",
    },{
		question : "457.成年人皮肤的重量约占人体重量的25%。",
		correct : "N",
    },{
		question : "458.色斑、敏感、做细血管破裂的皮肤可做奥桑喷雾。",
		correct : "N",
    },{
		question : "459.面部按摩时,按摩膏量不足时可以加水。",
		correct : "N",
    },{
		question : "460.毛孔较细、皮肤毛细血管和皱纹较明显为中性皮肤。",
		correct : "N",
    },{
		question : "461.面部按摩可增进血液循环,给组织补充营养。",
		correct : "Y",
    },{
		question : "462.攒竹穴定位于眉头内侧端凹陷处。",
		correct : "Y",
    },{
		question : "463.干性皮肤可用磨砂膏进行脱屑。",
		correct : "N",
    },{
		question : "464.卸妆水可以用洗面奶或清洁霜代替。",
		correct : "N",
    },{
		question : "465.卸眼线时是由外眼角向内眼角滚抹。",
		correct : "N",
    },{
		question : "466.漂亮美容师是留住客人的主要因素。",
		correct : "N",
    },{
		question : "467.工作时穿厚高跟鞋,保持鞋袜整洁无异味。",
		correct : "N",
    },{
		question : "468.美容师操作时不能戴戒指,不涂有颜色指甲油。",
		correct : "Y",
    },{
		question : "469.几位顾客同时进门时,美容师要做到“接一顾二招呼三”。",
		correct : "Y",
    },{
		question : "470.道别用语可以使顾客感受到善始善终的服务。",
		correct : "Y",
    },{
		question : "471.马铃薯面膜对于疤痕性皮肤有较好的疗效。",
		correct : "N",
    },{
		question : "472.凝结性面膜是软膜的一种。",
		correct : "N",
    },{
		question : "473.冷冻面膜是膏状面膜的一种。",
		correct : "Y",
    },{
		question : "474.柠檬面膜、茄泥面膜、当归面膜都属于软膜。",
		correct : "N",
    },{
		question : "475.冬季倒热膜时可用温的蒸馏水。",
		correct : "Y",
    },{
		question : "476.启硬模时,请客人做笑的动作是不礼貌的。",
		correct : "N",
    },{
		question : "477.三庭是指脸的宽度,把脸的宽度分为三等分。",
		correct : "N",
    },{
		question : "478.五眼是指脸的长度,把脸的长度分为五个等分。",
		correct : "N",
    },{
		question : "479.勾画的唇形要符合脸形和个性特点。",
		correct : "Y",
    },{
		question : "480.面颊的修饰主要表现在阴影上的晕染。",
		correct : "N",
    },{
		question : "481.粉扑是用于涂抹粉底的化妆用具。",
		correct : "N",
    },{
		question : "482.就寝前可以不卸妆,因为妆可使皮肤产生亲和力,对皮肤有好处。",
		correct : "N",
    },{
		question : "483.如果化妆品长期附着于皮肤,会影响皮肤正常的呼吸与排泄。",
		correct : "Y",
    },{
		question : "484.红色与绿色相混后成紫色。",
		correct : "N",
    },{
		question : "485.粉扑蘸蜜粉后要相对揉搓,使蜜粉在面部分布均匀。",
		correct : "Y",
    },{
		question : "486.美容师首先应该是言行一致的。",
		correct : "Y",
    },{
		question : "487.角质层的厚薄对人的肤色和皮肤的吸收能力没有影响。",
		correct : "N",
    },{
		question : "488.指甲会因营养不良而变薄变脆或凹凸不平,影响手部整体美。",
		correct : "Y",
    },{
		question : "489.纯度高的色彩掺白色将明度提高,同时也提高了纯度。",
		correct : "N",
    },{
		question : "490.引领顾客时,走在客人前面是不礼貌的,应让客人先走。",
		correct : "N",
    },{
		question : "491.用去死皮膏脱屑时,拉抹的方向是从上往下拉抹,从中间部位向两边拉抹。",
		correct : "N",
    },{
		question : "492.画日妆时,腮红宜浅淡,如果肤色健康自然可以不涂。",
		correct : "Y",
    },{
		question : "493.表皮内有丰富的神经末梢,它可以帮助我们感知外界的事物。",
		correct : "Y",
    },{
		question : "494.美容师工作服可大红大绿过分渲染。",
		correct : "N",
    },{
		question : "495.美容师服装款式、色彩、质地都要从和谐统一中显出整体美感。",
		correct : "Y",
    },{
		question : "496.美容师在工作时语音应该清晰,音量要适中。",
		correct : "Y",
    },{
		question : "497.修饰类化妆品的特点是具有较强的美化修饰性。",
		correct : "Y",
    },{
		question : "498.冻蜡适用于敏感部位皮肤脱毛。",
		correct : "Y",
    },{
		question : "499.在奥桑蒸面时,喷口与面距离越近,杀菌越强。",
		correct : "N",
    },{
		question : "500.在粘假睫毛时根部涂上睫毛胶,但避免涂得过多,以防外溢。",
		correct : "Y",
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
		choiceA.style.backgroundColor = "white";
		choiceB.style.backgroundColor = "white";

		choiceA.onclick = function() {checkAnswer("Y")};
		choiceB.onclick = function() {checkAnswer("N")};

    question.innerHTML = "<p>"+ q.question +"</p>";
	//qImg.innerHTML = "<img src="+ q.imgSrc +">";
    //choiceA.innerHTML = q.choiceA;
    //choiceB.innerHTML = q.choiceB;

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
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        //answerIsCorrect();
		counter.innerHTML = score+"/"+questions.length;
		count = 0;
		choiceA.onclick = function() {return false;};
		choiceB.onclick = function() {return false;};
		if (answer =="Y" ) {choiceA.style.backgroundColor = "lime";}
		if (answer =="N" ) {choiceB.style.backgroundColor = "lime";}
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
		if (questions[runningQuestion].correct =="Y" ) {choiceA.style.backgroundColor = "red";}
		if (questions[runningQuestion].correct =="N" ) {choiceB.style.backgroundColor = "red";}
		choiceA.onclick = function() {return false;};
		choiceB.onclick = function() {return false;};

		nextdiv.style.display = "none";		
		answerdiv.style.display = "block";
		answerdiv.innerHTML="錯誤, 答案: "+questions[runningQuestion].correct+"<br />點擊下一題";


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





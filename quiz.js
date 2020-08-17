// select all elements
const start = document.getElementById("start");
const start2 = document.getElementById("start2");
const start3 = document.getElementById("start3");
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
question : "1.职亚道德是整个( )的一个重要组成部分",
correct : "D",
choiceA : "A.社会素质",
choiceB : "B.国家层次",
choiceC : "C.行业水平",
choiceD : "D.人类道德",
},{
question : "2.职业理想贵在( )。",
correct : "B",
choiceA : "A.努力实践",
choiceB : "B.持之以恒",
choiceC : "C.技术精湛",
choiceD : "D.不断调整",
},{
question : "3.职业道德具有从厲性、职业性、稳定性，继承性、适用性以及（）等特点。",
correct : "C",
choiceA : "A.规范性",
choiceB : "B.强制性",
choiceC : "C.成人性",
choiceD : "D.发展性",
},{
question : "4.职业道德既是对本行业人员在职业活动中的（），又是行业对社会所负的道德责任与义务。",
correct : "A",
choiceA : "A.行为规定",
choiceB : "B.技术要求",
choiceC : "C.道德要求",
choiceD : "D.思想要求",
},{
question : "5.容师的职业道德是指美容师在美容工作中所应遵循的与其（）相适应的行为规范。",
correct : "A",
choiceA : "A.职业活动",
choiceB : "B.职业水平",
choiceC : "C.职业习惯",
choiceD : "D.职业技能",
},{
question : "6.美容师的语言应当具备（）、语调亲切、声音悦耳的职业特点。",
correct : "D",
choiceA : "A.铿锵有力",
choiceB : "B.慢条斯理",
choiceC : "C.言辞犀利",
choiceD : "D.言辞文雅",
},{
question : "7.美容院应根据自身（）设计美容师的工作服装。",
correct : "B",
choiceA : "A.技术特点",
choiceB : "B.形象定位",
choiceC : "C.市场定位",
choiceD : "D.技术水平",
},{
question : "8.气质是指人相对稳定的个性特点、风格和（）。",
correct : "D",
choiceA : "A.学识",
choiceB : "B.性格",
choiceC : "C.血型",
choiceD : "D.气度",
},{
question : "9.功能服务是以服务者的技能和（）为消费者提供的服务。",
correct : "A",
choiceA : "A.技艺",
choiceB : "B.品德",
choiceC : "C.水平",
choiceD : "D.意识",
},{
question : "10.人体细胞是由细胞膜、细胞质（）构成的。",
correct : "B",
choiceA : "A.细胞器",
choiceB : "B.细胞核",
choiceC : "C.细胞粒",
choiceD : "D.细胞基",
},{
question : "11.细胞通过（)维持生命活动。",
correct : "D",
choiceA : "A.修复发育",
choiceB : "B.自我分解",
choiceC : "C.自我繁殖",
choiceD : "D.新陈代谢",
},{
question : "12.()的分泌物称为激素。",
correct : "B",
choiceA : "A.甲状腺",
choiceB : "B.内分泌腺",
choiceC : "C.皮脂腺",
choiceD : "D.性腺",
},{
question : "13.细胞膜是包裹在细胞表面的（）。",
correct : "B",
choiceA : "A.透明膜",
choiceB : "B.半透明膜",
choiceC : "C.不透明膜",
choiceD : "D.纤维膜",
},{
question : "14.细胞质叉称细胞浆，是细胞新陈代谢及（）的重要场所。",
correct : "D",
choiceA : "A.细胞生长",
choiceB : "B.细胞繁殖",
choiceC : "C.生长机能",
choiceD : "D.物质合成",
},{
question : "15.细胞通过（)的方式进行繁殖。",
correct : "C",
choiceA : "A.自我合成",
choiceB : "B.自我更新",
choiceC : "C.有丝分裂",
choiceD : "D.新陈代谢",
},{
question : "16.上皮钽织的特点是细胞结合得十分紧密，（）很少。",
correct : "A",
choiceA : "A.细胞间质",
choiceB : "B.毛细血管",
choiceC : "C.外分泌腺",
choiceD : "D.内分泌腺",
},{
question : "17.分泌作用是细胞把它（）中的一部分物质排出来。",
correct : "B",
choiceA : "A.细胞核",
choiceB : "B.细胞质",
choiceC : "C.细胞膜",
choiceD : "D.细胞器",
},{
question : "18.结缔组织的主要特点是细胞分布（	),细胞间质较多。",
correct : "D",
choiceA : "A.较密",
choiceB : "B.很密",
choiceC : "C.较松",
choiceD : "D.很松",
},{
question : "19.肌肉组织主要由肌肉细胞和少量 (	)组成。",
correct : "C",
choiceA : "A.肌纤维",
choiceB : "B.脂肪组织",
choiceC : "C.结缔组织",
choiceD : "D.随意肌	",
},{
question : "20.不随意肌受（）支配，不受人的意志控制。",
correct : "B",
choiceA : "A.大脑神经",
choiceB : "B.内脏神经",
choiceC : "C.肢体神经",
choiceD : "D.神经元",
},{
question : "21•平滑肌是不随意肌，收缩（）。",
correct : "A",
choiceA : "A.缓慢而持久",
choiceB : "B.快而有力",
choiceC : "C.缓慢而有力",
choiceD : "D.快而持久",
},{
question : "22.骨骼肌是一种随意肌，收缩（）。",
correct : "C",
choiceA : "A.快而持久",
choiceB : "B.缓慢而有力",
choiceC : "C.快而有力",
choiceD : "D.缓慢而持久",
},{
question : "23.心肌能使心脏有效地收缩，维持全身的（）。",
correct : "D",
choiceA : "A.营养供给",
choiceB : "B.能置平衡",
choiceC : "C.氧气供应",
choiceD : "D.血液循环",
},{
question : "24.神经细胞具有接受剌激和（）的作用。",
correct : "B",
choiceA : "A.释放能量",
choiceB : "B.传导兴奋",
choiceC : "C.传导抑制",
choiceD : "D.分解压力",
},{
question : "25.颅骨中除下颌骨和（）外，其他都牢固地结合在一起。",
correct : "C",
choiceA : "A.鼻骨",
choiceB : "B.上颌骨",
choiceC : "C.舌骨",
choiceD : "D.颧骨",
},{
question : "26.人体颈部的骨骼称为颈椎骨，共有（	)块。",
correct : "C",
choiceA : "A.5",
choiceB : "B.6",
choiceC : "C.7",
choiceD : "D.8",	
},{
question : "27.头肌可分为表情肌和（）。",
correct : "B",
choiceA : "A.额肌",
choiceB : "B.咀嚼肌",
choiceC : "C.颊肌",
choiceD : "D.咬肌",
},{
question : "28.表情肌主要分布在眼、鼻、（）周围。",
correct : "C",
choiceA : "A.胸部",
choiceB : "B.颈部",
choiceC : "C.口部",
choiceD : "D.手部",
},{
question : "29.咀嚼肌分布在（）周围。",
correct : "B",
choiceA : "A.上下颌骨",
choiceB : "B.下颌关节",
choiceC : "C.颧弓",
choiceD : "D.颞窝",
},{
question : "30.经常烦闷、忧虑的人容易出现（）。",
correct : "B",
choiceA : "A.鱼尾纹",
choiceB : "B.'川' 字纹",
choiceC : "C.皱纹",
choiceD : "D.色斑",
},{
question : "31.表皮内含有丰富的（）可以帮助我们感知外界的刺激。",
correct : "C",
choiceA : "A.血管",
choiceB : "B.皮脂腺",
choiceC : "C.神经末梢",
choiceD : "D.汗腺",
},{
question : "32.从一个基底細胞产生，到最後變成皮屑脫落大約需要（）天。",
correct : "C",
choiceA : "A.14",
choiceB : "B.18",
choiceC : "C.28",
choiceD : "D.30",
},{
question : "33.基底层由基底细胞和（)构成。",
correct : "A",
choiceA : "A.黑色素细胞",
choiceB : "B.角化细胞",
choiceC : "C.菱形细胞",
choiceD : "D.多角细胞",
},{
question : "34.胶原纤维具有一定的（），起抗牵拉作用。",
correct : "C",
choiceA : "A.弹性",
choiceB : "B.粘性",
choiceC : "C.伸缩性",
choiceD : "D.流动性",
},{
question : "35.皮下组织主要由大量的（）和疏松的结缔绀织构成。",
correct : "B",
choiceA : "A.基底细胞",
choiceB : "B.脂肪细胞",
choiceC : "C.基质",
choiceD : "D.纤维组织",
},{
question : "36.小汗腺由腺体和（）两部分组成。",
correct : "C",
choiceA : "A.血管",
choiceB : "B.纤维",
choiceC : "C.导管",
choiceD : "D.神经",
},{
question : "37.大汗腺的导管开口于（）。",
correct : "D",
choiceA : "A.皮肤表面",
choiceB : "B.真皮层",
choiceC : "C.皮下组织",
choiceD : "D.毛囊",
},{
question : "38.皮脂腺的分布以（）最多。",
correct : "B",
choiceA : "A.前胸",
choiceB : "B.头面部",
choiceC : "C.背部",
choiceD : "D.脚掌",
},{
question : "39.皮脂腺的分泌功能受（）和肾上腺皮质激素的调节。",	
correct : "A",
choiceA : "A.雄性激素",
choiceB : "B.雌性激素",
choiceC : "C.脂肪酸",
choiceD : "D.磷脂",
},{
question : "40•人体毛发的主要成分是（)。",
correct : "C",
choiceA : "A.黑色素细胞",
choiceB : "B.蛋白质",
choiceC : "C.角蛋白",
choiceD : "D.纤维",
},{
question : "41.人每天正常脱发一般不超过（	)根。",
correct : "A",
choiceA : "A.100",
choiceB : "B.200",
choiceC : "C.300",
choiceD : "D.400",
},{
question : "42•皮肤的呼吸量大约为肺的（	)。",
correct : "A",
choiceA : "A.l%",
choiceB : "B.2%",
choiceC : "C.3%",
choiceD : "D.5%",
},{	
question : "43.皮肤对物质的吸收能力与其理化性质有关，其中（）物质容易被皮肤吸收。",
correct : "B",
choiceA : "A.水溶性",
choiceB : "B.脂溶性",
choiceC : "C.酸性",
choiceD : "D.碱性",
},{
question : "44.皮肤是糖的储库，能调节（）的浓度。",
correct : "D",
choiceA : "A.白血球",
choiceB : "B.红血球",
choiceC : "C.血液",
choiceD : "D.血糖",
},{
question : "45.( )皮肤皮脂分泌量多，容易生粉刺、痤疮。",
correct : "C",
choiceA : "A.千性",
choiceB : "B.中性",
choiceC : "C.油性",
choiceD : "D.敏感性",
},{
question : "46.根据各肌肉（）的不同特点，可分为随意肌和不随意肌。",
correct : "C",
choiceA : "A.形状",
choiceB : "B.位置",
choiceC : "C.运动",
choiceD : "D.组织",
},{
question : "47.人的头部骨.骼称为颅骨，共有（	)块。",
correct : "D",
choiceA : "A.32",
choiceB : "B.28",
choiceC : "C.26",
choiceD : "D.23",
},{
question : "48.成年人全身皮肤面积为（）平方米。",
correct : "B",
choiceA : "A.1.0 ~ 1.5",
choiceB : "B.1.5 ~ 2.0",
choiceC : "C.1.8 ~ 2.3",
choiceD : "D.2.0 ~ 2.5",
},{
question : "49.皮肤由外向内分为三层：表皮，	真皮、（）。",
correct : "C",
choiceA : "A.皮下脂肪",
choiceB : "B.角质层",
choiceC : "C.皮下组织",	
choiceD : "D.基底层",
},{
question : "50.表皮由外向内分为5层: 角质层、透明层、（ ）、棘层、基底层。",
correct : "B",
choiceA : "A.乳头盾",
choiceB : "B.颗粒层",
choiceC : "C.网状层",
choiceD : "D.脂肪层",
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
		choiceC.style.backgroundColor = "white";
		choiceD.style.backgroundColor = "white";
		choiceA.onclick = function() {checkAnswer("A")};
		choiceB.onclick = function() {checkAnswer("B")};
		choiceC.onclick = function() {checkAnswer("C")};
		choiceD.onclick = function() {checkAnswer("D")};
    question.innerHTML = "<p>"+ q.question +"</p>";
//    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
	}
	else {
        scoreRender();
			
	}	
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
//  start2.style.display = "none";
//	start3.style.display = "none";
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
		if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
		}else{
        // end the quiz and show the score
        //clearInterval(TIMER);
        scoreRender();
		}

	}else{
        // answer is wrong
        // change progress color to red
		if (questions[runningQuestion].correct =="A" ) {choiceA.style.backgroundColor = "red";}
		if (questions[runningQuestion].correct =="B" ) {choiceB.style.backgroundColor = "red";}
		if (questions[runningQuestion].correct =="C" ) {choiceC.style.backgroundColor = "red";}
		if (questions[runningQuestion].correct =="D" ) {choiceD.style.backgroundColor = "red";}
		choiceA.onclick = function() {return false;};
		choiceB.onclick = function() {return false;};
		choiceC.onclick = function() {return false;};
		choiceD.onclick = function() {return false;};
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





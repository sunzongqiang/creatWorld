window.onload=function(){
    var demo=new Vue({
        el:'#app',
        data:{
            title:'学生',
			stuName:'小明',
			result: '',
			count:0,
			num:'',
			arry:[],
			show:false,
			show1:false,
			shows:false,
			card:'',
			city:'',
			age:'',
			name:'孙宗强',
			sex:'',
			birthday:'',
			sum:'',
			sushus:'',
			students:
				[{
				 "number": "0001",
				  "name": "小刚",
				  "age": "10",
				  "sex": "男",
				  "tel":"17862514420",
					"brife":"静坐季节的窗前，在所有明媚的掩映下，掬一盏水色，研一滴淡墨，心里的念便渐渐生成了文字。这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
				,"img":"../img/book1.jpg",
				"progress":"90",
				"progressbarstyle":"success",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"success"
				}, {
				 "number": "0002",
				  "name": "小红",
				  "age": "10",
				  "sex": "女",
				  "tel":"17862514420",
						"brife":"携灵魂起舞在情感的前言。"
					,"img":"../img/book3.jpg",
					"progress":"60",
					"progressbarstyle":"info",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"warning"

				}, {
				  "number": "0003",
				  "name": "小名",
				  "age": "10",
				  "sex": "男",
				  "tel":"17862514420",
						"brife":"静坐季节的窗前，心里的念便渐渐生成了文字。这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
					,"img":"../img/book2.jpg",
					"progress":"30",
					"progressbarstyle":"warning",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"info"

				}, {
				  "number": "0004",
				  "name": "小丽",
				  "age": "10",
				  "sex": "女",
				  "tel":"17862514420",
						"brife":"静坐季节的窗前，在所有明媚的掩映下，掬一盏水色，研一滴淡墨，心里的念便渐渐生成了文字。这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
					,"img":"../img/book1.jpg",
					"progress":"10",
					"progressbarstyle":"danger",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"success"


				},{
				 "number": "0001",
				  "name": "小刚",
				  "age": "10",
				  "sex": "男",
				  "tel":"17862514420",
						"brife":"这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
						,"img":"../img/book4.jpg",
					"progress":"100",
					"progressbarstyle":"success",
					"unsuccessprogressbarstyle":"",
					"important":"warning"
					

				}, {
				 "number": "0002",
				  "name": "小红",
				  "age": "10",
				  "sex": "女",
				  "tel":"17862514420",
						"brife":"静坐季节的窗前，在所有明媚的掩映下，掬一盏水色，研一滴淡墨，心里的念便渐渐生成了文字。这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
					,"img":"../img/book3.jpg",
					"progress":"10",
					"progressbarstyle":"danger",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"info"

				}, {
				  "number": "0003",
				  "name": "小名",
				  "age": "10",
				  "sex": "男",
				  "tel":"17862514420",
						"brife":"静坐季节的窗前，携灵魂起舞在情感的前言。"
					,"img":"../img/book2.jpg",
					"progress":"10",
					"progressbarstyle":"danger",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"danger"

				}, {
				  "number": "0004",
				  "name": "小丽",
				  "age": "10",
				  "sex": "女",
				  "tel":"17862514420",
						"brife":"静坐季节的窗前，在所有明媚的掩映下，掬一盏水色，研一滴淡墨，心里的念便渐渐生成了文字。这一刻，摒弃灯红酒绿的纷扰，忘却雾里看花的虚幻，思绪渐入安定，弹奏一曲羽化如诗的动人乐章，携灵魂起舞在情感的前言。"
					,"img":"../img/book1.jpg",
					"progress":"10",
					"progressbarstyle":"danger",
					"unsuccessprogressbarstyle":"progress-striped",
					"important":"success"

				}
				]
				
				
        },
        methods:{
            makeActive:function(item){
                this.title=item;
            },
            isPrime: function(number){

//判断输入是否为number类型，是否为整数

//      if (typeof number!=='number'||!Number.isInteger(number))
//     {
//             return false;
//     };

//小于2都不是素数

      if (number<2) {return false};

//2是素数，被2整除的都不是素数

       if (number===2) {
               return true
       }else if(number%2===0){
               return false;
       };

//依次判断是否能被奇数整除，最大循环为数值的开方

        var squareRoot=Math.sqrt(number);
         for(var i=3;i<=squareRoot;i+=2){
          if (number%i===0) {
                return false;
           };
      }
      return true;
}
,
//          isPrime: function(n) {
//				if(n <= 3) {
//					return n > 1
//				}
//				if(n % 2 == 0 || n % 3 == 0) {
//					return false;
//				}
//				for(var i = 5; i * i <= n; i += 6) {
//					if(n % i == 0 || n % (i + 2) == 0) {
//						return false
//					}
//				}
//				return true;
//			},
            isFun:function(str){
				this.sushus=''
				this.count=0
			    for(var i=0;i<100000000;i++){
				if(this.isPrime(i)){
//						this.sushus+=(i+' , ');
					this.count++;
				}
				}
				this.sushus+=('共有：'+this.count)
				this.shows=true;
			},
             isCardNo: function(code) {
            	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
            	 var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
            var tip = "";
            var pass= true;
            if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                tip = "身份证号格式错误";
                pass = false;
            }

           else if(!city[code.substr(0,2)]){
                tip = "地址编码错误";
                pass = false;
            }
            else{
            	if(code.substr(16,1)%2==1){
            		this.sex='男';
            	}else{
            		this.sex='女';
            	}
            	this.city=city[code.substr(0,2)];
                //18位身份证需要验证最后一位校验位
                if(code.length == 18){
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        tip = "校验位错误";
                        pass =false;
                    }
                }
            }
            if(!pass){
            	alert(tip);
            } else{
            	
            	
            	this.getAge(this.card);
            return pass;
            }
            
            },
            getAge: function(identityCard) {
         		var strBirthday = "";
         		var len = identityCard.length;
         		if(len == 18) //处理18位的身份证号码从号码中得到生日和性别代码
         		{
         			strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
         		}
         		if(len == 15) {
         			strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
         		}
         		this.birthday = strBirthday;
         		//时间字符串里，必须是“/”
         		var birthDate = new Date(strBirthday);
         		var nowDateTime = new Date();
         		var age = nowDateTime.getFullYear() - birthDate.getFullYear();
         		//再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
         		if(nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
         			age--;
         		}
         		this.age= age;
         		this.show1=true;
            },
            change: function(num){
            	this.arry=[];
            	this.count=1;
            	if(num!=''&& num!='0'){
            		this.compute(num);
            	}else{
            		alert("不能为空或0，请重新输入！")
            	}
            	
            	
            },
			compute: function(num) {
				var b = '';
				var c = '';
				for(var i = 0; i < num.length; i++) {
					b += num.split('').sort().toString().split(',')[i];
					c += num.split('').sort().reverse().toString().split(',')[i];
				}
				console.log(b+','+c);
				if(b==c){
					alert("每位数字不能都一样，请重新输入！");return;
				}
				this.arry.push('第'+this.count+'次： '+c+' - '+b+' = '+(c-b));
				this.result = (c - b)+'';
				if(this.result == 6174) {
					this.show=false;
					this.show=true;
					
				} else {
					this.count++;
					if(this.count>9000){
						this.arry.push('无结果！');
						this.show=false;
					    this.show=true;
						alert("已经计算了9000次了，还是没有想要的结果！宝宝生气了，不玩了！");
						
						return;
					}
					this.compute(this.result);
				}
			}
        }
    });
}

    


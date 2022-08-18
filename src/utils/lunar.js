/**
 * 鍐滃巻銆佽妭鍋囨棩
 */

const lunarInfo = [
  19416, 19168, 42352, 21717, 53856, 55632,
  91476, 22176, 39632, 21970, 19168, 42422,
  42192, 53840, 119381, 46400, 54944, 44450,
  38320, 84343, 18800, 42160, 46261, 27216,
  27968, 109396, 11104, 38256, 21234, 18800,
  25958, 54432, 59984, 28309, 23248, 11104,
  100067, 37600, 116951, 51536, 54432, 120998,
  46416, 22176, 107956, 9680, 37584, 53938,
  43344, 46423, 27808, 46416, 86869, 19872,
  42448, 83315, 21200, 43432, 59728, 27296,
  44710, 43856, 19296, 43748, 42352, 21088,
  62051, 55632, 23383, 22176, 38608, 19925,
  19152, 42192, 54484, 53840, 54616, 46400,
  46496, 103846, 38320, 18864, 43380, 42160,
  45690, 27216, 27968, 44870, 43872, 38256,
  19189, 18800, 25776, 29859, 59984, 27480,
  21952, 43872, 38613, 37600, 51552, 55636,
  54432, 55888, 30034, 22176, 43959, 9680,
  37584, 51893, 43344, 46240, 47780, 44368,
  21977, 19360, 42416, 86390, 21168, 43312,
  31060, 27296, 44368, 23378, 19296, 42726,
  42208, 53856, 60005, 54576, 23200, 30371,
  38608, 19415, 19152, 42192, 118966, 53840,
  54560, 56645, 46496, 22224, 21938, 18864,
  42359, 42160, 43600, 111189, 27936, 44448
];

// 鍥藉巻鑺傛棩 *琛ㄧず鏀惧亣鏃�
const sFtv = [
  '0101*鍏冩棪 鏂板勾',
  '0106 涓浗绗�13浜夸汉鍙ｆ棩',
  '0108 鍛ㄦ仼鏉ラ€濅笘绾康鏃�',
  '0115 閲婅喀濡傛潵鎴愰亾鏃�',
  '0121 鍒楀畞閫濅笘绾康鏃� 鍥介檯澹版彺鍗楅潪鏃� 寮ュ嫆浣涜癁杈�',
  '0202 涓栫晫婀垮湴鏃�',
  '0207 浜屼竷澶х舰宸ョ邯蹇垫棩',
  '0210 鍥介檯姘旇薄鑺�',
  '0214 鎯呬汉鑺�',
  '0215 涓浗12浜夸汉鍙ｆ棩',
  '0219 閭撳皬骞抽€濅笘绾康鏃�',
  '0221 鍥介檯姣嶈鏃� 鍙嶅娈栨皯鍒跺害鏂椾簤鏃�',
  '0222 鑻楁棌鑺︾瑱鑺�',
  '0224 绗笁涓栫晫闈掑勾鏃�',
  '0228 涓栫晫灞呬綇鏉′欢璋冩煡鏃�',
  '0301 鍥介檯娴疯惫鏃�',
  '0303 鍏ㄥ浗鐖辫€虫棩',
  '0305 瀛﹂浄閿嬬邯蹇垫棩 涓浗闈掑勾蹇楁効鑰呮湇鍔℃棩',
  '0308 濡囧コ鑺�',
  '0309 淇濇姢姣嶄翰娌虫棩',
  '0311 鍥介檯灏婁弗灏婃暚鏃�',
  '0312 妞嶆爲鑺�&瀛欎腑灞遍€濅笘绾康鏃�',
  '0314 鍥介檯璀﹀療鏃� 鐧借壊鎯呬汉鑺�',
  '0315 娑堣垂鑰呮潈鐩婃棩',
  '0316 鎵嬫媺鎵嬫儏绯昏传鍥板皬浼欎即鍏ㄥ浗缁熶竴琛屽姩鏃�',
  '0317 涓浗鍥藉尰鑺� 鍥介檯鑸捣鏃�',
  '0318 鍏ㄥ浗绉戞妧浜烘墠娲诲姩鏃�',
  '0321 涓栫晫妫灄鏃� 涓栫晫鍎挎瓕鏃� 涓栫晫鐫＄湢鏃�',
  '0322 涓栫晫姘存棩',
  '0323 涓栫晫姘旇薄锟斤拷锟�',
  '0324 涓栫晫闃叉不缁撴牳鐥呮棩',
  '0325 鍏ㄥ浗涓皬瀛︾敓瀹夊叏鏁欒偛鏃�',
  '0329 涓浗榛勮姳宀椾竷鍗佷簩鐑堝＋娈夐毦绾康',
  '0330 宸村嫆鏂潶鍥藉湡鏃�',
  '0401 鎰氫汉鑺�&鍏ㄥ浗鐖卞浗鍗敓杩愬姩鏈�(鍥涙湀)',
  '0402 鍥介檯鍎跨鍥句功鏃�',
  '0407 涓栫晫鍗敓鏃�',
  '0411 涓栫晫甯曢噾妫梾鏃�',
  '0421 鍏ㄥ浗浼佷笟瀹舵椿鍔ㄦ棩',
  '0422 涓栫晫鍦扮悆鏃� 涓栫晫娉曞緥鏃�',
  '0423 涓栫晫鍥句功鍜岀増鏉冩棩',
  '0424 浜氶潪鏂伴椈宸ヤ綔鑰呮棩 涓栫晫闈掑勾鍙嶅娈栨皯涓讳箟鏃�',
  '0425 鍏ㄥ浗棰勯槻鎺ョ瀹ｄ紶鏃�',
  '0426 涓栫晫鐭ヨ瘑浜ф潈鏃�',
  '0430 涓栫晫浜ら€氬畨鍏ㄥ弽鎬濇棩',
  '0501*鍔冲姩鑺�&鍥介檯鍔冲姩鑺�',
  '0503 涓栫晫鍝枠鏃� 涓栫晫鏂伴椈鑷敱鏃�',
  '0504 闈掑勾鑺�&涓浗浜斿洓闈掑勾鑺� 绉戞妧浼犳挱鏃�',
  '0505 纰樼己涔忕梾闃叉不鏃� 鏃ユ湰鐢峰鑺�',
  '0508 涓栫晫绾㈠崄瀛楁棩',
  '0512 鍥介檯鎶ゅ＋鑺�',
  '0515 鍥介檯瀹跺涵鏃�',
  '0517 鍥介檯鐢典俊鏃�',
  '0518 鍥介檯鍗氱墿棣嗘棩',
  '0520 鍏ㄥ浗瀛︾敓钀ュ吇鏃� 鍏ㄥ浗姣嶄钩鍠傚吇瀹ｄ紶鏃�',
  '0523 鍥介檯鐗涘ザ鏃�',
  '0526 涓栫晫鍚戜汉浣撴潯浠舵寫鎴樻棩',
  '0530 涓浗鈥滀簲鍗呪€濊繍鍔ㄧ邯蹇垫棩',
  '0531 涓栫晫鏃犵儫鏃� 鑻卞浗閾惰浼戝亣鏃�',
  '0601 鍎跨鑺�&鍥介檯鍎跨鑺�',
  '0605 涓栫晫鐜淇濇姢鏃�',
  '0614 涓栫晫鐚鑰呮棩',
  '0617 闃叉不鑽掓紶鍖栧拰骞叉棻鏃�',
  '0620 涓栫晫闅炬皯鏃�',
  '0622 涓浗鍎跨鎱堝杽娲诲姩鏃�',
  '0623 鍥介檯濂ユ灄鍖瑰厠鏃�',
  '0625 鍏ㄥ浗鍦熷湴鏃�',
  '0626 鍥介檯绂佹瘨鏃� 鍥介檯瀹珷鏃�',
  '0630 涓栫晫闈掑勾鑱旀鑺�',
  '0701 寤哄厷鑺�&棣欐腐鍥炲綊绾康鏃� 涓叡璇炶景 涓栫晫寤虹瓚鏃�',
  '0702 鍥介檯浣撹偛璁拌€呮棩',
  '0706 鏈卞痉閫濅笘绾康鏃�',
  '0707 鎶楁棩鎴樹簤绾康鏃�',
  '0711 涓栫晫浜哄彛鏃� 涓浗鑸捣鏃�',
  '0726 涓栫晫璇垱绔嬫棩',
  '0728 绗竴娆′笘鐣屽ぇ鎴樼垎鍙�',
  '0730 闈炴床濡囧コ鏃�',
  '0801 寤哄啗鑺�&涓浗浜烘皯瑙ｆ斁鍐涘缓鍐涜妭',
  '0805 鎭╂牸鏂€濅笘绾康鏃�',
  '0806 鍥介檯鐢靛奖鑺�',
  '0808 涓浗鐢峰瓙鑺�(鐖哥埜鑺�)',
  '0812 鍥介檯闈掑勾鑺�',
  '0813 鍥介檯宸︽拠瀛愭棩',
  '0815 鎶楁棩鎴樹簤鑳滃埄绾康',
  '0826 鍏ㄥ浗寰嬪笀鍜ㄨ鏃�',
  '0902 鏃ユ湰绛剧讲鏃犳潯浠舵姇闄嶄功鏃�',
  '0903 涓浗鎶楁棩鎴樹簤鑳滃埄绾康鏃�',
  '0905 鐟炲＋钀ㄦ案涓笘绾妭',
  '0906 甯曠摝缃楄拏鍘讳笘',
  '0908 鍥介檯鎵洸鏃� 鍥介檯鏂伴椈宸ヤ綔鑰呮棩',
  '0909 姣涙辰涓滈€濅笘绾康鏃�',
  '0910 鏁欏笀鑺�&涓浗鏁欏笀鑺� 涓栫晫棰勯槻鑷潃鏃�',
  '0914 涓栫晫娓呮磥鍦扮悆鏃�',
  '0916 鍥介檯鑷哀灞備繚鎶ゆ棩 涓浗鑴戝仴搴锋棩',
  '0918 涔澛蜂竴鍏簨鍙樼邯蹇垫棩',
  '0920 鍥介檯鐖辩墮鏃�',
  '0921 涓栫晫鍋滅伀鏃� 棰勯槻涓栫晫鑰佸勾鎬х棿鍛嗗浼犳棩',
  '0927 涓栫晫鏃呮父鏃�',
  '0928 瀛斿瓙璇炶景',
  '0930 鍥介檯缈昏瘧鏃�',
  '1001*鍥藉簡鑺�&涓栫晫闊充箰鏃� 鍥介檯鑰佷汉鑺�',
  '1002*鍥藉簡鑺傚亣鏃� 鍥介檯鍜屽钩涓庢皯涓昏嚜鐢辨枟浜夋棩',
  '1003*鍥藉簡鑺傚亣鏃�',
  '1004 涓栫晫鍔ㄧ墿鏃�',
  '1005 鍥介檯鏁欏笀鑺�',
  '1006 涓浗鑰佸勾鑺�',
  '1008 鍏ㄥ浗楂樿鍘嬫棩 涓栫晫瑙嗚鏃�',
  '1009 涓栫晫閭斂鏃� 涓囧浗閭仈鏃�',
  '1010 杈涗亥闈╁懡绾康鏃� 涓栫晫绮剧鍗敓鏃�',
  '1013 涓栫晫淇濆仴鏃� 鍥介檯鏁欏笀鑺�',
  '1014 涓栫晫鏍囧噯鏃�',
  '1015 鍥介檯鐩蹭汉鑺�(鐧芥墜鏉栬妭)',
  '1016 涓栫晫绮鏃�',
  '1017 涓栫晫娑堥櫎璐洶鏃�',
  '1020 涓栫晫楠ㄨ川鐤忔澗鏃�',
  '1022 涓栫晫浼犵粺鍖昏嵂鏃�',
  '1024 鑱斿悎鍥芥棩 涓栫晫鍙戝睍鏂伴椈鏃�',
  '1028 涓浗鐢锋€у仴搴锋棩',
  '1031 涓囧湥鑺� 涓栫晫鍕や凯鏃�',
  '1102 杈炬懇绁栧笀鍦ｈ癁',
  '1106 鏌寸澶柉鍩洪€濅笘鎮煎康鏃�',
  '1107 鍗佹湀绀句細涓讳箟闈╁懡绾康鏃�',
  '1108 涓浗璁拌€呮棩',
  '1109 鍏ㄥ浗娑堥槻瀹夊叏瀹ｄ紶鏁欒偛鏃�',
  '1110 涓栫晫闈掑勾鑺�',
  '1111 鍏夋鑺� 鍥介檯绉戝涓庡拰骞冲懆',
  '1112 瀛欎腑灞辫癁杈扮邯蹇垫棩',
  '1114 涓栫晫绯栧翱鐥呮棩',
  '1115 娉板浗澶ц薄鑺�',
  '1117 鍥介檯澶у鐢熻妭 涓栫晫瀛︾敓鑺� 涓栫晫鎴掔儫鏃�',
  '1120 涓栫晫鍎跨鏃�',
  '1121 涓栫晫闂拷锟斤拷鏃� 涓栫晫鐢佃鏃�',
  '1129 鍥介檯澹版彺宸村嫆鏂潶浜烘皯鍥介檯鏃�',
  '1201 涓栫晫鑹炬粙鐥呮棩',
  '1202 搴熼櫎涓€鍒囧舰寮忓ゴ褰逛笘鐣屾棩',
  '1203 涓栫晫娈嬬柧浜烘棩',
  '1204 鍏ㄥ浗娉曞埗瀹ｄ紶鏃�',
  '1205 鍥介檯缁忔祹鍜岀ぞ浼氬彂灞曞織鎰夸汉鍛樻棩 涓栫晫寮辫兘浜哄＋鏃�',
  '1207 鍥介檯姘戣埅鏃�',
  '1208 鍥介檯鍎跨鐢佃鏃�',
  '1209 涓栫晫瓒崇悆鏃� 涓€浜屄蜂節杩愬姩绾康鏃�',
  '1210 涓栫晫浜烘潈鏃�',
  '1211 涓栫晫闃叉鍝枠鏃�',
  '1212 瑗垮畨浜嬪彉绾康鏃�',
  '1213 鍗椾含澶у睜鏉€绾康鏃�',
  '1214 鍥介檯鍎跨骞挎挱鐢佃鑺�',
  '1215 涓栫晫寮哄寲鍏嶇柅鏃�',
  '1220 婢抽棬鍥炲綊绾康',
  '1221 鍥介檯绡悆鏃�',
  '1224 骞冲畨澶�',
  '1225 鍦ｈ癁鑺�',
  '1226 姣涙辰涓滆癁杈扮邯蹇垫棩&鑺傜ぜ鏃�',
  '1229 鍥介檯鐢熺墿澶氭牱鎬ф棩'
]

// 鍐滃巻鑺傛棩 *琛ㄧず鏀惧亣鏃�
const lFtv = [
  '0101*鏄ヨ妭 澶у勾鍒濅竴',
  '0102*鍒濅簩',
  '0115 鍏冨鑺�',
  '0505*绔崍鑺�',
  '0707 涓冨鎯呬汉鑺�',
  '0715 涓厓鑺�',
  '0815*涓鑺�',
  '0909 閲嶉槼鑺�',
  '1208 鑵婂叓鑺�',
  '1223 灏忓勾',
  '0100*闄ゅ'
]

// 鏌愭湀鐨勭鍑犱釜鏄熸湡鍑�
const wFtv = [
  '0150 涓栫晫楹婚鏃�', // 涓€鏈堢殑鏈€鍚庝竴涓槦鏈熸棩锛堟湀鍊掓暟绗竴涓槦鏈熸棩锛�
  '0351 鍏ㄥ浗涓皬瀛︾敓瀹夊叏鏁欒偛鏃�',
  '0453 绉樹功鑺�',
  '0512 鍥戒笘鐣屽摦鍠樻棩',
  '0520 姣嶄翰鑺�&鍥介檯姣嶄翰鑺� 鏁戝姪璐洶姣嶄翰鏃�',
  '0530 鍏ㄥ浗鍔╂畫鏃�',
  '0532 鍥介檯鐗涘ザ鏃�',
  '0626 涓浗鏂囧寲閬椾骇鏃�',
  '0630 鐖朵翰鑺�&鍥介檯鐖朵翰鑺�',
  '0716 鍥介檯鍚堜綔鑺�',
  '0730 琚ゴ褰瑰浗瀹跺懆',
  '0932 鍥介檯鍜屽钩鏃�',
  '0936 鍏ㄦ皯鍥介槻鏁欒偛鏃�',
  '0940 鍥介檯鑱嬩汉鑺� 涓栫晫鍎跨鏃�',
  '0950 涓栫晫娴蜂簨鏃� 涓栫晫蹇冭剰鐥呮棩',
  '1011 鍥介檯浣忔埧鏃� 涓栫晫寤虹瓚鏃� 涓栫晫浜哄眳鏃�',
  '1023 鍥介檯鍑忚交鑷劧鐏惧鏃�(鍑忕伨鏃�)',
  '1024 涓栫晫瑙嗚鏃�',
  '1144 鎰熸仼鑺�',
  '1220 鍥介檯鍎跨鐢佃骞挎挱鏃�'
]

const solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const Gan = ['\u7532', '\u4e59', '\u4e19', '\u4e01', '\u620a', '\u5df1', '\u5e9a', '\u8f9b', '\u58ec', '\u7678']
const Zhi = ['\u5b50', '\u4e11', '\u5bc5', '\u536f', '\u8fb0', '\u5df3', '\u5348', '\u672a', '\u7533', '\u9149', '\u620c', '\u4ea5']
// let Animals = ['\u9f20', '\u725b', '\u864e', '\u5154', '\u9f99', '\u86c7', '\u9a6c', '\u7f8a', '\u7334', '\u9e21', '\u72d7', '\u732a'];
const solarTerm = ['\u5c0f\u5bd2', '\u5927\u5bd2', '\u7acb\u6625', '\u96e8\u6c34', '\u60ca\u86f0', '\u6625\u5206', '\u6e05\u660e', '\u8c37\u96e8', '\u7acb\u590f', '\u5c0f\u6ee1', '\u8292\u79cd', '\u590f\u81f3', '\u5c0f\u6691', '\u5927\u6691', '\u7acb\u79cb', '\u5904\u6691', '\u767d\u9732', '\u79cb\u5206', '\u5bd2\u9732', '\u971c\u964d', '\u7acb\u51ac', '\u5c0f\u96ea', '\u5927\u96ea', '\u51ac\u81f3']
const sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]
const nStr1 = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u5341\u4e00', '\u5341\u4e8c']
const nStr2 = ['\u521d', '\u5341', '\u5eff', '\u5345', '\u3000']
// let monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

/*
var BG_DATA = {
  '绔嬫槬': 'http://img03.taobaocdn.com/tps/i3/T1JZWnXnJpXXXXXXXX-83-56.jpg',
  '鎯呬汉鑺�': 'http://img01.taobaocdn.com/tps/i1/T17cynXf0sXXXXXXXX-83-56.jpg',
  '濡囧コ鑺�': 'http://img01.taobaocdn.com/tps/i1/T1D0enXmJnXXXXXXXX-83-56.jpg',
  '妞嶆爲鑺�&瀛欎腑灞遍€濅笘绾康鏃�': 'http://img03.taobaocdn.com/tps/i3/T1Q0enXlxnXXXXXXXX-83-56.jpg',
  '娓呮槑': 'http://img04.taobaocdn.com/tps/i4/T1WIWnXmdpXXXXXXXX-83-56.jpg',
  '鍔冲姩鑺�&鍥介檯鍔冲姩鑺�': 'http://img04.taobaocdn.com/tps/i4/T1PcunXXltXXXXXXXX-83-56.jpg',
  '闈掑勾鑺�&涓浗浜斿洓闈掑勾鑺� 绉戞妧浼犳挱鏃�': 'http://img02.taobaocdn.com/tps/i2/T1qZGnXmhrXXXXXXXX-83-56.jpg',
  '鍎跨鑺�&鍥介檯鍎跨鑺�': 'http://img01.taobaocdn.com/tps/i1/T1XqafXepoXXXXXXXX-83-56.jpg',
  '闃叉不鑽掓紶鍖栧拰骞叉棻鏃�': 'http://img02.taobaocdn.com/tps/i2/T1XWafXedoXXXXXXXX-83-56.jpg',
  '\u7236\u4eb2\u8282': 'http://img03.taobaocdn.com/tps/i3/T1gGafXd4oXXXXXXXX-83-56.jpg',
  '\u7aef\u5348\u8282': 'http://img04.taobaocdn.com/tps/i4/T15synXgXsXXXXXXXX-83-56.jpg',
  '\u4e16\u754c\u4eba\u53e3\u65e5': 'http://img02.taobaocdn.com/tps/i2/T109egXeVnXXXXXXXX-83-56.jpg',
  '\u5927\u6691': 'http://img01.taobaocdn.com/tps/i1/T10SegXfXnXXXXXXXX-83-56.jpg',
  '\u5efa\u515a\u8282 \u9999\u6e2f\u56de\u5f52\u7eaa\u5ff5\u65e5  \u4e16\u754c\u5efa\u7b51\u65e5': 'http://img04.taobaocdn.com/tps/i4/T1NCegXfplXXXXXXXX-83-56.jpg',
  '\u6297\u65e5\u6218\u4e89\u7eaa\u5ff5\u65e5': 'http://img03.taobaocdn.com/tps/i3/T1MCegXgtnXXXXXXXX-83-56.jpg',
  '\u5efa\u519b\u8282': 'http://img01.taobaocdn.com/tps/i1/T1Er83XbdCXXXXXXXX-83-56.jpg',
  '\u5904\u6691': 'http://img04.taobaocdn.com/tps/i4/T1MbN3XeNBXXXXXXXX-83-56.jpg',
  '\u4e03\u5915\u60c5\u4eba\u8282': 'http://img03.taobaocdn.com/tps/i3/T12HN3XfpAXXXXXXXX-83-56.jpg',
  '\u6297\u65e5\u6218\u4e89\u80dc\u5229\u7eaa\u5ff5': 'http://img02.taobaocdn.com/tps/i2/T1EbJ3Xj8AXXXXXXXX-83-56.jpg',
  '\u6559\u5e08\u8282': 'http://img01.taobaocdn.com/tps/i1/T1jselXfhzXXXXXXXX-83-56.gif',
  '\u4e2d\u79cb\u8282': 'http://img04.taobaocdn.com/tps/i4/T1BIalXd8zXXXXXXXX-83-56.gif',
  '\u5b54\u5b50\u8bde\u8fb0': 'http://img02.taobaocdn.com/tps/i2/T1RIalXkJzXXXXXXXX-83-56.gif',
  '\u4e5d\u4e00\u516b\u4e8b\u53d8\u7eaa\u5ff5\u65e5': 'http://img04.taobaocdn.com/tps/i4/T1ucKnXfhrXXXXXXXX-83-56.jpg',
  '\u56fd\u5e86\u8282 \u4e16\u754c\u97f3\u4e50\u65e5 \u56fd\u9645\u8001\u4eba\u8282': 'http://img03.taobaocdn.com/tps/i3/T1LAilXjtyXXXXXXXX-83-56.jpg',
  '\u91cd\u9633\u8282 \u56fd\u9645\u51cf\u8f7b\u81ea\u7136\u707e\u5bb3\u65e5(\u51cf\u707e\u65e5)': 'http://img04.taobaocdn.com/tps/i4/T1Z0enXkpnXXXXXXXX-83-56.jpg',
  '\u8f9b\u4ea5\u9769\u547d\u7eaa\u5ff5\u65e5 \u4e16\u754c\u7cbe\u795e\u536b\u751f\u65e5': 'http://img01.taobaocdn.com/tps/i1/T1lcGnXmRrXXXXXXXX-83-56.jpg',
  '\u611f\u6069\u8282': 'http://img02.taobaocdn.com/tps/i2/T1OImnXhtpXXXXXXXX-83-56.jpg',
  '\u5b59\u4e2d\u5c71\u8bde\u8fb0': 'http://img02.taobaocdn.com/tps/i2/T1JdenXmXnXXXXXXXX-83-56.jpg',
  '\u6fb3\u95e8\u56de\u5f52\u7eaa\u5ff5': 'http://img03.taobaocdn.com/tps/i3/T1LsunXXFtXXXXXXXX-83-56.jpg',
  '\u51ac\u81f3': 'http://img03.taobaocdn.com/tps/i3/T1BsunXldrXXXXXXXX-83-56.jpg',
  '\u6bdb\u6cfd\u4e1c\u8bde\u8fb0': 'http://img03.taobaocdn.com/tps/i3/T1mIWnXjtpXXXXXXXX-83-56.jpg',
  '\u5723\u8bde\u8282': 'http://img01.taobaocdn.com/tps/i1/T1ksGnXfhrXXXXXXXX-83-56.jpg',
  '\u9664\u5915': 'http://img04.taobaocdn.com/tps/i4/T1odenXn4nXXXXXXXX-83-56.jpg',
  '\u6625\u8282': 'http://img01.taobaocdn.com/tps/i1/T16ZWnXkFpXXXXXXXX-83-56.jpg',
  '\u5143\u5bb5\u8282': 'http://img02.taobaocdn.com/tps/i2/T1BIWnXolpXXXXXXXX-83-56.jpg'
};
 */

function lYearDays(C) {
  let A, B = 348;
  for (A = 32768; A > 8; A >>= 1) {
    B += (lunarInfo[C - 1900] & A) ? 1 : 0
  }
  return (B + leapDays(C))
}

function leapDays(A) {
  if (leapMonth(A)) {
    return ((lunarInfo[A - 1900] & 65536) ? 30 : 29)
  } else {
    return (0)
  }
}

function leapMonth(A) {
  return (lunarInfo[A - 1900] & 15)
}

function monthDays(B, A) {
  return ((lunarInfo[B - 1900] & (65536 >> A)) ? 30 : 29)
}

function Lunar(F) {
  // let A = ''
  let D, C = 0,
    B = 0;
  // let E = new Date(1900, 0, 31)
  let G = Math.floor((F.getTime() + 2206425600000) / 86400000);
  // A += 'objDate=' + F.getTime() + ', new Date(1900,0,31)=' + E.getTime();
  // A += 'offset=' + G;
  this.dayCyl = G + 40;
  this.monCyl = 14;
  for (D = 1900; D < 2050 && G > 0; D++) {
    B = lYearDays(D);
    G -= B;
    this.monCyl += 12
  }
  if (G < 0) {
    G += B;
    D--;
    this.monCyl -= 12
  }
  this.year = D;
  this.yearCyl = D - 1864;
  C = leapMonth(D);
  this.isLeap = false;
  for (D = 1; D < 13 && G > 0; D++) {
    if (C > 0 && D === (C + 1) && this.isLeap === false) {
      --D;
      this.isLeap = true;
      B = leapDays(this.year)
    } else {
      B = monthDays(this.year, D)
    }
    if (this.isLeap === true && D === (C + 1)) {
      this.isLeap = false
    }
    G -= B;
    if (this.isLeap === false) {
      this.monCyl++
    }
  }
  if (G === 0 && C > 0 && D === C + 1) {
    if (this.isLeap) {
      this.isLeap = false
    } else {
      this.isLeap = true;
      --D;
      --this.monCyl
    }
  }
  if (G < 0) {
    G += B;
    --D;
    --this.monCyl
  }
  this.month = D;
  this.day = G + 1;
  // A += '\noffset=' + G + ', year=' + this.year + ', yearCyl=' + this.yearCyl + ', month=' + this.month + ',\n monthCyl=' + this.monthCyl + ', day=' + this.day + ', dayCyl=' + this.dayCyl;
  // console.log(A)
}

function solarDays(B, A) {
  if (A === 1) {
    return (((B % 4 === 0) && (B % 100 !== 0) || (B % 400 === 0)) ? 29 : 28)
  } else {
    return (solarMonth[A])
  }
}

function cyclical(A) {
  return (Gan[A % 10] + Zhi[A % 12])
}

function CalElement(A, G, J, B, F, D, E, H, C, I, K) {
  this.isToday = false;
  this.sYear = A;
  this.sMonth = G;
  this.sDay = J;
  this.week = B;
  this.lYear = F;
  this.lMonth = D;
  this.lDay = E;
  this.isLeap = H;
  this.cYear = C;
  this.cMonth = I;
  this.cDay = K;
  this.color = '';
  this.lunarFestival = '';
  this.solarFestival = '';
  this.solarTerms = ''
}

function sTerm(C, B) {
  const A = new Date((31556925974.7 * (C - 1900) + sTermInfo[B] * 60000) - 2208549300000);
  return (A.getUTCDate())
}

export function cDay(B) {
  let A;
  switch (B) {
    case 10:
      A = '\u521d\u5341';
      break;
    case 20:
      A = '\u4e8c\u5341';
      break;
    case 30:
      A = '\u4e09\u5341';
      break;
    default:
      A = nStr2[Math.floor(B / 10)];
      A += nStr1[B % 10]
  }
  return (A)
}

export function Calendar(N, F, tY, tM, tD) {
  let O, I, L, B, K = 1,
    C, M = 0,
    H, G;
  const D = new Array(3);
  let E = 0;
  let A = 0;
  O = new Date(N, F, 1);
  this.length = solarDays(N, F);
  this.firstWeek = O.getDay();
  for (let J = 0; J < this.length; J++) {
    if (K > M) {
      O = new Date(N, F, J + 1);
      I = new Lunar(O);
      L = I.year;
      B = I.month;
      K = I.day;
      C = I.isLeap;
      M = C ? leapDays(L) : monthDays(L, B);
      if (E === 0) {
        A = B
      }
      D[E++] = J - K + 1
    }
    this[J] = new CalElement(N, F + 1, J + 1, nStr1[(J + this.firstWeek) % 7], L, B, K++, C, cyclical(I.yearCyl), cyclical(I.monCyl), cyclical(I.dayCyl++));
    if ((J + this.firstWeek) % 7 === 0) {
      this[J].color = '#ff5f07'
    }
    if ((J + this.firstWeek) % 14 === 13) {
      this[J].color = '#ff5f07'
    }
  }
  H = sTerm(N, F * 2) - 1;
  G = sTerm(N, F * 2 + 1) - 1;
  this[H].solarTerms = solarTerm[F * 2];
  this[G].solarTerms = solarTerm[F * 2 + 1];
  if (F === 3) {
    this[H].color = '#ff5f07'
  }
  for (const J in sFtv) {
    if (sFtv[J].match(/^(\d{2})(\d{2})([\s\\*])(.+)$/)) {
      if (Number(RegExp.$1) === (F + 1)) {
        this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ' ';
        if (RegExp.$3 === '*') {
          this[Number(RegExp.$2) - 1].color = '#ff5f07'
        }
      }
    }
  }
  for (const J in wFtv) {
    if (wFtv[J].match(/^(\d{2})(\d)(\d)([\s\\*])(.+)$/)) {
      if (Number(RegExp.$1) === (F + 1)) {
        H = Number(RegExp.$2);
        G = Number(RegExp.$3);
        this[((this.firstWeek > G) ? 7 : 0) + 7 * (H - 1) + G - this.firstWeek] && (this[((this.firstWeek > G) ? 7 : 0) + 7 * (H - 1) + G - this.firstWeek].solarFestival += RegExp.$5 + ' ')
      }
    }
  }
  for (const J in lFtv) {
    if (lFtv[J].match(/^(\d{2})(.{2})([\s\\*])(.+)$/)) {
      H = Number(RegExp.$1) - A;
      if (H === -11) {
        H = 1
      }
      if (H >= 0 && H < E) {
        G = D[H] + Number(RegExp.$2) - 1;
        if (G >= 0 && G < this.length) {
          this[G].lunarFestival += RegExp.$4 + ' ';
          if (RegExp.$3 === '*') {
            this[G].color = '#ff5f07'
          }
        }
      }
    }
  }
  if ((this.firstWeek + 12) % 7 === 5) {
    this[12].solarFestival += '\u9ed1\u8272\u661f\u671f\u4e94 '
  }
  if (N === tY && F === tM) {
    this[tD - 1].isToday = true
  }
}

export function getFestivalsByMonth(year, month) {
  const today = new Date()
  const ty = parseInt(today.getFullYear())
  const tm = parseInt(today.getMonth())
  const td = parseInt(today.getDate())
  const lunar = new Calendar(year, month, ty, tm, td)
  const lunarArray = Array.from(lunar)
  return lunarArray.map(item => {
    const curDate = new Date(item.sYear, item.sMonth - 1, item.sDay)
    return {
      ...item,
      date: dateFormat(curDate, 'yyyy-MM-dd'),
      time: curDate.getTime(),
      cDate: cDay(item.lDay),
      lDay: item.lDay,
      lMonth: item.lMonth,
      festival: !!item.lunarFestival
    }
  })
}

/**
 * 鏍规嵁鏃ユ湡鑼冨洿鏌ヨ鑺傛棩
 * @param {string|Date} start 寮€濮嬫棩鏈�
 * @param {string|Date}  end  缁撴潫鏃ユ湡
 * @return {Array}
 */
export function getFestivals(start, end) {
  const startDate = dateFormat(start)
  const endDate = dateFormat(end)
  const startTime = startDate.getTime()
  const endTime = endDate.getTime()
  let result = []
  if (startTime > endTime) {
    return result
  }
  let startMonth = new Date(startDate.getFullYear(), startDate.getMonth())
  const endMonth = new Date(endDate.getFullYear(), endDate.getMonth())
  while (endMonth.getTime() > startMonth.getTime()) {
    startMonth = dateFormat(startMonth, null, {
      M: 1
    })
    const festivals = getFestivalsByMonth(startMonth.getFullYear(), startMonth.getMonth())
      .filter(item => item.festival)
      .filter(function (item) {
        return endTime >= item.time && startTime <= item.time
      })
    result = result.concat(festivals)
  }
  return result
}


/**
 * 鏃ユ湡鏍煎紡杞崲鍑芥暟
 * @param  {String|Date} dateStr 鏃ユ湡鏃堕棿瀵硅薄鎴栧瓧绗︿覆
 * @param  {String} [format] 杈撳嚭鏍煎紡锛寉yyy-MM-dd hh:mm:ss
 * @param  {Object} [options] 鏃堕棿鍋忕Щ瀵硅薄锛屽彲閫� {y,M,d,h,m,s}
 * @param {Number} options.y 骞村亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @param {Number} options.M 鏈堝亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @param {Number} options.d 鏃ュ亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @param {Number} options.h 鏃跺亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @param {Number} options.m 鍒嗗亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @param {Number} options.s 绉掑亸绉婚噺锛�+澧炲姞锛� -鍑忓皯
 * @returns {String|Date} 濡備笉浼犻€抐ormat锛屽嵆杩斿洖Date绫诲瀷
 *
 * @example
 * // 褰撳墠鏃堕棿鍑忓皯涓€澶�, 骞惰浆鎹㈡牸寮�
 *  date(new Date(), 'yyyy-MM-dd', {d: -1})
 */
export function dateFormat(dateStr, format, options) {
  if (!dateStr) {
    return (new Date())
  }
  let obj = typeof dateStr === 'string' ? new Date(dateStr.replace(/-/g, '/')) : dateStr
  const setting = {
    y: 0, // 骞�
    M: 0, // 鏈�
    d: 0, // 鏃�
    h: 0, // 鏃�
    m: 0, // 鍒�
    s: 0 // 绉�
  }
  Object.assign(setting, options || {})

  obj = new Date(setting.y + obj.getFullYear(),
    setting.M + obj.getMonth(),
    setting.d + obj.getDate(),
    setting.h + obj.getHours(),
    setting.m + obj.getMinutes(),
    setting.s + obj.getSeconds())
  const o = {
    'M+': obj.getMonth() + 1,
    'd+': obj.getDate(),
    'h+': obj.getHours(),
    'm+': obj.getMinutes(),
    's+': obj.getSeconds(),
    'q+': Math.floor((obj.getMonth() + 3) / 3),
    S: obj.getMilliseconds()
  }
  if (format) {
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1,
        RegExp.$1.length === 4 ? obj.getFullYear() : (obj.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  } else {
    return obj
  }
}

//
//
// export default {
//   Calendar: Calendar,
//   monthDays: monthDays,
//   cDay: cDay
// }

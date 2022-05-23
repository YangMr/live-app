
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/my/my","pages/login/login","pages/settings/settings","pages/coin/coin","pages/live/live","pages/create-live/create-live","pages/liveroom/liveroom"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#8745FF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#707070","selectedColor":"#8745FF","backgroundColor":"#ffffff","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"发现","iconPath":"/static/tabbar/find.png","selectedIconPath":"/static/tabbar/find-selected.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"/static/tabbar/my.png","selectedIconPath":"/static/tabbar/my-selected.png"}],"midButton":{"iconPath":"static/tabbar/min.png","iconWidth":"60px","height":"65px"}},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"九月直播","compilerVersion":"3.4.10","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":{"titleText":"直播","titleAlign":"left","buttons":[{"type":"menu","color":"#fff","float":"right"}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"titleNView":{"titleText":"我的","titleAlign":"left","buttons":[{"type":"menu","color":"#fff","float":"right"}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/settings/settings","meta":{},"window":{"navigationBarTitleText":"我的设置","enablePullDownRefresh":false}},{"path":"/pages/coin/coin","meta":{},"window":{"navigationBarTitleText":"我的余额","enablePullDownRefresh":false}},{"path":"/pages/live/live","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/create-live/create-live","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/liveroom/liveroom","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

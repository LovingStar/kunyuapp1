mui.init({
	swipeBack: false
});
mui.plusReady(function(){
	
})
mui('#productlist').on('tap', 'ul', function() {
	mui.openWindow({
        url:"./pendingListDetail.html",
        id:"pendingListDetail"
   	});
})

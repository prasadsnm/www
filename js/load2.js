        var baseUrl = sessionStorage.getItem('key');
        var detailUrl="http://morenmoredeals.com/ws/api/Json.php?data=couponById";
	var storeSearchUrl="http://morenmoredeals.com/ws/api/Json.php?data=store&search=";
	var catSearchUrl="http://morenmoredeals.com/ws/api/Json.php?data=categorySearch&catName=";
	var storeCouponUrl="http:\/\/morenmoredeals.com\/ws\/api\/Json.php?data=storeCoupons";
	var relatedUrl="http:\/\/morenmoredeals.com\/ws\/api\/Json.php?data=related";
	var catCouponUrl="http:\/\/morenmoredeals.com\/ws\/api\/Json.php?data=cByCategoryNew";
	var searchCouponUrl="http://morenmoredeals.com/ws/api/Json.php?data=searchCoupons2&search2=";
	var couponList;
	var countForShow=9;
	var dataLength;
	var merchantURL;
	var couponCode;
	var couponId;
	var urlis;
	var seoUrl;
	var siteUrl="http://www.clicksnm.com";
	var couponTitle;
	var shareUrl;
	var StoreIdKey;
	var storeId;
	var storeName;
	var radioVal;
	
	
	$('a.force-reload').live('click', function(e) {
		
		alert("under force reload");
		var url = $(this).attr('href');
		$.mobile.changePage( url, { reloadPage: true, transition: "none"} );
	});
		
	$(document).ready(function() {	
		//Disables JQM default transitions
		$.mobile.defaultPageTransition = 'none';		
		//Hides initial warnings.
		//JQM applies CSS properties in the initial state, so jQ inyected elements don't have the same look & feel
		$("#notfound").hide();
		$("#showAll").hide();
		$("#loader").hide();
		$("#showAll").click(function() {
			showMore();
		});
		
		alert("under document ready");
		//$("#loaderText").hide();
	});
	function openAboutUs(){
		var ref= window.open('file:///android_asset/www/aboutUs.html','_blank','location=yes');
	}
	function recentCoupons() {
		//alert("load2 under cat");
		$("#results").empty();
		//Hides initial warnings and buttons
		$("#showAll").hide();
		$("#notfound").hide();
		//Ajax loader is showed
		$("#loader").show();
		alert(baseUrl);
		//API query is sent, response size is limited to 10 elements by 'page_limit' property.
		//searchCallback function manages the JSON response object.
		$.ajax({
		    url: baseUrl,
		    dataType: "json",
		    crossDomain: true,
		    success: tableCallback,
		    error: function (xhr, ajaxOptions, thrownError) {
		//alert(xhr.status);
		//alert('under js function');
	       // alert(thrownError);
		    }
		});	
		
	}
	
	
	function reload() {
		$.mobile.changePage(
	    window.location.href,
	    {
	      allowSamePageTransition : true,
	      transition              : 'none',
	      showLoadMsg             : false,
	      reloadPage              : true
	    }
	  );		//code
	}
	function onclickd() {		
		$('#dial').click();
	};
	
	function refreshPage() {
		$.mobile.changePage( "index.html", { reloadPage: true, transition: "none"} );
	}

	//TO HIDE POPUP MENU IN DETAIL PAGE
	function dohide(){		
			setTimeout(function(){
			   $( "#popupMenu" ).popup( "close" );
		       },1);
	}
    function shareFacebook() {
	dohide();
	var fbShareUrl="https://www.facebook.com/sharer/sharer.php?m2w&s=100&";
	var tJoin="p[title]";
	var sTitle="share title is working ....?";
	var sJoin="p[summary]";
	var summary="get this deal on clicksnm"; 
	var iJoin="p[images][0]";
	var iUrl="http://www.clicksnm.com/images/clicksnm-logo.png";
	var uJoin="p[url]=";
	//var shareUrl="http://www.clicksnm.com/hammacherschlemmer-promo-codes/all-coupons?p=163495";
	//m2w&s
	//window.location.href="http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
	var shareU=fbShareUrl+encodeURIComponent(tJoin)
	+encodeURIComponent(sTitle)+"&"+
	encodeURIComponent(sJoin)+"="+
	encodeURIComponent(summary)+"&"+
	encodeURIComponent(iJoin)+"="+
	encodeURIComponent(iUrl)+"&"+
	encodeURIComponent(uJoin)+"="+
	encodeURIComponent(shareUrl);
	//alert(shareU);
	//window.open('https://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=Save+15%25+on+Everything+-+Norton+coupon&p%5Bsummary%5D=Purchase+anything+and+avail+15%25+off+with+using+Norton+Promo+Codes.&p%5Bimages%5D%5B0%5D=http%3A%2F%2Fwww.clicksnm.com%2Fimages%2Fclicksnm-logo.png&p%5Burl%5D=http%3A%2F%2Fwww.clicksnm.com%2Fnorton-promo-codes%2Fall-coupons%3Fp%3D166128','_blank');
	window.open(shareU,'_blank');
	//$.mobile.changePage( "aboutUs.html", { role: "dialog"} );
   }
   function shareTwitter()
   {        dohide();
	   url = encodeURIComponent(shareUrl);
	   text = encodeURIComponent(couponTitle);
	   window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url, "_blank");
   }
   function shareMail()
   {
	   window.location = "mailto:&subject=" + "get this is deal on ClickSnM " + "&body=" +couponTitle+shareUrl;
   }
   function search(){
	 
	 alert("under search");
	    	 var query=$('#search-basic').val(); 
		  query=query.trim();
		  alert(query);
	    localStorage.searchkey=query;
	window.location.href="search2.html";
		}

   
    function categories() {
	//alert('under js function');
	
	alert("under categories");
	 var catUrl="http://www.clicksnm.com/clicksnm2/api/Json.php?data=categoryMAP";
	//$("#catResults").empty();
	//Hides initial warnings and buttons
	$("#showAll").hide();
	$("#notfound").hide();
	$("#catResults").empty();
	//Ajax loader is showed
	$("#loader").show();
	//alert("under categories function"+catUrl);
	//API query is sent, response size is limited to 10 elements by 'page_limit' property.
	//searchCallback function manages the JSON response object.
	$.ajax({
	    url: catUrl,
	    dataType: "json",
	    crossDomain: true,
	    success: catCallback,
	    error: function (xhr, ajaxOptions, thrownError) {
       // alert(xhr.status);	
	//alert('error under category function');
        //alert(thrownError);
	    }
	});
	
	//alert('after ajax');
	
	
	}


	function couponDetail(id) {
		
		
		alert("under coupon detail"+id);
		//Hides warnings and buttons
		$("#postercell").empty();
		$("#infocell").empty();
		$("#back-button").hide();
		$("#detailpanel").hide();
		//Ajax loader is showed
		$("#detail-loader").show();
		//API query is sent with the id of the desired movie.
		//detailCallback function manages the JSON response object.
		
		//alert('coupon id is'+id);
		$.ajax({
		    url: detailUrl+'&id='+id,
		    dataType: "json",
		    crossDomain: true,
		    success: detailCallback,
		     error: function (xhr, ajaxOptions, thrownError) {
	       // alert(xhr.status);
		//alert(thrownError);
		} 
		});
	}

	function tableCallback(data) {
	alert('under table call back');
	//Checks if search have results
                dataLength=data.length;
		//Ajax loader is hided
		$("#loader").hide();
		$("#results").empty();
		
		//var output='<ul data-role="listview" data-inset="true">';
		//alert("in searchCallback "+data);
		//Iterates through results to build the results list
		//movies = data.movies;
		couponList=data;
		$.each(couponList, function(index, coupon) {
			//Stores element id
			var couponid = coupon.id;
			//Change the default 'not found' poster
 			var posterimg = coupon.image;
		
		$("#results").append("<li><a onclick='javascript:setdItem("+ couponid +");' href='#'>"
				     +"<img src="
				     +  posterimg +" style='position:absolute;  left:10px;top:0; bottom:0; margin:auto;' ><h3 style='padding-left:5px;'>"
				    +coupon.headline
				     +"</h3>"
				     +"</a></div></li>");
		
		return (index != countForShow);
		});
		//$("#results").append('<li class="load-more"><a href="#">Load More</a></li>');
		//output+='</ul>';
		//$('#couponsList').html(output);
		//Listwiew refresh to update new elements CSS styles
		//$("#couponsList").listview("refresh");
		
		$("#results").listview("refresh");
		
		if (dataLength>10) {
			//alert("under datalength");
			$("#showAll").html('<a href="'+'#" onClick=showMore(); data-role="button" data-inline="true">Load More</a>').trigger("create");
		//$("#showAll").show();	//code
		}
		//$("#results").listview("refresh");
		$("#showAll").show();
	}
	function showMore() {
		$("#showAll").hide();
		//Hides 'show all' button
		//$("#showAll").hide();
		//alert("under show more");
		countForShow+=10;
		//Same as initial iteration with the other results
		$.each(couponList, function(index, coupon){
			
			//alert("under for each");
			if(index < (countForShow-9)){return true;}
			
				var couponid = coupon.id;
				//Change the default 'not found' poster
				var posterimg = coupon.image;
			$("#results").append("<li><a onclick='javascript:setdItem("+ couponid +");' href='#'>"
					     +"<img src="
					     +  posterimg +" style='position:absolute;  left:10px;top:0; bottom:0; margin:auto;' ><h3 style='padding-left:5px;'>"
					    +coupon.headline
					     +"</h3>"
					     +"</a></div></li>");
			
			return (index != (countForShow));
			});
		
		$("#results").listview("refresh");
		if ((dataLength-countForShow)>1) {
		$("#showAll").show();	//code
		}
		$("av_footer").show();
		//alert(countForShow);
	}
	function categoryCallback(data) {
		alert('under catgory call back');
		$("#catResults").empty();
		$("#loader").show();
		catCouponUrl="http:\/\/www.clicksnm.com\/clicksnm2\/api\/Json.php?data=cByCategoryNew";
		$.each(data, function(index, category) {
			//Stores element id
			//alert('be foreach');
			var catgoryId = category.id;
			//alert('category id is'+catgoryId);
			//Change the default 'not found' poster
 			var catgoryName = category.cName;
		$("#catResults").append('<li style="padding-left: 0px"><a onclick="javascript:sessionStorage.setdItem(\'key\','+'\''+catCouponUrl+'\&id\='+category.id+'\');" href="coupons.html" rel="external">'+
					'<h3>'+category.cName+'</h3>'+
					'</a></div></li>');
		});
		
		$("#catResults").listview("refresh");
		
	}

	function detailCallback(data) {
		var a=2;
		$("#loader").hide();
	      // alert("under detail call back");
	       $.each(data, function(index, coupon) {
		var posterimg = coupon.image;
		var storeImage=coupon.image;
		couponId=coupon.id;
		seoUrl=coupon.seoUrl;
		shareUrl=siteUrl+"/"+seoUrl+"/all-coupons?p="+couponId;
		$("#detail-loader").hide();
		$("#detailpanel").show();
		$("#back-button").show();
	
		
		//Appends detailed info to container
		$("#postercell").append('<img id="ipad" src="' + coupon.image + '"/>');
	       $("#postercell").append('<img id= "mob" src="' + coupon.image + '"/>');
		
		 merchantURL=coupon.link;
		 var storeLink='<h3><a  onclick="javascript:setStoreItems(\'';
		      storeLink+=coupon.storeId;
		      storeLink+="','";
		      storeLink+=coupon.storeName;
		      storeLink+='\');" href="coupons2.html"data-role="button"  data-inline="true" rel="external">';
		      storeLink+=coupon.storeName;
		      storeLink+='(';
		      storeLink+=coupon.couponsInStore;
		      storeLink+=')</a></h3>';
		      alert(storeLink);
		      
		      
		      //var storeLink='<h3><a href="coupons2.html"data-role="button"  data-inline="true" rel="external">Godaddy AU(1)</a></h3>';
		      
		      $('#infocell').append(storeLink);
		
		 
		 couponCode=coupon.code;
		 couponTitle=coupon.headline;
		$("#couponTitle").append('<center><p><h2>'+ couponTitle +' ' + '</h2><p></center>');
		if (coupon.code) {
		$("#promotion_code1").append('<center><p><strong>STEP 1: </strong>Long press to copy the code</p></center>');
		$("#promotion_code2").append('<center><p><strong>STEP 2: </strong>Press the button to get discounts</p></center>');
		//$('#test').html($('#test').html() + 'a');
		$('#code-cell').html($('#code-cell').html()+couponCode);
		//$('#code-cell').append(coupon.code);
		
		$("#gotosite").html('<a href="'+'#" onClick=doCopy(); data-role="button" data-inline="true">Go to Site</a>').trigger("create");
		}
		else{
			$("#promotion_code1").append('<center><p><strong>No code needed</strong></p></center>');
		$("#promotion_code2").append('<center><p><strong>Press the button to Activate & go to site </strong></p></center>');
		//$('#code-cell').append(coupon.code);
		$('#code-cell').hide();
		$("#gotosite").html('<a href="'+'#" onClick=popMerchant(); data-role="button" data-inline="true">Go to Site</a>').trigger("create");
			
		
		}
	  });
	}


	function doSearch() {
		
		//Clears results container
		$("#results").empty();
		//alert("under store search");
		
		//Hides initial warnings and buttons
		$("#showAll").hide();
		$("#notfound").hide();
		
		//Ajax loader is showed
		$("#loaderText").hide();
		
	
		//alert("under store search");
		
		//Stores user query
		var option=localStorage.radVal;
		//var option=$('input:radio[name=radio-choice-1]:checked').val(); 
		alert("option under do seardh"+option);
		var term = $("#search-basic").val();
		localStorage.searchkey=term;
		
		alert("under do search search keyis "+localStorage.searchkey);
		//search-basic
		//term=term.trim();
		//alert("after query");
		
		alert("query under do search term is"+typeof(term));
		 //var query=sessionStorage.getItem('searchkey');
		
		if (term.length<3) {
			alert("please enter atleast 3 charecters");
			//code
			return;
		    
		}
		
		if (option=='choice-1' ) {
		alert("under do search option");
		urlis=storeSearchUrl + encodeURI(term);
		searchByStore();
		}
		else if(option=='choice-2'){
			urlis=catSearchUrl+encodeURI(term);
			alert("cat url is "+urlis);
			searchByCategory();
		}
		else if (option=='choice-3') {
			
			
			urlis=searchCouponUrl+encodeURI(term);
			alert("coupon serach url is "+urlis);
			baseUrl=urlis;
			recentCoupons();
			
			
		}
	
	}
	function searchByStore(){
		
		$("#loader").show();
		//$("#loaderText").show();
		$.ajax({
		    url: urlis,
		    dataType: "json",
		    success: storeCallback,
		    
		    error: function (xhr, ajaxOptions, thrownError) {
	      alert(xhr.status);
		alert(thrownError);
		} 
		});
		
	
	}

	function searchByCategory(){
	
		$("#loader").show();
		//$("#loaderText").show();
		$.ajax({
		    url: urlis,
		    dataType: "json",
		    success: catCallback,
		    
		    error: function (xhr, ajaxOptions, thrownError) {
	      alert(xhr.status);
		alert(thrownError);
		} 
		});
	
	
	}

	function catCallback(data) {
	
	//Checks if search have results

		//alert("under search call back")
		//Ajax loader is hided
		$("#loader").show();
		//$("#loaderText").show();
		
		alert("under cat callback2");
		if (!data) {
		$("#loader").hide();
		//$("#loaderText").hide();
		$("#notfound").show();
		
			//code
		}
               alert(data);
               //var storeCouponUrl="http:\/\/www.morenmoredeals.com\/ws\/api\/Json.php?data=storeCoupons";
		$.each(data, function(index, cat) {
			
			//Stores element id
			
			var catId = cat.id;
			//alert(catid);
			
			//$("#storeResults").append('<li><a onclick="javascript:sessionStorage.setItem(\'storeKey\','+'\''+storeCouponUrl+'\&id\='+store.id+'\');" href="coupons2.html" rel="external">'+
			//'<h3>' + store.sName + '</h3></a></div></li>');
			//$("#results").append('<li><a onclick="javascript:sessionStorage.setItem(\'catId\','+'\''+cat.id+'\');" href="catCoupons.html" rel="external">'+
			//'<h3>' + cat.cName + '</h3></a></div></li>');
			//
			
			
			var catName=cat.cName;
			//$("#storeResults").append('<li><a onclick="javascript:sessionStorage.setItem(\'storeKey\','+'\''+storeCouponUrl+'\&id\='+store.id+'\');" href="coupons2.html" rel="external">'+
			//'<h3>' + store.sName + '</h3></a></div></li>');
			
			
			var catlist='<li><a onclick="javascript:setCatItems(\'';
			catlist+=catId;
			catlist+="','";
			catlist+=catName;
			catlist+='\');" href="catCoupons.html" rel="external">';
			catlist+='<h3>';
			catlist+=catName;
			catlist+='</h3></a></li>';
			
			
			//var catlist='<li><a onclick="javascript:setStoreItems(\'';
			//catlist+=storeId;
			//catlist+="','";
			//catlist+=storeName;
			//catlist+='\');" href="coupons2.html" rel="external">';
			//catlist+='<h3>';
			//catlist+=storeName;
			//catlist+='</h3></a></li>';
			
			//alert("under cat each"+catId +"   and  "+catName);
			
			//alert(clist);
			$("#catResults").append(catlist);
			
			
			
			
			
			

			//$.mobile.page.prototype.options.addBackBtn = true;
		});
		$("#loader").hide();
		$("#notfound").hide();
		//$("#loaderText").hide();
		//Listwiew refresh to update new elements CSS styles
		$("#catResults").listview("refresh",true);
		
	}

	$(document).delegate("#couponsList", "pageinit", function() {
		
	
			var urlKey= sessionStorage.getItem('urlKey');
			//alert("category id is "+urlKey);
			
			var couponsUrl='http://www.morenmoredeals.com/ws/api/Json.php?data='+urlKey;
			
			
			if (urlKey=='freeShipping') {
				$("#coupons4Header #ctypeTitle").text('Free Shipping');
			}
			else if (urlKey=='topCoupons') {
				$("#coupons4Header #ctypeTitle").text('Top Coupons');
			}
			
			
			coupons(couponsUrl);
	});



	
	function popMerchant(){
			//alert(merchantURL);
		var ref = window.open(merchantURL,'_blank', 'location=yes');
		}
	function doCopy(){
		//Toast.shortshow("Hello, I am short Toast");
		 window.clipboardManagerCopy(
					couponCode,
					function(r){toastAndMPop()},
					function(e){alert(e)}
				);
		
	}

	function toastAndMPop(){
		Toast.longshow("Code copied successfully and opening merchant site",popMerchant());
		//popMerchant();
	}
	
	//Android 2.1+, iPhone 3.1+, iPad 4.2+, Opera Mobile 11.00+, Palm WebOS 1.4+, BlackBerry 6.0+, Crome 4.0+, Firefox 3.5+, IE 8.0+, Opera 10.5+ y Safari 4.0+ 
	function setdItem(id) {
		
		//Stores selected item id
		sessionStorage.setItem('id',id);
		//Continue the redirection
		document.location.href='detail.html'; 
		
	}

	function setCatId(id) {	
		//Stores selected item id
		sessionStorage.setCatId('id',id);
		//Continue the redirection
		document.location.href='detail.html'; 
		
	}
	
	function storeSearch() {
		
		//Clears results container
		$("#results").empty();
		//alert("under store search");
		
		//Hides initial warnings and buttons
		$("#showAll").hide();
		$("#notfound").hide();
		
		//Ajax loader is showed
		//$("#loaderText").hide();
		//alert("under store search");
		
		//Stores user query
		//var query = $("input:first").val();
		//query=query.trim();
		 var query=sessionStorage.getItem('searchkey');
		
		if (query.length<3) {
			alert("please enter atleast 3 charecters");
			//code
			return;
		    
		}
		urlis=storeSearchUrl + encodeURI(query);
		
	       // alert("url in store search is"+urlis);
		
		//API query is sent, response size is limited to 10 elements by 'page_limit' property.
		//searchCallback function manages the JSON response object.
		$("#loader").show();
		//$("#loaderText").show();
		$.ajax({
		    url:urlis,
		    dataType:"json",
		    success:storeCallback
		});
	}
	
	function storeCoupons(StoreIdKey) {
		
		
		alert("under store coupons"+ StoreIdKey);
		baseUrl=storeCouponUrl+'&id='+StoreIdKey;
		
		alert(" store coupons"+ baseUrl);
		
		recentCoupons();
		
		
	}
	
	function relatedCoupons(StoreIdKey){
		
		alert("under related coupons"+ StoreIdKey)
		baseUrl=relatedUrl+'&id='+StoreIdKey;
		recentCoupons();
	}
	
	function catCoupons(catIdKey){
		
		alert("under cat coupons"+ catIdKey)
		baseUrl=catCouponUrl+'&id='+catIdKey;
		recentCoupons();
	}
	function coupons(urlKey) {
		
		baseUrl=urlKey;
		alert("url key is "+baseUrl);
		recentCoupons();
	}
	
	function storeCallback(data) {
		
		//Checks if search have results
	
			//alert("under search call back")
			//Ajax loader is hided
			$("#loader").show();
			//$("#loaderText").show();
			
			alert("under search call back2");
			if (!data) {
			$("#loader").hide();
			//$("#loaderText").hide();
			$("#notfound").show();
			
				//code
			}
		       // alert(data);
		       //var storeCouponUrl="http:\/\/www.morenmoredeals.com\/ws\/api\/Json.php?data=storeCoupons";
			$.each(data, function(index, store) {
				
				//Stores element id
				
				
				
				storeId = store.id;
				storeName=store.sName;
				//$("#storeResults").append('<li><a onclick="javascript:sessionStorage.setItem(\'storeKey\','+'\''+storeCouponUrl+'\&id\='+store.id+'\');" href="coupons2.html" rel="external">'+
				//'<h3>' + store.sName + '</h3></a></div></li>');
				
				var list='<li><a onclick="javascript:setStoreItems(\'';
				list+=storeId;
				list+="','";
				list+=storeName;
				list+='\');" href="coupons2.html" rel="external">';
				list+='<h3>';
				list+=storeName;
				list+='</h3></a></li>';
				alert(list);
				$("#results").append(list);
				//$("#results").append('<li><a onclick="javascript:setStoreItems('+'"'+storeId+'","'+storeName+'");">'+
				//'<h3>' + store.sName + '</h3></a></div></li>');
				//
				//$("#results").append("<li><a onclick='javascript:setStoreItems();'"+
				//"<h3>" + store.sName + "</h3></a></div></li>");
				
				
				//"<li><a onclick='javascript:setItem("+ couponid +");' href='#'>
	
				$.mobile.page.prototype.options.addBackBtn = true;
			});
			$("#loader").hide();
			//$("#loaderText").hide();
			//Listwiew refresh to update new elements CSS styles
			$("#results").listview("refresh",true);
			
		}
		function setStoreItems(storeid,storename){
			
			alert("under setStoreItems   "+storename);
			
			sessionStorage.setItem('storeId',storeid);
			sessionStorage.setItem('storeName',storename);
		
		
			
		 //$.mobile.changePage( "coupons2.html",{transition:"slide"});
		
		
			
			
		}
		
	function setCatItems(catid,catname){
		
		alert("under setCatItems   "+catname);
		
		sessionStorage.setItem('catId',catid);
		sessionStorage.setItem('catName',catname);
	
	
		
	 //$.mobile.changePage( "coupons2.html",{transition:"slide"});
	
	
		
		
	}
	
	
	function setRadioChoice() {
		
		   
				   if (localStorage.radVal=="choice-1") {
					  $('input:radio[name="radio-choice-1"][value="choice-1"]').prop('checked', true);   
				   }
				   else  if (localStorage.radVal=="choice-2") {
					  $('input:radio[name="radio-choice-1"][value="choice-2"]').prop('checked', true);   
				   }
				   else  if (localStorage.radVal=="choice-3") {
					  $('input:radio[name="radio-choice-1"][value="choice-3"]').prop('checked', true);   
				   }
				   
		
		
	}
	$(document).on('pageinit', '#home', function(){
		
		if (!radioVal) {
		 
		 radioVal = $('input:radio[name=radio-choice-1]:checked').val();
		localStorage.radVal=radioVal;
		 
		}
		
		 $('input:radio[name=radio-choice-1]').change(function() {
			alert("value changed");
			
			 
		 localStorage.radVal=$('input:radio[name=radio-choice-1]:checked').val();
		 alert("value is   "+localStorage.radVal);	
		 });
	 
	       
		return false;        
	
	    
	});
	
	  $(document).on('pagebeforecreate','#home',function(){
				   alert("page before create"+ localStorage.radVal);
				   //$('input:search[id=search-basic]').val('done');
				javaScript:setRadioChoice();
						 
				
			  });
	$('#detail').live('pageinit',function(){
	     //Gets sessionStorage id property and triggers the API query.
		alert("under detail page");
		couponDetail(sessionStorage.getItem('id'));
		alert("detail id is"+sessionStorage.getItem('id'));
	});
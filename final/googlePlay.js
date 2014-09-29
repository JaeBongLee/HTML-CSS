	var sTemplate = "<div class = 'section-bookShelf-book-image'><img src='<%=imgLink%>', class = 'bookImg'></div><div class = 'section-bookShelf-book-info'><div class = 'section-bookShelf-book-info-bookTitle'><a href = '<%=bookLink%>'> <%=bookName%> </a></div><div class ='section-bookShelf-book-info-author'><a href='<%=authorLink%>'><%=author%></a></div><div class = 'section-bookShelf-book-info-price'><span id = 'price'> ₩<%=price%></span></div></div>";
	var bookList ={
	    
	    bookName : "게으름뱅이 탈출학교: 시간의 소중함을 모르는 아이들을 위한 시간관리의 지혜 (어린이 자기계발학교 1)",
	    imgLink: "https://encrypted.google.com/books/images/frontcover/q9sZBAAAQBAJ?fife=w340-rw",
	    bookLink : "https://play.google.com/store/books/details/%ED%99%A9%EA%B7%BC%EA%B8%B0_%EA%B2%8C%EC%9C%BC%EB%A6%84%EB%B1%85%EC%9D%B4_%ED%83%88%EC%B6%9C%ED%95%99%EA%B5%90?id=q9sZBAAAQBAJ",
	    author: "황근기",
	    authorLink: "https://play.google.com/store/books/author?id=%ED%99%A9%EA%B7%BC%EA%B8%B0",
	    price: "6,000"

	}

	function changeTemplate(){
		var bookInfo = "";
			function tempFunc() {
			var  result = sTemplate.replace('<%=bookName%>', bookList.bookName).replace('<%=imgLink%>',bookList.imgLink).replace('<%=bookLink%>',bookList.bookLink).replace('<%=author%>',bookList.author).replace('<%=authorLink%>',bookList.authorLink).replace('<%=price%>',bookList.price);
			bookInfo += result;
			};
			tempFunc();
			var temp = document.querySelectorAll(".section-bookShelf-book");
			for(var i = 0; i < temp.length;i++){
				temp[i].innerHTML = bookInfo;
			}	
	}

	var ele = document.querySelector("#nav-button-dropDown");

	document.body.addEventListener("click", function(e) {

		if(e.target.className === "genreButton") {
	    	ele.style.display = "block";
	  	}
	  	else {
	    	ele.style.display = "none";
	    }


	}, false);

	ele.addEventListener('click',function(e){
		if(e.target.innerText === "이놈 눌러")
			changeTemplate();
	});

	var seeMore = document.querySelectorAll('.section-title-more');
	var firstSeeMore = seeMore[0];
	var positionSeeMore = document.querySelectorAll('.section-bookShelf');
	var firstPosition = positionSeeMore[0];
	function seeMoreIt(){
			firstPosition.insertAdjacentHTML('afterend','<div class = "section-bookShelf"><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div><div class ="section-bookShelf-book"><div class = "section-bookShelf-book-image"><img src="https://encrypted.google.com/books/images/frontcover/VvCTIS-i28IC?fife=w300-rw", class ="bookImg"></div><div class = "section-bookShelf-book-info"><div class = "section-bookShelf-book-info-bookTitle"><a href = "https://play.google.com/store/books/details/%EC%9E%A5%ED%95%B4%EC%A0%95_%EC%96%B4%EC%84%9C%EC%99%80_%EC%97%B0%EC%95%A0%EB%8A%94_%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80?id=VvCTIS-i28IC">어서와 연애는 처음이지?</a></div><div class ="section-bookShelf-book-info-author"><a href="https://play.google.com/store/books/author?id=%EC%9E%A5%ED%95%B4%EC%A0%95">장해정</a></div>	<div class = "section-bookShelf-book-info-price"><span id = "price"> ₩980</span></div></div></div></div>');
	};

	
	firstSeeMore.addEventListener('click',seeMoreIt,false);


	ele.addEventListener('click' , function(e){
		if(e.target.innerText === "두놈")
		{
			var request = new XMLHttpRequest();
	
	
			 request.onreadystatechange = function() 
			 {
			 	if(request.readyState === 4 && request.status === 200)
			 	{
			 		result = request.responseText;
					result = JSON.parse(result);

				 	var bookInfo = "";
					function tempFunc(){
						var result2 = sTemplate.replace('<%=bookName%>', result.Name).replace('<%=imgLink%>',result.ImageLink).replace('<%=bookLink%>',result.PageLink).replace('<%=author%>',result.Writer).replace('<%=authorLink%>',result.WriterLink).replace('<%=price%>',result.Price);
						bookInfo += result2;
					}
					tempFunc();

					var temp = document.querySelectorAll(".section-bookShelf-book");
					for(var i = 0 ; i < temp.length ; i++)
					{
						temp[i].innerHTML = bookInfo;
					}
			 	}
				
			}
			request.open("GET","bookList.json",true);
			request.send(null);

		}

	},false);

	
		

	
	






















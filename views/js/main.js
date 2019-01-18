$(document).ready(function() {

	$('#btnGetBooks').click(function() {

			$.ajax({
				type: "GET",
				dataType: "json",
				headers: {
        	'Content-Type': 'application/json',
    		},
			  url: "http://localhost:8080/books/list",
			  data: {bookprice : parseInt($("#txtBookPrice").val())},
			  success: function(data, status){
				  const output = document.getElementById('result');

				  output.innerHTML = data.map(product => {
				    return `<li data-id="${ product._id }">
							      <span>${ product.name }</span>
							      <span>${ product.price }</span>
					  			  </li>`;
					}).join('');

  			},
  			error: function () {
	     	   	alert("error");
    		}
			})

	});


	$('#btnAddBooks').click(function() {

			$.ajax({
				type: "POST",
				dataType: "json",
				headers: {
        	'Content-Type': 'application/x-www-form-urlencoded',
    		},
			  url: "http://localhost:8080/books/book",
			  data: {
			  				name : $("#txtBookName").val(),
			  				price : parseInt($("#txtBookPrice").val()),
			  				qty : parseInt($("#txtBookQty").val()),
			  				isavailable : ($("#isAvailable-yes").val()) ?  true : false ;
			  			},
			  success: function(data, status){
				  alert("Data: " + data + "\nStatus: " + status);
  			},
  			error: function () {
	     	   	alert("error");
    		}
			})

	});

});












// const invocation = new XMLHttpRequest();
			// const url = "http://localhost:8080/books/list";
			// const data = {'price' : 400};


			//   if(invocation)
			//   {
			//     invocation.open('GET', url, true);
			//     invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
			//     invocation.setRequestHeader('Content-Type', 'application/json');
			//     invocation.onreadystatechange = function() {
			// 	    if (this.readyState == 4 && this.status == 200) {
			//        	alert(xhttp.responseText);
			//       }
			//     }
			//     invocation.send(data);
			//   }

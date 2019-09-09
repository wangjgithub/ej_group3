

const searchByName = () => {
	$("#searchByName_name").on("input",function(event){
		console.log(event.target.value);
		axios.get(baseURL+"/product/findProductByName",{
			params: {
				name:event.target.value
			}
		})
		.then(data => {

			if(data.data.data){
				const{id,name,price} = data.data,data;

			}
		})

	})
}
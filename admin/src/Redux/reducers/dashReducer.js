const initial = {
    data:[],
    men:0,
    women:0,
    isLoading:true,

}
export const dashReducer = (state=initial,{type,payload})=>{
    switch (type) {
        case "Loading":
            return{
                data: [],
                men:0,
                women:0,
                isLoading : true
            }
            
            
    
        case "Success":
            let men = 0;
      let women = 0
      payload?.map((ele)=>{
        if(ele.gender=="Men"){
          men++;
        }
        else{
          women++;
        }
      })
            return{
                data: payload,
                men:men,
                women:women,
                isLoading : false
            }
           
    
        default:
           return state
    }
}
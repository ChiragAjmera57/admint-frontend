const initial = {
    data:[],
    isLoading:true,

}
export const dashReducer = (state=initial,{type,payload})=>{
    switch (type) {
        case "Loading":
            return{
                data: [],
                isLoading : true
            }
            
            
    
        case "Success":
            return{
                data: payload,
                isLoading : false
            }
           
    
        default:
           return state
    }
}
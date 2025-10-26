export const succesResponse=(res,statuscode,message,payload=null)=>{
    return res.status(statuscode).json({
        success:true,
        message:message,
        data:payload
    })
}
export const errorResponse=(res,statuscode,message,payload=null)=>{
    return res.status(statuscode).json({
        success:false,
        message:message,
        data:payload
    })
}
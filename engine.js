export function createTemplate(templateAsString) {
    const pattern = /{{(.+?)}}/g

    return (data)=>templateAsString.replace(pattern,(match,group)=>{
        // console.log(group)
        // return match;//will return whole article
        return data[group]
    })

}


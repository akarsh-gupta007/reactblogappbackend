const get=(req,res)=>res.send(
    [
        {
           id:1,
           title:"bollywood pages",
           content:"title"
        },
        {
            id:2,
            title:"bollywood pages",
            content:"title"
        },
        {
            id:3,
           title:"bollywood pages",
           content:"title"
        },
        {
            id:4,
            title:"bollywood pages",
            content:"title"
        },
        
    ]
)

module.exports.apiController = get;
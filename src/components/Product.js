import React from 'react'

const Product = (props) =>{
    var {match} = props
    var name = match.params.slug
    return (
        <div>
            Đây là chi tiết sản phẩm: {name}
        </div>
    )
}

export default Product
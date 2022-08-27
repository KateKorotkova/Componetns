import React from 'react';

const ShopItemFunc  = ({item}) => {
    let priceNumber = parseFloat((item.price).toFixed(2));
    let priceString = priceNumber.toLocaleString("en",{useGrouping: false, minimumFractionDigits: 2});;
    
    return (
        <>
            <div class="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div class="description">
                    {item.descriptionFull}
                </div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{item.currency}{priceString}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </>
    );
}

export {ShopItemFunc};
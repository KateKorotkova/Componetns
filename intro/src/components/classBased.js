import React from 'react';


class ShopItemClass extends React.Component {
    
    render () {
        var item = this.props.item;
        return (
            <>
                <div class="main-content">
                    <h2>{item.brand} (classBased)</h2>
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                    <div class="description">
                        {item.descriptionFull}
                    </div>
                    <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                    <div class="divider"></div>
                    <div class="purchase-info">
                        <div class="price">{item.currency}{item.price}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </>
        );
    }
}


export {ShopItemClass };
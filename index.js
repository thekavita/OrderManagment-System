
let orderNumber = 0
let orderblock = document.getElementsByClassName('order-block')
let cardHeaders = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parentDiv')

function execute(){
    let orderId = document.getElementById('inputid').value
    
      let colDiv = document.createElement('div')
      let cardDiv = document.createElement('div')

      let cardHeaderDiv = document.createElement('div')
      let cardHeaderDivText = document.createTextNode('Order ID: ')

      let cardBodyDiv = document.createElement('div')

      let cardTitleH5 = document.createElement('h5')
      let cardTitleH5text = document.createTextNode('Bill Amount')

      let cardP = document.createElement('p')
      let cardPtext  = document.createTextNode('Items:XYZ,ABC')

      let cardButtonA = document.createElement('a')
      let cardButtonAText = document.createTextNode('Cancel Order')

      
      let cardFooter = document.createElement('div')
      let cardFooterText = document.createTextNode('PIZZA BAKED')


     parentDiv.appendChild(colDiv)
     colDiv.appendChild(cardDiv)
     cardDiv.appendChild(cardHeaderDiv)
     cardDiv.appendChild(cardBodyDiv)
     cardDiv.appendChild(cardFooter)

     cardBodyDiv.appendChild(cardTitleH5)
     cardTitleH5.appendChild(cardTitleH5text)

     cardBodyDiv.appendChild(cardP)
     cardBodyDiv.appendChild(cardButtonA)
    
     cardHeaderDiv.appendChild(cardHeaderDivText)
     cardP.appendChild(cardPtext)
     cardButtonA.appendChild(cardButtonAText)
     cardFooter.appendChild(cardFooterText)
     cardHeaderDiv.innerHTML = 'ORDER ID: '+ orderId   


 colDiv.classList = 'col-md-6 col-xs-12 order-block'
 cardDiv.classList = 'card card-center'
 cardHeaderDiv.classList = 'card-header'
 cardBodyDiv.classList = 'cardBody'
 cardFooter.classList= 'card-footer'
 cardButtonA.classList = 'btn btn-danger'


}
 

const userName = ['Kim','Lee','Park','Lim','Lin']
const RandomUserName = () => userName[Math.round(Math.random()*4)]


export const Arr = Array(30).fill(0).map(
  (_, idx) => ({
    userId : idx, 
    userName : RandomUserName(),
    content : `${idx+1}content`,
    timeStamp: Date.now(),
  })
).reverse('')
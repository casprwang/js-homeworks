var readline = require('readline');
var fs = require('fs')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var map = Array.prototype.map;

var info = {}
// function decode(z) {
//   if ((z-97)<0)
//     z = 122 +(z-97) % 26
//   if ((z-97)> 0)
//     z = (z-97) % 26 + 97
//   z = z
//   return z
// }

// You can replace function ltrToChar by
// var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
//
// function ltrToChar (array) {
//   for(i=0; i< array.length; i++)
//     array[i] = array[i].charCodeAt(0)
//     i++
//   return array
// }
//
// function decode(z) {
//   if ((z-97)<0)
//     z = 122 +(z-97) % 26
//   if ((z-97)> 0)
//     z = (z-97) % 26 + 97
//   z = z
//   return z
// }


rl.question('Please paste or type the enctrypted message you want to decode>>', function(args){
  // info.one = args
  fs.writeFile('message.txt', args, 'utf8', console.log('Looks Good!'));
    rl.question('Now, Please type the filename you want and hit Enter>>', function(args2){
      // info.two = args2
      fs.rename('./message.txt', `./${args2}.txt`, console.log(`Done!\n${args2}.txt has been created`))
      info.lowercase = args.toLowerCase(args).split('')
      info.char = map.call(info.lowercase, function(x) { return x.charCodeAt(0); })
      // info.char2 = map.call(info.char, function(y) {
      var data = []
      for(var i =0; i < info.char.length; i++)
        // info.char2[i] = info.char[i]- 2*(~~(i/3)) - 5
        // info.char2.length = info.char.length
        if (info.char[i]>= 97 && info.char[i]<=122) {
          data.push(info.char[i]- 2*(~~(i/3)) - 5)

        } else {
          data.push(info.char[i])

        }

      info.char2 = data

      info.char3 = map.call(info.char2, function(y){
        if(y>96 && y<124) {
          return y = y
        }
        else if (y<97 && y !== 71) {
          return y = 123 + (y-97)% 26
        }
        else if (y> 123) {
          return y = (y-97) % 26 + 97
        }
        else if ( y == 71)
          return y = 97
      })

      var data1 = []
      for(var i =0; i < info.char.length; i++)
        // info.char2[i] = info.char[i]- 2*(~~(i/3)) - 5
        // info.char2.length = info.char.length
        if (info.char[i]==32 || info.char[i]==33) {
          data1.push(info.char[i])

        } else {
          data1.push(info.char3[i])

        }

      info.char0 = data1

      // info.char4 = map.call(info.char3, function(z){
      //   if(z==32)
      //     return z = 32


      // for(var i =0; i < info.char.lengih; i++){
      //   if (info.char[i]==32||info.char[i]==33){
      //     info.char3[i] = info.char[i]
      //   }
      // }
      // for(var i = 0; i < info.char.lengih; i++)
      //   if (info.char[i] == 32)
      //     info.char3[i] = info.char[i]

      // for (var i = 0; i < items.length; i++)
      //   if (items[i] == 3452)
      //     items[i] = 1010;

        // if(y>96 && y<123)
        //   // h = y - 2*(~~((info.char.indexOf(y))/3)) - 5
        //   if (y<97)
        //     return y = 123 + (y-97)% 26
        //   if (y>97)
        //     return y = (y-97) % 26 + 97
        //   if (y==97)
        //     return y = y
        // return y = y
      // })
      info.char9 = String.fromCharCode.apply(null, info.char0)
        fs.writeFile('solution.txt', info.char9, 'utf8', console.log(
`Done
Your decoded message is:
"${info.char9}"
and it has been written in solution.txt`
      ));

      // info.char5 = String.fromCharCode.apply(null, info.char)
      // console.log(info.char9)
      // console.log(info.char2)
      // console.log(info.char3)
      // console.log(info.char.length)
      // console.log(doto.length)
      // console.log(info.char5)
      rl.close()
    })
})




// fs.writeFile('asdfsadfadsfdsa.txt', 'This is NodeJs', function(err){
//   if(err){
//     return console.log(err)
//   console.log("file Created")
//   }
// })


// info.char2 = map.call(info.char, function(y) {
//   var i, h;
//   for (i=0; i< info.char.length; i++)
//     h[i] = y - (~~(i/3))*2 - 5
//     return y= h[i]
//
//   // console.log(h)
//   // console.log(u)
//   if(y>96 && y<123)
//     // h = y - 2*(~~((info.char.indexOf(y))/3)) - 5
//     if (h<97)
//       return y = 123 + (h-97)% 26
//     if (h>97)
//       return y = (h-97) % 26 + 97
//     if (h==97)
//       return y = h
//   return y = y
// })
// info.char3 = String.fromCharCode.apply(null, info.char2)
// console.log(info.char)
// console.log(info.char3)
// rl.close()

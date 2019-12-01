    //1
    function push(array, ...items) {
    array.push(...items);
    }

    function add(x,x ) {
    return x*x;
    }

    const numbers = [-4,-1,0,3,10];
    add(...numbers) 

    //2
    class Pather {
        constructor(年龄,身高) {
          this.年龄 = 36;
          this.身高 = 170;
        }
      
        toString() {
          return '(' + this.年龄 + ', ' + this.身高 + ')';
        }
      }
      class Child extends Father {
        constructor(年龄,身高,姓名) {
          super(年龄, 身高); 
          this.姓名 = 李华;
        }
        toString() {
          return this.color + ' ' + super.toString(); 
        }
      }
      

    //3
    const s = new Set();

[2,3,7,5,2,6,9,7,0].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

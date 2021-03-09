var eq;
var args = []; 
var obj = {};
var solution; 
  function operations(a, b, op){
    if(op == '+') return a + b;
    if(op == '-') return a - b;
    if(op == '*') return a * b;
    if(op == '/') return a / b;
  }

 
  function priority(op){
    if(op == '+' || op == '-') return 1
    if(op == '*' || op == '/') return 2
    return 0
  }
  function evaluate(exps){
    let i = 0,  nums = [], ops = [];

    while(i<exps.length){
     
      if(exps[i] == '('){
        ops.push(exps[i]);
      }
      
      else if(exps[i].charCodeAt(0) >= 48 && exps[i].charCodeAt(0) <= 57){
        let val = 0;
        while(i < exps.length && exps[i].charCodeAt(0) >= 48 && exps[i].charCodeAt(0) <= 57){
          val = (val * 10) + parseInt(exps[i]);
          i = i + 1;
        }
        nums.push(val);
        i = i - 1;
      }

      else if(exps[i] == ')'){
        while(ops.length !=0 && ops[ops.length - 1] != '('){
          let b = nums.pop()
          let a = nums.pop()
          let op = ops.pop()

          nums.push(operations(a, b, op));
        }
        ops.pop();
      }

      else{
        while(ops.length != 0 && priority(ops[ops.length - 1]) >= priority(exps[i])){
          let b = nums.pop()
          let a = nums.pop()
          let op = ops.pop()
           
          nums.push(operations(a, b, op));
        }
        ops.push(exps[i]);
      }
      i = i + 1;
    }
    while(ops.length !=0){
      let b = nums.pop()
      let a = nums.pop()
      let op = ops.pop()
               
      nums.push(operations(a, b, op))
    }
    return nums[nums.length - 1];
}

 

function calculate(){
  
   let val= document.getElementById("i").value ;
   eq=val.replace(/\s/g, "");
    for(let i=0;i<eq.length;i++){ 
      if(eq.charCodeAt(i)>= 48 && eq.charCodeAt(i)<= 57){
        let val = 0;
        while(i < eq.length && eq[i].charCodeAt(0) >= 48 && eq[i].charCodeAt(0) <= 57){
          val = (val * 10) + parseInt(eq[i]);
          i = i + 1;
          console.log(val);
        }
        args.push(val);
        i = i - 1;
      }
      
      obj['InputExpression'] = document.getElementById("i").value ;
      obj['InputArguments'] = args;
      
      obj['OutputResult'] = evaluate(eq);;
      
      solution = JSON.stringify(obj);
     
     document.getElementById("demo").innerHTML=solution;
  
}
  }

 
  

 




 

function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
    if (this.stackControl.length === 0){
      return true}
      else{
        return false;
      }
  }
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    }
    else{return false;}
  }
  this.push = function(arg){
    if(this.canPush() === true){
      this.stackControl.push(arg);
      this.isEmpty();
      return this.stackControl;
    }
    else{return "Stack Overflow"}

  }
  this.pop = function(){
    if (this.isEmpty() === true){return "Stack Underflow"}
    return this.stackControl.pop(this.stackControl[this.stackControl.length-1])
  }
}

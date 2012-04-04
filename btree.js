var node = function(val) {
  this.value = null || node.checkNum(val);
};

node.checkNum = function(val) {
  try {
    if (typeof val !== 'number') {
      throw 'nodeError';
    }
    return val;
  }
  catch(err) {
    console.log('Node input need to be number!')
  }
}

node.prototype = {
  insert: function(val) {
    // use null because val can be 0
    val = null || node.checkNum(val);
    if (val !== null && val < this.value) {
      if (!this.leftnode) {
        this.leftnode = new node(val);
      } else {
        this.leftnode.insert(val);
      }
    } else if (val !== null && val > this.value) {
      if (!this.rightnode) {
        this.rightnode = new node(val);
      } else {
        this.rightnode.insert(val);
      }
    }
    return this;
  }
};
var NO_TOPIC = -1;
var Topic;

function Handler(s, t) {
    this.successor = s || null;
    this.topic = t || 0;
}

// 添加原型方法
Handler.prototype = {
    handle: function () {
        if (this.successor) {
            this.successor.handle()
        }
    },
    has: function () {
        return this.topic != NO_TOPIC;
    }
};

var app = new Handler({
  handle: function () {
      console.log('app handle');
  }
}, 3);

var dialog = new Handler(app, 1);

var button = new Handler(dialog, 2);

button.handle();

var app = new Handler({
  handle: function () {
      console.log('app handle');
  }
}, 3);

var dialog = new Handler(app, 1);
dialog.handle = function () {
  console.log('dialog before ...')
  // 这里做具体的处理操作
  console.log('dialog after ...')
};

var button = new Handler(dialog, 2);

button.handle();

var app = new Handler({
  handle: function () {
      console.log('app handle');
  }
}, 3);

var dialog = new Handler(app, 1);
dialog.handle = function () {
  console.log('dialog before ...')
  // 这里做具体的处理操作
  Handler.prototype.handle.call(this); //继续往上走
  console.log('dialog after ...')
};

var button = new Handler(dialog, 2);
button.handle = function () {
  console.log('button before ...')
  // 这里做具体的处理操作
  Handler.prototype.handle.call(this);
  console.log('button after ...')
};

button.handle();
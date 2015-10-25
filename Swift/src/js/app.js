/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI          = require('ui'),
Vector2         = require('vector2'),
placeHolderList = require('placeHolderList'),
main = new UI.Card({
  title: 'Honeybees',
  icon: 'images/logo28.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
}),
cardNoTasks = new UI.Card({
  title: 'Honeybees',
  icon: 'images/logo28.png',
  subtitle: 'Hello World!',
  body: 'You\'re good, for now.'
}),
newMenu = new UI.Menu({
  sections: [{
    title: 'Finished Task?',
    items: [{
      title: 'Completed',
      icon: 'IMAGE_CHECK',
      subtitle: 'I love you Rob!'
    }, {
      title: 'Later',
      icon: 'IMAGE_X',
      subtitle: 'Superdry'
    }]
  }]
});

main.show();

main.on('click', 'select', function (e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Learn Pebble js',
        icon: 'images/logo28.png',
        subtitle: 'I love you Rob!'
      }, {
        title: 'Buy a new Jacket',
        subtitle: 'Superdry'
      }, {
        title: 'Get A Turkey',
        subtitle: 'Boston Market'
      }]
    }]
  });
  menu.on('select', function (e) {
    var card = new UI.Card({
      title: e.item.title,
      subtitle: e.item.subtitle,
      body: 'I want to buy a something and that thing may or may not be this thing',
      scrollable: true
    });
    card.on('click', 'select', function () {
      var newMenu = new UI.Menu({
        sections: [{
          title: 'Finished Task?',
          items: [{
            title: 'Completed',
            icon: 'IMAGE_CHECK',
            subtitle: 'I love you Rob!'
          }, {
            title: 'Later',
            icon: 'IMAGE_X',
            subtitle: 'Superdry'
          }]
        }]
      });
      newMenu.show();
    });
    card.show();
  });
  menu.show();
});

main.on('click', 'up', function (e) {
  var wind = new UI.Window({
    fullscreen: true
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'Gothic 14',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function (e) {
  var cardLogo = new UI.Card({
    // title: 'Honeybees',
    icon: 'IMAGE_ICON_LARGE',
    // subtitle: 'Hello World!',
    // body: 'Press any button.'
  });
  cardLogo.show();
});

/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI          = require('ui'),
Vector2         = require('vector2'),
Settings        = require('settings'),
// placeHolderList = JSON.parse(Settings.option('taskList')) || require('placeHolderList'),
placeHolderList = require('placeHolderList'),
incompleteTasks = function (list) {
  return list.filter(function (value) {
    return !value.hasOwnProperty('completed');
  });
},
homeCard        = new UI.Card({
  title: 'Honeybees',
  icon: 'images/logo28.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
}),
noTasksCard     = new UI.Card({
  title: 'Honeybees',
  icon: 'images/logo28.png',
  subtitle: 'Hello World!',
  body: 'You\'re good, for now.'
}),
decisionMenu    = new UI.Menu({
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
}),
snoozeMenu      = new UI.Menu({
  sections: [{
    title: 'Snooze Duration',
    items: [{
      title: '1 hour'
    }, {
      title: '1 day'
    }]
  }]
});

homeCard.show();

homeCard.on('click', 'select', function (e) {
  var taskListMenu;
  if (!taskListMenu && placeHolderList.length) {
    taskListMenu = new UI.Menu({
      sections: [{
        title: 'Get yo ship together',
        items: placeHolderList
      }]
    });
  } else {
    noTasksCard.show();
  }

  taskListMenu.show();
  taskListMenu.on('select', function (e) {
    var card;
    if (!card) {
      card = new UI.Card({
        taskId: e.item.taskId,
        title: e.item.title,
        subtitle: e.item.subtitle,
        body: e.item.body,
        scrollable: true
      });
    }
    card.show();
    card.on('click', 'select', function (e) {
      decisionMenu.show();
      decisionMenu.on('select', function (e) {
        var selection = e.item.title;
        if (selection === 'Completed') {
          updateTask(card.state.taskId, { 'completed': true });
          decisionMenu.hide();
          card.hide();
          taskListMenu.items(0, incompleteTasks(placeHolderList)); // Finds section of task menu with index 0 and replaces all items.
          Settings.option('taskList', JSON.stringify(placeHolderList)); // Persist updated list in localStorage.

          if (!incompleteTasks(placeHolderList).length) {
            taskListMenu.hide();
            noTasksCard.show();
          }
        } else if (selection === 'Later') {
          snoozeMenu.show();
          snoozeMenu.on('select', function (e) {
            var task = card.state.taskId;
            var duration = e.item.title;
            if (duration === '1 hour') updateTask(task, { 'snooze': 1 });
            if (duration === '1 day') updateTask(task, { 'snooze': 24 });
            taskListMenu.show();
          });
        }
      });
    });
  });
});







homeCard.on('click', 'up', function (e) {
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

homeCard.on('click', 'down', function (e) {
  var cardLogo = new UI.Card({
    // title: 'Honeybees',
    icon: 'IMAGE_ICON_LARGE',
    // subtitle: 'Hello World!',
    // body: 'Press any button.'
  });
  cardLogo.show();
});









function updateTask (id, extras) {
  for (var i = 0; i < placeHolderList.length; i++) {
    if (placeHolderList[i].taskId === id) {
      placeHolderList[i].extras = extras;
      return;
    }
  }
}

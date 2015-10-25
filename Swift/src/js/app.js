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
    card.on('click', 'select', function (e) {
      console.log(JSON.stringify(e));
      newMenu.show();
      newMenu.on('select', function (e) {
        // console.log(JSON.stringify(card));
        placeHolderList = removeTask(card.state.taskId, placeHolderList);
        newMenu.hide();
        card.hide();
        console.log(JSON.stringify(card));
        menu.items(0, placeHolderList); // Finds section of index 0 and replaces its items array.

        if (!placeHolderList.length) {
          menu.hide();
          cardNoTasks.show();
        }
        // console.log(JSON.stringify(menu.items(0)));
        // console.log(JSON.stringify(placeHolderList));
      });
    });
    card.show();
  });
  menu.show();
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









function refreshTaskList (taskList) {
  var items = [];
  for (var i = 0; i < taskList.length; i++) {
    items.push(taskList[i]);
  }
  return items;
}

function removeTask (id, taskList) {
  for (var i = 0; i < taskList.length; i++) {
    if (taskList[i].taskId === id) {
      taskList.splice(i, 1); // Remove the element from array task list.
    }
  }
  return taskList;
}

/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI          = require('ui'),
Vector2         = require('vector2'),
Settings        = require('settings'),
// placeHolderList = JSON.parse(Settings.option('taskList')) || require('placeHolderList'),
taskListArray = require('placeHolderList'),
incompleteTasks = function () {
  return taskListArray.filter(function (value) {
    return !value.extras || !value.extras.hasOwnProperty('completed');
  });
},
homeCard        = new UI.Window({
  fullscreen: true
}),
homeSplash = new UI.Image({
  image: 'LOGO'
}),
noTasksCard     = new UI.Card({
  title: 'Honeybees',
  icon: 'images/logo28.png',
  subtitle: 'Hello World!',
  body: 'You\'re good, for now.'
}),
decisionMenuConfig = {
  sections: [{
    title: 'Finished Task?',
    items: [{
      title: 'Completed',
      icon: 'IMAGE_CHECK',
      subtitle: 'Done, did it!'
    }, {
      title: 'Snooze',
      icon: 'IMAGE_X',
      subtitle: 'Will get to it later.'
    }]
  }]
},
snoozeMenuConfig = {
  sections: [{
    title: 'Snooze Duration',
    items: [{
      title: '1 hour'
    }, {
      title: '1 day'
    }]
  }]
};

homeCard.add(homeSplash);
homeCard.show();

homeCard.on('click', 'select', function (e) {
  homeCard.hide();
  var taskListMenu;
  if (!taskListMenu && taskListArray.length) {
    taskListMenu = new UI.Menu({
      sections: [{
        title: 'Get yo ship together',
        items: taskListArray
      }]
    });
  } else {
    noTasksCard.show();
  }

  taskListMenu.show();
  taskListMenu.on('select', function (e) {
    var taskCard;
    if (!taskCard) {
      taskCard = new UI.Card({
        taskId: e.item.taskId,
        title: e.item.title,
        subtitle: e.item.subtitle,
        body: e.item.body,
        style: 'small',
        scrollable: true
      });
    }
    taskCard.show();
    taskCard.on('click', 'select', function () {
      var decisionMenu = new UI.Menu(decisionMenuConfig);
      decisionMenu.show();
      decisionMenu.on('select', function (e) {
        var selection = e.item.title,
        taskId = taskCard.state.taskId;

        if (selection === 'Completed') {
          updateTask(taskId, { 'completed': true });
          decisionMenu.hide();
          taskCard.hide();
          taskListMenu.items(0, incompleteTasks()); // Finds section of task menu with index 0 and replaces all items.
          Settings.option('taskList', JSON.stringify(taskListArray)); // Persist updated list in localStorage.

          if (!incompleteTasks().length) {
            taskListMenu.hide();
            noTasksCard.show();
          }
        } else if (selection === 'Snooze') {
          var snoozeMenu = new UI.Menu(snoozeMenuConfig);
          snoozeMenu.show();
          snoozeMenu.on('select', function (e) {
            var duration = e.item.title;
            if (duration === '1 hour') updateTask(taskId, { 'snooze': 1 });
            if (duration === '1 day') updateTask(taskId, { 'snooze': 24 });
            snoozeMenu.hide();
            decisionMenu.hide();
            taskCard.hide();
          });
        }
      });
    });
  });
});

function updateTask (id, options) {
  for (var i = 0; i < taskListArray.length; i++) {
    if (taskListArray[i].taskId === id) {
      if (options.hasOwnProperty('snooze')) taskListArray[i].icon = 'IMAGE_ZZZ';
      taskListArray[i].extras = options;
      return;
    }
  }
}

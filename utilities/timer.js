Session.setDefault('spielbuchCountdownTime',-1);
Session.setDefault('spielbuchCountdownTimeLeft',-1);
Session.setDefault('spielbuchCountdownPercent',-1);

/**
 * Starts a countdown. The time is sent to the ui via Session variable.
 * Only one Countdown can be displayed, so the timer's id is saved and end the last countdown,
 * when a new one ist started
 * @param timeInMs
 * @param steps
 * @param cb
 * @returns {*}
 */
var killSwitchUI = false;
Spielbuch.startUiCountdown = function (timeInMs, steps, cb) {
    var time = timeInMs;
    if(killSwitchUI){
        Spielbuch.stopCountdown(killSwitchUI);
        killSwitchUI = false;
    }

    Spielbuch.print('countdownStarted');
    Session.set('spielbuchCountdownTime', time / 1000);
    Session.set('spielbuchCountdownTimeLeft', time / 1000);
    Session.set('spielbuchCountdownPercent',100);
    killSwitchUI = Meteor.setInterval(function () {
        time -= steps;
        if (time < 0) {
            Spielbuch.stopCountdown(killSwitchUI);
            return cb();
        }
        Session.set('spielbuchCountdownPercent', time / timeInMs * 100);
        Session.set('spielbuchCountdownTimeLeft', time / 1000);
    }, steps);
    return killSwitchUI;
};

Spielbuch.startSilentCountdown = function (timeInMs, steps, cb) {
    Spielbuch.print('countdownStarted');
    var time = timeInMs,
        killSwitch = Meteor.setInterval(function () {
            time -= steps;
            if (time < 0) {
                Spielbuch.stopCountdown(killSwitch);
                return cb();
            }
        }, steps);
    return killSwitch;
};

Spielbuch.stopCountdown = function (killSwitch) {
    Meteor.clearInterval(killSwitch);
    Spielbuch.print('countdownEnded');
    Session.set('spielbuchCountdownTime',-1);
    Session.set('spielbuchCountdownTimeLeft',-1);
    Session.set('spielbuchCountdownPercent',-1);
};
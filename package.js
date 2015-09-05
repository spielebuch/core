Package.describe({
    name: 'spielebuch:core',
    summary: '',
    git: 'https://github.com/spielebuch/core',
    version: '0.0.1'
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');

    api.use([
        'meteor-base',
        'mongo',
        'session',
        'ecmascript',
        'accounts-base'
    ]);

    api.imply([
        'meteor-base',
        'accounts-base'
    ]);



    api.addFiles('spielebuch.js', ['server', 'client']);
    api.addFiles('utilities/startup.js', ['server', 'client']);

    /**
     * Add function to log events on serverside
     */
    api.addFiles('utilities/log.js', ['server', 'client']);


    /**
     * Adding objects
     */
    api.addFiles('spielebuch/base.js', ['server', 'client']);
    api.addFiles('spielebuch/effect.js', ['server', 'client']);

    api.addFiles('spielebuch/gameobject.js', ['server', 'client']);
    api.addFiles('spielebuch/scene.js', ['server', 'client']);
    api.addFiles('spielebuch/story.js', ['server', 'client']);


    api.addFiles('spielebuch/rule.js', ['server', 'client']);

    api.addFiles('spielebuch/player.js', 'client');
    api.addFiles('spielebuch/helper.js', ['server', 'client']);

    /**
     * Permissions for collections
     */
    api.addFiles('utilities/permissions.js', 'server');

    /**
     * Manipulating user creation
     */
    api.addFiles('utilities/login.js', ['server', 'client']);
    /**
     * Methods
     */
    api.addFiles('utilities/methods.js', 'server');

    /**
     * Publications
     */
    api.addFiles('utilities/publications.js', 'server');

    /**
     * Observer
     * Observes changes on text and refreshes view
     */
    api.addFiles('utilities/observer_client.js', 'client');


    if (api.export) {
        api.export('Spielebuch');
    }
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.addFiles('tests.js', ['server']);
});
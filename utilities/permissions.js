/**
 * Created by Daniel Budick on 08 Sep 2015.
 * Copyright 2015 Daniel Budick All rights reserved.
 * Contact: daniel@budick.eu / http://budick.eu
 *
 * This file is part of spielebuch-core
 * spielebuch-core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * spielebuch-core is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with spielebuch-core. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * User can update their own stuff, or that belongs to global
 */
var ownStuff = {
    update: function(userId, doc){
        return doc.userId === userId || doc.userId === 'global';
    },
    remove: function(userId, doc){
        return doc.userId === userId || doc.userId === 'global';
    },
    fetch: ['userId']
};

Spielebuch.Stories.allow(ownStuff);
Spielebuch.Scenes.allow(ownStuff);
Spielebuch.Gameobjects.allow(ownStuff);
Spielebuch.Players.allow(ownStuff);